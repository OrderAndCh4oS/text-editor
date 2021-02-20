import {ICharacterStyle, IGlyph, IParagraphStyle} from "../../interface";

export default class Glyph implements IGlyph {
    private _char: string;
    private _paragraphStyle: IParagraphStyle;
    private _style: ICharacterStyle;

    constructor(char: string) {
        if (char.length !== 1) throw Error('Glyph accepts single characters only')
        this._char = char;
    }

    get char(): string {
        return this._char;
    }

    set char(char: string) {
        if (char.length !== 1) throw Error('Glyph accepts single characters only')
        this._char = char;
    }

    get style(): ICharacterStyle {
        return this._style;
    }

    set style(value: ICharacterStyle) {
        this._style = value;
    }

    get paragraphStyle(): IParagraphStyle {
        return this._paragraphStyle;
    }

    set paragraphStyle(value: IParagraphStyle) {
        this._paragraphStyle = value;
    }
}
