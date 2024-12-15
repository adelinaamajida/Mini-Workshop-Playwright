import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../pages/loginPage";

test.describe("Create Account & Login Test Case", () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({
    firstName: firstName,
    lastName: lastName,
  });
  const password = faker.internet.password();

  test("User is able to create an account (with POM)", async ({ page }) => {
    console.log("Email:", email);
    console.log("Password:", password);

    const loginPage = new LoginPage(page);

    await page.goto("https://magento.softwaretestingboard.com/");
    await loginPage.createAccount(firstName, lastName, email, password);
    await loginPage.verifyAccountCreation(firstName, lastName, email);
  });
});

//     await page.getByRole("link", { name: "Create an Account" }).click();
//     await page.getByLabel("First Name").fill(firstName);
//     await page.getByLabel("Last Name").fill(lastName);
//     await page.getByLabel("Email", { exact: true }).fill(email);
//     await page
//       .getByRole("textbox", { name: "Password*", exact: true })
//       .fill(password);
//     await page.getByLabel("Confirm Password").fill(password);
//     await page.getByRole("button", { name: "Create an Account" }).click();
//     await expect(
//       page.getByRole("heading", { name: "My Account" }).locator("span")
//     ).toBeVisible();
//     await expect(page.locator("#maincontent")).toMatchAriaSnapshot(`
//       - strong: Contact Information
//       - paragraph: ${firstName} ${lastName} ${email}
//       - link "Edit"
//       - link "Change Password"
//       `);
//   });

//   test("User is able to login", async ({ page }) => {
//     console.log("Email:", email);
//     console.log("Password:", password);

//     await page.goto("https://magento.softwaretestingboard.com/");
//     await page.getByRole("link", { name: "Sign In" }).click();

//     await page.getByLabel("Email", { exact: true }).fill(email);
//     await page.getByLabel("Password").fill(password);
//     await page.getByRole("button", { name: "Sign In" }).click();
//     await expect(
//       page.getByRole("banner").getByText(`Welcome, ${firstName} ${lastName}!`)
//     ).toBeVisible();
//     await page
//       .getByRole("banner")
//       .locator("button")
//       .filter({ hasText: "Change" })
//       .click();
//     await page.getByRole("link", { name: "My Account" }).click();
//     await expect(page.locator("#maincontent")).toMatchAriaSnapshot(`
//       - strong: Contact Information
//       - paragraph: ${firstName} ${lastName} ${email}
//       - link "Edit"
//       - link "Change Password"
//       `);
//   });
// });
