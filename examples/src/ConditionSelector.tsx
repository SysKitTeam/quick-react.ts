/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { LogicalOperatorTypeEnum, PropertyTypeEnum, IExpressionDefinitionTree, 
    ConditionSelectorContainer, IConditionRowState, IConditionSelectorProps } from './../../src/components/ConditionSelector';

export class Index extends React.Component<any, any> {    




    conditionValueChanged = (conditionId: string, conditionValue: any) => {
        console.log('Condition value changed');
    }

    logicalOperatorChanged = (id: string, logicalOperator: LogicalOperatorTypeEnum) => {
        console.log('Logical operator changed');
    }

    compareConditionChanged = (conditionRowState: IConditionRowState) => {
        console.log('Compoare condition changed');
    }

    dragDrop = (newTree: IExpressionDefinitionTree) => {
        console.log('Drag\'n\'drop occurred');
    }

    conditionListSelectionChanged = (treeListId: string, itemsId?: string[], checked?: boolean) => {
        console.log('Condition list selection changed');
    }

    public render() {
        const treeviewElements = [{id: '1', text: 'Script returns any data'}, {id: '2', text: 'Script does not return data'}, {id: '3', text: 'Exception occurs while executing the script'}];
        const treeviewElements2 = [{id: '1', text: 'With specific Name'}, {id: '2', text: 'With specific Status'}, {id: '3', text: 'With specific Restarted On'}, {id: '4', text: 'Mirko'}];        
        let conditionElements2: IExpressionDefinitionTree 
            = { logicalOperator: LogicalOperatorTypeEnum.None, 
                id: '1',
                subExpressions: [{ logicalOperator: LogicalOperatorTypeEnum.None,
                                    id: '11',
                                    conditionDefinition: { id: '111',                                                           
                                                            isHardcodedValue: true,
                                                            propertyName: 'Script returns any data',
                                                            propertyType: PropertyTypeEnum.None
                                }}, 
                                {logicalOperator: LogicalOperatorTypeEnum.And,
                                id: '12',
                                conditionDefinition: {id: '121',
                                                        propertyName: 'Network ID',
                                                        compareConditions:  [{ key: 'And', text: 'Equals' }, { key: 'Or', text: 'Less than', selected: true }],
                                                        propertyType: PropertyTypeEnum.Number
                                }},
                                {logicalOperator: LogicalOperatorTypeEnum.Or,
                                id: '13',
                                subExpressions: [{logicalOperator: LogicalOperatorTypeEnum.None,
                                                    id: '131',
                                                    conditionDefinition: {id: '1311',                
                                                                        propertyName: 'Name',
                                                                        compareConditions: [{ key: 'Is', text: 'Is'}, { key: 'Or', text: 'Starts with', selected: true }, { key: 'Ise', text: 'I don\'t care'}],                                                                                                
                                                                        propertyType: PropertyTypeEnum.String
                                                    }},
                                                    {logicalOperator: LogicalOperatorTypeEnum.And,
                                                    id: '132',
                                                    conditionDefinition: {id: '1321',
                                                                            propertyName: 'Running',
                                                                            compareConditions: [{ key: 'Is', text: 'Is'}, { key: 'Or', text: 'Is not', selected: true}],
                                                                            propertyType: PropertyTypeEnum.Boolean
                                                    }}]
                                },
                                {logicalOperator: LogicalOperatorTypeEnum.And,
                                id: '14',
                                conditionDefinition: {id: '141',
                                                        propertyName: 'Status',
                                                        compareConditions: [{ key: 'Is', text: 'Is', selected: true}, { key: 'Or', text: 'Is not'}],
                                                        additionalData: [{ key: 'Is', text: 'Running', selected: true}, { key: 'Or', text: 'Stopped'}, { key: 'O1r', text: 'Restarting'}, { key: 'Or2', text: 'Restart pending'}],
                                                        propertyType: PropertyTypeEnum.Enum
                                }},
                                {logicalOperator: LogicalOperatorTypeEnum.And,
                                id: '15',
                                subExpressions: [{logicalOperator: LogicalOperatorTypeEnum.Empty,
                                                    id: '151',
                                                    subExpressions: [{logicalOperator: LogicalOperatorTypeEnum.None,
                                                                        id: '1511',
                                                                        conditionDefinition: {id: '15111',
                                                                                                propertyName: 'Restarted on',
                                                                                                compareConditions: [{ key: 'Is', text: 'On', selected: true}, { key: 'O1r', text: 'Before'}, { key: 'O2r', text: 'After'}],
                                                                                                propertyType: PropertyTypeEnum.DateTime
                                                                    }},
                                                                    {logicalOperator: LogicalOperatorTypeEnum.Or,
                                                                        id: '1512',
                                                                        conditionDefinition: {id: '15121',                                                                                                    
                                                                                                propertyName: 'Display Name',
                                                                                                compareConditions: [{ key: 'Is', text: 'Is'}, { key: 'Or', text: 'Starts with', selected: true }, { key: 'Ise', text: 'I don\'t care'}],                                                                                                
                                                                                                propertyType: PropertyTypeEnum.String
                                                                    }}
                                                ]},
                                                {logicalOperator: LogicalOperatorTypeEnum.And,
                                                id: '152',
                                                conditionDefinition: {id: '1521',
                                                                        propertyName: 'Sex appeal',
                                                                        compareConditions:  [{ key: 'And', text: 'Equals' }, { key: 'Or', text: 'Less than', selected: true }],
                                                                        propertyType: PropertyTypeEnum.Number
                                                                    }  
                                                }]
                                }]};
        const innerProps: IConditionSelectorProps = {
            specialConditionsList: treeviewElements,
            standardConditionsList: treeviewElements2,
            selectedConditions: conditionElements2,
            conditionDragged: this.dragDrop,
            conditionValueChanged: this.conditionValueChanged,
            logicalOperatorChanged: this.logicalOperatorChanged,
            compareConditionChanged: this.compareConditionChanged,
            conditionListSelectionChanged: this.conditionListSelectionChanged
        };
        return (
            <div>
                <ConditionSelectorContainer 
                    conditionSelectorProps={innerProps}
                    onDragDrop = {this.dragDrop}
                />
            </div>

        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
