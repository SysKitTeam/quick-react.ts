import * as React from 'react';
//import './Dialog.scss';

export class DialogFooter extends React.Component<any, any> {
    public render() {
        return (
            <div className={'dialog-actions'}>
                <div className={'dialog-actionsRight'}>
                    { this._renderChildrenAsActions() }
                </div>
            </div>
        );
    }

    private _renderChildrenAsActions() {
        return React.Children.map(this.props.children, child =>
            <span className={'dialog-action'}>{ child }</span>
        );
    }
}
