import { test, expect } from '@playwright/test'
import exp from 'constants';
import { EntryPage } from 'e2e/pages/entryPage';
import { LoginPage } from 'e2e/pages/loginPage';
import { MainPage } from 'e2e/pages/mainPage';

test.describe('TestSuite2. Board Flow Check', () => {

    //TODO
    //Apply parameters from .env
    const entryPage = 'http://localhost:5173/';
    const loginURL = 'http://localhost:5173/login';
    const homeURL = 'http://localhost:5173/home';
    const email = 'wer.pawlowicz@gmail.com';
    const password = 'Aqq123!!';

    const firstBoardName = 'First Board';
    const mintHex = '#42bd98';

    test('Create Board Flow', async ({ page }) => {

        await test.step('Go to login page', async () => {
            await page.goto(entryPage);
            await page.waitForLoadState();
            const navigateTo = new EntryPage(page);
            navigateTo.goToLogin();
            await page.waitForLoadState();
            await expect(page).toHaveURL(loginURL);
        });

        await test.step('Log in to portal', async () => {
            const pageInstance = new LoginPage(page);
            await pageInstance.fillInEmail(email);
            await pageInstance.fillInPassword(password);
            await pageInstance.signIn();
            await page.waitForLoadState();
            await expect(page).toHaveURL(homeURL);
        });

        await test.step('Create first board', async () => {
            const pageInstance = new MainPage(page);
            await pageInstance.fillInBoardName(firstBoardName);
            await pageInstance.chooseBoardColour(mintHex);
            await expect(pageInstance.chooseColor).toHaveValue(mintHex);
            await pageInstance.clickCreate();
            await page.waitForLoadState();
            await expect(pageInstance.boardTitle).toHaveText(firstBoardName);
        });

        await test.step('Return to dashboard and verify if board exists', async () => {
            const pageInstance = new MainPage(page);
            await pageInstance.returnToDashboard();
            await expect(page).toHaveURL(homeURL);
            await expect(pageInstance.firstBoardGeneralLocator).toHaveText(firstBoardName);
        });

        await test.step('Delete board', async () => {
            const pageInstance = new MainPage(page);
            await pageInstance.deleteBoard();
            await expect(pageInstance.deleteButton).toHaveCount(0);
        });

    });
});