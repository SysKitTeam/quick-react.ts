import * as React from 'react';
import { ISingleGroupCollectionProps } from './SingleGroupCollection.props';
import { autobind } from '../../utilities/autobind';
import { IServer } from '../../models';
const AutoSizer = require('react-virtualized').AutoSizer;
const Collection = require('react-virtualized').Collection;

import './SingleGroupCollection.scss';

const PADDING_TOP = 10;
const PADDING_LEFT = 30;

export class SingleGroupCollection extends React.PureComponent<ISingleGroupCollectionProps, {}> {
    private collection: any;
    setCollectionRef = (reference) => { this.collection = reference; };
    public render(): JSX.Element {
        return (
            <AutoSizer onResize={this._onResize}>
                {({ width, height }) => (
                    <div style={{ width: width, height: height }}>
                        <div className="single-group-collection">
                            <Collection
                                height={height - PADDING_TOP}
                                width={width - PADDING_LEFT}
                                ref={this.setCollectionRef}
                                cellCount={this.props.group.servers.length}
                                cellRenderer={this.renderSingleServerCell}
                                cellSizeAndPositionGetter={(index) => this.cellSizeAndPositionGetter(width, index)}
                            />
                        </div>
                    </div>
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

        width = width - 50;
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
