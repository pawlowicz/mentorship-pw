import { Locator, Page } from "@playwright/test";

export class EntryPage {

    readonly page: Page;
    readonly navVideosIcon: Locator;
    readonly navSourceIcon: Locator;
    readonly navDocsIcon: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navVideosIcon = this.page.locator('.mt-2').getByText('Videos');
        this.navSourceIcon = this.page.locator('.mt-2').getByText('Source');
        this.navDocsIcon = this.page.locator('.mt-2').getByText('Docs');
        this.loginButton = this.page.getByText('Login');
    }

    //TODO
    //generic method for clicking button - in abstract class ?

    public async goToVideos() {
        await this.navVideosIcon.click();
    }

    public async goToSource() {
        await this.navSourceIcon.click();
    }

    public async goToDocs() {
        await this.navDocsIcon.click();
    }

    public async goToLogin() {
        await this.loginButton.click();
    }

}