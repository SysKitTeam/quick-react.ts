import * as React from 'react';
import {IGroupID} from '../../models';

export interface IGroupProps  {
    id: IGroupID;
    name: string;
    className?: string;
    filter?: string;
    
    /**
     * Function intended for checking whether any group children are displayed. 
     * If this property is omitted, the group component checks if the child name satisfies the supplied filter. 
     */
    checkChildren?: (value : React.ReactChild, index, array ) => boolean;
    
    /**
     * Header icon action methods.
     */
    addFunc?: (farmId: any) => void;
    editFunc?: (farmId: any) => void;
    deleteFunc?: (farmId: any) => void;
}
