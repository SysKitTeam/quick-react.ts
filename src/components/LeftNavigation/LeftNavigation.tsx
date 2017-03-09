import * as React from 'react';
import * as classNames from 'classnames';
import { ILeftNavigationProps, ILeftNavigationOption } from './LeftNavigation.Props';
import { assign } from '../../utilities/object';
import { findIndex } from '../../utilities/array';
import { Icon } from '../../components/Icon/Icon';
import './LeftNavigation.scss';

export class LeftNavigation extends React.Component<ILeftNavigationProps, any> {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, selectedIndex: this.getSelectedIndex(this.props.options) };
    }

    onLeftNavigationClick() {
        this.setState({ isOpen: !this.state.isOpen });
    };

    onLinkClick(index, item: any, ev: React.MouseEvent<HTMLElement>) {
        const {onClick} = this.props;

        if (this.state.isOpen) {
            this.setState({ isOpen: false });
        }

        index = Math.max(0, Math.min(this.props.options.length - 1, index));
        if (index !== this.state.selectedIndex) {
            this.setState({
                selectedIndex: index
            });
        }

        if (onClick !== undefined) {
            onClick(ev, item);
        }
    };

    getSelectedIndex(options: ILeftNavigationOption[]) {
        return findIndex(options, (option => option.selected));
    };

    public render(): JSX.Element {
        let {
            options,
            id
        } = this.props;

        const tag = 'div';

        let leftNavigationTextClass = classNames({
            'show-text': this.state.isOpen,
            'hide-text': !this.state.isOpen
        });

        const className = classNames(
            'left-nav',
            {
                'expanded': this.state.isOpen,
                'collapsed': !this.state.isOpen
            }, [this.props.className]);

        const children = this.props.options.map((option, index) => {

            let linkClasses = classNames(
                'nav-item',
                {
                    'disabled': option.disabled,
                    'selected': this.state.selectedIndex === index
                });

            return (
                <div key={option.id} className={linkClasses} title={option.text}>
                    <a
                        id={option.id}
                        onClick={(ev) => this.onLinkClick(index, option, ev)}>
                        <Icon iconName={option.icon}></Icon>
                        <span>{option.text}</span>
                    </a>
                </div>
            );
        });

        return React.createElement(
            tag,
            assign(
                {},
                { className }
            ),
            <div>
                <div className="nav-item" onClick={() => { this.onLeftNavigationClick(); }}>
                    <Icon iconName={'icon-SwitchView'}></Icon>
                </div>
                {children}
            </div>
        );
    };
};
