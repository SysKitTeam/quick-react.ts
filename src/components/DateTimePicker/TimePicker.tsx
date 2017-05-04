import * as React from 'react';
import * as classNames from 'classnames';
import { Slider } from '../Slider/Slider';
import { autobind } from '../../utilities/autobind';

import * as moment from 'moment';

export interface ITimePickerProps {
    hour: number;
    minute: number;
    is24Hour: boolean;
    onTimeChanged: (hour: number, minute: number) => void;
}

export class TimePicker extends React.Component<ITimePickerProps, void> {


    private hourHover: boolean;
    private minuteHover: boolean;

    @autobind
    onHourSliderEnter() {
        this.hourHover = true;
        this.forceUpdate();
    }

    @autobind
    onHourSliderLeave() {
        this.hourHover = false;
        this.forceUpdate();
    }

    @autobind
    onMinuteSliderEnter() {
        this.minuteHover = true;
        this.forceUpdate();
    }

    @autobind
    onMinuteSliderLeave() {
        this.minuteHover = false;
        this.forceUpdate();
    }

    @autobind
    onHourSliderChange(value) {
        this.props.onTimeChanged(value, this.props.minute);
    }

    @autobind
    onMinuteSliderChange(value) {
        this.props.onTimeChanged(this.props.hour, value);
    }


    public render(): JSX.Element {

        let {hour, minute} = this.props;        
        let amPmDesignator: string = '';
        let hourDisp: any;
        hourDisp = hour;

        if (!this.props.is24Hour) {
            if (hour >= 12) {
                amPmDesignator = 'PM';
                if (hour > 12) {
                    hourDisp -= 12;
                }
            } else {
                amPmDesignator = 'AM';
            }
        }
        if (hourDisp < 10) {
            hourDisp = '0' + hourDisp;
        }
        let minuteDisp: any;
        if (minute < 10) {
            minuteDisp = '0' + minute;
        } else {
            minuteDisp = minute.toString();
        }
        let hourClasses = classNames('time-picker-hours',
            {
                isSelected: this.hourHover
            });

        let minuteClasses = classNames('time-picker-minute',
            {
                isSelected: this.minuteHover
            });
        return (
            <div className="time-picker">
                <div className="time-picker-time-value">
                    <span className={hourClasses}>{hourDisp}</span>
                    <span className="time-picker-colon">:</span>
                    <span className={minuteClasses}>{minuteDisp}</span>
                    <span className="time-picker-ampm-designator">{amPmDesignator}</span>
                </div>
                <div className="time-picker-sliders">
                    <div onMouseEnter={this.onHourSliderEnter} onMouseLeave={this.onHourSliderLeave}><Slider value={hour} min={0} max={23} showValue={false} onChange={this.onHourSliderChange} /></div>
                    <div onMouseEnter={this.onMinuteSliderEnter} onMouseLeave={this.onMinuteSliderLeave}><Slider value={minute} min={0} max={59} showValue={false} onChange={this.onMinuteSliderChange} /></div>
                </div>
            </div>

        );
    }
}
