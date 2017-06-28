import { IGroup, IServer } from '../../models';

export interface ISingleGroupCollectionProps {
    group: IGroup;
    tileHeight: number;
    tileWidth: number;
    gutterSize: number;
    renderSingleTile: (server: IServer, { index, isScrolling, key, style }) => JSX.Element;
}
