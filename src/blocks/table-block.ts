import Rect from "../abstracts/rect";
import {IRow, ITableBlock} from "../interface";

export default class TableBlock extends Rect implements ITableBlock {
    private _rows: IRow[];
    private _uuid: string;

    constructor() {
        super();
    }

    get uuid(): string {
        return this._uuid;
    }

    get rows(): IRow[] {
        return this._rows;
    }
}
