import moment from "moment";
import "cypress-file-upload";
const apiUrl = Cypress.config("apiUrl");

describe("Series", () => {
  beforeEach(() => {
    cy.log("Visiting series");
    cy.restoreLocalStorage();
  });
  it("Login", () => {
    cy.login();
  });
  it("Create series", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-col-md-6 > .ant-menu > :nth-child(4) > a").click();
    cy.visit("/dashboard/series");
    cy.get(".ant-col-md-16 > .ant-btn").click();
    cy.fixture("image.jpg", "base64").then(fileContent => {
      cy.get("input#cover").upload({
        fileContent,
        fileName: "image.jpg",
        mimeType: "application/jpeg"
      });
    });
    cy.get("#name").type("test");
    cy.get("#description").type("test desc");
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
    cy.get(".ant-select-dropdown-menu > :nth-child(2)").click();
    cy.get(".ant-select-dropdown-menu > :nth-child(5)").click();
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
  it("Visiting Series", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-col-md-6 > .ant-menu > :nth-child(3) > a").click();
    cy.visit("/dashboard/series");
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query: series
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const data = resp.body.data.packages[0];
      const date = moment(data.created_at).format("YYYY/MM/DD HH:mm:ss");

      cy.get(".ant-table-row > :nth-child(1) > span").then(nameRes => {
        expect(nameRes[0].textContent).to.eq(data.name);
      });
      cy.get(".ant-table-row > :nth-child(2)").then(descRes => {
        expect(descRes[0].textContent).to.eq(data.description);
      });
      cy.get(".ant-table-row > :nth-child(4)").then(dateRes => {
        expect(dateRes[0].textContent).to.eq(date);
      });
      cy.get(".ant-table-row > :nth-child(5)").then(statusRes => {
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
  it("Edit series", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-col-md-6 > .ant-menu > :nth-child(3) > a").click();
    cy.visit("/dashboard/series");
    cy.get(".ant-table-row > :nth-child(6) > :nth-child(1)").click();
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
    cy.get(".ant-modal-footer > div > .ant-btn-primary").click();
    cy.request({
      method: "POST",
      url: apiUrl,
      body: { update_mutation }
    }).then(result => {
      expect(result.status).to.eq(200);
    });
  });
  it("Checking search result", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-col-md-6 > .ant-menu > :nth-child(3) > a").click();
    cy.visit("/dashboard/series");
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
  it("Delete series ", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-menu > :nth-child(3) > a").click();
    cy.visit("/dashboard/series");
    cy.get(".ant-table-row > :nth-child(6) > :nth-child(2)").click();
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
  },limit:10) {
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

export const series = `query GET_PACKAGES {
  packages(where:{organization_id:{_eq: 19},type:{_eq:"series"}}) {
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
  packages(where:{organization_id:{_eq: 19},type:{_eq:"series"}, name:{_ilike:"%test%"}}) {
    id
    name
  }
}`;
