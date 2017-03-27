import { IMeasure, MeasureType, IFarm, Partition, DiskMeasure, CpuMeasure, RamMeasure, NetworkMeasure } from '../models';
import { ITileData } from '../components/ServerTile/ServerTile.Props';

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

export function filterServerByName(filter: string, serverName: string): boolean {
    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
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
function convertDisk(measure: IMeasure): ITileData {
    let disk = measure as DiskMeasure;
    let usageUnit = '';
    let value = emptyValueString;
    if (disk.totalDiskIo) {
        usageUnit = 'KB/s';
        value = disk.totalDiskIo.toFixed(1).toString();
        if (disk.totalDiskIo > 1024) {
            value = (disk.totalDiskIo / 1024).toFixed(1);
            usageUnit = 'MB/s';
        }
    }

    return {
        title: 'Disk',
        usageUnit: usageUnit,
        hoverText: [],
        status: disk.status,
        currentUsage: value
    };
}

function convertNetwork(measure: IMeasure): ITileData {
    let network = measure as NetworkMeasure;
    let usageUnit = '';
    let value = emptyValueString;
    if (network.kbTotal) {
        usageUnit = 'kbps';
        value = network.kbTotal.toFixed(1).toString();
        if (network.kbTotal > 1024) {
            value = (network.kbTotal / 1024).toFixed(1);
            usageUnit = 'Mbps';
        }
    }

    return {
        title: 'Network',
        usageUnit: usageUnit,
        hoverText: [''],
        status: network.status,
        currentUsage: value
    };
}

function convertRam(measure: IMeasure): ITileData {
    let ram = measure as RamMeasure;
    let used = emptyValueString;
    let capacity = '';
    let hoverText = '';
    let usageUnit = '';
    if (ram.used) {
        used = ram.used.toFixed(1);
        capacity = ram.capacity.toFixed(1);
        usageUnit = 'MB';
        hoverText = (used) + '/' + capacity + '' + usageUnit;
        if (ram.used > 1024 || ram.capacity > 1024) {
            used = (ram.used / 1024).toFixed(1);
            capacity = (ram.capacity / 1024).toFixed(1);
            usageUnit = 'GB';
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

function convertCPU(measure: IMeasure): ITileData {
    let cpu = measure as CpuMeasure;
    let usage = emptyValueString;
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
