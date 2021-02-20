import {ICommand, IPage, ITableBlock} from "../interface";

class AddTableBlockCommand implements ICommand {
    private _tableBlock: ITableBlock;

    constructor(tableBlock: ITableBlock) {
        this._tableBlock = tableBlock
    }

    execute(page: IPage): void {
        page.addContent(this._tableBlock)
    }

    undo(page: IPage): void {
        page.removeContent(this._tableBlock)
    }

}
