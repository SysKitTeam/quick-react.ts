import * as React from 'react';
import './ConditionSelector.scss';
import { Treeview } from '../TreeView/TreeView';
import { ITreeviewItem } from '../Treeview/TreeviewItem.Props';

export class ConditionSelector extends React.PureComponent {
    constructor(props) {
        super(props);
    }   

    render() {
        const treeviewElements: ITreeviewItem[] = [{id: '1', text: 'Script returns any data'}, {id: '2', text: 'Script does not return data'}, {id: '3', text: 'Exception occures while executing script'}];
        return (
            <div className="condition-selector-container">
                <div className="selection-list-container">
                    <div className="special-conditions-container">
                        <Treeview
                            showCheckbox={true}
                            items={treeviewElements}
                        />
                    </div>
                    <div className="selection-conditions">
                        <Treeview
                            showCheckbox={true}
                            items={treeviewElements}
                        />
                    </div>
                </div>
                <div className="selection-options">
                    
                    ona velika kontrola
                </div>
            </div>
        );
    }
}
