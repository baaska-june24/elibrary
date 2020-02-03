import faker from "faker";
const apiUrl = Cypress.config("apiUrl");

describe("Check content detail page", () => {
  let username = "isiahaustin21@gmail.com";
  let password = "Erkhemee0221";
  let idToken;

  before(() => {
    //cy.visit("/contents")
    cy.visit("/auth/signin");
    cy.get(selectors.usernameInput).type(username);
    cy.get(selectors.signInPasswordInput).type(password);
    cy.get("form").submit();
    // wait 3 sec to login
    cy.wait(3000);

    cy.getToken().then(idToken => {
      cy.request({
        method: "POST",
        url: apiUrl,
        headers: {
          authorization: "Bearer " + idToken
        },
        body: {
          operationName: "GET_USER",
          variables: {
            id: "075013e0-a3d7-45d1-9b7f-7ffe985196c9"
          },
          query:
            'query GET_USER($id: String!) {user: users_by_pk(id: $id) {    id    lastname    firstname    email    phone    gender    birthdate    roles_connection(where: {deleted_at: {_is_null: true}}, order_by: {role: {priority: desc}}) {      role {        name  __typename  } __typename    } files_connection(where: {type: {_eq: "avatar"}}, order_by: {created_at: desc_nulls_last}, limit: 1) { file_avatar: file_id file { bucket  __typename }  __typename } organizations: organizations_connection(where: {organization: {is_active: {_eq: true}, deleted_at: {_is_null: true}}}) {organization_id  __typename }  __typename}}'
        }
      }).then(resp => {
        expect(resp.status).to.eq(200);
      });
    });
  });

  // done..
  it("checking content rates and rate content", () => {
    // Контентын үнэлгээ
    // Үнэлгээний жагсаалт
    // Үнэлгээ өгөх

    cy.visit("/contents");
    cy.wait(3000);
    cy.get(":nth-child(3) > :nth-child(3) > .content-card > a > .cover > img")
      // .parent()
      .click()
      .then(content => {
        let comment = faker.lorem.sentence();
        cy.get("div.review-form-wrapper textarea")
          .clear()
          .type(comment);
        //cy.get('div.review-form-wrapper ul.ant-rate li:first').click()
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

        const categoryIdArray = content.prevObject[0].URL.split("/");
        const i = categoryIdArray.length;
        let contentId = categoryIdArray[i - 1];

        cy.request({
          method: "POST",
          url: apiUrl,
          headers: {
            authorization: "Bearer " + idToken
          },
          body: {
            operationName: "GET_CONTENT_REVIEWS_SUBSCRIPTION",
            variables: {
              id: contentId
            },
            query:
              "query GET_CONTENT_REVIEWS_SUBSCRIPTION($id: bigint!) {reviews(where: {content_id: {_eq: $id}}, order_by: {created_at: desc}) { id comment rate user {id  displayname  email  avatar  bucket  __typename } created_at __typename }}"
          }
        }).then(resp => {
          cy.get(
            ":nth-child(1) > :nth-child(3) > :nth-child(1) > .ant-col"
          ).each((item, index, list) => {
            if (index == 0) {
              cy.log("checking submitted comment added");
              expect(item[0].innerText).to.eq(comment);
            }
          });
        });
      });
  });

  it("checking suggested contents", () => {
    cy.visit("/contents");
    cy.wait(3000);
    cy.get(":nth-child(3) > :nth-child(3) > .content-card > a > .cover > img")
      .parent()
      .click()
      .then(content => {
        cy.request({
          method: "POST",
          url: apiUrl,
          headers: {
            authorization: "Bearer " + idToken
          },
          body: {
            query: "query GET_SUGGEST_CONTENTS{contents:random_contents{id}}"
          }
        }).then(resp => {
          expect(resp.status).to.eq(200);

          //token undefined

          // const len = resp.body.data.contents.length;
          // cy.get(
          //   'section.section.title-left div.ant-row-flex.item-list div.content-card > a[href^="/content"]'
          // ).should("have.length", len);
        });
      });
  });

  // done.
  it("checking content detail", () => {
    cy.visit("/contents?type=book");
    cy.wait(3000);

    cy.get(
      'div.ant-row-flex.item-list div.content-card > a[href^="/content"]:first'
    )
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
            query:
              "{vw_contents(where: {id: {_eq:" +
              id +
              "}}){ id average_rate bucket created_at description isbn key meta name organization payment_type price read tags_id type} contents(where:{id:{_eq:" +
              id +
              "}}){id authors_connection{author { lastname firstname id }}organizations {organization { name id}} views }}"
          }
        }).then(response => {
          let content = response.body.data;

          // Контент нэр (ok)
          cy.log("checking content name");
          cy.get("h1.title-white").then($item => {
            expect($item[0].innerText).to.eq(content.vw_contents[0].name);
          });

          // Зохиогч
          cy.log("checking content author");
          cy.get("a.esan-author-title").then($item => {
            const { author } = content.contents[0].authors_connection[0];
            expect($item[0].innerText.trim()).to.eq(
              `${author.firstname} ${author.lastname}`.trim()
            );
          });

          // Үнэ
          cy.log("checking content price");
          cy.get("h2.content-price").then($item => {
            let contentPrice = content.vw_contents[0].payment_type;
            if (contentPrice == "free") {
              expect($item[0].innerText).to.eq("Үнэгүй");
            } else if (contentPrice == "membership") {
              expect($item[0].innerText).to.eq("Гишүүнчлэл");
            } else {
              const urlArray = $item[0].innerText.split("₮");
              let pricetext = parseFloat(urlArray[0].replace(/,/g, ""));
              expect(pricetext).to.eq(content.vw_contents[0].price);
            }
          });
          // Sample pages
          // cy.get("div.slick-list img").each(($item, index, $list) => {
          //   //console.log($item);
          //   //console.log(content.vw_contents[0].meta.samplePage)
          // });
          // Хэвлэгдсэн огноо, Унших хугацаа, Уншсан тоо, Үзсэн тоо, Хуудас
          cy.get("ul.content-meta li").each(($item, index, $list) => {
            let text = $item[0].innerText;
            if (text.includes("Уншсан")) {
              let readCountArray = text.split(":");
              let read = parseFloat(readCountArray[1].replace(/,/g, ""));
              expect(content.vw_contents[0].read).to.eq(read);
            } else if (text.includes("Хэвлэгдсэн")) {
              let yearArray = text.split(":");
              let read = yearArray[1].replace(/,/g, "");
              let published = content.vw_contents[0].meta.publishedAt.split(
                "-"
              );
              expect(published[0] + " он").to.eq(read);
            } else if (text.includes("Үзсэн")) {
              let array = text.split(":");
              let view = parseFloat(array[1].replace(/,/g, ""));
              expect(content.contents[0].views).to.eq(view + 1);
            } else if (text.includes("Хуудас")) {
              let array = text.split(":");
              let page = parseFloat(array[1].replace(/,/g, ""));
              expect(content.vw_contents[0].meta.pageLength).to.eq(page);
            } else if (text.includes("Унших хугацаа")) {
              let array = text.split(":");
              let readTime = parseFloat(array[1].replace(/,/g, ""));

              let maxDuration = content.vw_contents[0].meta.maxDuration;
              let minDuration = content.vw_contents[0].meta.minDuration;

              let avarage = (maxDuration + minDuration) / 2;
              expect(avarage).to.eq(readTime);
            }
            //expect(response.body.data.search[index].id).to.eq(id)
          });
          // Худалдаж авах
          // Хадгалах
          // Ангилал
          // Жишээ хуудсууд
          // Санал болгох контент
        });
      });
  });

  // dev - iin content unshij bolohgui bgaa uchir tur hoishluulaw

  // it("checking read content", () => {
  //   // Login before test
  //   cy.visit("/auth/signin");
  //   cy.get(selectors.usernameInput).type(username);
  //   cy.get(selectors.signInPasswordInput).type(password);
  //   cy.get("form").submit();
  //   // wait 3 sec to login
  //   cy.wait(3000);
  //   cy.visit(/contents?payment_type=free");
  //   cy.wait(3000);
  //   cy.get(
  //     'div.ant-row-flex.item-list div.content-card > a[href^="/content"]:first'
  //   )
  //     .parent()
  //     .click()
  //     .then(content => {
  //       //const idArray = content.prevObject[0].href.split('/')
  //       //const i = idArray.length
  //       //const id = idArray[i - 1]
  //       cy.get('a.ant-btn i[aria-label="icon: read"]')
  //         .parent()
  //         .click();
  //     });
  // });
});

export const selectors = {
  // Auth component classes
  usernameInput: "input[id=username]",
  signInPasswordInput: "input[type=password]",
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  signOutButton: '[data-test="sign-out-button"]'
};
