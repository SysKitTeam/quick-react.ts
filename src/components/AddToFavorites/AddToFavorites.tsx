import * as React from 'react';
import * as classNames from 'classnames';
import { IconName } from '../Icon/IconName';
import { AddToFavoritesProps } from './AddToFavorites.props';
import { Icon } from '../Icon/Icon';
//import './AddToFavorites.scss';

export class AddToFavorites extends React.Component <AddToFavoritesProps, any> {

    public render(): JSX.Element {

        let favoriteClass = classNames(
            { favorited: this.props.favorited}
        );

        return (
            <Icon className={favoriteClass} iconName={IconName.Ghost}  />
        );
    }

}
