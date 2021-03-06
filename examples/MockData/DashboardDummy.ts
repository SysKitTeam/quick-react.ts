/* tslint:disable:no-console */
import { ICompactDashboardProps } from '../../src/components/CompactDashboard';
import { ITileDashboardProps } from '../../src/components/TileDashboard';
import { IDashboardProps } from '../../src/components/Dashboard';
import { ActiveDashboard } from '../../src/components/DashboardHeader/DashboardHeader.Props';
import { IGroup, ServerStatus, IMeasure, MeasureType, CpuMeasure, Partition, DiskMeasure, NetworkMeasure, RamMeasure, GroupTypeEnum } from '../../src/models';
import { farms, createFarms } from './farms';

export const dummyCompact: ICompactDashboardProps = {
    title: 'My compact dashboard',
    farms: farms.map(convertFarm),
    className: '',
    filter: '',
    singleGroupView: false

};

export const dummyTiles: ITileDashboardProps = {
    className: '',
    filter: '',
    farms: farms.map(convertFarm)
};


export const getDummyDashboard = (hasRoles: boolean) => {
    return {
        title: 'Dummy dashboard',
        filter: '',
        initialActiveView: 0,
        initialActiveGrouping: 0,
        hasAddButton: true,
        headerClass: '',
        differentDashboards: { 0: { linkText: 'Compact Horizontal' }, 2: { linkText: 'Tiles' }, 3: { linkText: 'Grid' } },
        farms: createFarms(10, 10, 10, hasRoles).map(convertFarm), 
        addFarm: () => { console.log('Adding new farm, wop wop'); },
        onAddToGroup: (groupId: any) => { console.log('Clicked add icon of group ' + groupId); },
        onGroupDelete: (groupId: any) => { console.log('Clicked delete icon of group ' + groupId); },
        onGroupEdit: (groupId: any) => { console.log('Clicked edit icon of group ' + groupId); },
        onServerClose: (serverFQDN: any) => { console.log('Clicked close icon of server ' + serverFQDN); },
        onServerRoleEdit: (serverFQDN: any, farmId: any) => { console.log('Clicked edit role icon of server ', serverFQDN, farmId); },
        groupOnClick: (groupId: any) => { console.log('Clicked on group ' + groupId); },
        serverOnClick: (groupId: any, serverId: any) => { console.log('Clicked on group ' + groupId + ' and server ' + serverId); },
        activeFilters: [],
        icons: [
            { iconType: GroupTypeEnum.SharePoint, iconName: 'icon-key', iconTitle: 'SharePoint' },
            { iconType: GroupTypeEnum.Custom, iconName: 'icon-group', iconTitle: 'Custom' },
            { iconType: GroupTypeEnum.Sql, iconName: 'icon-link', iconTitle: 'Sql Server' },
            { iconType: GroupTypeEnum.SqlAlwaysOn, iconName: 'icon-list', iconTitle: 'Sql Always On' }
        ]
    };
};

export const dummyDashboard: IDashboardProps =  getDummyDashboard(true);

export function convertFarm(farm: IGroup): IGroup {
    let servers = farm.servers.map((server) => {
        let measures = generateMeasures();
        let status = ServerStatus.Offline;
        if (measures.length > 0) {
            status = ServerStatus.OK;
            if (measures.filter(t => { return t.status === ServerStatus.Warning; }).length > 0) {
                status = ServerStatus.Warning;
            }
            if (measures.filter(t => { return t.status === ServerStatus.Critical; }).length > 0) {
                status = ServerStatus.Critical;
            }
        }
        if (Math.random() < 0.05) { status = ServerStatus.Offline; }
        if (Math.random() < 0.05) { status = ServerStatus.Disabled; }

        return {
            id: server.id,
            numberOfUsers: Math.round(Math.random() * 1000).toString(),
            name: server.name,
            onClose: server.onClose,
            onRoleChange: server.onRoleChange,
            onRoleEdit: server.onRoleEdit,
            roles: server.roles,
            status: status,
            measures: measures,
            type: server.type
        };
    });

    return {
        servers: servers,
        name: farm.name,
        id: farm.id,
        type: (Math.floor(Math.random() * 100) % 4) + 1
    };
}

function convertToCompactFarm(farm: IGroup): IGroup {
    return farm;
}

export function generatePercentage() {
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}

export function generateCpuSpeed() {
    return Math.random() * (2 - 0.1 + 1);
}

export function generateCoreCount() {
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}

export function generateNetworkSpeed() {
    return Math.random() * (2000 - 0.1 + 1);
}

export function generateRandomStatus() {
    return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
}

export function generateMeasures(): Array<IMeasure> {
    let cpuMeasure: CpuMeasure = {
        type: MeasureType.CPU,
        status: generateRandomStatus(),
        usage: generatePercentage(),
        speed: generateCpuSpeed(),
        coreCount: generateCoreCount(),
        logicalCoreCount: generateCoreCount(),
        name: 'Dummy CPU',
        time: new Date(Date.now())
    };
    let ramMeasure: RamMeasure = {
        type: MeasureType.Ram,
        status: generateRandomStatus(),
        used: generatePercentage(),
        capacity: generatePercentage() + 100,
        time: new Date(Date.now())
    };
    let networkMeasure: NetworkMeasure = {
        type: MeasureType.Network,
        status: generateRandomStatus(),
        kbTotal: generateNetworkSpeed(),
        time: new Date(Date.now())
    };
    let diskMeasure: DiskMeasure = {
        type: MeasureType.Disk,
        status: generateRandomStatus(),
        totalDiskIo: generateNetworkSpeed(),
        partitions: [
            {
                name: 'Local Disk (C:)',
                used: 800,
                capacity: 1000,
                usageUnit: 'GB',
                id: 1,
                status: 2
            },
            {
                name: 'Data (E:)',
                used: 560,
                capacity: 789,
                usageUnit: 'GB',
                id: 2,
                status: 2
            }
        ],
        time: new Date(Date.now())
    };
    return [cpuMeasure, ramMeasure, networkMeasure, diskMeasure];
}

