import { Locator, Page } from "@playwright/test";

export class MainPage {

    readonly page: Page;
    readonly boardNameInput: Locator;
    readonly chooseColor: Locator;
    readonly createButton: Locator;
    readonly boardTitle: Locator;
    readonly firstBoardGeneralLocator: Locator;
    readonly deleteButton: Locator;
    //TODO
    //Create separate class to store NAV bar items - navigation.component
    readonly mainDashIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.boardNameInput = this.page.getByRole('textbox', {name: 'name'});
        this.chooseColor = this.page.getByRole('textbox', {name: 'color'});
        this.createButton = this.page.getByText('Create');
        this.boardTitle = this.page.locator('.mx-8');
        this.mainDashIcon = this.page.locator('.text-2xl').getByText('Trellix');
        this.firstBoardGeneralLocator = this.page.locator('.w-60');
        this.deleteButton = this.page.locator('.top-4').locator('.w-4');
    }

    public async fillInBoardName(boardName: string){
        await this.boardNameInput.fill(boardName);
    }

    public async chooseBoardColour(boardColor: string){
        await this.chooseColor.click();
        await this.chooseColor.fill(boardColor);
    }

    public async clickCreate(){
        await this.createButton.click();
    }

    public async returnToDashboard(){
        await this.mainDashIcon.click();
    }

    public async deleteBoard(){
        await this.deleteButton.click();
    }

}