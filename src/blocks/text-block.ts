import {ICharacterStyle, IGlyph, IParagraphStyle, ITextBlock} from "../../interface";
import Rect from "../abstracts/rect";

export default class TextBlock extends Rect implements ITextBlock {
    private _glyphs: IGlyph[] = []
    private _uuid: string;

    constructor() {
        super();
    }

    get uuid(): string {
        return this._uuid;
    }

    /**
     * Glyphs could be linked list
     * or at least each glyph needs to knows it's paragraph weight
     * With a linked list the cursor could even be a node that runs up and down the list.
     */
    get glyphs(): IGlyph[] {
        return this._glyphs;
    }

    append(glyph: IGlyph) {
        this._glyphs.push(glyph);
    }

    insertAt(index: number, glyphs: IGlyph[]) {
        this._glyphs.splice(index, 0, ...glyphs)
    }

    styleRange(fromIndex: number, toIndex: number, characterStyle: ICharacterStyle) {
        for (let i = fromIndex; i < toIndex; i++) {
            this._glyphs[i].style = characterStyle;
        }
    }

    styleParagraph(index: number, paragraphStyle: IParagraphStyle) {
        const paragraphStart = this.findParagraphStart(index);
        const paragraphEnd = this.findParagraphEnd(index);
        for (let i = paragraphStart; i <= paragraphEnd; i++)
            this._glyphs[i].paragraphStyle = paragraphStyle;
    }

    private findParagraphStart(index: number) {
        // Todo: handle case were index is already at \r;
        // Todo: workout how handle multiple returns;
        while (index > 0 && this._glyphs[index].char !== '\r') {
            index--;
        }
        return index === 0 ? index : index + 1;
    }

    private findParagraphEnd(index: number) {
        // Todo: handle case were index is already at \r;
        // Todo: workout how handle multiple returns;
        while (index < this._glyphs.length && this._glyphs[index].char !== '\r') {
            index++;
        }
        return index - 1;
    }
}
