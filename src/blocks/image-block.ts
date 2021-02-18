import Rect from "../abstracts/rect";
import {IImage, IImageBlock} from "../../interface";

export default class ImageBlock extends Rect implements IImageBlock {
    constructor() {
        super();
    }

    private _clip: boolean;

    get clip(): boolean {
        return this._clip;
    }

    private _image: IImage;

    get image(): IImage {
        return this._image;
    }

    private _uuid: string;

    get uuid(): string {
        return this._uuid;
    }
}
