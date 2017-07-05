import * as React from 'react';
import { ISingleGroupCollectionProps } from './SingleGroupCollection.props';
import { autobind } from '../../';
import { IServer } from '../../models';
const AutoSizer = require('react-virtualized').AutoSizer;
const Collection = require('react-virtualized').Collection;

export class SingleGroupCollection extends React.PureComponent<ISingleGroupCollectionProps, void> {

    private collection: any;

    public render(): JSX.Element {

        return (
            <AutoSizer onResize={this._onResize}>
                {({ width, height }) => (
                    <Collection
                        height={height}
                        width={width}
                        ref={(reference) => {
                            this.collection = reference;
                        }}
                        verticalOverscanSize={5}
                        cellCount={this.props.group.servers.length}
                        cellRenderer={this.renderSingleServerCell}
                        cellSizeAndPositionGetter={function (index) {
                            return this.cellSizeAndPositionGetter(width, index);
                        }.bind(this)}
                    />
                )}
            </AutoSizer>
        );
    }

    @autobind
    _onResize() {
        this.collection.recomputeCellSizesAndPositions();
    }

    @autobind
    private getServer(index: number): IServer {
        return this.props.group.servers[index];
    }

    @autobind
    private renderSingleServerCell({ index, isScrolling, key, style }): JSX.Element {
        let server = this.getServer(index);
        return this.props.renderSingleTile(server, { index, isScrolling, key, style });
    }

    @autobind
    private cellSizeAndPositionGetter(width, obj: { index: number }) {
        if (width === 0) {
            return { height: 0, width: 0, x: 0, y: 0 };
        }
        const { gutterSize, tileHeight, tileWidth } = this.props;
        const columnCount = Math.floor((width) / (tileWidth + gutterSize));
        let columnPosition = obj.index % (columnCount);
        let rowPosition = Math.floor(obj.index / columnCount);
        const x = columnPosition * (gutterSize + tileWidth);
        const y = rowPosition * (gutterSize + tileHeight);

        return {
            height: tileHeight,
            width: tileWidth,
            x,
            y
        };
    }
}
