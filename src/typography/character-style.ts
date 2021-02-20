import {ICharacterStyle, IFont, IRgb} from "../../interface";

export default class CharacterStyle implements ICharacterStyle {
    private _colour: IRgb;
    private _font: IFont;
    private _kerning: number;

    constructor(colour: IRgb, font: IFont, kerning: number) {
        this._colour = colour;
        this._font = font;
        this._kerning = kerning;
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

    get kerning(): number {
        return this._kerning;
    }

    set kerning(value: number) {
        this._kerning = value;
    }
}
