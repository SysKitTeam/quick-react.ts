import * as React from 'react';
import * as classNames from 'classnames';
import { IDisksInformationProps, IDisksInformationState } from './DisksInformation.Props';
import { Icon } from '../../Icon/Icon';
import { Callout } from '../../Callout';
import { ServerStatus } from '../../../models';
import { autobind } from '../../../utilities/autobind';
import { DirectionalHint } from '../../../utilities/DirectionalHint';
import { Popup } from '../../Popup/Popup';

import './DisksInformation.scss';

export class DisksInformation extends React.PureComponent<IDisksInformationProps, IDisksInformationState> {

    constructor(props) {
        super(props);

        this.state = { tooltipShow: false };
    }
    private _dropdown: any;
    public render(): JSX.Element {
        return (
            <div
                className={this.props.className}                
                >
                <div ref={(ref) => this._dropdown = ref}>
                    <Icon
                        className={classNames('disk-icon')}
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
                        {this.props.diskInformation.map((data, index) => (
                            <div key={index}>{data.name}: {data.used}/{data.capacity} {data.usageUnit}</div>
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
