import {IPoint, IRect} from "../interface";

export default abstract class Rect implements IRect {
    private _position: IPoint;
    private _width: number;
    private _height: number;
    private _horizontalEdge: "left" | "right";
    private _verticalEdge: "top" | "bottom";

    get position(): IPoint {
        return this._position;
    }

    set position(value: IPoint) {
        this._position = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get horizontalEdge(): "left" | "right" {
        return this._horizontalEdge;
    }

    get verticalEdge(): "top" | "bottom" {
        return this._verticalEdge;
    }
}
