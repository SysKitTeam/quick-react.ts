import { ITreeviewItemProps, ITreeviewItem } from './TreeviewItem.Props';
import { CommonComponent } from '../Common/Common';
export declare class TreeviewItem extends CommonComponent<ITreeviewItemProps, any> {
    static defaultProps: ITreeviewItem;
    constructor(props: any);
    render(): JSX.Element;
    private _onItemClick(ev);
}
