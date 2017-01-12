import * as React from 'react';
import * as classNames from 'classnames';
import { assign } from '../../utilities/object';
import { IMainNavigationProps } from './MainNavigation.Props';
import { Button } from '../../components/Button/Button';
import { Icon } from '../../components/Icon/Icon';
import './MainNavigation.scss';

export class MainNavigation extends React.Component<IMainNavigationProps, any> {
    constructor (props) {
        super(props);
    }

    public render(): JSX.Element {
        let {
            id,
            children,
            logo
        } = this.props;

        const className = classNames(
            'main-nav-container',
            [this.props.className]
        );
        
        return (
            <nav className={className}>
                { logo && (
                    <div className={'logo-container'}>
                        <Icon className={'logo'} iconName={this.props.logo}></Icon>
                    </div>
                )}
                { children }
            </nav>
        );
    };
};
