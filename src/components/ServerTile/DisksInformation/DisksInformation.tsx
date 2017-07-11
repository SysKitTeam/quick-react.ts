import * as React from 'react';
import * as classNames from 'classnames';
import { IDisksInformationProps, IDisksInformationState } from './DisksInformation.Props';
import { Icon } from '../../Icon/Icon';
import { Callout } from '../../Callout';
import { ServerStatus } from '../../../models';
import { autobind } from '../../../utilities/autobind';
import { DirectionalHint } from '../../../utilities/DirectionalHint';
import { sortServersByStatusAndName } from '../../../utilities/server';
import { Popup } from '../../Popup/Popup';

import './DisksInformation.scss';

export class DisksInformation extends React.PureComponent<IDisksInformationProps, IDisksInformationState> {

    constructor(props) {
        super(props);

        this.state = { tooltipShow: false };
    }
    private _dropdown: any;
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

        return (
            <div
                className={this.props.className}
            >
                <div ref={(ref) => this._dropdown = ref}>
                    <Icon
                        className={classNames('disk-icon', diskIconColorClass)}
                        iconName={'icon-disk'}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    />
                </div>
                {this.state.tooltipShow &&
                    <Callout
                        targetElement={this._dropdown}
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
                            )}>{data.name}: {data.used}/{data.capacity} {data.usageUnit}</div>
                        ))}
                    </Callout>

                }
            </div>
        );
    }

    @autobind
    private onMouseEnter() {
        this.setState({ tooltipShow: true });
    }

    @autobind
    private onMouseLeave() {
        this.setState({ tooltipShow: false });
    }
}
