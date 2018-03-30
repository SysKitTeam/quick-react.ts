import { ICompareResult, CompareResultEnum } from '../../src/components/TreeCompare/TreeCompare.props';

function generateCompareRow(level: number): ICompareResult {
    return {
        isExpanded: true,
        children: [],
        iconName: 'icon-world',
        propertyValue: 'Name',
        sourceValue: 'Full Control',
        targetValue: 'View Only',
        compareResult: CompareResultEnum.Different
    };
}

export const generateTreeData = (size: Array<number> = [5, 10]): Array<ICompareResult> => {
    let result: Array<ICompareResult> = [];

    for (let i = 0; i < size[0]; i++) {
        let treeEntry = generateCompareRow(0);

        for (let j = 0; j < size[1]; j++) {
            let treeEntry1 = generateCompareRow(1);
            treeEntry.children.push(treeEntry1);
        }

        treeEntry.isExpanded = true;
        result.push(treeEntry);

    }

    return result;
};
