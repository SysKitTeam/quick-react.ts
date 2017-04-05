/*import * as React from 'react';
import { IBreadcrumbsItemProps } from './Breadcrumbs.props';
import { ContextualMenu } from '../ContextualMenu/ContextualMenu';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { ICurrentPathItem } from './Breadcrumbs.props';
import { Icon } from '../Icon/Icon';

export class BreadcrumbsItem extends React.PureComponent<IBreadcrumbsItemProps, any> {
    public render() {
        return (
            <div>
                <Icon iconName={this.props.iconName} onClick={this.props.onClick()} />
                <a className={'breadcrumbs-item-link'}>{this.props.name}</a>
                {this.props.selected &&
                    <ContextualMenu
                        target={this.state.overflowAnchor}
                        isBeakVisible={true}
                        items={this.props.siblingItems}
                        id={null}
                        directionalHint={DirectionalHint.bottomLeftEdge}
                        onDismiss={null} /> 
                }
            </div>
        );
    }

    private handleOnClick(ev: React.MouseEvent<HTMLElement>) {
        this.props.onClick(ev);
    }
}*/
