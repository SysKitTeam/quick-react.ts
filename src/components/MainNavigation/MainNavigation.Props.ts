import * as React from 'react';
import { MainNavigation } from './MainNavigation';
import { IconName } from '../../components/Icon/IconName';

export interface IMainNavigationProps extends React.Props <any> {
    logo: IconName;
    id ?: string;
    className ?: string;
}