export interface IBreadcrumbItemProps {
    displayName: string;
    url: string;
    text?: string;
    iconName?: string;
    className?: string;
    children?: Array<IBreadcrumbChild>;
    iconExpanded?: string;
    iconCollapsed?: string;
    onClick: (url: string) => void;
}

export interface IBreadcrumbChild {
    displayName: string;
    url: string;
}
