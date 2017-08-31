import * as React from 'react';
import * as classNames from 'classnames';
import { IDisksInformationProps, IDisksInformationState } from './DisksInformation.Props';
import { Icon } from '../../Icon/Icon';
import { Callout } from '../../Callout';
import { ServerStatus, Partition } from '../../../models';
import { DirectionalHint } from '../../../utilities/DirectionalHint';
import { sortServersByStatusAndName } from '../../../utilities/server';
import { Popup } from '../../Popup/Popup';

import './DisksInformation.scss';

export class DisksInformation extends React.PureComponent<IDisksInformationProps, IDisksInformationState> {
    constructor(props) {
        super(props);
        this.state = { tooltipShow: false };
    }
    private _calloutTargetElement: any;
    setCalloutTargetRef = (ref) => { this._calloutTargetElement = ref; };
    public render(): JSX.Element {

        let diskIconColorClass = '';
        if (this.props.diskInformation.filter((info) => { return info.status === ServerStatus.Critical; }).length > 0) {
            diskIconColorClass = 'status-critical';

        } else if (this.props.diskInformation.filter((info) => { return info.status === ServerStatus.Warning; }).length > 0) {
            diskIconColorClass = 'status-warning';
        }
        let sortedDiskInfo = this.props.diskInformation.sort((disk1, disk2) => {
            return sortServersByStatusAndName(
                { status: disk1.status, name: disk1.name },
                { status: disk2.status, name: disk2.name }
            );
        });

        const diskClasses = classNames({
            'cursor-pointer': sortedDiskInfo.length !== 0,
            'cursor-default': sortedDiskInfo.length === 0
        });

        return (
            <div className={this.props.className}>
                <div
                    ref={this.setCalloutTargetRef}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}>
                    <Icon
                        className={classNames('disk-icon', diskIconColorClass, diskClasses)}
                        iconName={'icon-disk'}
                        title=""
                    />
                </div>
                {sortedDiskInfo.length !== 0 && this.state.tooltipShow &&
                    <Callout
                        targetElement={this._calloutTargetElement}
                        isBeakVisible={false}
                        gapSpace={2}
                        directionalHint={DirectionalHint.bottomAutoEdge}
                        doNotLayer={false}
                        className={'disk-information-callout'}
                    >
                        {sortedDiskInfo.map((data, index) => (
                            <div key={index} className={classNames(
                                { 'status-warning': data.status === ServerStatus.Warning },
                                { 'status-critical': data.status === ServerStatus.Critical }
                            )}>{data.fullName || data.name}: {data.used}/{data.capacity} {data.usageUnit}</div>
                        ))}
                    </Callout>

                }
            </div>
        );
    }

    private onMouseEnter = () => {
        this.setState({ tooltipShow: true });
    }

    private onMouseLeave = () => {
        this.setState({ tooltipShow: false });
    }
}
