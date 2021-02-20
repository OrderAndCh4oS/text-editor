import {IFont, IParagraphStyle, IRgb} from "../interface";

export default class ParagraphStyle implements IParagraphStyle {
    private _alignment: "left" | "right" | "centre" | "justified";
    private _colour: IRgb;
    private _font: IFont;
    private _tracking: number;

    constructor(alignment: "left" | "right" | "centre" | "justified", colour: IRgb, font: IFont, tracking: number) {
        this._alignment = alignment;
        this._colour = colour;
        this._font = font;
        this._tracking = tracking;
    }

    get colour(): IRgb {
        return this._colour;
    }

    set colour(value: IRgb) {
        this._colour = value;
    }

    get font(): IFont {
        return this._font;
    }

    set font(value: IFont) {
        this._font = value;
    }

    get tracking(): number {
        return this._tracking;
    }

    set tracking(value: number) {
        this._tracking = value;
    }

    get alignment(): "left" | "right" | "centre" | "justified" {
        return this._alignment;
    }

    set alignment(value: "left" | "right" | "centre" | "justified") {
        this._alignment = value;
    }
}
