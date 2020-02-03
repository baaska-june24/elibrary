const apiUrl = Cypress.config("apiUrl");

describe("Index page", () => {
  /*
   * Visits the page before each test (Shift+Alt+F)
   */
  beforeEach(() => {
    cy.log("Visiting http://localhost:3000");
    cy.visit("/");
  });

  /**
   * Header section
   */
  it("should have a logo", () => {
    cy.get(".esan-logo svg").should("have.length", 2);
  });
  /**
   * Check total content count
   */
  it("Checking total content count", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        query: "{vw_contents_aggregate{aggregate{count}}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const countFromServer =
        resp.body.data.vw_contents_aggregate.aggregate.count;
      cy.get(".esan-statistic-card.esan-statistic-purple h1:first").then(
        countRes => {
          const count = parseFloat(countRes[0].textContent.replace(/,/g, ""));
          expect(count).to.eq(countFromServer);
        }
      );
    });
  });
  /**
   * Check total vendor count
   */
  it("Checking total vendor count", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        query: "{organizations_aggregate{aggregate{count}}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const countFromServer =
        resp.body.data.organizations_aggregate.aggregate.count;
      cy.get(".esan-statistic-card.esan-statistic-pink h1:first").then(
        countRes => {
          const count = parseFloat(countRes[0].textContent.replace(/,/g, ""));
          expect(count).to.eq(countFromServer);
        }
      );
    });
  });
  /**
   * Check total school count
   */
  it("Checking total school count", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        query:
          '{organizations_aggregate(where:{type:{_eq:"school"}}){aggregate{count}}}'
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const countFromServer =
        resp.body.data.organizations_aggregate.aggregate.count;
      cy.get(".esan-statistic-card.esan-statistic-blue h1:first").then(
        countRes => {
          const count = parseFloat(countRes[0].textContent.replace(/,/g, ""));
          expect(count).to.eq(countFromServer);
        }
      );
    });
  });
  /**
   * Check feautured contents rendered correctly
   */
  it("checking featured contents", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        query: "{vw_featured_contents{id}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.vw_featured_contents.length;

      cy.get(".ant-row-flex.item-list:first a")
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.vw_featured_contents[index].id).to.eq(id);
        });
    });
  });
  /**
   * Best sellers
   */
  it("checking best sellers", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        query: "{vw_bestseller_contents{id}}"
      }
    }).then(result => {
      expect(result.status).to.eq(200);
      const len = result.body.data.vw_bestseller_contents.length;
      cy.get(".ant-tabs-tabpane.ant-tabs-tabpane-active a")
        .should("have.length", len + 1)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          if (!isNaN(id)) {
            expect(result.body.data.vw_bestseller_contents[index].id).to.eq(id);
          }
        });
    });
  });
  it("checking recently added contents", () => {
    cy.get(".ant-tabs-nav.ant-tabs-nav-animated")
      .find("div")
      .as("tabs");
    cy.get("@tabs").each(($tab, index, $tabs) => {
      if (index == 2) {
        //Clicked on the recently added contents tab
        $tab.click();
        cy.request({
          method: "POST",
          url: apiUrl,
          body: {
            query:
              "{vw_contents(order_by:{created_at: desc_nulls_last},limit:16){id}}"
          }
        }).then(result => {
          expect(result.status).to.eq(200);
          const len = result.body.data.vw_contents.length;
          cy.get(".ant-tabs-tabpane.ant-tabs-tabpane-active a")
            .should("have.length", len + 1)
            .each(($item, index, $list) => {
              const urlArray = $item[0].href.split("/");
              const i = urlArray.length;
              const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
              if (!isNaN(id)) {
                expect(result.body.data.vw_contents[index].id).to.eq(id);
              }
            });
        });
      }
    });
  });

  it("checking best ranked contents", () => {
    cy.get(".ant-tabs-nav.ant-tabs-nav-animated")
      .find("div")
      .as("tabs");
    cy.get("@tabs").each(($tab, index, $tabs) => {
      if (index == 3) {
        //Clicked on the best ranked contents tab
        $tab.click();
        cy.request({
          method: "POST",
          url: apiUrl,
          body: {
            query: "{vw_best_ranked_contents{id}}"
          }
        }).then(result => {
          expect(result.status).to.eq(200);
          const len = result.body.data.vw_best_ranked_contents.length;
          cy.get(".ant-tabs-tabpane.ant-tabs-tabpane-active a")
            .should("have.length", len + 1)
            .each(($item, index, $list) => {
              const urlArray = $item[0].href.split("/");
              const i = urlArray.length;
              const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
              if (!isNaN(id)) {
                expect(
                  result.body.data.vw_best_ranked_contents[index].id
                ).to.eq(id);
              }
            });
        });
      }
    });
  });
  it("checking best authors list", () => {
    cy.get(".ant-tabs-nav.ant-tabs-nav-animated")
      .find("div")
      .as("tabs");
    cy.get("@tabs").each(($tab, index, $tabs) => {
      if (index == 4) {
        //Clicked on the best ranked contents tab
        $tab.click();
        cy.request({
          method: "POST",
          url: apiUrl,
          body: {
            query: "{vw_best_authors{id}}"
          }
        }).then(result => {
          expect(result.status).to.eq(200);
          const len = result.body.data.vw_best_authors.length;
          cy.get(".ant-tabs-tabpane.ant-tabs-tabpane-active a")
            .should("have.length", len + 1)
            .each(($item, index, $list) => {
              const urlArray = $item[0].href.split("/");
              const i = urlArray.length;
              const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
              if (!isNaN(id)) {
                expect(result.body.data.vw_best_authors[index].id).to.eq(id);
              }
            });
        });
      }
    });
  });

  it("checking terms of use page", () => {
    cy.visit("/terms");
    cy.url().should("include", "/terms");
  });

  it("checking co-organizations", () => {
    cy.visit("/organizations");
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        query: "{vw_organizations(order_by:{name:asc},limit:18){id}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.vw_organizations.length;
      cy.get(".ant-row-flex a.author-card")
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.vw_organizations[index].id).to.eq(id);
        });
    });
  });
});
