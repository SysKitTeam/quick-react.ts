import * as React from 'react';
import * as classNames from 'classnames';
import { Dropdown } from '../../Dropdown';
import { Callout } from '../../Callout';
import { Icon } from '../../Icon';
import ColumnPicker from './ColumnPicker';
import { GridColumn } from '../QuickGrid.Props';
import { IPoint } from '../../../utilities/positioning';

import './ColumnPickerDropdown.scss';

export interface ColumnPickerDropdownProps {
    columns: Array<GridColumn>;
    pickedColumns?: Array<GridColumn>;
    className?: string;
    calloutClassName?: string;
    
    onChanged?(selected: Array<GridColumn>);
}

export interface ColumnPickerDropdownState {
    isOpen: boolean;
}

export default class ColumnPickerDropdown extends React.Component<ColumnPickerDropdownProps, ColumnPickerDropdownState> {

    private _componentRef = null;
    private setComponentRef = (ref) => this._componentRef = ref;

    public constructor(props: ColumnPickerDropdownProps) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    private toggleDropdown = () => {
        this.setState(old => ({
            isOpen: !old.isOpen
        }));
    }

    private closeDropdown = () => {
        this.setState({
            isOpen: false
        });
    }

    public render(): React.ReactNode {
        const {
            columns, 
            pickedColumns,
            onChanged,
            className,
            calloutClassName
        } = this.props;
        return (
            <div 
                className={classNames('column-picker-dropdown-container', className)}
                ref={this.setComponentRef}
                onClick={this.toggleDropdown}
            >
                <Icon 
                    iconName="svg-icon-list"
                />
                {this.state.isOpen &&
                    <Callout
                        className={classNames('column-picker-dropdown-callout', calloutClassName)}
                        targetElement={this._componentRef}
                        onDismiss={this.closeDropdown}
                        gapSpace={4}    
                        isBeakVisible={false}
                    >
                        <ColumnPicker
                            columns={columns}
                            pickedColumns={pickedColumns}
                            onChanged={onChanged}
                            onDismiss={this.closeDropdown}
                        />
                    </Callout>
                }
            </div>
        );
    }
}
