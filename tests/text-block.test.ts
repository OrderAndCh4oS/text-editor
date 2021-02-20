import TextBlock from "../src/blocks/text-block";
import Glyph from "../src/typography/glyph";
import CharacterStyle from "../src/typography/character-style";
import Rgb from "../src/colour/rgb";
import Font from "../src/typography/font";
import ParagraphStyle from "../src/typography/paragraph-style";

describe('Test text block', () => {
    test('Append glyphs to text block', () => {
        const textBlock = new TextBlock();
        const a = new Glyph('a');
        const b = new Glyph('b');
        const c = new Glyph('c');
        textBlock.append(a);
        textBlock.append(b);
        textBlock.append(c);
        expect(textBlock.glyphs.map(g => g.char)).toEqual(['a', 'b', 'c']);
    });

    test('Add character styles to glyph', () => {
        const textBlock = new TextBlock();
        const a = new Glyph('a');
        const b = new Glyph('b');
        const c = new Glyph('c');
        textBlock.append(a);
        textBlock.append(b);
        textBlock.append(c);
        const font = new Font('Avenir', 11, 400);
        const colour = new Rgb(255, 255, 255);
        const characterStyle = new CharacterStyle(colour, font, 0)
        textBlock.styleRange(0, 2, characterStyle);
        const expected = [characterStyle, characterStyle, characterStyle];
        expect(textBlock.glyphs.map(g => g.style))
            .toEqual(expect.arrayContaining(expected));
    });

    test('Add paragraph styles to glyph', () => {
        const textBlock = new TextBlock();
        const a = new Glyph('a');
        const b = new Glyph('b');
        const c = new Glyph('c');
        const paragraph = new Glyph('\r');
        const d = new Glyph('d');
        const e = new Glyph('e');
        const f = new Glyph('f');
        textBlock.append(a);
        textBlock.append(b);
        textBlock.append(c);
        textBlock.append(paragraph);
        textBlock.append(d);
        textBlock.append(e);
        textBlock.append(f);
        const font = new Font('Avenir', 11, 400);
        const colour = new Rgb(255, 255, 255);
        const paragraphStyle = new ParagraphStyle('left', colour, font, 14, 0)
        textBlock.styleParagraph(5, paragraphStyle);
        const expected = [undefined, undefined, undefined, undefined, paragraphStyle, paragraphStyle, paragraphStyle];
        expect(textBlock.glyphs.map(g => g.paragraphStyle))
            .toEqual(expect.arrayContaining(expected));
    });
})

