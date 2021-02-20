import {ICommand, IPage, IPageCommandChain} from "./interface";
import Page from "./page";

export default class PageCommandChain implements IPageCommandChain {
    private readonly _page: IPage
    private _commands: ICommand[] = []

    constructor() {
        this._page = new Page()
    }

    executeCommand(command): void {
        this._commands.push(command);
        command.execute(this._page);
    }

    undo(): void {
        const command = this._commands.pop();
        command.undo(this._page)
    }

    reset(): void {
        while (this._commands.length) {
            this.undo()
        }
    }

    render(): void {
        // Todo: Generate PDF based on page data...
    }
}
