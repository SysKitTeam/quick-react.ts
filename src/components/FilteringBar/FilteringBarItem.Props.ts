export interface IFilteringBarItemProps {
    caption: string;
    selected: boolean;
    itemKey: string;
    type: string;
    onClick: (key: string, newState: boolean) => void;
}
