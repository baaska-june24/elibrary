import faker from "faker";

const apiUrl = Cypress.config("apiUrl");

describe("Check pages", () => {
  let idToken;

  let userId = "075013e0-a3d7-45d1-9b7f-7ffe985196c9";
  let username = "tuvshuumng@gmail.com";
  let password = "PassWd123";

  before(() => {
    cy.visit("/authors");
    cy.wait(6000);
  });

  it("checking authors list", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        operationName: "GET_LIST_VW_AUTHORS",
        variables: {
          limit: 18,
          orderBy: [
            {
              firstname: "asc",
              lastname: "asc"
            }
          ],
          where: null
        },
        query:
          "query GET_LIST_VW_AUTHORS($where: vw_authors_bool_exp, $limit: Int, $offset: Int, $orderBy:[vw_authors_order_by!]){authors: vw_authors(where: $where, limit: $limit, offset: $offset, order_by: $orderBy){id firstname lastname displayname avatar averagerate contentcount __typename}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.authors.length;
      cy.get("a.author-card")
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.authors[index].id).to.eq(id);
        });
    });
  });

  it("checking authors list - filtering", () => {
    // click on the filter
    cy.get('ul.char-list a[href$="а"]').click();
    cy.wait(3000);
    // matching result
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        operationName: "GET_LIST_VW_AUTHORS",
        variables: {
          limit: 18,
          orderBy: [
            {
              firstname: "asc",
              lastname: "asc"
            }
          ],
          where: {
            _or: [
              {
                firstname: {
                  _ilike: "а%"
                }
              },
              {
                lastname: {
                  _ilike: "а%"
                }
              }
            ]
          }
        },
        query:
          "query GET_LIST_VW_AUTHORS($where: vw_authors_bool_exp, $limit: Int, $offset: Int, $orderBy:[vw_authors_order_by!]){authors: vw_authors(where: $where, limit: $limit, offset: $offset, order_by: $orderBy){id  firstname  lastname  displayname  avatar  averagerate  contentcount  __typename}}"
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      const len = resp.body.data.authors.length;
      cy.get("a.author-card")
        .should("have.length", len)
        .each(($item, index, $list) => {
          const urlArray = $item[0].href.split("/");
          const i = urlArray.length;
          const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          expect(resp.body.data.authors[index].id).to.eq(id);
        });
    });
  });

  it("checking author detail and related contents", () => {
    cy.get("a.author-card:first")
      .parent()
      .click()
      .then(content => {
        const idArray = content.prevObject[0].href.split("/");
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
              "query GET_SINGLE_AUTHOR_DETAIL($id: bigint!) {author: authors_by_pk(id: $id) { id firstname lastname description avatar_id: avatar_id avatar: avatar { bucket } created_by contents_connection(where: {content: {_and: {is_published: {_eq: true}, deleted_at: {_is_null: true}}}}, order_by: {created_at: desc}) { content {id}}}}"
          }
        }).then(resp => {
          let firstname = resp.body.data.author.firstname;
          let lasttname = resp.body.data.author.lastname;
          let description = resp.body.data.author.description;

          let fullname = firstname + " " + lasttname;

          cy.get(".name").then(element => {
            expect(element[0].innerText).to.eq(fullname.trim());
          });

          cy.get(".author-profile-info > p").then(element => {
            expect(element[0].innerText).to.eq(description.trim());
          });

          const len = resp.body.data.author.contents_connection.length;

          cy.get(":nth-child(1) > .ant-row-flex > .ant-col-xl-12").should(
            "have.length",
            len
          );
          // .each(($item, index, $list) => {
          //   const urlArray = $item[0].href.split("/");
          //   const i = urlArray.length;
          //   const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
          //   expect(
          //     resp.body.data.author.contents_connection[index].content.id
          //   ).to.eq(id);
          // });
        });
      });
  });

  it("checking rates and rate author", () => {
    cy.visit("auth/signin");
    cy.wait(3000);
    cy.get(selectors.usernameInput).type(username);
    cy.get(selectors.signInPasswordInput).type(password);
    cy.get("form").submit();
    // wait 3 sec to login
    cy.wait(3000);

    cy.visit("/authors");

    cy.get('div.ant-row-flex a[href^="/authors"].author-card:first')
      .parent()
      .click()
      .then(content => {
        cy.getToken().then(idTokenResult => {
          let comment = faker.lorem.sentence();
          cy.get("div.review-form-wrapper textarea")
            .clear()
            .type(comment);
          cy.get("div.review-form-wrapper ul.ant-rate li").each(
            (item, index, $list) => {
              if (index == 2) {
                item[0].click();
              }
            }
          );
          cy.get("div.review-form-wrapper button[type=submit]").click();
          // wait submit
          cy.wait(3000);

          const authorIdArray = content.prevObject[0].href.split("/");
          const i = authorIdArray.length;
          let authorId = authorIdArray[i - 1];

          cy.request({
            method: "POST",
            url: apiUrl,
            headers: {
              authorization: "Bearer " + idTokenResult
            },
            body: {
              operationName: "GET_AUTHOR_SUBSCRIPTION",
              variables: {
                id: authorId
              },
              query:
                "query GET_AUTHOR_SUBSCRIPTION($id: bigint!){author: authors_by_pk(id: $id){reviews_aggregate{aggregate{avg{rate __typename}__typename}__typename}reviews(order_by:{created_at: desc}){id comment rate created_at user{id displayname email __typename}__typename}__typename}}"
            }
          }).then(resp => {
            cy.get(":nth-child(5) > :nth-child(1) > .ant-col").each(
              (item, index, list) => {
                if (index == 0) {
                  cy.log("checking submitted comment added");
                  expect(item[0].innerText).to.eq(comment);
                }
                expect(item[0].innerText).to.eq(
                  resp.body.data.author.reviews[index].comment
                );
              }
            );
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
