import faker from "faker";
const apiUrl = Cypress.config("apiUrl");

describe("Check pages", () => {
  let idToken;

  let userId = "075013e0-a3d7-45d1-9b7f-7ffe985196c9";
  let username = "tuvshuumng@gmail.com";
  let password = "PassWd123";

  before(() => {
    cy.visit("/organizations");
    cy.wait(3000);
  });

  it("checking organizations list", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        operationName: "GET_VW_ORGANIZATION",
        variables: {
          limit: 18,
          order_by: [
            {
              name: "asc"
            }
          ],
          where: null
        },
        query:
          "query GET_VW_ORGANIZATION($where: vw_organizations_bool_exp, $limit: Int, $offset: Int, $order_by: [vw_organizations_order_by!]) { organizations: vw_organizations(where: $where, limit: $limit, offset: $offset, order_by: $order_by) { id name description avatar bucket contentcount __typename }}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.organizations.length;
      cy.get("a.author-card")
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.organizations[index].id).to.eq(id);
        });
    });
  });

  it("checking organizations list - filtering", () => {
    // click on the filter
    cy.get('ul.char-list a[href$="а"]').click();
    cy.wait(3000);
    // matching result
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        operationName: "GET_VW_ORGANIZATION",
        variables: {
          limit: 18,
          order_by: [
            {
              name: "asc"
            }
          ],
          where: {
            _or: [
              {
                name: {
                  _ilike: "а%"
                }
              }
            ]
          }
        },
        query:
          "query GET_VW_ORGANIZATION($where: vw_organizations_bool_exp, $limit: Int, $offset: Int, $order_by: [vw_organizations_order_by!]) { organizations: vw_organizations(where: $where, limit: $limit, offset: $offset, order_by: $order_by) { id name description avatar bucket contentcount __typename }}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.organizations.length;
      cy.get("a.author-card")
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.organizations[index].id).to.eq(id);
        });
    });
  });

  it("checking organization detail and related contents", () => {
    cy.get("a.author-card:first")
      .parent()
      .click()
      .then(content => {
        const idArray = content.prevObject[0].href.split("/");
        console.log(idArray);
        const i = idArray.length;
        const id = idArray[i - 1];
        cy.request({
          method: "POST",
          url: apiUrl,
          body: {
            variables: {
              id: id
            },
            query:
              "query GET_SINGLE_ORGANIZATION_INFO($id: bigint!) {organization: organizations_by_pk(id: $id) { id name description  long_description  contents_connection_aggregate(where: { content: { is_published: {_eq: true}}}){aggregate{count}}avatar: avatar_id avatar_bucket: avatar {bucket}}}"
          }
        }).then(resp => {
          let name = resp.body.data.organization.name;
          let description = resp.body.data.organization.description;
          let totalContentCount =
            resp.body.data.organization.contents_connection_aggregate.aggregate
              .count;
          let longDescription = resp.body.data.long_description;

          cy.get(".organization-profile-info h3").then(element => {
            expect(element[0].innerText).to.eq(name.trim());
          });

          cy.get(".organization-profile-info h5").then(element => {
            expect(element[0].innerText).to.eq(description.trim());
          });

          cy.get(".info1 h3").then(element => {
            const total = parseFloat(element[0].innerText.replace(/,/g, ""));
            expect(total).to.eq(totalContentCount);
          });

          cy.log("checking related contents");

          cy.request({
            method: "POST",
            url: apiUrl,
            body: {
              variables: {
                limit: 18,
                where: {
                  organization_id: id
                }
              },
              query:
                "query CONTENT_SEARCH($where: SearchWhere!, $limit: Int, $offset: Int, $order_by: [OrderBy]) { search(where: $where, limit: $limit, offset: $offset, order_by: $order_by) { id name average_rate cover type published_at price payment_type created_at __typename }}"
            }
          }).then(relatedContents => {
            console.log(relatedContents);

            const len = relatedContents.body.data.search.length;
            cy.get(
              'div.ant-row-flex.item-list div.content-card > a[href^="/contents"]'
            )
              .should("have.length", len)
              .each(($item, index, $list) => {
                const urlArray = $item[0].href.split("/");
                const i = urlArray.length;
                const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
                expect(relatedContents.body.data.search[index].id).to.eq(id);
              });
          });
        });
      });
  });
});

export const selectors = {
  // Auth component classes
  usernameInput: "input[id=username]",
  signInPasswordInput: "input[type=password]",
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  signOutButton: '[data-test="sign-out-button"]'
};
