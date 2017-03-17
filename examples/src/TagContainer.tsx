/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TagContainer } from './../../src/components/TagContainer/TagContainer';
import { Icon } from './../../src/components/Icon/Icon';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <TagContainer title={'Roles'} tags={[{ display: 'Tag1', iconName: 'icon-Add' }, { display: 'Tag2', iconName: 'icon-Alert' }, { display: 'Tag3', iconName: 'icon-Buy' }]}>
                    <div className="edit-tags tag" title="Edit tags">
                        <Icon className="icon-Edit"></Icon>
                    </div>
                </TagContainer>           
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
