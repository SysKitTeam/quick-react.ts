import * as React from 'react';
import * as classNames from 'classnames';

import './CompareResult.scss';

import { Icon } from '../Icon/Icon';
import { CompareResultEnum } from './TreeCompare.props';
import { GridColumn } from '../QuickGrid';

const emptyString = '';
const defaultWidth = 100;

const columnBase: GridColumn = {
    minWidth: defaultWidth,
    width: defaultWidth,
    headerText: emptyString,
    valueMember: emptyString
};


export function columnDefinitionsGenerator<T>(obj: T): Array<GridColumn> {
    // get all object properties
    const props = Object.keys(obj);

    const columnHeaderTexts = props.map(prop => {
        // split string into words with upper character as delimiter
        let text = prop.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1');
        // capitalize first character
        return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
    });

    const columns = columnHeaderTexts.map((headerText, index) => {
        return {
            ...columnBase,
            headerText: columnHeaderTexts[index],
            valueMember: props[index]
        };
    });

    return columns;
}

export function compareResultFactory(compareResult: CompareResultEnum): JSX.Element {
    switch (compareResult) {
        case CompareResultEnum.Equal:
            return renderEqualCompareResult();
        case CompareResultEnum.Different:
            return renderDifferentCompareResult();
        case CompareResultEnum.DifferenceInChildren:
            return renderDifferentInChildrenCompareResult();
        case CompareResultEnum.MissingInBoth:
            return renderMissingImBothCompareResult();
        case CompareResultEnum.MissingInSource:
            return renderMissingInSourceCompareResult();
        case CompareResultEnum.MissingInTarget:
            return renderMissingInTargetCompareResult();
        default:
            return emptyCell();
    }
}

const baseClass = 'compare-result';

interface ICompareResultRendererArgs {
    className: string;
    iconName: string;
    text: string;
}

const compareResultRenderer = ({ compareResultClass, iconName, text }) => (
    <div className={classNames(baseClass, compareResultClass)}><Icon iconName={iconName} />{text}</div>
);

const emptyCell = () => <div />;

const renderEqualCompareResult = (): JSX.Element => compareResultRenderer({
    compareResultClass: 'equal',
    iconName: 'svg-icon-equal',
    text: 'Equal'
});

const renderDifferentCompareResult = (): JSX.Element => compareResultRenderer({
    compareResultClass: 'different',
    iconName: 'svg-icon-error',
    text: 'Different'
});

const renderDifferentInChildrenCompareResult = (): JSX.Element => compareResultRenderer({
    compareResultClass: 'different-in-children',
    iconName: 'svg-icon-error',
    text: 'Different In Children'
});

const renderMissingImBothCompareResult = (): JSX.Element => compareResultRenderer({
    compareResultClass: 'missing-in-both',
    iconName: 'svg-icon-arrows',
    text: 'Missing In Both'
});

const renderMissingInSourceCompareResult = (): JSX.Element => compareResultRenderer({
    compareResultClass: 'missing-in-source',
    iconName: 'svg-icon-arrow_L',
    text: 'Missing In Source'
});

const renderMissingInTargetCompareResult = (): JSX.Element => compareResultRenderer({
    compareResultClass: 'missing-in-target',
    iconName: 'svg-icon-arrow_R',
    text: 'Missing In Target'
});
