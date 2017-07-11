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
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    directionalHint?: DirectionalHint;
}

export interface ITreeFilterState {
    isOpen: boolean;    
    filteredItems: Array<TreeItem>;
    searchText: string;
    partiallyCheckedItemIds: Array<string>;   // items with selected children - different name?
}

export interface TreeItem {
    id: string;
    value: string;
    expanded?: boolean;
    children?: Array<TreeItem>;
}
