import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, selectV2, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../src/components/Button/Button';

import './Button.scss';

const flexStyleDecorator = (storyFn) => (
    <div className="button-decorator">
        { storyFn() }
    </div>
);

const classNameOptions = {
    primary: 'button-primary',
    primaryGray: 'button-primary-gray',
    secondary: 'button-secondary',
    secondaryBlue: 'button-secondary-blue',
    tertiary: 'button-tertiary',
    textual: 'button-textual',
    error: 'button-error',
    success: 'button-succes'
};

const widthOptions = { range: true, min: 20, max: 300, step: 1 };

const stories = storiesOf('button', module);
stories.addDecorator(flexStyleDecorator);
stories.addDecorator(withKnobs);
stories.add('Showcase', () => (
        <div>
            <div>
                <Button className={'button-primary'}>Primary Button</Button>
                <Button className={'button-primary'} icon={'icon-add'}>Primary Button</Button>
                <Button className={'button-primary'} icon={'icon-add'}></Button>
            </div>
            <div>
                <Button className={'button-primary-gray'}>Primary Gray Button</Button>
                <Button className={'button-primary-gray'} icon={'icon-add'}>Primary Gray Button</Button>
                <Button className={'button-primary-gray'} icon={'icon-add'}></Button>
            </div>
            <div>
                <Button className={'button-secondary'}>Secondary Button</Button>
                <Button className={'button-secondary'} icon={'icon-add'}>Secondary Button</Button>
                <Button className={'button-secondary'} icon={'icon-add'}></Button>
            </div>
            <div>
                <Button className={'button-secondary-blue'} >Secondary Blue Button</Button>
                <Button className={'button-secondary-blue'} icon={'icon-add'}>Secondary Blue Button</Button>
                <Button className={'button-secondary-blue'} icon={'icon-add'}></Button>
            </div>
            <div>
                <Button className={'button-tertiary'}>Tertiary Button</Button>
                <Button className={'button-tertiary'} icon={'icon-add'}>Tertiary Button</Button>
                <Button className={'button-tertiary'} icon={'icon-add'}></Button>
            </div>
            <div>
                <Button className={'button-textual'}>Textual Button</Button>
                <Button className={'button-textual'} icon={'icon-add'}>Textual Button</Button>
            </div>
            <div>
                <Button className={'button-primary'} isLoading={true}></Button>
                <Button className={'button-primary-gray'} isLoading={true}></Button>
                <Button className={'button-secondary'} isLoading={true}></Button>
                <Button className={'button-secondary-blue'} isLoading={true}></Button>
                <Button className={'button-tertiary'} isLoading={true}></Button>
            </div>
            <div>
                <Button className={'button-succes'} icon="icon-checkmark">Succes</Button>
                <Button className={'button-error'} icon="icon-error">Error</Button>
            </div>
            <div>
                <Button href={'javascript:void(0)'} target="_blank">Link</Button>
            </div>
        </div>
    )).add('Knobs', () => (
        <div>
            <div>
                <Button 
                    className={selectV2('ClassName', classNameOptions, classNameOptions.primary)} 
                    isLoading={boolean('isLoading', false)}
                    width={number('width', 140, widthOptions)}>
                        {text('Btn text', 'Primary Button')}
                </Button>
            </div>
        </div>
    ));

