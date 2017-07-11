export interface IFilteringBarProps {
    onFilteringOptionsChanged(selectedFilteringOptions: Array<IFilteringOption>);
    className?: string;
}

export interface IFilteringBarState {
    filteringOptions: Array<IFilteringOption>;
}

export interface IFilteringOption {
    type: string;
    key: string;
    selected: boolean;
}
