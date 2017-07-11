import * as React from 'react';
import { GroupTypeEnum } from '../../models';

export interface IGroupProps {
    id: string;
    name: string;
    iconName: string;
    iconTitle: string;
    className?: string;
    filter?: string;

    /**
     * Function intended for checking whether any group children are displayed. 
     * If this property is omitted, the group component checks if the child name satisfies the supplied filter. 
     */
    checkChildren?: (value: React.ReactChild, index, array) => boolean;

    /**
     * Number of children components. Used so the component knows whether to draw itself.
     */
    serverChildrenCount: number;

    /**
     * Header icon action methods.
     */
    addFunc?: (groupId: string) => void;
    editFunc?: (groupId: string) => void;
    deleteFunc?: (groupId: string) => void;
    /**
     * Action that is called on clicking the title of the group. The function is supplied with a group id.
     */
    onClick?: (groupId: any) => void;
}
