import "cypress-file-upload";
//login test

const apiUrl = Cypress.config('apiUrl')


describe("login with upload form", () => {
  beforeEach(() => {
    cy.log("Visiting upload");
    cy.visit("/");
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  //user login
  it("user login", () => {
    cy.contains("a", "Нэвтрэх").click();
    cy.url("include", "/auth/signin");
    cy.login();
  });
  // upload book without FILE

  it("if book type is magazine", () => {
    cy.contains("a", "Контент оруулах").click();
    cy.visit("/upload");
    cy.url("include", "upload");

    cy.contains("div", "Контентын төрөл сонгоно уу").click();

    cy.get("li.ant-select-dropdown-menu-item")
      .contains("li", "Сэтгүүл")
      .click();

    cy.get("input#number").type("1");

    cy.contains("div", "Давтамж сонгоно уу").click();
    cy.get("li.ant-select-dropdown-menu-item")
      .contains("li", "7 хоног тутам")
      .click();
  });

  it("if no result author", () => {
    cy.contains("a", "Контент оруулах").click();
    cy.visit("/upload");
    cy.url("include", "upload");

    cy.contains("div", "Зохиолчийг сонгоно уу")
      .click()
      .type("sdfsdfsdfsfdsdf")
      .get(
        "li.ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-disabled"
      )
      .contains("button", "ЭНД")
      .click();

    cy.get(
      ":nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .avatar-uploader > .ant-upload-select > .ant-upload"
    ).click();

    cy.fixture("image.jpg", "base64").then(fileContent => {
      cy.get("input#avatar").upload({
        fileContent,
        fileName: "image.jpg",
        mimeType: "application/jpg"
      });
    });
    cy.get("input#new_lastname").type("Test");
    cy.get("input#new_firstname").type("cypress");
    cy.get("input#author_desc").type("Description");

    cy.get(".ant-modal-footer > div > .ant-btn-primary").click();

    const mutation = `mutation CREATE_AUTHOR($data: authors_insert_input!) {
      insert_authors(objects: [$data]) {
        returning {
          id
          firstname
          lastname
        }
      }
    }`;

    cy.request({
      method: "POST",
      url: apiUrl,
      body: { mutation }
    }).then(result => {
      expect(result.status).to.eq(200);
    });
  });
});
