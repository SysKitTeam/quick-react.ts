
export function findIndex<T>(array: Array<T>, predicate: (item: T, index?: number) => boolean): number {
    let index = -1;
    for (let i = 0; array && i < array.length; i++) {
        if (predicate(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}

export function shallowCompareArrayEqual(first: Array<any>, second: Array<any>) {
    if (first.length !== second.length) {
        return false;
    }
    for (let index = 0; index < first.length; index++) {
        if (first[index] !== second[index]) {
            return false;
        }
    }
    return true;
}


export interface SortProps {
    column: any;
    sortModifier: 1 | -1;
    sortFunction?: (row) => any;
}

export const sortArray = (inputArray: Array<any>, sortOptions: Array<SortProps>) => {
    const sortFunction = (a, b) => {
        for (let sortOption of sortOptions) {
            let valueA;
            let valueB;
            if (sortOption.sortFunction) {
                valueA = sortOption.sortFunction(a);
                valueB = sortOption.sortFunction(b);
            } else {
                let splits = sortOption.column.split('.');
                let resultA = a;
                let resultB = b;
                for (let i = 0; i < splits.length; i++) {
                    resultA = resultA[splits[i]];
                    resultB = resultB[splits[i]];
                }
                valueA = resultA;
                valueB = resultB;
            }
            if (valueA < valueB) {
                return -1 * sortOption.sortModifier;
            }
            if (valueA > valueB) {
                return 1 * sortOption.sortModifier;
            }
        }
        return 0;
    };
    return [...inputArray].sort(sortFunction);
};


export const groupBy = function (inputArray, groupProp) {
    return inputArray.reduce((groups, item) => {
        let result = item;
        let splits = groupProp.split('.');
        for (let i = 0; i < splits.length; i++) {
            result = result[splits[i]];
        }
        (groups[result] = groups[result] || []).push(item);

        return groups;
    }, {});
};

export const getGroupColumnDisplayName = function (input, column) {
    let splits = column.split('.');
    let result = input;
    for (let i = 0; i < splits.length; i++) {
        result = result[splits[i]];
    }
    return result;
};
