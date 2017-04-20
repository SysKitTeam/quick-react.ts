import * as React from 'react';
import * as classNames from 'classnames';
import { ILeftNavigationProps, ILeftNavigationOption } from './LeftNavigation.Props';
import { assign } from '../../utilities/object';
import { findIndex } from '../../utilities/array';
import { Icon } from '../../components/Icon/Icon';
import { CommonComponent } from '../Common/Common';
import { elementContains } from '../../utilities/elementContains';
import { getWindow } from '../../utilities/getDocument';
import './LeftNavigation.scss';

export class LeftNavigation extends CommonComponent<ILeftNavigationProps, any> {
    private _targetWindow: Window;
    private _leftNavElement: HTMLDivElement;
    private _target: HTMLElement | MouseEvent;

    constructor(props) {
        super(props);
        this.state = { isOpen: false, selectedIndex: this.getSelectedIndex(this.props.options) };
    }

    public componentDidMount() {
        let target = this._leftNavElement;
        this._setTargetWindowAndElement(target);
        this._events.on(this._targetWindow, 'click', this._dismissOnClickOutsideComponent, true);
    }

    private _setTargetWindowAndElement(target: HTMLElement): void {
        if (target) {
            let targetElement: HTMLElement = target as HTMLElement;
            this._target = target;
            this._targetWindow = getWindow(targetElement);
        } else {
            this._targetWindow = getWindow();
        }
    }

    public componentWillReceiveProps(newProps: ILeftNavigationProps) {
        this.setState({ selectedIndex: this.getSelectedIndex(newProps.options) });
    }

    protected _dismissOnClickOutsideComponent(ev: Event) {
        let target = ev.target as HTMLElement;
        if (ev.target !== this._targetWindow && (!this._target || !elementContains(this._target as HTMLElement, target, false))) {
            this.setState({ isOpen: false });
        }
    }

    onLeftNavigationClick() {
        this.setState({ isOpen: !this.state.isOpen });
    };

    onLinkClick(index, item: any, ev: React.MouseEvent<HTMLElement>) {
        const { onClick } = this.props;

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

    onOtherLinkClick(index, item: any, ev: React.MouseEvent<HTMLElement>) {
        const { onClick } = this.props;

        if (this.state.isOpen) {
            this.setState({ isOpen: false });
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
            id,
            otherOptions
        } = this.props;

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

        const childrenItems = this.props.options && this.props.options.map((option, index) => {
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

        const otherChildrenItems = this.props.otherOptions && this.props.otherOptions.map((option, index) => {
            let linkClasses = classNames(
                'nav-item',
                {
                    'disabled': option.disabled
                });

            return (
                <div key={option.id} className={linkClasses} title={option.text}>
                    <a
                        id={option.id}
                        onClick={(ev) => this.onOtherLinkClick(index, option, ev)}>
                        <Icon iconName={option.icon}></Icon>
                        <span>{option.text}</span>
                    </a>
                </div>
            );
        });

        return (
            <div className={className} ref={(c): HTMLElement => this._leftNavElement = c}>
                <div>
                    <div className="nav-item" onClick={() => { this.onLeftNavigationClick(); }}>
                        <Icon iconName={'icon-switchView'}></Icon>
                    </div>
                    {childrenItems}
                    <div>
                        {otherChildrenItems}
                    </div>
                </div>
            </div>
        );
    };
};
