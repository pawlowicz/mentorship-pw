import { test, expect } from '@playwright/test';
import { EntryPage } from 'e2e/pages/entryPage';
import { Parameters } from '../utils/parameters';


test.describe('TestSuite1. Navigation redirections check', () => {

    //TODO
    //Apply parameters from .env
    const appURL = 'http://localhost:5173/';
    const videoURL = 'https://www.youtube.com/watch?v=RTHzZVbTl6c&list=PLXoynULbYuED9b2k5LS44v9TQjfXifwNu&pp=gAQBiAQB';
    const sourceURL = 'https://github.com/remix-run/example-trellix';
    const docsURL = 'https://remix.run/docs/en/main';

    test.beforeEach('Go to main page', async ({ page }) => {
        await page.goto(appURL);
        await page.waitForLoadState();
    });

    test('Check Videos redirection', async ({ page }) => {
        const navigateTo = new EntryPage(page);
        navigateTo.goToVideos();
        await expect(page).toHaveURL(videoURL);
    });

    test('Check Source redirection', async ({ page }) => {
        const navigateTo = new EntryPage(page);
        navigateTo.goToSource();
        await expect(page).toHaveURL(sourceURL);
    });

    test('Check Docs redirection', async ({ page }) => {
        const navigateTo = new EntryPage(page);
        navigateTo.goToDocs();
        await expect(page).toHaveURL(docsURL);
    });

});