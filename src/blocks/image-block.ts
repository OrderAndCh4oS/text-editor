import Rect from "../abstracts/rect";
import {IImage, IImageBlock} from "../../interface";

export default class ImageBlock extends Rect implements IImageBlock {
    private _clip: boolean;
    private _image: IImage;
    private _uuid: string;

    constructor() {
        super();
    }

    get uuid(): string {
        return this._uuid;
    }

    get image(): IImage {
        return this._image;
    }

    get clip(): boolean {
        return this._clip;
    }
}
