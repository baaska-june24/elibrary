const apiUrl = Cypress.config("apiUrl");
describe("Check pages", () => {
  /*
   * Visits the page before each test (Shift+Alt+F)
   */
  before(() => {
    cy.visit("/");
  });

  it("checking book menu", () => {
    cy.get('.ant-menu a[href$="book"]').click();
    cy.wait(8000);
    //cy.location("pathname").should("include", "/contents"); // todo: check type
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        operationName: "CONTENT_SEARCH",
        variables: {
          limit: 18,
          where: {
            type: "book"
          }
        },
        query:
          "query CONTENT_SEARCH($where:SearchWhere!,$limit:Int){search(where:$where,limit:$limit){id}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.search.length;
      cy.get(
        'div.ant-row-flex.item-list div.content-card > a[href^="/content"]'
      )
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.search[index].id).to.eq(id);
        });
    });
  });

  it("checking magazine menu", () => {
    cy.get('.ant-menu a[href$="magazine"]').click();
    cy.wait(8000);
    cy.location("pathname").should("include", "/contents"); // todo: check type

    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        operationName: "CONTENT_SEARCH",
        variables: {
          limit: 18,
          where: {
            type: "magazine"
          }
        },
        query:
          "query CONTENT_SEARCH($where:SearchWhere!,$limit:Int){search(where:$where,limit:$limit){id}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.search.length;
      cy.get(
        'div.ant-row-flex.item-list div.content-card > a[href^="/content"]'
      )
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.search[index].id).to.eq(id);
        });
    });
  });

  it("checking newspaper menu", () => {
    cy.get('.ant-menu a[href$="newspaper"]').click();
    cy.wait(8000);
    cy.location("pathname").should("include", "/contents"); // todo: check type

    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        operationName: "CONTENT_SEARCH",
        variables: {
          limit: 18,
          where: {
            type: "newspaper"
          }
        },
        query:
          "query CONTENT_SEARCH($where:SearchWhere!,$limit:Int){search(where:$where,limit:$limit){id}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.search.length;
      cy.get(
        'div.ant-row-flex.item-list div.content-card > a[href^="/content"]'
      )
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.search[index].id).to.eq(id);
        });
    });
  });

  it("checking dissertation menu", () => {
    cy.get('.ant-menu a[href$="dissertation"]').click();
    cy.wait(8000);
    cy.location("pathname").should("include", "/contents"); // todo: check type

    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        operationName: "CONTENT_SEARCH",
        variables: {
          limit: 18,
          where: {
            type: "dissertation"
          }
        },
        query:
          "query CONTENT_SEARCH($where:SearchWhere!,$limit:Int){search(where:$where,limit:$limit){id}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.search.length;
      cy.get(
        'div.ant-row-flex.item-list div.content-card > a[href^="/content"]'
      )
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.search[index].id).to.eq(id);
        });
    });
  });

  it("checking research menu", () => {
    cy.get('.ant-menu a[href$="research"]').click();
    cy.wait(8000);
    cy.location("pathname").should("include", "/contents"); // todo: check type

    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        operationName: "CONTENT_SEARCH",
        variables: {
          limit: 18,
          where: {
            type: "research"
          }
        },
        query:
          "query CONTENT_SEARCH($where:SearchWhere!,$limit:Int){search(where:$where,limit:$limit){id}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.search.length;
      cy.get(
        'div.ant-row-flex.item-list div.content-card > a[href^="/content"]'
      )
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.search[index].id).to.eq(id);
        });
    });
  });
});
