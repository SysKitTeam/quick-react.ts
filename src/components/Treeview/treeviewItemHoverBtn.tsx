import * as React from 'react';
import * as classnames from 'classnames';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../index';

export interface ITreeviewItemHoverBtnProps {
    id: string;
    iconName: string;
    className?: string;
    onClick(id: string): void;
}

export class TreeviewItemHoverBtn extends React.PureComponent<ITreeviewItemHoverBtnProps, {}> {

    @autobind
    private _onClick() {
        this.props.onClick(this.props.id);
    }

    public render(): JSX.Element {
        return (
            <Icon
                className={this.props.className}
                iconName={this.props.iconName}
                onClick={this._onClick}
            />
        );
    }
}
