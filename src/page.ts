import {IImageBlock, IPage, ITableBlock, ITextBlock} from "./interface";

export default class Page implements IPage {
    private _content: (ITextBlock | IImageBlock | ITableBlock)[];

    get content(): (ITextBlock | IImageBlock | ITableBlock)[] {
        return this._content;
    }

    addContent(contentBlock: ITextBlock | IImageBlock | ITableBlock): void {
        this._content.push(contentBlock);
    }

    removeContent(contentBlock: ITextBlock | IImageBlock | ITableBlock): void {
        this._content.filter(c => c.uuid !== contentBlock.uuid);
    }
}
