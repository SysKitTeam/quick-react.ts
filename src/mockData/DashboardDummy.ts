import { ICompactDashboardProps } from '../components/CompactDashboard';
import { IDashboardProps } from '../components/Dashboard';
import {farms} from './farms';

export const dummyCompact: ICompactDashboardProps = {
    title: 'My compact dashboard',
    farms: farms,
    className: '',
    filter: '',
    isVertical: false,

};

export const dummyDashboard: IDashboardProps = {
    title: 'Dummy dashboard',
    filter: '',
    activeView: 0,
    hasAddButton: true,
    headerClass: '',
    differentDashboards: [{ linkText: 'Compact Horizontal' }, { linkText: 'Tiles' }, { linkText: 'Compact Vertical' }] , 
    compact: dummyCompact,
    addFarm: () => { console.log("Adding new farm, wop wop"); },
    groupAddFunc: (groupId: any) => { console.log('Clicked add icon of group ' + groupId); },
    groupDeleteFunc: (groupId: any) => { console.log('Clicked delete icon of group ' + groupId); },
    groupEditFunc: (groupId: any) => { console.log('Clicked edit icon of group ' + groupId); },
    serverClose: (serverFQDN: any) => { console.log('Clicked close icon of server ' + serverFQDN); },
    serverRoleEdit: (serverFQDN: any) => { console.log('Clicked edit role icon of server ' + serverFQDN); },
    groupOnClick: (groupId: any) => { console.log('Clicked on group ' + groupId); }
};
