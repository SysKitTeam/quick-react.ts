/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Icon } from './../../src/components/Icon/Icon';
import './../../src/components/Icon/symbol-defs.svg';
import { IconSize, NotificationBubbleStyleObject} from '../../src/components/Icon';

export class Index extends React.Component<any, any> {
    public render () {
        const styleElement = document.querySelector('style').innerText;
        const ficons = styleElement.match(/icon-([\s\S]*?)(?=:before)/gm);

        let symbols = Array.from(document.querySelector('defs').children);
        const iconSVGName = symbols[0].id.substring(symbols[0].id.indexOf('_') + 1);
        const iconFiconsName = ficons[0];
        let styleObject: NotificationBubbleStyleObject = { bubbleStyleObject: {backgroundColor: 'blue'}};
        return (
            <div>
                {ficons.map(i => {
                    return <div> <Icon iconName={i}></Icon> <span>   {i}</span></div>;
                })}
                {symbols.map(i => {
                    let iconName = i.id.substring(i.id.indexOf('_') + 1);
                    return <div> <Icon iconName={iconName}></Icon> <span>   {iconName}</span></div>;
                })}               
                <div> <Icon iconName={iconFiconsName}></Icon> <span>   {iconFiconsName}</span></div>
                <div> <Icon iconName={iconFiconsName} notificationNumber={9}></Icon> <span>   {iconFiconsName}</span></div>
                <div> <Icon iconName={iconFiconsName} notificationNumber={19}></Icon> <span>   {iconFiconsName}</span></div>
                <div> <Icon iconName={iconSVGName}></Icon> <span>   {iconSVGName}</span></div>
                <div> <Icon iconName={iconSVGName} notificationNumber={9}></Icon> <span>   {iconSVGName}</span></div>
                <div> <Icon iconName={iconSVGName} notificationNumber={19}></Icon> <span>   {iconSVGName}</span></div>
                <div> <Icon iconName={iconSVGName} notificationNumber={9} iconSize={IconSize.smallest}></Icon> <span>   {iconSVGName}</span></div>
                <div> <Icon iconName={iconSVGName} notificationNumber={19} iconSize={IconSize.smallest}></Icon> <span>   {iconSVGName}</span></div> 
                <div> <Icon iconName={iconSVGName} notificationNumber={9} iconSize={IconSize.small}></Icon> <span>   {iconSVGName}</span></div>
                <div> <Icon iconName={iconSVGName} notificationNumber={19} iconSize={IconSize.small}></Icon> <span>   {iconSVGName}</span></div>  
                <div> <Icon iconName={iconSVGName} notificationNumber={9} iconSize={IconSize.medium}></Icon> <span>   {iconSVGName}</span></div>
                <div> <Icon iconName={iconSVGName} notificationNumber={19} iconSize={IconSize.medium}></Icon> <span>   {iconSVGName}</span></div>    
                <div> <Icon iconName={iconSVGName} notificationNumber={9} iconSize={IconSize.large}></Icon> <span>   {iconSVGName}</span></div>
                <div> <Icon iconName={iconSVGName} notificationNumber={19} iconSize={IconSize.large}></Icon> <span>   {iconSVGName}</span></div>
                <div> <Icon iconName={iconSVGName} notificationNumber={9} iconSize={IconSize.large} notificationBubbleStyleObject={styleObject}></Icon> <span>   {iconSVGName}</span></div>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
