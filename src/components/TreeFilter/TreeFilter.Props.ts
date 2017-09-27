import { DirectionalHint } from '../../utilities/DirectionalHint';

export enum FilterSelectionEnum {
    All,
    None,
    Selected
}

export interface IFilterSelection {
    type: FilterSelectionEnum;
    selectedIDs: Array<string>;
}

export enum CheckStatus {
    Checked,
    NotChecked,
    ChildChecked
}

export interface ITreeFilterProps {
    title: string;
    filterId: string;
    items: Array<TreeItem>;
    filterSelection?: IFilterSelection;
    hasSearch?: boolean;
    isSingleSelect?: boolean;
    isGroupSelectableOnSingleSelect?: boolean;
    itemsAreFlatList?: boolean;
    onValuesSelected?: (filterId: string, filterSelection: IFilterSelection) => void;
    defaultSelection?: FilterSelectionEnum;
    rowHeight?: number;
    /* Callout specific */
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    directionalHint?: DirectionalHint;
    clearSearchOnClose?: boolean;
    enabledResizeHandles?: { // all enabled if undefined
        top: boolean,
        right: boolean,
        bottom: boolean,
        left: boolean,
        topRight: boolean,
        bottomRight: boolean,
        bottomLeft: boolean,
        topLeft: boolean
    };
}

export const defaultTreeFilterProps: Partial<ITreeFilterProps> = {
    title: 'Title',
    filterId: 'treeFilter',
    hasSearch: true,
    isSingleSelect: false,
    itemsAreFlatList: false,
    isGroupSelectableOnSingleSelect: false,
    directionalHint: DirectionalHint.bottomRightEdge,
    onValuesSelected: () => { },
    filterSelection: { type: FilterSelectionEnum.None, selectedIDs: [] },
    width: 300,
    height: 350,
    minWidth: 200,
    minHeight: 200,
    defaultSelection: FilterSelectionEnum.None,
    clearSearchOnClose: true,
    rowHeight: 20
};

export interface ITreeFilterState {
    isOpen: boolean;
    filterSelection: IFilterSelection;
    isDefaultSelected: boolean;
    selectionText: string;
    query: string;
}

export interface TreeItem {
    id: string;
    value: string;
    expanded?: boolean;
    children?: Array<TreeItem>;
    className?: string;
}
