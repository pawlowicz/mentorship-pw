import {Locator, Page} from "@playwright/test"

//TODO 
//use this component in the future to 
export class NavigationComponent {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

}