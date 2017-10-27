import * as React from 'react';
import './TreeFilter.scss';

export class TreeFilterFooter extends React.Component<any, any> {
    public render() {
        return (
            <div className={'tree-filter-actions'}>
                <div className={'tree-filter-actionsRight'}>
                    {this._renderChildrenAsActions()}
                </div>
            </div>
        );
    }

    private _renderChildrenAsActions() {
        return React.Children.map(this.props.children, child =>
            <span className={'tree-filter-action'}>{child}</span>
        );
    }
}
