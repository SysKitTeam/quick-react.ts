import * as React from 'react';
import { IGroupProps } from './Group.Props';
import { CompactServer } from '../CompactServer/CompactServer';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import './Group.scss';

export class Group extends React.Component<IGroupProps, any> {

    constructor(props?: IGroupProps) {
        super(props);
    }

    public render() {
        let {id} = this.props;
        let hasServersVisible = this.props.serverChildrenCount > 0;
        let classname = classNames({ 'farm': hasServersVisible }, { [this.props.className]: hasServersVisible });

        return (
            <div className={classname}>
                {
                    hasServersVisible &&
                    <span className="farm-name" title={this.props.name}>
                        <span onClick={() => { this.props.onClick(this.props.id); } }>{this.props.name}</span>
                        {this.props.deleteFunc &&
                            <Icon title={'Delete'} iconName={'icon-delete'} onClick={() => { this.props.deleteFunc(this.props.id); } }></Icon>
                        }
                        {this.props.editFunc &&
                            <Icon title={'Edit'} iconName={'icon-edit'} onClick={() => { this.props.editFunc(this.props.id); } }></Icon>
                        }
                        {this.props.addFunc &&
                            <Icon title={'Add'} iconName={'icon-add'} onClick={() => { this.props.addFunc(this.props.id); } }></Icon>
                        }
                    </span>
                }
                {
                    hasServersVisible &&
                    this.props.children
                }
            </div>
        );
    }

}
