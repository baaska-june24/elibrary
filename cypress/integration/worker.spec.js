import moment from "moment";
const apiUrl = Cypress.config("apiUrl");

describe("Sales", () => {
  beforeEach(() => {
    cy.log("Visiting Dashboard");
    cy.restoreLocalStorage();
  });
  it("Visiting Worker list", () => {
    cy.login();
    cy.visit("/dashboard/worker");
  });
  it("Checking worker list", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: { query: org_users }
    }).then(result => {
      expect(result.status).to.eq(200);
      const data = result.body.data.organization.users_connection[0].user;

      const count =
        result.body.data.organization.users_connection_aggregate.aggregate
          .count;
      cy.get("[data-row-key] > :nth-child(1)").should("have.length", count);
      cy.get('[data-row-key="0"] > :nth-child(1)').then(lastname => {
        expect(lastname[0].textContent).to.eq(data.lastname);
      });
      cy.get('[data-row-key="0"] > :nth-child(2)').then(firstname => {
        expect(firstname[0].textContent).to.eq(data.firstname);
      });
      cy.get('[data-row-key="0"] > :nth-child(3)').then(email => {
        expect(email[0].textContent).to.eq(data.email);
      });
      cy.get('[data-row-key="0"] > :nth-child(4)').then(date => {
        const dateData = moment(data.created_at).format("YYYY/MM/DD HH:mm:ss");
        expect(date[0].textContent).to.eq(dateData);
      });
    });
  });
  it("Search Worker", () => {
    cy.visit("/dashboard/worker");
    cy.get(".ant-input-search > .ant-input").type("baasandorj{enter}");
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: { query: search_user }
    }).then(result => {
      expect(result.status).to.eq(200);
      const data = result.body.data.organization.users_connection[0].user;
      cy.get('[data-row-key="0"] > :nth-child(1)').then(lastname => {
        expect(lastname[0].textContent).to.eq(data.lastname);
      });
      cy.get('[data-row-key="0"] > :nth-child(2)').then(firstname => {
        expect(firstname[0].textContent).to.eq(data.firstname);
      });
      cy.get('[data-row-key="0"] > :nth-child(3)').then(email => {
        expect(email[0].textContent).to.eq(data.email);
      });
      cy.get('[data-row-key="0"] > :nth-child(4)').then(date => {
        const dateData = moment(data.created_at).format("YYYY/MM/DD HH:mm:ss");
        expect(date[0].textContent).to.eq(dateData);
      });
    });
  });
  it("Delete Worker", () => {
    cy.visit("/dashboard/worker");
    cy.get(":nth-child(6) > .ant-btn").click();
    // cy.get(".ant-popover-buttons > .ant-btn-primary").click();
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: { query: delete_user }
    }).then(result => {
      expect(result.status).to.eq(200);
    });
  });
  // it("Invite worker", () => {
  //   cy.visit("/dashboard/worker");
  //   cy.get(".ant-col-md-16 > .ant-btn").click();
  //   cy.get("#InviteEmail").type("erkhembayar@steppelink.mn");
  //   // cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
  // });

  afterEach(() => {
    cy.saveLocalStorage();
  });
});

export const org_users = `query GET_ORGANIZATION_USERS {
    organization: organizations_by_pk(id: 19) {
      users_connection_aggregate(where: {organization_id:{_eq:19}}) {
        aggregate {
          count
        }
      }
      users_connection(
        where: {organization_id:{_eq:19}}
      ) {
        user {
          id
          email
          displayname
          firstname
          lastname
          created_at
        }
      }
    }
  }`;

export const search_user = `query GET_ORGANIZATION_USERS {
  organization: organizations_by_pk(id: 19) {
    users_connection(
      where: {organization_id:{_eq:19},user:{displayname:{_ilike:"%baasandorj%"}}}
    ) {
      user{
        id
        email
        displayname
        firstname
        lastname
        created_at
      }
    }
  }
}`;

export const delete_user = `mutation DELETE_MAP_USER_OTGANIZATIONS {
  delete_map_users_organizations(
    where: {
      organization_id: { _eq: 19 }
      user_id: { _eq: "ea7fe20b-8b31-4416-928e-8f3c8524e5cf" }
    }
  ) {
    returning {
      user_id
    }
  }
}
`;
