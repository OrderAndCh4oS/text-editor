import {ICommand, IPage, ITextBlock} from "../../interface";

class AddTextBlockCommand implements ICommand {
    private _textBlock: ITextBlock;

    constructor(textBlock: ITextBlock) {
        this._textBlock = textBlock
    }

    execute(page: IPage): void {
        page.addContent(this._textBlock)
    }

    undo(page: IPage): void {
        page.removeContent(this._textBlock)
    }
}
