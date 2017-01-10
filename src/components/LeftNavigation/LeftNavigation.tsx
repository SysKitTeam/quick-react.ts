import * as React from 'react';
import * as classNames from 'classnames';
import { ILeftNavigationProps, ILeftNavigationOption } from './LeftNavigation.Props';
import { assign } from '../../utilities/object';
import {findIndex} from '../../utilities/array';
import { Icon } from '../../components/Icon/Icon';
import { IconName } from '../../components/Icon/IconName';
//import './LeftNavigation.scss';

export class LeftNavigation extends React.Component<ILeftNavigationProps, any> {
    constructor (props) {
        super(props);
        this.state = {isOpen: false, selectedIndex: this.getSelectedIndex(this.props.options)};
     }

     onLeftNavigationClick() {
         this.setState({isOpen: !this.state.isOpen});
     };

     onLinkClick(index) {
         index = Math.max(0, Math.min(this.props.options.length - 1, index));
          if (index !== this.state.selectedIndex) {
              this.setState({
                  selectedIndex: index
              });
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
                        href={option.href} 
                        onClick={ () => { this.onLinkClick(index); }}>
                            <Icon iconName={option.icon}></Icon>
                            <span>{option.text}</span>
                    </a>
                </div>
            );
        });

        return React.createElement(
            tag,
            assign (
                {},
                {className}
            ),
            <div>
                <div className="nav-item" onClick={ () => { this.onLeftNavigationClick(); } }>
                    <Icon iconName={IconName.SwitchView}></Icon>
                </div>
                {children}
            </div>
        );
    };
};
