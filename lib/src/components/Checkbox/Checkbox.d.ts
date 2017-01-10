import { ICheckboxProps } from './Checkbox.Props';
import { CommonComponent } from '../Common/Common';
export interface ICheckboxState {
    isFocused?: boolean;
    isChecked?: boolean;
}
export declare class Checkbox extends CommonComponent<ICheckboxProps, ICheckboxState> {
    static defaultProps: ICheckboxProps;
    private id;
    private _checkBox;
    constructor(props: any);
    render(): JSX.Element;
    readonly checked: boolean;
    focus(): void;
    private _onFocus(ev);
    private _onBlur(ev);
    private _onChange(ev);
}
