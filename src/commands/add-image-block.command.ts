import {ICommand, IPage, IImageBlock} from "../../interface";

class AddImageBlockCommand implements ICommand {
    private _imageBlock: IImageBlock;

    constructor(imageBlock: IImageBlock) {
        this._imageBlock = imageBlock
    }

    execute(page: IPage): void {
        page.addContent(this._imageBlock)
    }

    undo(page: IPage): void {
        page.removeContent(this._imageBlock)
    }

}
