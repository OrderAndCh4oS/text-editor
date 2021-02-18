import {ICharacterStyle, IGlyph, IParagraphStyle} from "../../interface";

export default class Glyph implements IGlyph {
    constructor(char: string) {
        if (char.length !== 1) throw Error('Glyph accepts single characters only')
        this._char = char;
    }

    private _char: string;

    get char(): string {
        return this._char;
    }

    set char(char: string) {
        if (char.length !== 1) throw Error('Glyph accepts single characters only')
        this._char = char;
    }

    private _paragraphStyle: IParagraphStyle;

    get paragraphStyle(): IParagraphStyle {
        return this._paragraphStyle;
    }

    set paragraphStyle(value: IParagraphStyle) {
        this._paragraphStyle = value;
    }

    private _style: ICharacterStyle;

    get style(): ICharacterStyle {
        return this._style;
    }

    set style(value: ICharacterStyle) {
        this._style = value;
    }
}
