import TextBlock from "../src/blocks/text-block";
import Glyph from "../src/typography/glyph";


test('append glyphs to text block', () => {
    const textBlock = new TextBlock();
    const a = new Glyph('a');
    const b = new Glyph('b');
    const c = new Glyph('c');
    textBlock.append(a);
    textBlock.append(b);
    textBlock.append(c);
    expect(textBlock.glyphs.map(g => g.char)).toEqual(['a', 'b', 'c']);
});
