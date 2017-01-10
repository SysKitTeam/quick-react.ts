import * as React from 'react';
import { IChoiceGroupProps } from './ChoiceGroup.Props';
export interface IChoiceGroupState {
    keyChecked: string;
    keyFocused?: string;
}
export declare class ChoiceGroup extends React.Component<IChoiceGroupProps, IChoiceGroupState> {
    static defaultProps: {
        options: any[];
    };
    private _id;
    private _descriptionId;
    private _inputElement;
    constructor(props: any);
    componentWillReceiveProps(newProps: IChoiceGroupProps): void;
    render(): JSX.Element;
    focus(): void;
    private _onFocus(option, ev);
    private _onBlur(option, ev);
    private _renderField(option);
    private _onChange(option, ev);
    private _getKeyChecked(options);
}
