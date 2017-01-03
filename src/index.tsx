import 'babel-polyfill';
import 'ts-helpers';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from './components/Test/Test';
import Button from './components/Button/Button';
import { ButtonType } from './components/Button/Button.Props';
import Icon from './components/Icon/Icon';
import { IconName } from './components/Icon/IconName';
import Dropdown from './components/Dropdown/Dropdown';
import { DropdownType } from './components/Dropdown/Dropdown.Props';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';
import MainNavigation from './components/MainNavigation/MainNavigation';
import { Ribbon }from './components/Ribbon/Ribbon';
import History from './components/History/History';
import Checkbox from './components/Checkbox/Checkbox';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Label from './components/Label/Label';
import Callout from './components/Callout/Callout';
import ContextualMenu from './components/ContextualMenu/ContextualMenu';
import { DirectionalHint } from './utilities/DirectionalHint';
import { IPoint } from './utilities/IPoint';
import ChoiceGroup from './components/ChoiceGroup/ChoiceGroup';
import AddToFavorites from './components/AddToFavorites/AddToFavorites';
import TextField from './components/TextField/TextField';
import { Spinner } from './components/Spinner/Spinner';
import { SpinnerType } from './components/Spinner/Spinner.Props';
import Slider from './components/Slider/Slider';
import MessageBar from './components/MessageBar/MessageBar';
import { MessageBarType } from './components/MessageBar/MessageBar.Props';
import Search from './components/Search/Search';
import Pivot from './components/Pivot/Pivot';
import PivotItem from './components/Pivot/PivotItem';
import Dialog from './components/Dialog/Dialog';
import { DialogFooter } from './components/Dialog/DialogFooter';
import StatusBar from './components/StatusBar/StatusBar';
import Treeview from './components/Treeview/Treeview';

export default class Index extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
          showDialog: false
        };
    }

  public render() {
    return ( 
      <div>
        <Ribbon items={[]}></Ribbon>
        <AddToFavorites favorited={true} />
        <AddToFavorites favorited={false} />
        <Callout> AAAAAAA<Callout>BBBBBBBB</Callout> </Callout>
        <MainNavigation id={'mainNavigation'} logo={IconName.Logo}>
          <Icon iconName={IconName.Buy}></Icon>
        </MainNavigation>
        <br/>
        <MessageBar messageBarType={ MessageBarType.warning } hasDontShowAgain={true} onDismiss={ () => { console.log('test'); } }>Ovo je message bar!</MessageBar>
        <br/>
        <Pivot onLinkClick={ (item, ev) => console.log(item) }>
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
        <br/>
        <Button>WAT</Button>
        <br/>
        <br/>
        <Button onClick={ this._showDialog.bind(this) }>Open Dialog</Button>
              <Dialog
                  isOpen={ this.state.showDialog }
                  onDismiss={ this._closeDialog.bind(this) }
                  title={'All emails together'}
                  subText={'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'}
                  containerClassName={'dialogMainOverride'}>
                <DialogFooter>
                  <Button buttonType={ButtonType.primary} onClick={ this._closeDialog.bind(this) }>Save</Button>
                  <Button onClick={ this._closeDialog.bind(this) }>Cancel</Button>
                </DialogFooter>
              </Dialog>
        <br/>
        <div style={{'width': '150px'}}>
          <Dropdown
                hasTitleBorder={true}
                dropdownType={DropdownType.selectionDropdown}
                label="Basic example:"
                options={
                  [
                    { key: 'A', text: 'Option a', icon: IconName.Add },
                    { key: 'B', text: 'Option b', icon: IconName.Buy },
                    { key: 'C', text: 'Option c', icon: IconName.User },
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
          <Dropdown icon={IconName.SwitchView} dropdownType={DropdownType.customDropdown}>
          <Label>Header</Label>
          <hr/>
            <li style={{'display': 'inline-flex'}}>
              <Icon iconName={IconName.Add}></Icon>
              <Slider min={0} max={50} step={5} defaultValue={20}></Slider>
            </li>
             <li style={{'display': 'inline-flex'}}>
              <Icon iconName={IconName.Account}></Icon>
              <Slider min={0} max={50} step={5} defaultValue={20}></Slider>
            </li>
          </Dropdown>
        </div>
        <br/>
        <Search
                onChange={ (newValue) => console.log('SearchBox onChange fired: ' + newValue) }
                onSearch={ (newValue) => console.log('SearchBox onSearch fired: ' + newValue) }
                />
        <br/>
        <Icon iconName={IconName.Account}></Icon>
        <Icon iconName={IconName.Add}></Icon>
        <Icon iconName={IconName.AddToGroup}></Icon>
        <Icon iconName={IconName.Alert}></Icon>
        <Icon iconName={IconName.Alert1}></Icon>
        <Icon iconName={IconName.AllUsers}></Icon>
        <Icon iconName={IconName.ArrowDown}></Icon>
        <Icon iconName={IconName.ArrowDownRight}></Icon>
        <Icon iconName={IconName.ArrowDownSlim}></Icon>
        <Icon iconName={IconName.ArrowLeft1}></Icon>
        <Icon iconName={IconName.ArrowLeftSlim}></Icon>
        <Icon iconName={IconName.ArrowRightSlim}></Icon>
        <Icon iconName={IconName.ArrowRight}></Icon>
        <Icon iconName={IconName.ArrowRight1}></Icon>
        <Icon iconName={IconName.Arrows}></Icon>
        <Icon iconName={IconName.ArrowUp}></Icon>
        <Icon iconName={IconName.ArrowUpSlim}></Icon>
        <Icon iconName={IconName.BarChart}></Icon>
        <Icon iconName={IconName.BarChart2}></Icon>
        <Icon iconName={IconName.Break}></Icon>
        <Icon iconName={IconName.Buy}></Icon>
        <Icon iconName={IconName.Buy2}></Icon>
        <Icon iconName={IconName.Camera}></Icon>
        <Icon iconName={IconName.Checkbox}></Icon>
        <Icon iconName={IconName.Checkmark}></Icon>
        <Icon iconName={IconName.CloneUser}></Icon>
        <Icon iconName={IconName.CloudKit}></Icon>
        <Icon iconName={IconName.CloudKit365}></Icon>
        <Icon iconName={IconName.Cloud}></Icon>
        <Icon iconName={IconName.CollapseAll}></Icon>
        <Icon iconName={IconName.ColumnChooser}></Icon>
        <Icon iconName={IconName.Compare}></Icon>
        <Icon iconName={IconName.CopyToGroup}></Icon>
        <Icon iconName={IconName.CreateGroup}></Icon>
        <Icon iconName={IconName.CurentJobs}></Icon>
        <Icon iconName={IconName.CustomPack}></Icon>
        <Icon iconName={IconName.Dashboard1}></Icon>
        <Icon iconName={IconName.Dashboard2}></Icon>
        <Icon iconName={IconName.Delete}></Icon>
        <Icon iconName={IconName.DeleteGroup}></Icon>
        <Icon iconName={IconName.DeleteUser}></Icon>
        <Icon iconName={IconName.Details}></Icon>
        <Icon iconName={IconName.DisabledUser}></Icon>
        <Icon iconName={IconName.Document}></Icon>
        <Icon iconName={IconName.Docx}></Icon>
        <Icon iconName={IconName.Edit}></Icon>
        <Icon iconName={IconName.EditEmail}></Icon>
        <Icon iconName={IconName.EditPhone}></Icon>
        <Icon iconName={IconName.EditUser}></Icon>
        <Icon iconName={IconName.Equal}></Icon>
        <Icon iconName={IconName.Error}></Icon>
        <Icon iconName={IconName.Excel}></Icon>
        <Icon iconName={IconName.Exchange}></Icon>
        <Icon iconName={IconName.ExpandAll}></Icon>
        <Icon iconName={IconName.ExpandCollapse}></Icon>
        <Icon iconName={IconName.Export}></Icon>
        <Icon iconName={IconName.Feedback}></Icon>
        <Icon iconName={IconName.Filter}></Icon>
        <Icon iconName={IconName.Filter2}></Icon>
        <Icon iconName={IconName.Flag}></Icon>
        <Icon iconName={IconName.Folder}></Icon>
        <Icon iconName={IconName.FullSize}></Icon>
        <Icon iconName={IconName.GrantPermissions}></Icon>
        <Icon iconName={IconName.GenWord}></Icon>
        <Icon iconName={IconName.GenWord1}></Icon>
        <Icon iconName={IconName.Generate}></Icon>
        <Icon iconName={IconName.Ghost}></Icon>
        <Icon iconName={IconName.Group}></Icon>
        <Icon iconName={IconName.Help}></Icon>
        <Icon iconName={IconName.History}></Icon>
        <Icon iconName={IconName.HistoryBack}></Icon>
        <Icon iconName={IconName.InfoCircle}></Icon>
        <Icon iconName={IconName.InProgress}></Icon>
        <Icon iconName={IconName.InProgress1}></Icon>
        <Icon iconName={IconName.InternalLink}></Icon>
        <Icon iconName={IconName.Item}></Icon>
        <Icon iconName={IconName.Key}></Icon>
        <Icon iconName={IconName.Link}></Icon>
        <Icon iconName={IconName.List}></Icon>
        <Icon iconName={IconName.Load}></Icon>
        <Icon iconName={IconName.LoadInfo}></Icon>
        <Icon iconName={IconName.LoadJobTasks}></Icon>
        <Icon iconName={IconName.LoadWithErrors}></Icon>
        <Icon iconName={IconName.LoadWithErrors1}></Icon>
        <Icon iconName={IconName.Logo}></Icon>
        <Icon iconName={IconName.LogoPartner}></Icon>
        <Icon iconName={IconName.LogoPartner2}></Icon>
        <Icon iconName={IconName.LogOut}></Icon>
        <Icon iconName={IconName.MyAccount}></Icon>
        <Icon iconName={IconName.MoveToGroup}></Icon>
        <Icon iconName={IconName.News}></Icon>
        <Icon iconName={IconName.NotEqual}></Icon>
        <Icon iconName={IconName.NormalSize}></Icon>
        <Icon iconName={IconName.Office}></Icon>
        <Icon iconName={IconName.OfficeManage}></Icon>
        <Icon iconName={IconName.Office365}></Icon>
        <Icon iconName={IconName.Open}></Icon>
        <Icon iconName={IconName.Pdf}></Icon>
        <Icon iconName={IconName.Pending}></Icon>
        <Icon iconName={IconName.Pending1}></Icon>
        <Icon iconName={IconName.PermissionDate}></Icon>
        <Icon iconName={IconName.PermissionLevel}></Icon>
        <Icon iconName={IconName.PermissionLevel2}></Icon>
        <Icon iconName={IconName.PermissionsExplorer}></Icon>
        <Icon iconName={IconName.Phone}></Icon>
        <Icon iconName={IconName.Power}></Icon>
        <Icon iconName={IconName.PremiumSubs}></Icon>
        <Icon iconName={IconName.PrincipalStatus}></Icon>
        <Icon iconName={IconName.PrincipalType}></Icon>
        <Icon iconName={IconName.Print}></Icon>
        <Icon iconName={IconName.Que}></Icon>
        <Icon iconName={IconName.Quote}></Icon>
        <Icon iconName={IconName.Quote2}></Icon>
        <Icon iconName={IconName.Quote22}></Icon>
        <Icon iconName={IconName.RecentJobs}></Icon>
        <Icon iconName={IconName.Refresh}></Icon>
        <Icon iconName={IconName.Reload}></Icon>
        <Icon iconName={IconName.Reset}></Icon>
        <Icon iconName={IconName.ResetJobs}></Icon>
        <Icon iconName={IconName.Save}></Icon>
        <Icon iconName={IconName.Schedule}></Icon>
        <Icon iconName={IconName.Search}></Icon>
        <Icon iconName={IconName.SecurityGroup}></Icon>
        <Icon iconName={IconName.Settings}></Icon>
        <Icon iconName={IconName.SharedFolder}></Icon>
        <Icon iconName={IconName.SharePoint}></Icon>
        <Icon iconName={IconName.Site}></Icon>
        <Icon iconName={IconName.Site2}></Icon>
        <Icon iconName={IconName.SiteCollection}></Icon>
        <Icon iconName={IconName.Snapshot}></Icon>
        <Icon iconName={IconName.SPreport}></Icon>
        <Icon iconName={IconName.StarterSubs}></Icon>
        <Icon iconName={IconName.Subscription}></Icon>
        <Icon iconName={IconName.Subsite}></Icon>
        <Icon iconName={IconName.Summary}></Icon>
        <Icon iconName={IconName.SuperAdmin}></Icon>
        <Icon iconName={IconName.SwitchView}></Icon>
        <Icon iconName={IconName.TakeSnapshot}></Icon>
        <Icon iconName={IconName.Trash}></Icon>
        <Icon iconName={IconName.User}></Icon>
        <Icon iconName={IconName.UserManagement}></Icon>
        <Icon iconName={IconName.UsersQuote}></Icon>
        <Icon iconName={IconName.Usklicnik}></Icon>
        <Icon iconName={IconName.VersionUpdate}></Icon>
        <Icon iconName={IconName.Warning}></Icon>
        <Icon iconName={IconName.World}></Icon>
        <Icon iconName={IconName.OneDrive}></Icon>
        <Icon iconName={IconName.RemoveUser}></Icon>
        <Icon iconName={IconName.RemoveUsersFromGroup}></Icon>
        <Icon iconName={IconName.Restore}></Icon>
        <Icon iconName={IconName.TransferUser}></Icon>
        <Icon iconName={IconName.ViewType}></Icon>
        <Icon iconName={IconName.EventViewer}></Icon>
        <br/>
        <Breadcrumbs items={ [
                {text: 'Files', 'key': 'Files' },
                {text: 'This is folder 1', key: 'f1', href: '#1' },
                {text: 'This is folder 2', key: 'f2', href: '#2' },
                {text: 'This is folder 3', key: 'f3', href: '#3', children: [
                  { text: 'This is folder 100', key: 'f100' },
                  { text: 'This is folder 200', key: 'f200' }
                ] },
                {text: 'This is folder 4', key: 'f4', href: '#4' },
                {text: 'This is folder 5', key: 'f5', onClick:() => { console.log('click'); } }
              ] }
              maxDisplayedItems={ 3 }>
        </Breadcrumbs>
        <br/>
        <LeftNavigation id={'leftNavigation'} options={ [
                { text: 'Home', id: 'Home', href: 'http://Acceleratio.net', icon: IconName.Help },
                { text: 'Activity', id: 'Activity', href: '#1', disabled: true, icon: IconName.Account },
                { text: 'News', id: 'News', href: '#2', icon: IconName.Add },
                { text: 'Documents', id: 'Documents', href: '#3', selected: true, icon: IconName.Alert },
                { text: 'Books', id: 'Books', href: '#4', icon: IconName.Trash }
              ] }
        ></LeftNavigation>
        <br />
        <History />
        <br />
        <ContextualMenu
                  shouldFocusOnMount={ true }
                  targetPoint={ {x: 500, y: 500} }
                  useTargetPoint={ true }
                  onDismiss={ () => { } }
                  directionalHint={ DirectionalHint.bottomRightEdge}
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
        <Checkbox label={'This is checkbox'} onChange={ (ev, checked) => console.log('aaa') } />
        <Checkbox label={'This is disabled checkbox'} disabled={true} defaultChecked={true}/>
        <br/>
        <ChoiceGroup options={ [
                  { key: 'A', text: 'Option A' },
                  { key: 'B', text: 'Option B', checked: true },
                  { key: 'C', text: 'Option C', disabled: true },
                  { key: 'D', text: 'Option D', checked: true, disabled: true }
                ] }
                label="Pick one">
        </ChoiceGroup>
        <br/>
        <Slider label={'This is slider:'} min={0} max={50} step={5} defaultValue={20} showValue={ true }></Slider>
        <br/>
        <Label>I'm a Label</Label>
        <Label disabled={ true }>I'm a disabled Label</Label>
        <Label required={ true }>I'm a required Label</Label>
        <br/>
        <TextField label="TextField with a placeholder" placeholder="Now I am a Placeholder" />
        <TextField label="Disabled TextField" disabled={ true } />
        <TextField label="Multiline TextField" multiline rows={4} cols={50}/>
        <br/>
        <Label>Normal Spinner</Label>
        <Spinner />
        <Label>Large Spinner With Label</Label>
        <Spinner type={ SpinnerType.large } label="Seriously, still loading..."/>
        <Spinner type={ SpinnerType.larger }/>
        <br/>
        <Treeview
          items={ [
            { id: 'A', text: 'Option A', isOpen: false, children: [{text: 'Option B', checked: false}, {text: 'Option B'}, {text: 'Option B'}] },
            { id: 'C', text: 'Option C', isOpen: false, children: [{text: 'Option D'}, {text: 'Option D'}, {text: 'Option D'}] },
            { id: 'E', text: 'Option E', isOpen: false, children: [{text: 'Option F'}, {text: 'Option F'}, {text: 'Option F'}] },
            { id: 'G', text: 'Option G', isOpen: false, children: [{text: 'Option H'}, {text: 'Option H'}, {text: 'Option H'}] }
          ] }>
        </Treeview>
        <br/>
        <StatusBar text={'Initializing index...'}></StatusBar>
      </div>);
    };

    private _showDialog() {
      this.setState( {showDialog: true } );
    }

    private _closeDialog() {
      this.setState( {showDialog: false } );
    }
};

ReactDOM.render(<Index />, document.getElementById('root'));
