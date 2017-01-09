import { DirectionalHint } from './DirectionalHint';
import { Rectangle } from './Rectangle';
import { getScrollbarWidth } from './scroll';
import { assign } from '../utilities/object';
import { IRectangle } from './IRectangle';
export enum RectangleEdge {
  top,
  bottom,
  left,
  right
}

let SLIDE_ANIMATIONS: { [key: number]: string; } = {
  [RectangleEdge.top]: 'slideUpIn20',
  [RectangleEdge.bottom]: 'slideDownIn20',
  [RectangleEdge.left]: 'slideLeftIn20',
  [RectangleEdge.right]: 'slideRightIn20'
};

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
  calloutPosition: { top: number, left: number };
  beakPosition: { top: number, left: number, display: string };
  directionalClassName: string;
  submenuDirection: DirectionalHint;
}

export interface IPoint {
  x: number;
  y: number;
}

export class PositionData {
  public calloutDirection: RectangleEdge;
  public targetDirection: RectangleEdge;
  public calloutPercent: number;
  public targetPercent: number;
  public beakPercent: number;
  public isAuto: boolean;

  constructor(calloutDirection: RectangleEdge, targetDirection: RectangleEdge, calloutPercent: number, targetPercent: number, beakPercent: number, isAuto: boolean) {
    this.calloutDirection = calloutDirection;
    this.targetDirection = targetDirection;
    this.calloutPercent = calloutPercent;
    this.targetPercent = targetPercent;
    this.beakPercent = beakPercent;
    this.isAuto = isAuto;
  }
}

let DirectionalDictionary: { [key: number]: PositionData } = {
  [DirectionalHint.topLeftEdge]: new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, false),
  [DirectionalHint.topCenter]: new PositionData(RectangleEdge.bottom, RectangleEdge.top, 50, 50, 50, false),
  [DirectionalHint.topRightEdge]: new PositionData(RectangleEdge.bottom, RectangleEdge.top, 100, 100, 50, false),
  [DirectionalHint.topAutoEdge]: new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, true),
  [DirectionalHint.bottomLeftEdge]: new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, false),
  [DirectionalHint.bottomCenter]: new PositionData(RectangleEdge.top, RectangleEdge.bottom, 50, 50, 50, false),
  [DirectionalHint.bottomRightEdge]: new PositionData(RectangleEdge.top, RectangleEdge.bottom, 100, 100, 50, false),
  [DirectionalHint.bottomAutoEdge]: new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, true),
  [DirectionalHint.leftTopEdge]: new PositionData(RectangleEdge.right, RectangleEdge.left, 0, 0, 50, false),
  [DirectionalHint.leftCenter]: new PositionData(RectangleEdge.right, RectangleEdge.left, 50, 50, 50, false),
  [DirectionalHint.leftBottomEdge]: new PositionData(RectangleEdge.right, RectangleEdge.left, 100, 100, 50, false),
  [DirectionalHint.rightTopEdge]: new PositionData(RectangleEdge.left, RectangleEdge.right, 0, 0, 50, false),
  [DirectionalHint.rightCenter]: new PositionData(RectangleEdge.left, RectangleEdge.right, 50, 50, 50, false),
  [DirectionalHint.rightBottomEdge]: new PositionData(RectangleEdge.left, RectangleEdge.right, 100, 100, 50, false)
};
let CoverDictionary: { [key: number]: PositionData } = {
  [DirectionalHint.topLeftEdge]: new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, false),
  [DirectionalHint.topCenter]: new PositionData(RectangleEdge.top, RectangleEdge.top, 50, 50, 50, false),
  [DirectionalHint.topRightEdge]: new PositionData(RectangleEdge.top, RectangleEdge.top, 100, 100, 50, false),
  [DirectionalHint.topAutoEdge]: new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, true),
  [DirectionalHint.bottomLeftEdge]: new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, false),
  [DirectionalHint.bottomCenter]: new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 50, 50, 50, false),
  [DirectionalHint.bottomRightEdge]: new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 100, 100, 50, false),
  [DirectionalHint.bottomAutoEdge]: new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, true),
  [DirectionalHint.leftTopEdge]: new PositionData(RectangleEdge.left, RectangleEdge.left, 0, 0, 50, false),
  [DirectionalHint.leftCenter]: new PositionData(RectangleEdge.left, RectangleEdge.left, 50, 50, 50, false),
  [DirectionalHint.leftBottomEdge]: new PositionData(RectangleEdge.left, RectangleEdge.left, 100, 100, 50, false),
  [DirectionalHint.rightTopEdge]: new PositionData(RectangleEdge.right, RectangleEdge.right, 0, 0, 50, false),
  [DirectionalHint.rightCenter]: new PositionData(RectangleEdge.right, RectangleEdge.right, 50, 50, 50, false),
  [DirectionalHint.rightBottomEdge]: new PositionData(RectangleEdge.right, RectangleEdge.right, 100, 100, 50, false)
};

let OppositeEdgeDictionary: { [key: number]: number } = {
  [RectangleEdge.top]: RectangleEdge.bottom,
  [RectangleEdge.bottom]: RectangleEdge.top,
  [RectangleEdge.right]: RectangleEdge.left,
  [RectangleEdge.left]: RectangleEdge.right,
};
export function getRelativePositions(
  props: IPositionProps,
  hostElement: HTMLElement,
  calloutElement: HTMLElement): IPositionInfo {
  let beakWidth: number = !props.isBeakVisible ? 0 : props.beakWidth;
  let borderWidth: number = positioningFunctions._getBorderSize(calloutElement);
  let gap: number = positioningFunctions._calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
  let boundingRect: Rectangle = props.bounds ?
    positioningFunctions._getRectangleFromIRect(props.bounds) :
    new Rectangle(0, window.innerWidth - getScrollbarWidth(), 0, window.innerHeight);
  let targetRect: Rectangle = props.target ? positioningFunctions._getTargetRect(boundingRect, props.target) : positioningFunctions._getTargetRectDEPRECATED(
    boundingRect,
    props.targetElement,
    props.creationEvent,
    props.targetPoint,
    props.useTargetPoint);
  let positionData: PositionData = positioningFunctions._getPositionData(
    props.directionalHint,
    targetRect,
    boundingRect,
    props.coverTarget);
  let positionedCallout: positioningFunctions.ICallout = positioningFunctions._positionCalloutWithinBounds(
    positioningFunctions._getRectangleFromHTMLElement(calloutElement),
    targetRect,
    boundingRect,
    positionData,
    gap,
    props.coverTarget);
  let beakPositioned: Rectangle = positioningFunctions._positionBeak(beakWidth, positionedCallout, targetRect, borderWidth);
  let finalizedCallout: Rectangle = positioningFunctions._finalizeCalloutPosition(positionedCallout.calloutRectangle, hostElement);

  return {
    calloutPosition: { top: finalizedCallout.top, left: finalizedCallout.left },
    beakPosition: { top: beakPositioned.top, left: beakPositioned.left, display: 'block' },
    directionalClassName: SLIDE_ANIMATIONS[positionedCallout.targetEdge],
    submenuDirection: positionedCallout.calloutEdge === RectangleEdge.right ? DirectionalHint.leftBottomEdge : DirectionalHint.rightBottomEdge
  };
}

export module positioningFunctions {

  export interface ICallout {
    calloutRectangle: Rectangle;
    calloutEdge: RectangleEdge;
    targetEdge: RectangleEdge;
    alignPercent: number;
    beakPercent: number;
  }

  export function _getTargetRect(bounds: Rectangle, target: HTMLElement | MouseEvent) {
    let targetRectangle: Rectangle;

    if ((target as MouseEvent).preventDefault) {
      let ev: MouseEvent = target as MouseEvent;
      targetRectangle = new Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
    } else {
      targetRectangle = _getRectangleFromHTMLElement(target as HTMLElement);
    }

    if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
      let outOfBounds: RectangleEdge[] = _getOutOfBoundsEdges(targetRectangle, bounds);

      for (let direction of outOfBounds) {
        targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
      }
    }

    return targetRectangle;
  }

  export function _getTargetRectDEPRECATED(bounds: Rectangle, targetElement?: HTMLElement, ev?: MouseEvent, targetPoint?: IPoint, isTargetPoint?: boolean): Rectangle {
    let targetRectangle: Rectangle;

    if (isTargetPoint) {
      if (targetPoint) {
        targetRectangle = new Rectangle(targetPoint.x, targetPoint.x, targetPoint.y, targetPoint.y);
      } else {
        targetRectangle = new Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
      }
    } else {
      if (!targetElement) {
        if (ev && ev.target) {
          targetRectangle = _getRectangleFromHTMLElement(ev.target as HTMLElement);
        }

        targetRectangle = new Rectangle();
      } else {
        targetRectangle = _getRectangleFromHTMLElement(targetElement);
      }
    }

    if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
      let outOfBounds: RectangleEdge[] = _getOutOfBoundsEdges(targetRectangle, bounds);

      for (let direction of outOfBounds) {
        targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
      }
    }

    return targetRectangle;
  }

  export function _getRectangleFromHTMLElement(element: HTMLElement): Rectangle {
    let clientRect: ClientRect = element.getBoundingClientRect();

    return new Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
  }

  export function _positionCalloutWithinBounds(
    calloutRectangle: Rectangle,
    targetRectangle: Rectangle,
    boundingRectangle: Rectangle,
    directionalInfo: PositionData,
    gap: number = 0,
    coverTarget?: boolean): ICallout {
    let estimatedRectangle: Rectangle = _moveRectangleToAnchorRectangle(calloutRectangle,
      directionalInfo.calloutDirection,
      directionalInfo.calloutPercent,
      targetRectangle,
      directionalInfo.targetDirection,
      directionalInfo.targetPercent,
      gap);

    if (_isRectangleWithinBounds(estimatedRectangle, boundingRectangle)) {
      return { calloutRectangle: estimatedRectangle, calloutEdge: directionalInfo.calloutDirection, targetEdge: directionalInfo.targetDirection, alignPercent: directionalInfo.calloutPercent, beakPercent: directionalInfo.beakPercent };
    } else {
      return _getBestRectangleFitWithinBounds(estimatedRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget);
    }
  }

  export function _getBestRectangleFitWithinBounds(
    estimatedPosition: Rectangle,
    targetRectangle: Rectangle,
    boundingRectangle: Rectangle,
    directionalInfo: PositionData,
    gap: number,
    coverTarget?: boolean): ICallout {
    let callout: ICallout = {
      calloutRectangle: estimatedPosition,
      calloutEdge: directionalInfo.calloutDirection,
      targetEdge: directionalInfo.targetDirection,
      alignPercent: directionalInfo.calloutPercent,
      beakPercent: directionalInfo.beakPercent
    };

    if (!_canRectangleFitWithinBounds(estimatedPosition, boundingRectangle)) {
      return callout;
    }

    if (!coverTarget) {
      callout = _flipRectangleToFit(
        callout,
        targetRectangle,
        directionalInfo.targetPercent,
        boundingRectangle,
        gap);
    }

    let outOfBounds: RectangleEdge[] = _getOutOfBoundsEdges(callout.calloutRectangle, boundingRectangle);

    for (let direction of outOfBounds) {
      callout.calloutRectangle = _alignEdgeToCoordinate(
        callout.calloutRectangle,
        boundingRectangle[RectangleEdge[direction]],
        direction);
      let adjustedPercent: number = _recalculateMatchingPercents(
        callout.calloutRectangle,
        callout.targetEdge,
        targetRectangle,
        callout.targetEdge,
        directionalInfo.targetPercent);

      callout.alignPercent = adjustedPercent;
    }

    return callout;
  }

  export function _positionBeak(beakWidth: number, callout: ICallout, targetRectangle: Rectangle, border: number): Rectangle {
    let calloutRect: Rectangle = new Rectangle(
      0,
      callout.calloutRectangle.width - border * 2,
      0,
      callout.calloutRectangle.height - border * 2);
    let beakRectangle: Rectangle = new Rectangle(0, beakWidth, 0, beakWidth);
    let recalculatedPercent: number = _recalculateMatchingPercents(
      callout.calloutRectangle,
      callout.calloutEdge,
      targetRectangle,
      callout.targetEdge,
      callout.beakPercent);
    let estimatedTargetPoint: IPoint = _getPointOnEdgeFromPercent(calloutRect, callout.calloutEdge, recalculatedPercent);

    return _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border);
  }

  export function _finalizeBeakPosition(beakRectangle: Rectangle, callout: ICallout, estimatedTargetPoint: IPoint, border: number): Rectangle {
    let beakPixelSize: number = _calculateActualBeakWidthInPixels(beakRectangle.width) / 2;
    let innerRect: Rectangle = null;
    let beakPoint: IPoint = { x: beakRectangle.width / 2, y: beakRectangle.width / 2 };

    if (callout.calloutEdge === RectangleEdge.bottom || callout.calloutEdge === RectangleEdge.top) {
      innerRect = new Rectangle(beakPixelSize, callout.calloutRectangle.width - beakPixelSize - border * 2, 0, callout.calloutRectangle.height - border * 2);
    } else {
      innerRect = new Rectangle(0, callout.calloutRectangle.width - border * 2, beakPixelSize, callout.calloutRectangle.height - beakPixelSize - border * 2);
    }

    let finalPoint: IPoint = _getClosestPointOnEdgeToPoint(innerRect, callout.calloutEdge, estimatedTargetPoint);

    return _movePointOnRectangleToPoint(beakRectangle, beakPoint, finalPoint);
  }

  export function _getRectangleFromIRect(rect: IRectangle): Rectangle {
    return new Rectangle(rect.left, rect.right, rect.top, rect.bottom);
  }

  export function _finalizeCalloutPosition(calloutRectangle: Rectangle, hostElement: HTMLElement): Rectangle {
    let hostRect: Rectangle = _getRectangleFromHTMLElement(hostElement);
    let topPosition = calloutRectangle.top - hostRect.top;
    let leftPosition = calloutRectangle.left - hostRect.left;

    return new Rectangle(leftPosition, leftPosition + calloutRectangle.width, topPosition, topPosition + calloutRectangle.height);
  }

  export function _recalculateMatchingPercents(recalculateRect: Rectangle, rectangleEdge: RectangleEdge, targetRect: Rectangle, targetEdge: RectangleEdge, targetPercent: number): number {
    let targetPoint: IPoint = _getPointOnEdgeFromPercent(targetRect, targetEdge, targetPercent);
    let adjustedPoint: IPoint = _getClosestPointOnEdgeToPoint(recalculateRect, rectangleEdge, targetPoint);
    let adjustedPercent: number = _getPercentOfEdgeFromPoint(recalculateRect, rectangleEdge, adjustedPoint);

    if (adjustedPercent > 100) {
      adjustedPercent = 100;
    } else if (adjustedPercent < 0) {
      adjustedPercent = 0;
    }

    return adjustedPercent;
  }

  export function _canRectangleFitWithinBounds(rect: Rectangle, boundingRect: Rectangle): boolean {
    if (rect.width > boundingRect.width || rect.height > boundingRect.height) {
      return false;
    }

    return true;
  }

  export function _isRectangleWithinBounds(rect: Rectangle, boundingRect: Rectangle): boolean {
    if (rect.top < boundingRect.top) {
      return false;
    }
    if (rect.bottom > boundingRect.bottom) {
      return false;
    }
    if (rect.left < boundingRect.left) {
      return false;
    }
    if (rect.right > boundingRect.right) {
      return false;
    }

    return true;
  }

  export function _getOutOfBoundsEdges(rect: Rectangle, boundingRect: Rectangle): RectangleEdge[] {
    let outOfBounds: RectangleEdge[] = new Array<RectangleEdge>();

    if (rect.top < boundingRect.top) {
      outOfBounds.push(RectangleEdge.top);
    }
    if (rect.bottom > boundingRect.bottom) {
      outOfBounds.push(RectangleEdge.bottom);
    }
    if (rect.left < boundingRect.left) {
      outOfBounds.push(RectangleEdge.left);
    }
    if (rect.right > boundingRect.right) {
      outOfBounds.push(RectangleEdge.right);
    }

    return outOfBounds;
  }

  export function _getPointOnEdgeFromPercent(rect: Rectangle, direction: RectangleEdge, percentOfRect: number): IPoint {
    let startPoint: IPoint;
    let endPoint: IPoint;

    switch (direction) {
      case RectangleEdge.top:
        startPoint = { x: rect.left, y: rect.top };
        endPoint = { x: rect.right, y: rect.top };
        break;
      case RectangleEdge.left:
        startPoint = { x: rect.left, y: rect.top };
        endPoint = { x: rect.left, y: rect.bottom };
        break;
      case RectangleEdge.right:
        startPoint = { x: rect.right, y: rect.top };
        endPoint = { x: rect.right, y: rect.bottom };
        break;
      case RectangleEdge.bottom:
        startPoint = { x: rect.left, y: rect.bottom };
        endPoint = { x: rect.right, y: rect.bottom };
        break;
      default:
        startPoint = { x: 0, y: 0 };
        endPoint = { x: 0, y: 0 };
        break;
    }

    return _calculatePointPercentAlongLine(startPoint, endPoint, percentOfRect);
  }

  export function _getPercentOfEdgeFromPoint(rect: Rectangle, direction: RectangleEdge, valueOnEdge: IPoint): number {
    switch (direction) {
      case RectangleEdge.top:
      case RectangleEdge.bottom:

        return rect.width !== 0 ? (valueOnEdge.x - rect.left) / rect.width * 100 : 100;
      case RectangleEdge.left:
      case RectangleEdge.right:

        return rect.height !== 0 ? (valueOnEdge.y - rect.top) / rect.height * 100 : 100;
    }
  }

  export function _calculatePointPercentAlongLine(startPoint: IPoint, endPoint: IPoint, percent: number): IPoint {
    let x: number = startPoint.x + ((endPoint.x - startPoint.x) * percent / 100);
    let y: number = startPoint.y + ((endPoint.y - startPoint.y) * percent / 100);

    return { x: x, y: y };
  }

  export function _moveTopLeftOfRectangleToPoint(rect: Rectangle, destination: IPoint): Rectangle {
    return new Rectangle(destination.x,
      destination.x + rect.width,
      destination.y,
      destination.y + rect.height);
  }

  export function _alignEdgeToCoordinate(rect: Rectangle, coordinate: number, direction: RectangleEdge): Rectangle {
    switch (direction) {
      case RectangleEdge.top:

        return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate });
      case RectangleEdge.bottom:

        return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate - rect.height });
      case RectangleEdge.left:

        return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate, y: rect.top });
      case RectangleEdge.right:

        return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate - rect.width, y: rect.top });
    }

    return new Rectangle();
  }

  export function _movePointOnRectangleToPoint(rect: Rectangle, rectanglePoint: IPoint, targetPoint: IPoint) {
    let leftCornerXDifference = rectanglePoint.x - rect.left;
    let leftCornerYDifference = rectanglePoint.y - rect.top;

    return _moveTopLeftOfRectangleToPoint(rect, { x: targetPoint.x - leftCornerXDifference, y: targetPoint.y - leftCornerYDifference });
  }

  export function _moveRectangleInDirection(rect: Rectangle, moveDistance: number, direction: RectangleEdge): Rectangle {
    let xModifier: number = 0;
    let yModifier: number = 0;

    switch (direction) {
      case RectangleEdge.top:
        yModifier = moveDistance * -1;
        break;
      case RectangleEdge.left:
        xModifier = moveDistance * -1;
        break;
      case RectangleEdge.right:
        xModifier = moveDistance;
        break;
      case RectangleEdge.bottom:
        yModifier = moveDistance;
        break;
    }

    return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left + xModifier, y: rect.top + yModifier });
  }

  export function _moveRectangleToAnchorRectangle(
    rect: Rectangle,
    rectSide: RectangleEdge,
    rectPercent: number,
    anchorRect: Rectangle,
    anchorSide: RectangleEdge,
    anchorPercent: number,
    gap: number = 0): Rectangle {
    let rectTargetPoint: IPoint = _getPointOnEdgeFromPercent(rect, rectSide, rectPercent);
    let anchorTargetPoint: IPoint = _getPointOnEdgeFromPercent(anchorRect, anchorSide, anchorPercent);
    let positionedRect = _movePointOnRectangleToPoint(rect, rectTargetPoint, anchorTargetPoint);

    return _moveRectangleInDirection(positionedRect, gap, anchorSide);
  }

  export function _getClosestPointOnEdgeToPoint(rect: Rectangle, edge: RectangleEdge, point: IPoint): IPoint {
    switch (edge) {
      case RectangleEdge.top:
      case RectangleEdge.bottom:
        let x: number;

        if (point.x > rect.right) {
          x = rect.right;
        } else if (point.x < rect.left) {
          x = rect.left;
        } else {
          x = point.x;
        }
        return { x: x, y: rect[RectangleEdge[edge]] };
      case RectangleEdge.left:
      case RectangleEdge.right:
        let y: number;

        if (point.y > rect.bottom) {
          y = rect.bottom;
        } else if (point.y < rect.top) {
          y = rect.top;
        } else {
          y = point.y;
        }
        return { x: rect[RectangleEdge[edge]], y: y };
    }
  }

  export function _calculateActualBeakWidthInPixels(beakWidth: number): number {
    return Math.sqrt(beakWidth * beakWidth * 2);
  }

  export function _getBorderSize(element: HTMLElement): number {
    let styles: CSSStyleDeclaration = getComputedStyle(element, null);
    let topBorder: number = parseFloat(styles.borderTopWidth);
    let bottomBorder: number = parseFloat(styles.borderBottomWidth);
    let leftBorder: number = parseFloat(styles.borderLeftWidth);
    let rightBorder: number = parseFloat(styles.borderRightWidth);

    if (isNaN(topBorder) || isNaN(bottomBorder) || isNaN(leftBorder) || isNaN(rightBorder)) {
      return 0;
    }

    if (topBorder === bottomBorder && bottomBorder === leftBorder && leftBorder === rightBorder) {
      return topBorder;
    }

    return 0;
  }

  export function _getPositionData(direction: DirectionalHint, target: Rectangle, boundingRect: Rectangle, coverTarget?: boolean): PositionData {
    let directionalInfo: PositionData = coverTarget ? CoverDictionary[direction] : DirectionalDictionary[direction];

    if (directionalInfo.isAuto) {
      let center: IPoint = _getPointOnEdgeFromPercent(target, directionalInfo.targetDirection, 50);

      if (center.x <= boundingRect.width / 2) {
        directionalInfo.calloutPercent = 0;
        directionalInfo.targetPercent = 0;
      } else {
        directionalInfo.calloutPercent = 100;
        directionalInfo.targetPercent = 100;
      }
    }

    return directionalInfo;
  }

  export function _flipRectangleToFit(callout: ICallout, targetRect: Rectangle, targetPercent: number, boundingRect: Rectangle, gap: number): ICallout {
    let directions: RectangleEdge[] = [RectangleEdge.left, RectangleEdge.right, RectangleEdge.top, RectangleEdge.bottom];
    let currentEdge: RectangleEdge = callout.targetEdge;
    let positionedCallout: ICallout = assign({}, callout);
    for (let i = 0; i < 4; i++) {
      let outOfBounds: RectangleEdge[] = _getOutOfBoundsEdges(positionedCallout.calloutRectangle, boundingRect);
      let index: number = outOfBounds.indexOf(currentEdge);
      let oppositeEdge: RectangleEdge = OppositeEdgeDictionary[currentEdge];

      if (index > -1) {
        directions.splice(directions.indexOf(currentEdge), 1);
        currentEdge = directions.indexOf(oppositeEdge) > -1 ? oppositeEdge : directions.slice(-1)[0];
        positionedCallout.calloutEdge = OppositeEdgeDictionary[currentEdge];
        positionedCallout.targetEdge = currentEdge;
        positionedCallout.calloutRectangle = _moveRectangleToAnchorRectangle(positionedCallout.calloutRectangle,
          positionedCallout.calloutEdge,
          positionedCallout.alignPercent,
          targetRect,
          positionedCallout.targetEdge,
          targetPercent,
          gap);
      } else {
        return positionedCallout;
      }
    }

    return callout;
  }
}
