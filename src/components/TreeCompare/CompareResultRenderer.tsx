import * as classNames from 'classnames';
import * as React from 'react';

import { Icon } from '../Icon/Icon';
import { ICompareResultCell } from './TreeCompare.props';

export enum CompareResultEnum {
    Unchanged = 0,
    ObjectMissingInSource = 1,
    ObjectMissingInTarget = 2,
    ObjectPermissionInheritanceBroken = 3,
    ObjectPermissionInheritanceRestored = 4,
    PrincipalMissingInSource = 5,
    PrinicipalMissingInTarget = 6,
    ADAccountDisabledInSource = 7,
    ADAccountEnabledInSource = 8,
    PrincipalPermissionsDifferent = 9,
    DifferenceInChildren = 10
}

interface ICompareResultMeta {
    iconName: string;
    displayName: string;
    className: string;
    compareResultIconStyle?: any;
}

const generateObject = (compareResult: CompareResultEnum, iconName: string, displayName: string, className: string): ICompareResultMeta => ({
    iconName,
    displayName,
    className
});

const compareResultLookup = {
    0: generateObject(CompareResultEnum.Unchanged, '', 'Unchanged', 'unchanged'),
    1: generateObject(CompareResultEnum.ObjectMissingInSource, '', 'Object Missing In Source', 'object-missing-in-source'),
    2: generateObject(CompareResultEnum.ObjectMissingInTarget, '', 'Object Missing In Target', 'object-missing-in-target'),
    3: generateObject(CompareResultEnum.ObjectPermissionInheritanceBroken, '', 'Permission Inheritance Broken', 'permisssion-inheritance-broken'),
    4: generateObject(CompareResultEnum.ObjectPermissionInheritanceRestored, '', 'Permission Inheritance Restored', 'permission-inheritance-restored'),
    5: generateObject(CompareResultEnum.PrincipalMissingInSource, '', 'Principal Missing In Source', 'principal-missing-in-source'),
    6: generateObject(CompareResultEnum.PrinicipalMissingInTarget, '', 'Principal Missing In Target', 'principal-missing-in-target'),
    7: generateObject(CompareResultEnum.ADAccountDisabledInSource, '', 'AD Account Disabled In Source', 'adaccount-disabled-in-source'),
    8: generateObject(CompareResultEnum.ADAccountEnabledInSource, '', 'AD Account Enabled In Source', 'adaccount-enabled-in-source'),
    9: generateObject(CompareResultEnum.PrincipalPermissionsDifferent, '', 'Principal Permissions Different', 'principal-permissions-different'),
    10: generateObject(CompareResultEnum.DifferenceInChildren, '', 'Difference In Children', 'difference-in-children')
};

const baseClass = 'compare-result';

export function compareResultFactory(compareResult: ICompareResultCell): JSX.Element {
    let data = compareResultLookup[compareResult.compareResult];

    if (compareResult.compareIcon) {
        data = { ...data, iconName: compareResult.compareIcon };
    }

    return (
        <div className={classNames(baseClass, data.className)}><Icon iconName={data.iconName} style={data.compareResultIconStyle} />{data.displayName}</div>
    );
}
