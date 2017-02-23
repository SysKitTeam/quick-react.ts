import * as React from 'react';
import { IGroupProps } from './Group.Props';
import {CompactServer} from '../CompactServer/CompactServer';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import './Group.scss';

function checkChildren(value : React.ReactChild, index, array ) {
   if (React.Children.only(value).props.serverName && 
        React.Children.only(value).props.serverName.toLowerCase().trim().indexOf(this.props.filter.toLowerCase().trim()) !== -1) {
            return true;
    }
    return false;
}

export class Group extends React.Component<IGroupProps, any> {

    constructor(props?: IGroupProps) {
        super(props);
    }

    public render() { 
        let {id} = this.props;
        let condition = this.props.checkChildren ? this.props.checkChildren : checkChildren.bind(this);
        let hasServersVisible = React.Children.toArray(this.props.children).some(condition);

        let classname = classNames({'farm': hasServersVisible}, {[this.props.className]: hasServersVisible}); 
        let name = this.props.name;
        if (name.length > 15) {
            if (name.indexOf('.') !== -1 && name.indexOf('.') < 16) {
                name = name.substr(0, name.indexOf('.') + 1);
            } else {
                name = name.substr(0, 16) + '...';
            }                
        }
        return( 
            <div className={classname}>
                {
                    hasServersVisible && 
                    <span className="farm-name" title={this.props.name}>
                        <span>{name}</span>
                        <Icon title={'Delete'} iconName={'icon-Delete'} onClick={() => {this.props.deleteFunc(this.props.id);}}></Icon>
                        <Icon title={'Edit'} iconName={'icon-Edit'} onClick={() => {this.props.editFunc(this.props.id);} }></Icon>
                        <Icon title={'Add'} iconName={'icon-Add'} onClick={() => {this.props.addFunc(this.props.id);}}></Icon>
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
