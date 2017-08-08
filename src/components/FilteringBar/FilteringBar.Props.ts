export interface IFilteringBarProps {
    onFilteringOptionsChanged(activeFilters: Array<IFilteringOption>);
    className?: string;
    activeFilters: Array<string>;
}

export interface IFilteringBarState {
    filteringOptions: Array<IFilteringOption>;
}

export interface IFilteringOption {
    type: string;
    key: string;
    selected: boolean;
}
