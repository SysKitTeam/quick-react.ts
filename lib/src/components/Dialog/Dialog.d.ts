import { IDialogProps } from './Dialog.Props';
import { CommonComponent } from '../Common/Common';
import './Dialog.scss';
export interface IDialogState {
    isOpen?: boolean;
    isAnimatingOpen?: boolean;
    isAnimatingClose?: boolean;
    id?: string;
}
export declare class Dialog extends CommonComponent<IDialogProps, IDialogState> {
    static defaultProps: IDialogProps;
    constructor(props: IDialogProps);
    componentWillReceiveProps(newProps: IDialogProps): void;
    render(): JSX.Element;
    private _groupChildren();
    private _onDialogRef(ref);
    private _onAnimationEnd(ev);
}
