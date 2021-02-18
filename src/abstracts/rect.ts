import {IPoint, IRect} from "../../interface";

export default abstract class Rect implements IRect {
    private _position: IPoint;

    get position(): IPoint {
        return this._position;
    }

    set position(value: IPoint) {
        this._position = value;
    }

    private _width: number;

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    private _height: number;

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    private _horizontalEdge: "left" | "right";

    get horizontalEdge(): "left" | "right" {
        return this._horizontalEdge;
    }

    private _verticalEdge: "top" | "bottom";

    get verticalEdge(): "top" | "bottom" {
        return this._verticalEdge;
    }
}
