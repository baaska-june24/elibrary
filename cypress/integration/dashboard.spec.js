import moment from "moment";

const apiUrl = Cypress.config('apiUrl')

describe("dashboard", () => {
  // let idToken;
  beforeEach(() => {
    cy.log("Visiting upload");
    cy.restoreLocalStorage();
  });

  it("visiting dashboard url", () => {
    cy.login();

    // cy.getIdToken().then(idTokenResult => {
    //   idToken = idTokenResult;
    //   cy.log("token id : " + idTokenResult);
    // });
  });

  it("Checking total content count", () => {
    cy.visit("/dashboard");
    cy.url("include", "dashboard");
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        query
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const name = resp.body.data.organization.name;
      const countFromServer =
        resp.body.data.organization.contents_connection_aggregate.aggregate
          .count;
      cy.get(".organization-profile-info > h3").then(nameRes => {
        expect(nameRes[0].textContent).to.eq(name);
      });
      cy.get(".info1 > h3").then(countRes => {
        const count = parseFloat(countRes[0].textContent.replace(/,/g, ""));
        expect(count).to.eq(countFromServer);
      });
    });
  });

  it("Checking total account balance", () => {
    cy.visit("/dashboard");
    cy.url("include", "dashboard");
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query: query_payment
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const countFromServer =
        resp.body.data.payment_vw_paid_contents_aggregate.aggregate.count || 0;
      cy.get(".info2 > h3").then(countRes => {
        const count = parseFloat(countRes[0].textContent.replace(/,/g, ""));
        expect(count).to.eq(countFromServer);
      });
    });
  });
  it("checking content list", () => {
    cy.visit("/dashboard");
    cy.url("include", "dashboard");
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query: query_content
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);

      const data = resp.body.data.vw_organizations_paid_contents[0];
      const content = data.name;
      const viewData = data.views;
      const readData = data.read;
      const payment_type = data.payment_type;
      const priceData = data.price;
      // if (payment_type === "free") {
      //   return "Үнэгүй";
      // } else if (payment_type === "cash") {
      //   return priceData;
      // } else if (payment_type === "membership") {
      //   return "Гишүүнчлэл";
      // }

      const dateData = moment(data.created_at).format("YYYY/MM/DD HH:mm:ss");

      const len = resp.body.data.vw_organizations_paid_contents.length;

      cy.get("[data-row-key] > :nth-child(1)").should("have.length", len);

      cy.get('[data-row-key="0"] > :nth-child(1)').then(nameRes => {
        expect(resp.status).to.eq(200);
        const name = nameRes[0].textContent;
        expect(name).to.eq(content);
      });
      cy.get('[data-row-key="0"] > :nth-child(2)').then(viewCount => {
        expect(resp.status).to.eq(200);
        const view = parseInt(viewCount[0].textContent.replace(/,/g, ""));
        expect(view).to.eq(viewData);
      });
      cy.get('[data-row-key="0"] > :nth-child(3)').then(readCount => {
        expect(resp.status).to.eq(200);
        const read = parseInt(readCount[0].textContent.replace(/,/g, ""));
        expect(read).to.eq(readData);
      });
      cy.get('[data-row-key="0"] > :nth-child(4)').then(price => {
        expect(resp.status).to.eq(200);
        const priceCheck = price[0].textContent;
        const pay = "Үнэгүй";
        expect(priceCheck).to.eq(pay);
      });

      cy.get('[data-row-key="0"] > :nth-child(5)').then(date => {
        expect(resp.status).to.eq(200);
        const dateCheck = date[0].textContent;
        expect(dateCheck).to.eq(dateData);
      });
    });
  });

  it("Checking search result", () => {
    cy.visit("/dashboard");
    cy.url("include", "dashboard");
    cy.get(".ant-input-search > .ant-input").type(
      "Нягтлан бодох бүртгэлийн онол{enter}"
    );
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query: query_search
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const searchResult =
        resp.body.data.vw_organizations_paid_contents[0].name;
      cy.get(".ant-table-row > :nth-child(1)").then(searchRes => {
        const search = searchRes[0].textContent;
        expect(search).to.eq(searchResult);
      });
    });
  });
  it("check sorter", () => {
    cy.visit("/dashboard");
    cy.url("include", "dashboard");
    cy.get(
      ":nth-child(5) > .ant-table-header-column > .ant-table-column-sorters"
    ).click();
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query: `query GET_ORGANIZATIONS_PAID_CONTENTS {
          vw_organizations_paid_contents(
              where: {organization_id : {_eq : 19},deleted_at:{_is_null:true}},
              limit:10,
              order_by:{created_at:asc}
              ) {
            id
            name
            meta
            cover
            bucket
            views
            is_published
            organization_id
            payment_type
            price
            type
            created_at
            read
          }
        }`
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const created_at =
        resp.body.data.vw_organizations_paid_contents[0].created_at;
      const dateData = moment(created_at).format("YYYY/MM/DD HH:mm:ss");
      cy.get('[data-row-key="0"] > .ant-table-column-sort').then(sortedAsc => {
        const sorted = sortedAsc[0].textContent;
        expect(sorted).to.eq(dateData);
      });
    });
  });

  it("Checking publish content", () => {
    cy.visit("/dashboard");
    cy.url("include", "dashboard");
    cy.get(
      '[data-row-key="0"] > :nth-child(6) > .ant-btn-group > :nth-child(1)'
    ).click();
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query: query_content
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const firstItem =
        resp.body.data.vw_organizations_paid_contents[0].is_published;
      expect(firstItem).to.eq(firstItem);
    });
    cy.get(".ant-popover-buttons > .ant-btn-primary").click();
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query: query_content
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const firstItem =
        resp.body.data.vw_organizations_paid_contents[0].is_published;
      expect(firstItem).to.eq(firstItem);
    });
  });

  it("Content delete", () => {
    cy.visit("/dashboard");
    cy.url("include", "dashboard");
    cy.get(
      '[data-row-key="0"] > :nth-child(6) > .ant-btn-group > [type="button"][style="color: rgb(206, 206, 206);"]'
    ).click();
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query: query_content
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const firstItem =
        resp.body.data.vw_organizations_paid_contents[0].is_published;
      const len = resp.body.data.vw_organizations_paid_contents[0].length || 0;
      if (!firstItem) {
        // cy.get(".ant-popover-buttons > .ant-btn-primary").click();
        cy.request({
          method: "POST",
          url: apiUrl,
          headers: {
            "x-hasura-admin-secret": "esansecret"
          },
          body: {
            query: query_content
          }
        }).then(resp => {
          expect(resp.status).to.eq(200);
        });
      } else {
        cy.get(
          '[data-row-key="0"] > :nth-child(6) > .ant-btn-group > :nth-child(1)'
        ).click();
        cy.get(
          ":nth-child(13) > :nth-child(1) > .ant-popover > .ant-popover-content > .ant-popover-inner > :nth-child(1) > .ant-popover-inner-content > .ant-popover-buttons > .ant-btn-primary"
        ).click();

        cy.wait(5000);
        cy.get(
          '[data-row-key="0"] > :nth-child(6) > .ant-btn-group > [type="button"][style="color: rgb(206, 206, 206);"]'
        ).click();
        // cy.get(
        //   ":nth-child(11) > :nth-child(1) > .ant-popover > .ant-popover-content > .ant-popover-inner > :nth-child(1) > .ant-popover-inner-content > .ant-popover-buttons > .ant-btn-primary"
        // ).click();
      }
    });
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
});

//Custom queries

export const query_content = `query GET_ORGANIZATIONS_PAID_CONTENTS {
  vw_organizations_paid_contents(
      where: {organization_id : {_eq : 19},deleted_at:{_is_null:true}},
      limit:10
      ) {
    id
    name
    meta
    cover
    bucket
    views
    is_published
    organization_id
    payment_type
    price
    type
    created_at
    read
  }
}`;

export const query_search = `query GET_ORGANIZATIONS_PAID_CONTENTS {
  vw_organizations_paid_contents(where: {organization_id:{_eq:19},name:{_ilike:"%Нягтлан бодох бүртгэлийн онол%"}})
   {
    id
    name
    cover
    views
    is_published
    organization_id
    payment_type
    price
    created_at
    read
  }
}`;

export const query_payment = `query GET_ORGANIZATION_ACCOUNT {
  payment_vw_paid_contents_aggregate(where: {organization_id: {_eq:19}}) {
    aggregate {
      sum {
        total
      }
    }
  }
}`;

export const query = `query GET_SINGLE_ORGANIZATION_INFO{
  organization: organizations_by_pk(id: 19) {
    id
    name
    description
    long_description
    contents_connection_aggregate(
      where: { content: { is_published: { _eq: true }, deleted_at:{_is_null:true} } }
    ) {
      aggregate {
        count
      }
    }
    avatar: avatar_id
    avatar_bucket: avatar {
      bucket
    }
  }
}`;
