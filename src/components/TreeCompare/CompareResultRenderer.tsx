import * as React from 'react';
import * as classNames from 'classnames';

import './CompareResult.scss';

import { Icon } from '../Icon/Icon';
import { CompareResultEnum } from './TreeCompare.props';

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
