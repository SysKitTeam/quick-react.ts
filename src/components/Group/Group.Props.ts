import * as React from 'react';

export interface IGroupProps {
    name: string;

    /**
     * Id of the group object that needs to be displayed. 
     */
    id: any;

    /**
     * Additional classes for the parent div of the Group component
     */
    className?: string;

    /**
     * Number of children components. Used so the component knows whether to draw itself.
     */
    serverChildrenCount: number;

    /**
     * Action that is called on clicking the add icon on the bar. The function is supplied with a group id.
     */
    addFunc?: (groupId: any) => void;

    /**
     * Action that is called on clicking the edit icon on the bar. The function is supplied with a group id.
     */
    editFunc?: (groupId: any) => void;

    /**
     * Action that is called on clicking the delete icon on the bar. The function is supplied with a group id.
     */
    deleteFunc?: (groupId: any) => void;
}
