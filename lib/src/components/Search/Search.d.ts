import { ISearchProps } from './Search.Props';
import { CommonComponent } from '../Common/Common';
import './Search.scss';
export interface ISearchState {
    value?: string;
    hasFocus?: boolean;
    id?: string;
}
export declare class Search extends CommonComponent<ISearchProps, ISearchState> {
    static defaultProps: ISearchProps;
    private _rootElement;
    private _inputElement;
    constructor(props: ISearchProps);
    componentWillReceiveProps(newProps: ISearchProps): void;
    render(): JSX.Element;
    private _onClearClick(ev?);
    private _onFocusCapture(ev);
    private _onKeyDown(ev);
    private _onInputChange(ev);
    private _handleDocumentFocus(ev);
    private _callOnChange(newValue);
}
