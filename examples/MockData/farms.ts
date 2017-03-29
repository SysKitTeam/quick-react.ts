import { ICompactDashboardProps } from '../../src/components/CompactDashboard/CompactDashboard.Props';
import { IDetailedServerProps, IProcessorUsage, IPartitionUsage, IMemoryUsage, IProcessorUsageData } from '../../src/components/DetailedServerTile/DetailedServerTile.Props';
import { IDetailedServerFarm } from '../../src/components/DetailedServerFarm/DetailedServerFarm.Props';

import { IFarm } from '../../src/models';

export const classListExample = {
    ok: 'green',
    warning: 'yellow',
    critical: 'red',
    offline: 'offline'
};

const numOfServersOnFarm = [10, 15, 6, 8, 11, 30, 15, 61, 45, 7, 11];
let roleListFarms = [{ display: 'WPF', iconName: 'icon-add' }, { display: 'WPF1111111', iconName: 'icon-add' }, { display: 'Not another', iconName: 'icon-add' }, { display: 'Search', iconName: 'icon-alert' }];
function createFarms() {
    let farms = [];
    for (let farmIndex = 0; farmIndex <= numOfServersOnFarm.length; farmIndex++) {
        let numOfServers = numOfServersOnFarm[farmIndex];
        let servers = [];
        for (let i = 0; i <= numOfServers; i++) {
            servers.push({
                id: {
                    FQDN: 'FQDN' + i
                },
                name: 'server ' + i,
                roles: roleListFarms,
                status: Math.random() >= 0.5 ? 1 : 2
            });
        }
        farms.push({
            id: { sqlInstance: 'instance' + farmIndex, configDataBaseIcon: 'icon-sql_log', configDataBaseName: 'db' + farmIndex },
            name: 'Demo Farm ' + farmIndex,
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
export const farms: Array<IFarm> = createFarms();


const memoryUsage: IMemoryUsage = { usageUnit: 'MB', capactiy: 1024, used: 300 };

function createProcessorUsages(): Array<IProcessorUsage> {
    let time = new Date();
    time.setSeconds(0);
    let cpuUsage = [];
    for (let i = 0; i < 15; i++) {
        cpuUsage.push({
            time: new Date(time.getTime()),
            usage: Math.round(Math.random() * 100)
        });
        time.setSeconds(time.getSeconds() + 20);
    }
    return cpuUsage;
}

const processorUsage: IProcessorUsageData = {data: createProcessorUsages()} ;

const partitionUsages: Array<IPartitionUsage> = [
    { name: 'C', usageUnit: 'GB', capactiy: 60, used: 55 },
    { name: 'D', usageUnit: 'GB', capactiy: 200, used: 10 },
    { name: 'E', usageUnit: 'GB', capactiy: 5, used: 3 },
];
const roleList = [{ display: 'Web', iconName: 'icon-site2' }, { display: 'SQL', iconName: 'icon-sql_log' }, { display: 'FireWall', iconName: 'icon-logOut' }];

export const DetailedFarm: IDetailedServerFarm = {
    id: { sqlInstance: 'instance', configDataBaseIcon: 'icon-sql_log', configDataBaseName: 'db' },
    name: 'demo farm',
    isCustom: Math.random() >= 0.5,
    version: {
        version: '14',
        icon: 'icon-SharePoint'
    },
    servers: [
        {
            id: { FQDN: 'FQDN1' },
            name: 'server1',
            roles: roleListFarms,
            status: Math.random() >= 0.5 ? 1 : 2,
            numberOfUsers: '50111',
            memoryUsage: memoryUsage,
            partitionUsages: partitionUsages,
            processorUsage: processorUsage,
        },
        {
            id: { FQDN: 'FQDN2' },
            name: 'server2',
            roles: roleListFarms,
            status: Math.random() >= 0.5 ? 1 : 2,
            numberOfUsers: '2351',
            memoryUsage: memoryUsage,
            partitionUsages: partitionUsages,
            processorUsage: processorUsage,
        }
    ]
};
