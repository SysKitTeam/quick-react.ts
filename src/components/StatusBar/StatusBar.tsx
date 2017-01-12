import * as React from 'react';
import * as classNames from 'classnames';
import { IStatusBarProps } from './StatusBar.Props';
import './StatusBar.scss';

export class StatusBar extends React.Component<IStatusBarProps, any> {
    public static defaultProps: IStatusBarProps = {
        text: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        };
    }

    public componentWillReceiveProps(newProps: IStatusBarProps) {
        if (newProps.text !== this.state.text) {
            this.setState({
                text: newProps.text
            });
        }
    }
    
    render () {
        let { text } = this.state;

        return (
            <div className={'statusBar'}>
               <span>{ text }</span>
            </div>
        );
    }
}
