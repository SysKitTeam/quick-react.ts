import 'babel-polyfill';
import 'ts-helpers';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './components/Test/Test';
import { Button } from './components/Button/Button';
import { ButtonType } from './components/Button/Button.Props';
import { Icon } from './components/Icon/Icon';
import { Dropdown } from './components/Dropdown/Dropdown';
import { DropdownType } from './components/Dropdown/Dropdown.Props';
import { LeftNavigation } from './components/LeftNavigation/LeftNavigation';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { Ribbon } from './components/Ribbon/Ribbon';
import { History } from './components/History/History';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { Label } from './components/Label/Label';
import { Callout } from './components/Callout/Callout';
import { ContextualMenu } from './components/ContextualMenu/ContextualMenu';
import { DirectionalHint } from './utilities/DirectionalHint';
import { IPoint } from './utilities/IPoint';
import { ChoiceGroup } from './components/ChoiceGroup/ChoiceGroup';
import { AddToFavorites } from './components/AddToFavorites/AddToFavorites';
import { TextField } from './components/TextField/TextField';
import { Spinner } from './components/Spinner/Spinner';
import { SpinnerType } from './components/Spinner/Spinner.Props';
import { Slider } from './components/Slider/Slider';
import { MessageBar } from './components/MessageBar/MessageBar';
import { MessageBarType } from './components/MessageBar/MessageBar.Props';
import { Search } from './components/Search/Search';
import { Pivot } from './components/Pivot/Pivot';
import { PivotItem } from './components/Pivot/PivotItem';
import { Dialog } from './components/Dialog/Dialog';
import { DialogFooter } from './components/Dialog/DialogFooter';
import { StatusBar } from './components/StatusBar/StatusBar';
import { CheckboxList } from './components/CheckboxList/CheckboxList';
import { Treeview } from './components/Treeview/Treeview';
import { CompactDashboard} from './components/CompactDashboard/CompactDashboard';
import {ICompactServerProps} from './components/CompactServer/CompactServer.Props';
import {TagContainer} from './components/TagContainer/TagContainer';
import {CompactServer} from './components/CompactServer/CompactServer'; 
import {DashboardHeader} from './components/DashboardHeader/DashboardHeader';
import {Dashboard} from './components/Dashboard/Dashboard';
import {dummyDashboard} from './mockData/DashboardDummy';
import { ServerTile } from './components/ServerTile/ServerTile';
import { elements } from './treeviewElements';
import { ToggleSwitch } from './components/ToggleSwitch/ToggleSwitch';
import { LineChart } from './components/LineChart/LineChart';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { PieChart } from './components/PieChart/PieChart';
import { DataGenerator } from './utilities/DataGenerator';
import {IFarm , ISharePointServer} from './models';

export class Index extends React.Component<any, any> {
    constructor() {
        super();
        let pieData = [];
        const generator = new DataGenerator();
        this.state = {
            showDialog: false,
            treeviewElements: elements,
            selector: true,
            cpu: '74',
            data: generator.generateValues(),
            compact: dummyDashboard.compact,
            tiles: dummyDashboard.tiles
        };
        
        setInterval(() => this.setState({data: generator.generateValues()}), 5000);
        setInterval(() => { 
            let newFarms = this.state.compact.farms.map((farm: IFarm) => {
                let servers = farm.servers.map((server: ISharePointServer) => {
                    
                    return { 
                        id: server.id,
                        status: this.generateRandomStatus(),
                        roles: server.roles,
                        onRoleEdit: server.onRoleEdit,
                        onClose: server.onClose,
                        name: server.name
                    };
                });
                return {
                    id: farm.id,
                    isCustom: farm.isCustom,
                    version: farm.version,
                    name: farm.name,
                    servers: servers
                };
            });
            this.setState({compact: {
                farms:  newFarms,
                title: this.state.compact.title,
                className: this.state.compact.className,
                filter: this.state.compact.filter,
                isVertical: this.state.compact.isVertical,
                groupAddFunc: this.state.compact.groupAddFunc,
                groupDeleteFunc: this.state.compact.groupDeleteFunc,
                groupEditFunc: this.state.compact.groupEditFunc,
                serverClose: this.state.compact.serverClose,
                serverRoleEdit: this.state.compact.serverRoleEdit,
                groupOnClick: this.state.compact.groupOnClick,
            }});
        }, 2000);
    }

    componentDidMount() {
        /*let timer = setInterval(() => {
           const currentCpu = this.state.selector ? '74%' : '85%';
           const sel = !this.state.selector;
           this.setState({cpu: currentCpu, selector: sel});
       }, 1000);*/
    }


    private generateValues(d: any[]) {
        d[0].value = d[0].value + 1;
        d[1].value = d[1].value - 1;
        return d;
    }

    public render() {
        return (
            <div>
                <CompactServer id={{FQDN: 'CUSTOM-PC.localdomain'}} onClose={this._onServerCloseCompactServer} onRoleEdit={this._onClickCompactServer} name={'CUSTOM-PC'} roles={[]} status={1} />
                <CompactServer id={{FQDN: 'My very very long name of a server I am using I know its very long.domain.com'}} onClose={this._onServerCloseCompactServer}  onRoleEdit={this._onClickCompactServer} name={'My very very long name of a server I am using I know its very long'} roles={[]}  status={2}/>                
                <CompactServer id={{FQDN:'BANANA-PC.banana.com'}}  onClose={this._onServerCloseCompactServer}  onRoleEdit={this._onClickCompactServer} name={'BANANA-PC'} roles={[{display:'WPF', iconName:'icon-Add'}, {display:'Search', iconName:'icon-Alert'}]} status={0} />
                
                <TagContainer title={'Roles'} tags={[{display:'Tag1', iconName:'icon-Add'}, {display:'Tag2', iconName:'icon-Alert'}, {display:'Tag3', iconName:'icon-Buy'}]}>

                    <div className="edit-tags tag" title="Edit tags">
                        <Icon className="icon-Edit"></Icon>
                    </div>
                </TagContainer>
                <Ribbon items={[]}></Ribbon>
                <AddToFavorites favorited={true} />
                <AddToFavorites favorited={false} />
                <Callout> AAAAAAA<Callout>BBBBBBBB</Callout> </Callout>
                <MainNavigation id={'mainNavigation'} logo={'icon-Logo'}>
                    <Icon iconName={'icon-Buy'}></Icon>
                </MainNavigation>
                <br />
                <MessageBar messageBarType={MessageBarType.warning} hasDontShowAgain={true} onDismiss={() => { console.log('test'); } }>Ovo je message bar!</MessageBar>
                <br />
                <Pivot onLinkClick={(item, ev) => console.log(item)}>
                    <PivotItem linkText={'My Files'}>
                        <Label>Pivot #1</Label>
                    </PivotItem>
                    <PivotItem linkText={'Recent'}>
                        <Label>Pivot #2</Label>
                    </PivotItem>
                    <PivotItem linkText={'Shared with me'}>
                        <Label>Pivot #3</Label>
                    </PivotItem>
                </Pivot>
                <br />
                <Pivot onLinkClick={(item, ev) => console.log(item)}>
                    <PivotItem linkText={'My Files'} linkIcon={'icon-User'}>
                        <Label>Pivot #1</Label>
                    </PivotItem>
                    <PivotItem linkText={'Recent'} >
                        <Label>Pivot #2</Label>
                    </PivotItem>
                    <PivotItem linkText={'Shared with me'} linkIcon={'icon-Add'}>
                        <Label>Pivot #3</Label>
                    </PivotItem>
                </Pivot>
                <br />
                <Button>WAT</Button>
                <br />
                <br />
                <Button onClick={this._showDialog.bind(this)}>Open Dialog</Button>
                <Dialog
                    isOpen={this.state.showDialog}
                    onDismiss={this._closeDialog.bind(this)}
                    title={'All emails together'}
                    subText={'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'}
                    containerClassName={'dialogMainOverride'}>
                    <DialogFooter>
                        <Button buttonType={ButtonType.primary} onClick={this._closeDialog.bind(this)}>Save</Button>
                        <Button onClick={this._closeDialog.bind(this)}>Cancel</Button>
                    </DialogFooter>
                </Dialog>
                <br />
                <div style={{ 'width': '150px' }}>
                    <Dropdown
                        hasTitleBorder={true}
                        dropdownType={DropdownType.selectionDropdown}
                        label="Basic example:"
                        options={
                            [
                                { key: 'A', text: 'Option a', icon: 'icon-Add' },
                                { key: 'B', text: 'Option b', icon: 'icon-Buy' },
                                { key: 'C', text: 'Option c', icon: 'icon-User' },
                                { key: 'D', text: 'Option d' },
                                { key: 'E', text: 'Option e' },
                                { key: 'F', text: 'Option f' },
                                { key: 'G', text: 'Option g' },
                                { key: 'H', text: 'Option h', selected: true },
                                { key: 'I', text: 'Option i' },
                                { key: 'J', text: 'Option j' },
                            ]
                        }
                        />
                </div>
                <div>
                    <Dropdown icon={'icon-SwitchView'} dropdownType={DropdownType.customDropdown}>
                        <Label>Header</Label>
                        <hr />
                        <li style={{ 'display': 'inline-flex' }}>
                            <Icon iconName={'icon-Account'}></Icon>
                            <Slider min={0} max={50} step={5} defaultValue={20}></Slider>
                        </li>
                        <li style={{ 'display': 'inline-flex' }}>
                            <Icon iconName={'icon-Account'}></Icon>
                            <Slider min={0} max={50} step={5} defaultValue={20}></Slider>
                        </li>
                    </Dropdown>
                </div>
                <br />
                <Search
                    onChange={(newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                    onSearch={(newValue) => console.log('SearchBox onSearch fired: ' + newValue)}
                    />
                <br />
                <Icon iconName={'icon-Account'}></Icon>
                <br />
                <Breadcrumbs items={[
                    { text: 'Files', 'key': 'Files' },
                    { text: 'This is folder 1', key: 'f1', href: '#1' },
                    { text: 'This is folder 2', key: 'f2', href: '#2' },
                    {
                        text: 'This is folder 3', key: 'f3', href: '#3', children: [
                            { text: 'This is folder 100', key: 'f100' },
                            { text: 'This is folder 200', key: 'f200' }
                        ]
                    },
                    { text: 'This is folder 4', key: 'f4', href: '#4' },
                    { text: 'This is folder 5', key: 'f5', onClick: () => { console.log('click'); } }
                ]}
                    maxDisplayedItems={3}>
                </Breadcrumbs>
                <br />
                <LeftNavigation id={'leftNavigation'} options={[
                    { text: 'Home', id: 'Home', href: 'http://Acceleratio.net', icon: 'icon-Help' },
                    { text: 'Activity', id: 'Activity', href: '#1', disabled: true, icon: 'icon-Account' },
                    { text: 'News', id: 'News', href: '#2', icon: 'icon-Add' },
                    { text: 'Documents', id: 'Documents', href: '#3', selected: true, icon: 'icon-Alert' },
                    { text: 'Books', id: 'Books', href: '#4', icon: 'icon-Trash' }
                ]}
                    ></LeftNavigation>
                <br />
                <History />
                <br />
                <ContextualMenu
                    shouldFocusOnMount={true}
                    targetPoint={{ x: 500, y: 500 }}
                    useTargetPoint={true}
                    onDismiss={() => { } }
                    directionalHint={DirectionalHint.bottomRightEdge}
                    items={
                        [
                            {
                                key: 'newItem',
                                icon: 'Add',
                                items: [
                                    {
                                        key: 'emailMessage',
                                        name: 'Email message',
                                        title: 'Create an email'
                                    },
                                    {
                                        key: 'calendarEvent',
                                        name: 'Calendar event',
                                        title: 'Create a calendar event',
                                    }
                                ],
                                name: 'New'
                            },
                            {
                                key: 'upload',
                                icon: 'Upload',
                                name: 'Upload',
                                title: 'Upload a file'
                            },
                            {
                                key: 'divider_1',
                                name: '-',
                            },
                            {
                                key: 'rename',
                                name: 'Rename'
                            },
                            {
                                key: 'properties',
                                name: 'Properties'
                            },
                            {
                                key: 'disabled',
                                name: 'Disabled item',
                                disabled: true,
                            },
                            {
                                key: 'divider_2',
                                name: '-',
                            },
                            {
                                key: 'share',
                                icon: 'Share',
                                items: [
                                    {
                                        key: 'sharetoemail',
                                        name: 'Share to Email',
                                        icon: 'Mail'
                                    },
                                    {
                                        key: 'sharetofacebook',
                                        name: 'Share to Facebook',
                                    },
                                    {
                                        key: 'sharetotwitter',
                                        name: 'Share to Twitter',
                                        icon: 'Share',
                                        items: [
                                            {
                                                key: 'sharetoemail_1',
                                                name: 'Share to Email',
                                                title: 'Share to Email',
                                                icon: 'Mail'
                                            },
                                            {
                                                key: 'sharetofacebook_1',
                                                name: 'Share to Facebook',
                                                title: 'Share to Facebook',
                                            },
                                            {
                                                key: 'sharetotwitter_1',
                                                name: 'Share to Twitter',
                                                title: 'Share to Twitter',
                                                icon: 'Share'
                                            },
                                        ],
                                    },
                                ],
                                name: 'Share'
                            },
                            {
                                key: 'print',
                                icon: 'Print',
                                name: 'Print'
                            },
                            {
                                key: 'music',
                                icon: 'MusicInCollectionFill',
                                name: 'Music',
                            },
                            {
                                key: 'divider_3',
                                name: '-',
                            },
                            {
                                key: 'Bing',
                                name: 'Go to Bing',
                                href: 'http://www.bing.com'
                            },
                        ]
                    }
                    />
                <Checkbox label={'This is checkbox'} onChange={(ev, checked) => console.log('aaa')} defaultChecked={true} />
                <Checkbox label={'This is disabled checkbox'} disabled={true} defaultChecked={true} />
                <Checkbox label={'This is checkbox with icon'} onChange={(ev, checked) => console.log('icon')} iconClassName={'icon-User'} />
                <br />
                <ChoiceGroup options={[
                    { key: 'A', text: 'Option A' },
                    { key: 'B', text: 'Option B', checked: true },
                    { key: 'C', text: 'Option C', disabled: true },
                    { key: 'D', text: 'Option D', checked: true, disabled: true }
                ]}
                    label="Pick one">
                </ChoiceGroup>
                <br />
                <ToggleSwitch onChange={this._onToggle} />
                <br />
                <Slider label={'This is slider:'} min={0} max={50} step={5} defaultValue={20} showValue={true}></Slider>
                <br />
                <Label>I'm a Label</Label>
                <Label disabled={true}>I'm a disabled Label</Label>
                <Label required={true}>I'm a required Label</Label>
                <br />
                <TextField label="TextField with a placeholder" placeholder="Now I am a Placeholder" />
                <TextField label="Disabled TextField" disabled={true} />
                <TextField label="Multiline TextField" multiline rows={4} cols={50} />
                <br />
                <Label>Normal Spinner</Label>
                <Spinner />
                <Label>Large Spinner With Label</Label>
                <Spinner type={SpinnerType.large} label="Seriously, still loading..." />

                <br />
                <CheckboxList onCheckboxChanged={this._onCheckboxListChange}
                    items={[
                        { id: 'A', text: 'Option A', isOpen: false, children: [{ text: 'Option B', checked: false, id: 'B1' }, { text: 'Option B', id: 'B2' }, { text: 'Option B', id: 'B3' }] },
                        { id: 'C', text: 'Option C', isOpen: false, children: [{ text: 'Option D', id: 'D1' }, { text: 'Option D', id: 'D2' }, { text: 'Option D', id: 'D3' }] },
                        { id: 'E', text: 'Option E', isOpen: false, children: [{ text: 'Option F', id: 'F1' }, { text: 'Option F', id: 'F2' }, { text: 'Option F', id: 'F3' }] },
                        { id: 'G', text: 'Option G', isOpen: false, children: [{ text: 'Option H', id: 'H1' }, { text: 'Option H', id: 'H2' }, { text: 'Option H', id: 'H3' }] }
                    ]}>
                </CheckboxList>
                <br />
                <Treeview onSelect={this._onCheckboxListChange} showCheckbox={false} items={elements} />
                <br />
                <Treeview onSelect={this._onTreeviewItemClick.bind(this)} showCheckbox={true} items={this.state.treeviewElements} recursive={false} />
                <br />
                <StatusBar text={'Initializing index...'}></StatusBar>

                <Dashboard 
                    differentDashboards={dummyDashboard.differentDashboards} 
                    groupOnClick={dummyDashboard.groupOnClick} 
                    compact={this.state.compact} 
                    filter={''} 
                    title={dummyDashboard.title} 
                    activeView={0}  hasAddButton={true} 
                    addFarm={dummyDashboard.addFarm}
                    groupAddFunc={dummyDashboard.groupAddFunc}
                    groupDeleteFunc={dummyDashboard.groupDeleteFunc}
                    groupEditFunc={dummyDashboard.groupEditFunc}
                    serverClose={dummyDashboard.serverClose}
                    serverRoleEdit= {dummyDashboard.serverRoleEdit}
                />



                <br />
                <ServerTile
                    id={{FQDN: 'server-123'}}
                    status= {0}
                    hasCloseButton={true}
                    name={'SP2016-Martin-Pisacic'}
                    numberOfUsers={'3432'}
                    onClose={(id: string) => console.log('Go away!', id)}
                    diskInformation={['C: 49 / 259 GB (30%)', 'D: 49 / 259 GB (30 %)']}
                    roles={[]}
                    countersData={[
                        {title: 'CPU', currentUsage: '43', usageUnit: '%', hoverText: [''], status: 'ok'},
                        {title: 'Memory', currentUsage: '7', usageUnit: 'GB', hoverText: ['7GB/10GB (70%)'], status: 'warning'},
                        {title: 'Disk', currentUsage: '0,1', usageUnit:'Mbps', hoverText: ['4.49 Mbps', '2.63 Mbps', '0.3 Mbps'], status: 'ok'},
                        {title: 'Network', currentUsage: '0,1', usageUnit: 'MB/s', hoverText: ['50.10 kB/s', '23.47 kB/s'], status: 'ok'}
                    ]}>
                {/*<TagContainer tags={[{display:'Tag1', iconName:'icon-Add'}, {display:'Tag2', iconName:'icon-Alert'}, {display:'Tag3', iconName:'icon-Buy'}]}/>*/}
                </ServerTile>
                <LineChart 
                    title={'CPU USAGE'}
                    data={this.state.data}
                    width={330}
                    height={200}
                    xAxisScale={'TIME'}
                    ></LineChart>
                <br />
                <PieChart text={'Sample text'}
                    title={'Partition C:'}
                    height={160}
                    width={160}
                    data={
                        [
                            { label: 'used', value: 99, text: 'Used: 68.36 GB', class: 'used-critical', unit: '%' },
                            { label: 'free', value: 1, text: 'Free: 11.54 GB', unit: '%' },
                            { label: 'option1', value: 124, text: 'Test1', unit: '%' },
                            { label: 'option2', value: 251, text: 'Test2' }
                        ]
                    }
                    ></PieChart>
                <br />
                <ProgressBar title={'RAM'} width={400} height={20} data={{ total: 15999, current: 12560 }}></ProgressBar>
            </div>);
    };

    private _onClickCompactServer(serverId) {
        console.log('Clicked on editing roles of server ' + serverId);
    }

    private _onServerCloseCompactServer(serverId) {
        console.log('Clicked on closing server ' + serverId);
    }

    private _onTreeviewItemClick(ev, itemId, checked) {
        this.setState({
            treeviewElements: this.state.treeviewElements.map((item) => {
                if (itemId.indexOf(item.id) > -1) {
                    return { id: item.id, text: item.text, parentId: item.parentId, checked: checked };
                } else {
                    return item;
                }
            })
        });

    }

    private _onCheckboxListChange(ev, itemId, checked) { 
        console.log(checked);
    }
    private _onToggle(checked) {
        console.log(checked);
    }

    private _onTreeViewChange(ev, itemId, checked) {
        console.log(itemId + ':' + checked);
    }

    private _showDialog() {
        this.setState({ showDialog: true });
    }

    private _closeDialog() {
        this.setState({ showDialog: false });
    }

    private generateRandomStatus() {
        return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    }
};

ReactDOM.render(<Index />, document.getElementById('root'));
