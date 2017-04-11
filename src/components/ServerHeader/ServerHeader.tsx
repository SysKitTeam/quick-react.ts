import * as React from 'react';
import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';
import { TagContainer } from '../TagContainer/TagContainer';
import { IServerHeaderProps } from './ServerHeader.Props';

export class ServerHeader extends React.PureComponent<IServerHeaderProps, any> {
    public render() {
        return (
            <div className={'server-details-header'}>
                <Label className="server-name" title={this.props.serverName}>{this.props.serverName}</Label>
                {this.props.numberOfUsers &&
                    <Icon data-users={this.props.numberOfUsers}
                        iconName={'icon-user'}
                        title={this.props.numberOfUsers + ' number of users online'} />
                }
                {this.props.roles.length > 0 && <TagContainer title={''} tags={this.props.roles} />}
            </div>
        );
    }
}