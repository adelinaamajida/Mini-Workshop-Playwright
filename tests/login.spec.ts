import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../pages/loginPage";

test.describe("Create Account & Login Test Case (with POM)", () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({
    firstName: firstName,
    lastName: lastName,
  });
  const password = faker.internet.password();

  test("User is able to create an account", async ({ page }) => {
    console.log("Email:", email);
    console.log("Password:", password);

    const loginPage = new LoginPage(page);

    await page.goto("https://magento.softwaretestingboard.com/");
    await loginPage.createAccount(firstName, lastName, email, password);
    await loginPage.verifyAccountCreation(firstName, lastName, email);
  });

  test("User unable to create an account if mandatory fields are empty", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto("https://magento.softwaretestingboard.com/");
    await loginPage.createAccount('','', '', '');
    await loginPage.verifyMandatoryField();

  })
});