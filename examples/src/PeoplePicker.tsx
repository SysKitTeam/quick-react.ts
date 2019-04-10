/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PeoplePicker } from '../../src/components/PeoplePicker/PeoplePicker';
import { peoplePickerData, mapIcon, mapIconClass } from '../MockData/peoplePickerData';
import { autobind } from '../../src/utilities/autobind';
import { IPrincipal } from '../../src/components/PeoplePicker/Principal.Props';


export class Index extends React.Component<any, any> {
    private _handleSelect(selectedPersonList: IPrincipal[]) {
        // console.log(selectedPersonList);
    }

    private _handleSearch(searchedValue: string) {
       // console.log(searchedValue);
    }

    private  _field: PeoplePicker;
    @autobind
    private _ref(value: PeoplePicker) {
        this._field = value;
    }

    componentDidMount() {
        this._field.focusInput();
    }

    public render() {
        return (
            <div style={{ width: '900px' }}>
                <PeoplePicker 
                    labelText="PeoplePicker"
                    onSearch={this._handleSearch}
                    onSelect={this._handleSelect}
                    placeholder="Search for people"
                    suggestionList={peoplePickerData}
                    mapPrincipalToIcon={mapIcon}
                    mapPrincipalToIconClass={mapIconClass}
                />
                <br/>
                <PeoplePicker 
                    labelText="Disabled PeoplePicker "
                    disabled={true}
                    onSearch={this._handleSearch}
                    onSelect={this._handleSelect}
                    suggestionList={peoplePickerData}
                    mapPrincipalToIcon={mapIcon}
                    mapPrincipalToIconClass={mapIconClass}
                />
                <br/>
                <PeoplePicker 
                    errorMessage="This is error message! This is error message!"
                    labelText="Error PeoplePicker"
                    onSearch={this._handleSearch}
                    onSelect={this._handleSelect}
                    placeholder="Search for people"
                    suggestionList={peoplePickerData}
                    mapPrincipalToIcon={mapIcon}
                    mapPrincipalToIconClass={mapIconClass}
                />
                <br/>
                <PeoplePicker 
                    labelText="Single Select PeoplePicker"
                    onSearch={this._handleSearch}
                    onSelect={this._handleSelect}
                    placeholder="Search for people"
                    singleSelect={true}
                    suggestionList={peoplePickerData}
                    mapPrincipalToIcon={mapIcon}
                    mapPrincipalToIconClass={mapIconClass}
                />
                <PeoplePicker 
                    ref={this._ref}
                    labelText="Focused Single Select PeoplePicker"
                    onSearch={this._handleSearch}
                    onSelect={this._handleSelect}
                    placeholder="Search for people"
                    singleSelect={true}
                    suggestionList={peoplePickerData}
                    mapPrincipalToIcon={mapIcon}
                    mapPrincipalToIconClass={mapIconClass}
                />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
