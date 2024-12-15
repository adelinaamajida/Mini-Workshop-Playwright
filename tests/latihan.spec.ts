//.spec atau.test sama aja, duaduanya disupport playwright
//didesign untuk e2e testing by default
//role automation mainly berfokus pada executingnya disupport tools
//regression testing related - test yg dieksekusi repetitive (existing functionality berjalan semestinya meskipun ada update baru)
//experience based testing, exploratory testing (manual test)
//playwright.dev
import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com");
    await page.getByLabel('store logo').click();
})


test("User are able to navigate to the homepage", async({ page }) => { 
    await expect(page.locator('h1')).toContainText('Home Page');
});

test("User are able to navigate to the Men section", async({ page }) => {
    await page.locator("//span[contains(text(),'Men')]").click();
    await expect(page.locator("//h1/span")).toHaveText("Men"); //membuat assertion/validasi
   // await expect(page.locator("//h1/span[contains(text(),'Men')]")).toBeVisible; //membuat assertion/validasi
    
});


