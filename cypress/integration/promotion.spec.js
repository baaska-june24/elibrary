import moment from "moment";
import "cypress-file-upload";
const apiUrl = Cypress.config("apiUrl");

describe("Promotion", () => {
  beforeEach(() => {
    cy.log("Visiting promotions");
    cy.restoreLocalStorage();
  });

  let start;
  let end;

  start = moment().format("MMMM D, YYYY");
  end = moment()
    .add(10, "days")
    .format("MMMM D, YYYY");

  it("Login", () => {
    cy.login();
  });

  it("Create promotion", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-menu > :nth-child(3) > a").click();
    cy.visit("/dashboard/promotions");
    cy.get(".ant-col-md-16 > .ant-btn").click();
    cy.get(".ant-upload-select > .ant-upload").click();
    cy.fixture("image.jpg", "base64").then(fileContent => {
      cy.get("input#cover").upload({
        fileContent,
        fileName: "image.jpg",
        mimeType: "application/jpeg"
      });
    });
    cy.get("#name").type("test");
    cy.get("#price").type("145000");
    cy.get("#description").type("test description");
    cy.get(
      ".select-form > .ant-select-selection > .ant-select-selection__rendered"
    ).click();
    cy.request({
      method: "POST",
      url: apiUrl,
      body: { contents }
    }).then(result => {
      expect(result.status).to.eq(200);
    });
    cy.get(".ant-select-dropdown-menu > :nth-child(3)").click();
    cy.get(".ant-select-dropdown-menu > :nth-child(4)").click();
    cy.get('[placeholder="Эхлэх"]').click();
    cy.get(`[title="${end}"] > .ant-calendar-date`).click();
    cy.get(`[title="${start}"] > .ant-calendar-date`).click();
    cy.get(".ant-modal-footer > div > .ant-btn-primary").click();

    cy.request({
      method: "POST",
      url: apiUrl,
      body: { mutation }
    }).then(result => {
      expect(result.status).to.eq(200);
    });

    cy.wait(5000);
  });

  it("Visiting promotions", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-menu > :nth-child(3) > a").click();
    cy.visit("/dashboard/promotions");
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query: promotions
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const data = resp.body.data.packages[0];
      const len = resp.body.data.packages.length;
      cy.get(".ant-table-row > :nth-child(1) > span").then(nameRes => {
        expect(nameRes[0].textContent).to.eq(data.name);
      });
      cy.get(".ant-table-row > :nth-child(1)").should("have.length", len);
      cy.get(".ant-table-row > :nth-child(2)").then(descRes => {
        const desc = descRes[0].textContent;
        expect(desc).to.eq(data.description);
      });
      cy.get(".ant-table-row > :nth-child(3)").then(priceRes => {
        const price = parseInt(priceRes[0].textContent);
        expect(price).to.eq(data.price);
      });
      cy.get(".ant-table-row > :nth-child(4)").then(startDate => {
        const date = startDate[0].textContent;
        expect(moment(date).format("YYYY-MM-DD")).to.eq(data.start_date);
      });
      cy.get(".ant-table-row > :nth-child(5)").then(endDate => {
        const end = endDate[0].textContent;
        expect(moment(end).format("YYYY-MM-DD")).to.eq(data.expired_at);
      });
      cy.get(".ant-table-row > :nth-child(6)").then(statusRes => {
        const stat = statusRes[0].textContent;
        if (stat == "Зөвшөөрөөгүй") {
          const status = false;
          expect(status).to.eq(data.is_active);
        } else {
          const status = true;
          expect(status).to.eq(data.is_active);
        }
      });
    });
  });

  it("Checking search result", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-menu > :nth-child(3) > a").click();
    cy.visit("/dashboard/promotions");
    cy.get(".ant-input-search > .ant-input").type("test{enter}");
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
      const data = resp.body.data.packages[0];
      cy.get(".ant-table-row > :nth-child(1) > span").then(searchRes => {
        expect(searchRes[0].textContent).to.eq(data.name);
      });
    });
  });

  it("Edit promotion", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-menu > :nth-child(3) > a").click();
    cy.visit("/dashboard/promotions");
    cy.get(".ant-table-row > :nth-child(7) > :nth-child(1)").click();
    cy.get(".ant-upload-select > .ant-upload").click();
    cy.fixture("image.jpg", "base64").then(fileContent => {
      cy.get("input#cover").upload({
        fileContent,
        fileName: "image.jpg",
        mimeType: "application/jpeg"
      });
    });
    cy.get("#name").clear();
    cy.get("#name").type("Edit test");
    cy.get("#price").clear();
    cy.get("#price").type("5000");
    cy.get("#description").clear();
    cy.get("#description").type("edit test desc");
    cy.request({
      method: "POST",
      url: apiUrl,
      body: { contents }
    }).then(result => {
      expect(result.status).to.eq(200);
    });
    cy.get(".select-form > .ant-select-selection")
      .click()
      .type("human investment");
    cy.wait(3000);
    cy.get(".ant-select-dropdown-menu-item").click();
    cy.get('[placeholder="Эхлэх"]').click();
    cy.get(`[title="${start}"] > .ant-calendar-date`).click();
    cy.get(`[title="${end}"] > .ant-calendar-date`).click();
    cy.get(".ant-modal-footer > div > .ant-btn-primary").click();
    cy.request({
      method: "POST",
      url: apiUrl,
      body: { update_mutation }
    }).then(result => {
      expect(result.status).to.eq(200);
    });
  });
  it("Delete promotions ", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-menu > :nth-child(3) > a").click();
    cy.visit("/dashboard/promotions");
    cy.get(":nth-child(7) > :nth-child(2)").click();
    cy.get(".ant-popover-buttons > .ant-btn-primary").click();
    cy.request({
      method: "POST",
      url: apiUrl,
      body: { delete_mutation }
    }).then(result => {
      expect(result.status).to.eq(200);
    });
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
});

export const contents = `query GET_LIST_CONTENTS {
  contents(where: {
    deleted_at: {
      _is_null: true
    },
    organizations: {
      organization_id: {
        _eq: 19
      }
    }
  },limit:10, order_by:{created_at:asc}) {
    id
  name
  }
}`;

export const mutation = `mutation CREATE_PACKAGE($data: packages_insert_input!) {
  insert_packages(objects: [$data]) {
    returning {
      id
      name
      meta
      description
      price
    }
  }
}`;

export const update_mutation = `mutation UPDATE_PACKAGE($where: packages_bool_exp!, $set: packages_set_input!) {
  update_packages(where: $where, _set: $set) {
    returning {
      name
    }
  }
}`;

export const delete_mutation = `mutation DELETE_PACKAGE($where: packages_bool_exp!) {
  delete_packages(where: $where) {
    returning {
      name
    }
  }
}`;

export const promotions = `query GET_PACKAGES {
  packages(where:{organization_id:{_eq: 19},type:{_eq:"promotion"}}) {
    key: id
    is_active
    id
    description
    name
    organization_id
    expired_at
    price
    created_at
    start_date
    file_connection {
      file_id: file_id
      file {
        bucket
      }
    }
    contents {
      content {
        id
        name
      }
    }
  }
}`;

export const query_search = `query GET_PACKAGES {
  packages(where:{organization_id:{_eq: 19},type:{_eq:"promotion"}, name:{_ilike:"%test%"}}) {
    id
    name
  }
}`;
