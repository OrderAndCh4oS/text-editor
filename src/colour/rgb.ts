import {IRgb} from "../interface";

export default class Rgb implements IRgb {
    private _r: number;
    private _b: number;
    private _g: number;

    constructor(r: number, b: number, g: number) {
        this._r = r;
        this._g = g;
        this._b = b;
    }

    get r(): number {
        return this._r;
    }

    set r(value: number) {
        this._r = value;
    }

    get g(): number {
        return this._g;
    }

    set g(value: number) {
        this._g = value;
    }

    get b(): number {
        return this._b;
    }

    set b(value: number) {
        this._b = value;
    }
}
