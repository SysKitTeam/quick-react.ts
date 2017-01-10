import * as React from 'react';
import { IconName } from '../../components/Icon/IconName';
export interface IMainNavigationProps extends React.Props<any> {
    logo: IconName;
    id?: string;
    className?: string;
}
