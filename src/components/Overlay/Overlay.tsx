import * as React from 'react';
import * as classNames from 'classnames';
import { IOverlayProps } from './Overlay.Props';
import { getNativeAttributes, divAttributes } from '../../utilities/attributes';
import './Overlay.scss';

export class Overlay extends React.Component<IOverlayProps, {}> {
    public render() {
        let { isDarkThemed, className } = this.props;
        let divProps = getNativeAttributes(this.props, divAttributes);

        let modifiedClassName = classNames (
            'overlay',
            className,
            {
                'overlay-dark': isDarkThemed
            }
        );

        return (
            <div { ...divProps } className={ modifiedClassName } />
        );
    }
}
