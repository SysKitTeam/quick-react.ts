import { ICompactDashboardProps } from '../components/CompactDashboard/CompactDashboard.Props';

export const classListExample = {
    ok: 'green',
    warning: 'yellow',
    critical: 'red',
    offline: 'offline'
};
// 

let roleListFarms = []; // [{display: 'WPF', iconName: 'icon-Add'}, {display: 'Search', iconName: 'icon-Alert'}];
export const farms: ICompactDashboardProps = {
    title: 'Compact dashboard view',
    farms: [
        {
            farmId: 'idwewewewewewewewewesdc1',
            farmName: 'MojaFarma',
            isCustom: false,
            sharepointVersion: '14',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [

                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC1',
                    roleList: [], // [{display: 'WPF', iconName: 'icon-Add'}, {display: 'Search', iconName: 'icon-Alert'}, {display: 'W1PF', iconName: 'icon-Add'}, {display: 'S1arch', iconName: 'icon-Alert'}, {display: 'S1awewerch', iconName: 'icon-Alert'}],
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa',
                    serverName: 'Banana-PCB',
                    roleList: [], // [{display: 'assssssssWPF', iconName: 'icon-Add'}, {display: 'Searaasasasasch', iconName: 'icon-Alert'}, {display: 'WP1FAaaaaaA', iconName: 'icon-Add'}, {display: 'BLA', iconName: 'icon-Add'}],
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena',
                    serverName: 'Jabuka-PC2',
                    roleList:  roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja0-PC.domena.domena1',
                    serverName: 'Tresnja-PC3',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC000.domena.domena1',
                    serverName: 'Banana-PCA',
                    roleList:  roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jaabuka-PC.domena.domena1',
                    serverName: 'Jabuka-PCB',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Trresnja-PC.domena.domena',
                    serverName: 'Tresnja-PCC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC.domena.domena12',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena12',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domena2',
                    serverName: 'Tresnja-PC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenawww',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaawwww',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domenawwwwwww',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja0-PC.domena.domena1wwwwwwwww',
                    serverName: 'Tresnja-PC3',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC000.domena.domena1wwwwwwwwwwwwwwwwwwww',
                    serverName: 'Banana-PCA',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jaabuka-PC.domena.domena1wwwwwwwwwwwwwwwwwwwwwwwwww',
                    serverName: 'Jabuka-PCB',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Trresnja-PC.domena.domenwwwwwwwwwa',
                    serverName: 'Tresnja-PCC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC.domena.domenwwwwwwwwwwa12',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domewwwwwwwwwwwwna12',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.dowwwwwwwwwmena2',
                    serverName: 'Tresnja-PC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        },
        {
            farmId: 'idwewewewe1',
            farmName: 'MojaFarma',
            isCustom: false,
            sharepointVersion: '14',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [

                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja0-PC.domena.domena1',
                    serverName: 'Tresnja-PC3',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC000.domena.domena1',
                    serverName: 'Banana-PCA',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jaabuka-PC.domena.domena1',
                    serverName: 'Jabuka-PCB',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Trresnja-PC.domena.domena',
                    serverName: 'Tresnja-PCC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC.domena.domena12',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena12',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domena2',
                    serverName: 'Tresnja-PC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        },
        {
            farmId: 'id2w232321',
            farmName: 'MojaFarma',
            isCustom: false,
            sharepointVersion: '14',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena12121',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa1212',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena1212',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja0-PC.domena.domena1',
                    serverName: 'Tresnja-PC3',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC000.domena.domena1',
                    serverName: 'Banana-PCA',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jaabuka-PC.domena.domena1',
                    serverName: 'Jabuka-PCB',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Trresnja-PC.domena.domena',
                    serverName: 'Tresnja-PCC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC.domena.domena12',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena12',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domena2',
                    serverName: 'Tresnja-PC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        },
        {
            farmId: 'idwewewe1',
            farmName: 'MojaFarma',
            isCustom: false,
            sharepointVersion: '14',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena12121',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa1212',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena1212',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja0-PC.domena.domena1',
                    serverName: 'Tresnja-PC3',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC000.domena.domena1',
                    serverName: 'Banana-PCA',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jaabuka-PC.domena.domena1',
                    serverName: 'Jabuka-PCB',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Trresnja-PC.domena.domena',
                    serverName: 'Tresnja-PCC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC.domena.domena12',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena12',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domena2',
                    serverName: 'Tresnja-PC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        },
        {
            farmId: 'idwewe1',
            farmName: 'MojaFarma',
            isCustom: false,
            sharepointVersion: '14',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena12121',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa1212',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena1212',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja0-PC.domena.domena1',
                    serverName: 'Tresnja-PC3',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC000.domena.domena1',
                    serverName: 'Banana-PCA',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jaabuka-PC.domena.domena1',
                    serverName: 'Jabuka-PCB',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Trresnja-PC.domena.domena',
                    serverName: 'Tresnja-PCC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC.domena.domena12',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena12',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domena2',
                    serverName: 'Tresnja-PC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        },
        {
            farmId: 'id1222',
            farmName: 'MojaFarma',
            isCustom: false,
            sharepointVersion: '14',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena12121',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa1212',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena1212',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja0-PC.domena.domena1',
                    serverName: 'Tresnja-PC3',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC000.domena.domena1',
                    serverName: 'Banana-PCA',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jaabuka-PC.domena.domena1',
                    serverName: 'Jabuka-PCB',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Trresnja-PC.domena.domena',
                    serverName: 'Tresnja-PCC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC.domena.domena12',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena12',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domena2',
                    serverName: 'Tresnja-PC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        },
        {
            farmId: 'id1',
            farmName: 'MojaFarma',
            isCustom: false,
            sharepointVersion: '14',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena12121',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa1212',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena1212',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 4,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC1',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Banana-PC.domena.domenaaaa',
                    serverName: 'Banana-PCB',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka12-PC.domena.domena',
                    serverName: 'Jabuka-PC2',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja0-PC.domena.domena1',
                    serverName: 'Tresnja-PC3',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC000.domena.domena1',
                    serverName: 'Banana-PCA',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jaabuka-PC.domena.domena1',
                    serverName: 'Jabuka-PCB',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Trresnja-PC.domena.domena',
                    serverName: 'Tresnja-PCC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC.domena.domena12',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena12',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domena2',
                    serverName: 'Tresnja-PC',
                    roleList: roleListFarms,
                    classNameList: classListExample,
                    status: 2,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        },
        {
            farmId: 'id2',
            farmName: 'Prva MojaDrugaFarma',
            isCustom: true,
            sharepointVersion: '11',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domena',
                    serverName: 'Tresnjaaaaaaaaaaa-PC',
                    roleList: roleListFarms,
                    status: 2,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        }, {
            farmId: 'id23',
            farmName: 'Druga MojaDrugaFarma',
            isCustom: true,
            sharepointVersion: '11',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domenwea',
                    serverName: 'Tresnjaaaaaaaaweweaaa-PC',
                    roleList: roleListFarms,
                    status: 2,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }, {
                    serverId: 'Banana-PC.domewewena.domena',
                    serverName: 'Bananawewe-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabukawewe-PC.domena.domena',
                    serverName: 'Jabuweweka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        }, {
            farmId: 'id235',
            farmName: 'Treća MojaDrugaFarma',
            isCustom: true,
            sharepointVersion: '11',
            sharepointVersionIcon: 'icon-SharePoint',
            configDB: 'myConfigDB',
            confgiDBIcon: 'icon-EditUser',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC',
                    roleList: roleListFarms,
                    status: 0,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Jabuka-PC.domena.domena',
                    serverName: 'Jabuka-PC',
                    roleList: roleListFarms,
                    status: 1,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                },
                {
                    serverId: 'Tresnja-PC.domena.domena',
                    serverName: 'Tresnjaaaaaaaaaaa-PC',
                    roleList: roleListFarms,
                    status: 2,
                    classNameList: classListExample,
                    onRoleEdit: () => { },
                    onServerClose: () => { }
                }
            ]
        }
    ]
};
