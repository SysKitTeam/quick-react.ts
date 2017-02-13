import {IDashboardProps} from '../components/Dashboard/Dashboard.Props';

export const farms : IDashboardProps = {
    title: 'Compact dashboard view',
    farms: [
        {
            farmId: 'id1',
            farmName: 'MojaFarma',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC',
                    roleList: [],
                    status: 0,
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    onRoleEdit: () => {},
                    onServerClose: () => {}
                },
                {
                    serverId: 'Jabuka-PC.domena.domena',
                    serverName: 'Jabuka-PC',
                    roleList: [],
                    status: 1, 
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    onRoleEdit: () => {},
                    onServerClose: () => {}
                },
                {
                    serverId: 'Tresnja-PC.domena.domena1',
                    serverName: 'Tresnja-PC',
                    roleList: [],
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    status: 2,
                     onRoleEdit: () => {},
                    onServerClose: () => {}
                }, {
                    serverId: 'Banana-PC.domena.domena1',
                    serverName: 'Banana-PC',
                    roleList: [],
                    status: 0,
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    onRoleEdit: () => {},
                    onServerClose: () => {}
                },
                {
                    serverId: 'Jabuka-PC.domena.domena1',
                    serverName: 'Jabuka-PC',
                    roleList: [],
                    status: 1, 
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    onRoleEdit: () => {},
                    onServerClose: () => {}
                },
                {
                    serverId: 'Tresnja-PC.domena.domena',
                    serverName: 'Tresnja-PC',
                    roleList: [],
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    status: 2,
                     onRoleEdit: () => {},
                    onServerClose: () => {}
                }, {
                    serverId: 'Banana-PC.domena.domena12',
                    serverName: 'Banana-PC',
                    roleList: [],
                    status: 0,
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    onRoleEdit: () => {},
                    onServerClose: () => {}
                },
                {
                    serverId: 'Jabuka-PC.domena.domena12',
                    serverName: 'Jabuka-PC',
                    roleList: [],
                    status: 1, 
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    onRoleEdit: () => {},
                    onServerClose: () => {}
                },
                {
                    serverId: 'Tresnja-PC.domena.domena2',
                    serverName: 'Tresnja-PC',
                    roleList: [],
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    status: 2,
                     onRoleEdit: () => {},
                    onServerClose: () => {}
                }
            ]
        },
         {
            farmId: 'id2',
            farmName: 'MojaDrugaFarma',
            servers: [
                {
                    serverId: 'Banana-PC.domena.domena',
                    serverName: 'Banana-PC',
                    roleList: [],
                    status: 0,
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    onRoleEdit: () => {},
                    onServerClose: () => {}
                },
                {
                    serverId: 'Jabuka-PC.domena.domena',
                    serverName: 'Jabuka-PC',
                    roleList: [],
                    status: 1,
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    onRoleEdit: () => {},
                    onServerClose: () => {}
                },
                {
                    serverId: 'Tresnja-PC.domena.domena',
                    serverName: 'Tresnjaaaaaaaaaaa-PC',
                    roleList: [],
                    status: 2,
                    classNameList: {ok: 'green', warning: 'yellow', critical: 'red'},
                    onRoleEdit: () => {},
                    onServerClose: () => {}
                }
            ]
        }
    ]
};
