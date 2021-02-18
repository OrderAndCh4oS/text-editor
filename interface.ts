export interface ICursor {
    position: IPoint
}

export interface IPoint {
    x: number
    y: number
}

export interface IRect {
    position: IPoint
    width: number
    height: number
    horizontalEdge: 'left' | 'right'
    verticalEdge: 'top' | 'bottom'
}

export interface IPage {
    content: (ITextBlock | IImageBlock | ITableBlock)[]
    addContent(contentBlock: ITextBlock | IImageBlock | ITableBlock): void
    removeContent(contentBlock: ITextBlock | IImageBlock | ITableBlock): void
}

export interface IImage {
    filePath: string
    width: number
    height: number
}

export interface ITextBlock extends IRect {
    uuid: string
    glyphs: IGlyph[]
    append(glyph: IGlyph): void;
    insertAt(index: number, glyphs: IGlyph[]): void;
    styleRange(fromIndex: number, toIndex: number, characterStyle: ICharacterStyle): void;
    styleParagraph(index: number, paragraphStyle: IParagraphStyle): void;
}

export interface IImageBlock extends IRect {
    uuid: string
    image: IImage
    clip: boolean
}

export interface ITableBlock extends IRect {
    uuid: string
    rows: IRow[]
}

export interface ICell {
    content: (ITextBlock | IImageBlock)[]
    borderTop: IBorderStyle
    borderBottom: IBorderStyle
    borderLeft: IBorderStyle
    borderRight: IBorderStyle
}

export interface IBorderStyle {
    weight: number
    colour: IRgb
}

export interface IRow {
    cells: ICell[]
    borderTop: IBorderStyle
    borderBottom: IBorderStyle
    borderLeft: IBorderStyle
    borderRight: IBorderStyle
}

export interface IParagraphStyle {
    colour: IRgb
    font: IFont
    tracking: number
    alignment: 'left' | 'right' | 'centre' | 'justified'
}

export interface IGlyph {
    char: string
    style: ICharacterStyle
    paragraphStyle: IParagraphStyle
}

export interface ICharacterStyle {
    colour: IRgb
    font: IFont
    kerning: number
}

export interface IRgb {
    r: number
    g: number
    b: number
}

export interface IFont {
    family: string
    style: string
    size: number
    lineHeight: number
}

export interface ICommand {
    execute(page: IPage): void
    undo(page: IPage): void
}

export interface IPageCommandChain {
    executeCommand: (ICommand) => void
    undo(): void
    reset(): void
    render(): void
}
