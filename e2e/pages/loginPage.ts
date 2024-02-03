import { Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.getByRole('textbox', {name: 'email'});
        this.passwordInput = this.page.getByRole('textbox', {name: 'password'});
        this.signInButton = this.page.getByText('Sign in');
    }

    public async fillInEmail(email: string){
        await this.emailInput.fill(email);
    }

    public async fillInPassword(password: string){
        await this.passwordInput.fill(password);
    }

    public async signIn(){
        await this.signInButton.click();
    }

}