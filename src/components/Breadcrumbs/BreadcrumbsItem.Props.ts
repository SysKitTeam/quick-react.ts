export interface IBreadcrumbsItemProps {
    displayName: string;
    url: string;
    text?: string;
    iconName?: string;
    className?: string;
    children?: Array<IBreadcrumbsChild>;
    iconExpanded?: string;
    iconCollapsed?: string;
    onClick: (url: string) => void;
}

export interface IBreadcrumbsChild {
    displayName: string;
    url: string;
}