import {IFont} from "../interface";

export default class Font implements IFont {
    private _family: string;
    private _size: number;
    private _weight: number;

    constructor(family: string, size: number, weight: number) {
        this._family = family;
        this._size = size;
        this._weight = weight;
    }

    get family(): string {
        return this._family;
    }

    set family(value: string) {
        this._family = value;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }
}
