import { IconName } from '../../components/Icon/IconName';
export interface IRenderFunction<P> {
    (props?: P, defaultRender?: (props?: P) => JSX.Element): JSX.Element;
}
export interface IDropdownProps {
    label?: string;
    id?: string;
    selectedKey?: string | number;
    options?: IDropdownOption[];
    onChanged?: (option: IDropdownOption, index?: number) => void;
    onRenderItem?: IRenderFunction<IDropdownOption>;
    disabled?: boolean;
    hasTitleBorder?: boolean;
    icon?: IconName;
    dropdownType?: DropdownType;
}
export interface IDropdownOption {
    key: string | number;
    text: string;
    index?: number;
    selected?: boolean;
    href?: string;
    icon?: IconName;
}
export declare enum DropdownType {
    selectionDropdown = 0,
    linkDropdown = 1,
    customDropdown = 2,
}
