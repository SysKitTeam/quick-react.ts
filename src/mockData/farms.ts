import { ICompactDashboardProps } from '../components/CompactDashboard/CompactDashboard.Props';
import { IFarm } from '../models';

export const classListExample = {
    ok: 'green',
    warning: 'yellow',
    critical: 'red',
    offline: 'offline'
};

const numOfServersOnFarm = [10, 15, 6, 8, 11, 30, 15, 61, 45, 7, 11];

function createFarms() {
    let farms = [];
    for (let farmIndex = 0; farmIndex <= numOfServersOnFarm.length; farmIndex++ ) {
        let numOfServers = numOfServersOnFarm[farmIndex];
        let servers = [];
                for (let i = 0; i <= numOfServers; i++) {
                    servers.push({
                        id: {
                            FQDN: 'FQDN' + i                            
                        },
                        name: 'server' + i,
                        roles: roleListFarms, 
                        status: Math.random() >= 0.5 ? 1 : 2
                    });
                }
        farms.push({
            id: { sqlInstance: 'instance' + farmIndex, configDataBaseIcon: 'icon-sql_log', configDataBaseName: 'db' + farmIndex },
            name: 'farm' + farmIndex,
            isCustom: Math.random() >= 0.5,
            version: {
                version: '14',
                icon: 'icon-SharePoint'
            },
            servers: servers 
         });
    }  
    return farms;
}

let roleListFarms = [{ display: 'WPF', iconName: 'icon-add' }, { display: 'WPF1111111', iconName: 'icon-add' }, { display: 'Not another', iconName: 'icon-add' }, { display: 'Search', iconName: 'icon-alert' }];

export const farms: Array<IFarm> = createFarms();
// export const farms: Array<IFarm> = [
//     {
//         id: { sqlInstance: 'instanca1', configDataBaseIcon: '', configDataBaseName: 'db1' },
//         name: 'farm1',
//         isCustom: false,
//         version: {
//             version: '14',
//             icon: 'icon-SharePoint'
//         },
//         servers: [
//             {
//                 id: {
//                     FQDN: 'FQDN1'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN2'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN3'
//                 },
//                 name: 'server3',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN4'
//                 },
//                 name: 'server4',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN5'
//                 },
//                 name: 'server5',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN6'
//                 },
//                 name: 'server6',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN7'
//                 },
//                 name: 'server7',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN8'
//                 },
//                 name: 'server8',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN9'
//                 },
//                 name: 'server9',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN10'
//                 },
//                 name: 'server10',
//                 roles: roleListFarms,
//                 status: 2
//             }
//         ]
//     },
//     {
//         id: { sqlInstance: 'instanca2', configDataBaseIcon: '', configDataBaseName: 'db2' },
//         name: 'farm2',
//         isCustom: true,
//         version: {
//             version: '15',
//             icon: 'icon-SharePoint'
//         },
//         servers: [
//             {
//                 id: {
//                     FQDN: 'FQDN1'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN2'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN3'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN4'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN5'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN6'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN7'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN8'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN9'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN10'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             }
//         ]
//     },
//     {
//         id: { sqlInstance: 'instanca3', configDataBaseIcon: '', configDataBaseName: 'db3' },
//         name: 'farm1',
//         isCustom: false,
//         version: {
//             version: '14',
//             icon: 'icon-SharePoint'
//         },
//         servers: [
//             {
//                 id: {
//                     FQDN: 'FQDN4'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN5'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN6'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN7'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN8'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN9'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN10'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             }
//         ]
//     },
//     {
//         id: { sqlInstance: 'instanca4', configDataBaseIcon: '', configDataBaseName: 'db4' },
//         name: 'farm2',
//         isCustom: true,
//         version: {
//             version: '15',
//             icon: 'icon-SharePoint'
//         },
//         servers: [
//             {
//                 id: {
//                     FQDN: 'FQDN8'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN9'
//                 },
//                 name: 'server1',
//                 roles: roleListFarms,
//                 status: 1
//             },
//             {
//                 id: {
//                     FQDN: 'FQDN10'
//                 },
//                 name: 'server2',
//                 roles: roleListFarms,
//                 status: 2
//             }
//         ]
//     }
// ];


