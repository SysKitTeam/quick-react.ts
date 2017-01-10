import { DirectionalHint } from './DirectionalHint';
import { Rectangle } from './Rectangle';
import { IRectangle } from './IRectangle';
export declare enum RectangleEdge {
    top = 0,
    bottom = 1,
    left = 2,
    right = 3,
}
export interface IPositionProps {
    target?: HTMLElement | MouseEvent;
    targetElement?: HTMLElement;
    directionalHint?: DirectionalHint;
    gapSpace?: number;
    beakWidth?: number;
    bounds?: IRectangle;
    creationEvent?: MouseEvent;
    useTargetPoint?: boolean;
    targetPoint?: IPoint;
    isBeakVisible?: boolean;
    coverTarget?: boolean;
}
export interface IPositionInfo {
    calloutPosition: {
        top: number;
        left: number;
    };
    beakPosition: {
        top: number;
        left: number;
        display: string;
    };
    directionalClassName: string;
    submenuDirection: DirectionalHint;
}
export interface IPoint {
    x: number;
    y: number;
}
export declare class PositionData {
    calloutDirection: RectangleEdge;
    targetDirection: RectangleEdge;
    calloutPercent: number;
    targetPercent: number;
    beakPercent: number;
    isAuto: boolean;
    constructor(calloutDirection: RectangleEdge, targetDirection: RectangleEdge, calloutPercent: number, targetPercent: number, beakPercent: number, isAuto: boolean);
}
export declare function getRelativePositions(props: IPositionProps, hostElement: HTMLElement, calloutElement: HTMLElement): IPositionInfo;
export declare module positioningFunctions {
    interface ICallout {
        calloutRectangle: Rectangle;
        calloutEdge: RectangleEdge;
        targetEdge: RectangleEdge;
        alignPercent: number;
        beakPercent: number;
    }
    function _getTargetRect(bounds: Rectangle, target: HTMLElement | MouseEvent): Rectangle;
    function _getTargetRectDEPRECATED(bounds: Rectangle, targetElement?: HTMLElement, ev?: MouseEvent, targetPoint?: IPoint, isTargetPoint?: boolean): Rectangle;
    function _getRectangleFromHTMLElement(element: HTMLElement): Rectangle;
    function _positionCalloutWithinBounds(calloutRectangle: Rectangle, targetRectangle: Rectangle, boundingRectangle: Rectangle, directionalInfo: PositionData, gap?: number, coverTarget?: boolean): ICallout;
    function _getBestRectangleFitWithinBounds(estimatedPosition: Rectangle, targetRectangle: Rectangle, boundingRectangle: Rectangle, directionalInfo: PositionData, gap: number, coverTarget?: boolean): ICallout;
    function _positionBeak(beakWidth: number, callout: ICallout, targetRectangle: Rectangle, border: number): Rectangle;
    function _finalizeBeakPosition(beakRectangle: Rectangle, callout: ICallout, estimatedTargetPoint: IPoint, border: number): Rectangle;
    function _getRectangleFromIRect(rect: IRectangle): Rectangle;
    function _finalizeCalloutPosition(calloutRectangle: Rectangle, hostElement: HTMLElement): Rectangle;
    function _recalculateMatchingPercents(recalculateRect: Rectangle, rectangleEdge: RectangleEdge, targetRect: Rectangle, targetEdge: RectangleEdge, targetPercent: number): number;
    function _canRectangleFitWithinBounds(rect: Rectangle, boundingRect: Rectangle): boolean;
    function _isRectangleWithinBounds(rect: Rectangle, boundingRect: Rectangle): boolean;
    function _getOutOfBoundsEdges(rect: Rectangle, boundingRect: Rectangle): RectangleEdge[];
    function _getPointOnEdgeFromPercent(rect: Rectangle, direction: RectangleEdge, percentOfRect: number): IPoint;
    function _getPercentOfEdgeFromPoint(rect: Rectangle, direction: RectangleEdge, valueOnEdge: IPoint): number;
    function _calculatePointPercentAlongLine(startPoint: IPoint, endPoint: IPoint, percent: number): IPoint;
    function _moveTopLeftOfRectangleToPoint(rect: Rectangle, destination: IPoint): Rectangle;
    function _alignEdgeToCoordinate(rect: Rectangle, coordinate: number, direction: RectangleEdge): Rectangle;
    function _movePointOnRectangleToPoint(rect: Rectangle, rectanglePoint: IPoint, targetPoint: IPoint): Rectangle;
    function _moveRectangleInDirection(rect: Rectangle, moveDistance: number, direction: RectangleEdge): Rectangle;
    function _moveRectangleToAnchorRectangle(rect: Rectangle, rectSide: RectangleEdge, rectPercent: number, anchorRect: Rectangle, anchorSide: RectangleEdge, anchorPercent: number, gap?: number): Rectangle;
    function _getClosestPointOnEdgeToPoint(rect: Rectangle, edge: RectangleEdge, point: IPoint): IPoint;
    function _calculateActualBeakWidthInPixels(beakWidth: number): number;
    function _getBorderSize(element: HTMLElement): number;
    function _getPositionData(direction: DirectionalHint, target: Rectangle, boundingRect: Rectangle, coverTarget?: boolean): PositionData;
    function _flipRectangleToFit(callout: ICallout, targetRect: Rectangle, targetPercent: number, boundingRect: Rectangle, gap: number): ICallout;
}
