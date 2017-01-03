export default class Rectangle {
  public top: number;
  public bottom: number;
  public left: number;
  public right: number;

  constructor(left: number = 0, right: number = 0, top: number = 0, bottom: number = 0) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }

  get width(): number {
    return this.right - this.left;
  }
  
  get height(): number {
    return this.bottom - this.top;
  }
}
