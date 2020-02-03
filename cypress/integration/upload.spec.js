import "cypress-file-upload";
const apiUrl = Cypress.config("apiUrl");

describe("upload-file", () => {
  beforeEach(() => {
    cy.log("Visiting upload");
    cy.restoreLocalStorage();
  });

  it("test upload file", () => {
    cy.login();

    cy.contains("a", "Контент оруулах").click();

    cy.visit("/upload");
    //upload form
    cy.url("include", "upload");

    cy.get(".ant-upload-select > .ant-upload").click();

    const fileName = "test.pdf";

    cy.fixture(fileName).then(fileContent => {
      cy.get("input#content").upload({
        fileContent,
        fileName,
        mimeType: "application/pdf"
      });
    });

    cy.get(".ant-upload-drag > .ant-upload").click();

    cy.fixture("image.jpg", "base64").then(fileContent => {
      cy.get("input#cover").upload({
        fileContent,
        fileName: "image.jpg",
        mimeType: "application/jpeg"
      });
    });

    cy.contains("div", "Төрөл сонгоно уу").click();

    cy.contains("div", "Үнэгүй").click();

    cy.get("input#examplePage").type("1-6");

    cy.contains("div", "Байгууллага сонгоно уу").click();

    cy.contains("div", "Талын хэвлэх").click();

    cy.contains("div", "Контентын төрөл сонгоно уу").click();

    cy.get("li.ant-select-dropdown-menu-item")
      .contains("li", "Ном")
      .click();

    cy.get("input#name").type("this is test");

    cy.get("textarea#description").type("this is test");

    cy.contains("div", "Зохиолчийг сонгоно уу")
      .click()
      .type("Erkhemee");

    cy.contains("li", "Erkhemee Erkhemee").click();

    cy.get("input#isbn").type("test 1 2 3 ");

    cy.contains("div", "Түлхүүр үгээ оруулаад ENTER товч дарна уу")
      .click()
      .type("test keyword{enter} google{enter}");

    cy.get(".ant-select-search__field__placeholder").click();

    cy.get(":nth-child(1) > .ant-select-tree-switcher").click();

    cy.get(
      ".ant-select-tree-child-tree > :nth-child(1) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner"
    ).click();
    cy.get(
      ".ant-select-tree-child-tree > :nth-child(2) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner"
    ).click();

    cy.contains("button", "Нэмэх").click();

    cy.contains("div", "Сонгоно уу").click();
    cy.get("li.ant-select-dropdown-menu-item")
      .contains("li", "Хэл")
      .click();

    cy.contains("span", "Сонгох").click();
    cy.contains("span", "Монгол").click();

    cy.get("form").submit();

    const mutation = `mutation CREATE_CONTENT($data: contents_insert_input!) {
      insert_contents(objects: [$data]) {
        returning {
          id
          name
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

    afterEach(() => {
      cy.saveLocalStorage();
    });
  });
});
