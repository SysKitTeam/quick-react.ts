import { IMeasure, MeasureType, Partition, DiskMeasure, CpuMeasure, RamMeasure, NetworkMeasure, ServerStatus } from '../models';
import { ITileData } from '../components/ServerTile/ServerTile.Props';
import { IFilteringOption } from '../components/FilteringBar/FilteringBar.Props';
import * as classNames from 'classnames';

const noMeasureString = '--';

export function sortServersByStatusAndName(ob1: { status: number, name: string }, ob2: { status: number, name: string }) {
    if (ob1.status > ob2.status) {
        return 1;
    } else if (ob1.status < ob2.status) {
        return -1;
    }

    if (ob1.name < ob2.name) {
        return -1;
    } else if (ob1.name > ob2.name) {
        return 1;
    } else {
        return 0;
    }
}

export function GetClassForStatus(defaultClass: string, status: ServerStatus): string {
    return classNames(
        defaultClass,
        { 'status-warning': status === ServerStatus.Warning },
        { 'status-ok': status === ServerStatus.OK },
        { 'status-critical': status === ServerStatus.Critical },
        { 'status-offline': status === ServerStatus.Offline });
}

export function filterServerByName(filter: string, serverName: string): boolean {
    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
}

export function filterServerByStatus(filteringOptions: Array<IFilteringOption>, serverStatus: ServerStatus): boolean {
    let serverMatched: boolean;
    let statusOptions = filteringOptions.filter(x => x.type === 'Status');
    for (let i = 0; i < statusOptions.length; i++) {
        let value = statusOptions[i].key.toLowerCase().trim();
        switch (value) {
            case 'critical':
                serverMatched = serverMatched || serverStatus === ServerStatus.Critical;
                break;
            case 'warning':
                serverMatched = serverMatched || serverStatus === ServerStatus.Warning;
                break;
            case 'healthy':
                serverMatched = serverMatched || serverStatus === ServerStatus.OK;
                break;
            case 'offline':
                serverMatched = serverMatched || serverStatus === ServerStatus.Offline;
                break;
        }
    }

    return serverMatched;
}

export function getDiskInformationFromMeasurements(serverMeasurements: Array<IMeasure>): Array<Partition> {
    let diskMeasurement = serverMeasurements.filter(x => x.type === MeasureType.Disk)[0] as DiskMeasure;
    if (!diskMeasurement) {
        return null;
    }

    return diskMeasurement.partitions;
}

export function getServerMeasures(serverMeasures: Array<IMeasure>) {
    let counters = [];
    serverMeasures.forEach((measure) => {
        if (measure.type === MeasureType.CPU) {
            counters.push(convertCPU(measure));
        } else if (measure.type === MeasureType.Ram) {
            counters.push(convertRam(measure));
        } else if (measure.type === MeasureType.Disk) {
            counters.push(convertDisk(measure));
        } else if (measure.type === MeasureType.Network) {
            counters.push(convertNetwork(measure));
        }
    });
    return counters;
}

const emptyValueString = '--';
export function convertDisk(measure: IMeasure): ITileData {
    let disk = measure as DiskMeasure;
    const measureData = getMeasureData(disk.totalDiskIo, ['KB/s', 'MB/s']);
    return {
        title: 'Disk',
        usageUnit: measureData.usageUnit,
        hoverText: [],
        status: disk.status,
        currentUsage: measureData.value
    };
}

export function convertNetwork(measure: IMeasure): ITileData {
    let network = measure as NetworkMeasure;
    const measureData = getMeasureData(network.kbTotal, ['Kbps', 'Mbps']);
    return {
        title: 'Network',
        usageUnit: measureData.usageUnit,
        hoverText: [''],
        status: network.status,
        currentUsage: measureData.value
    };
}

function getMeasureData(measureValue: number, usageUnits: Array<string>) {
    let usageUnit = '';
    let value = noMeasureString;
    if (measureValue) {
        usageUnit = usageUnits[0];
        if (measureValue >= 1000) {
            value = (measureValue / 1024).toFixed(1);
            value = removeZeroAfterDecimalPoint(value);
            usageUnit = usageUnits[1];
        } else {
            value = convertMeasureValue(measureValue);
        }
    }
    return {
        value: value,
        usageUnit: usageUnit
    };
}

/**
 * Formats and convert measure value. If value is bigger than 99
 * decimal points are not displayed. If values has zero behind decimal point
 * ie. 70.0 value is converted to 70
 */
function convertMeasureValue(measure: number): string {
    let value = measure.toFixed(1);
    const stringLength = value.length;
    if (stringLength === 5) {
        return value.substring(0, 3);
    } else if (value.indexOf('.0') > 0) {
        return value.substr(0, stringLength - 2);
    }
    return value;
}

/**
 * If value has zero behind decimal point, ie. 50.0 then .0 is trimmer from
 * number and only 50 is returned.
 */
function removeZeroAfterDecimalPoint(value: string): string {
    if (value.indexOf('.0') > 0) {
        const valueLengthEndPosition = value.length - 2;
        return value.substr(0, valueLengthEndPosition);
    }
    return value;
}

export function convertRam(measure: IMeasure): ITileData {
    let ram = measure as RamMeasure;
    let used = noMeasureString;
    let capacity = '';
    let hoverText = '';
    let usageUnit = '';
    if (ram.used) {
        let usedPercentage = '(' + Math.round((ram.used / ram.capacity) * 100) + '%)';

        if (ram.used >= 1000 || ram.capacity >= 1000) {
            used = (ram.used / 1024).toFixed(1);
            capacity = (ram.capacity / 1024).toFixed(1);
            usageUnit = 'GB';
            hoverText = used + '/' + capacity + ' ' + usageUnit + ' ' + usedPercentage;
        } else {
            used = ram.used.toFixed(1);
            capacity = ram.capacity.toFixed(1);
            usageUnit = 'MB';
            hoverText = ram.used.toFixed() + '/' + ram.capacity.toFixed() + ' ' + usageUnit + ' ' + usedPercentage;
        }
    }

    return {
        title: 'Memory',
        usageUnit: usageUnit,
        hoverText: [hoverText],
        status: ram.status,
        currentUsage: used.toString()
    };
}

export function convertCPU(measure: IMeasure): ITileData {
    let cpu = measure as CpuMeasure;
    let usage = noMeasureString;
    let usageUnit = '';
    if (cpu.usage) {
        usageUnit = '%';
        usage = cpu.usage.toString();
    }
    return {
        title: 'CPU',
        usageUnit: usageUnit,
        hoverText: [''],
        status: cpu.status,
        currentUsage: usage
    };
}
