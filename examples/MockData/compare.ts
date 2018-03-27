import { ICompareResult, CompareResultEnum } from '../../src/components/TreeCompare/TreeCompare.props';

function generateCompareRow(level: number, parent: ICompareResult): ICompareResult {
    return {
        isExpanded: true,
        children: [],
        iconName: 'svg-icon-world',
        hasChildren: true,
        propertyValue: 'Name',
        sourceValue: 'Full Control',
        targetValue: 'View Only',
        compareResult: CompareResultEnum.Different,
        sortRequestId: 0,
        nodeLevel: level,
        parent: parent
    };
}

export const generateTreeData = (size: Array<number> = [5, 10]): Array<ICompareResult> => {
    let result: Array<ICompareResult> = [];

    for (let i = 0; i < size[0]; i++) {
        let treeEntry = generateCompareRow(0, undefined);

        for (let j = 0; j < size[1]; j++) {
            let treeEntry1 = generateCompareRow(1, treeEntry);
            treeEntry.children.push(treeEntry1);
        }

        treeEntry.isExpanded = true;
        result.push(treeEntry);

    }

    return result;
};
