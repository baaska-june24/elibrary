import faker from "faker";
import "cypress-file-upload";

const apiUrl = Cypress.config("apiUrl");

describe("my profile:", function() {
  let token;
  const userId = "075013e0-a3d7-45d1-9b7f-7ffe985196c9";
  const username = "tuvshuumng@gmail.com";
  const password = "PassWd123";

  beforeEach(function() {
    // Login before test
    cy.visit("/auth/signin");
    cy.get(selectors.usernameInput).type(username);
    cy.get(selectors.signInPasswordInput).type(password);
    cy.get("form").submit();
    // wait 3 sec to login
    cy.wait(3000);

    cy.visit("/my/profile");
  });

  describe("Edit my profile:", () => {
    it("allows a user to edit profile", () => {
      let firstname = faker.name.findName();
      let lastname = faker.name.findName();
      let phone = faker.random.number({ min: 111111111, max: 999999999 });
      let birthday = faker.date.past();
      let year = birthday.getFullYear();
      let month = birthday.getMonth();
      let day = birthday.getDay();
      let sex = faker.random.boolean();
      cy.get("input[id=firstname]")
        .clear()
        .type(firstname);
      cy.get("input[id=lastname]")
        .clear()
        .type(lastname);
      cy.get("input[id=phone]")
        .clear()
        .type(phone);

      let dob;
      if (month < 10) {
        if (day < 10) {
          dob = year + "-0" + month + "-0" + day;
        } else {
          dob = year + "-0" + month + "-" + day;
        }
      } else {
        if (day < 10) {
          dob = year + "-" + month + "-0" + day;
        } else {
          dob = year + "-" + month + "-" + day;
        }
      }

      //cy.get('input.ant-calendar-picker-input.ant-input').click()

      // Open calendar popup.
      cy.get("span[id=birthdate]").click();
      cy.get("input.ant-calendar-input ")
        .clear()
        .type(dob);
      cy.get(".ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10 h3").click();

      // submit form
      cy.get(
        ".ant-form.ant-form-horizontal.profile-form button[type=submit]"
      ).click();

      // wait to submit
      cy.wait(20000);

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
          let user = resp.body.data.user;
          expect(firstname).to.eq(user.firstname); // check firstname
          expect(lastname).to.eq(user.lastname); // check lastname
          let userphone = parseFloat(user.phone.replace(/,/g, ""));
          expect(phone).to.eq(userphone); // check phonumber

          //expect(year).to.eq(user.birthday.year)

          //let bd = Cypress.moment(user.birthday)

          //const now1 = new Date(user.birthday)
        });
      });
    });

    it("allows a user to change profile image (jpeg)", () => {
      cy.log("testing jpeg image");
      //cy.visit("/my/profile")

      cy.getToken().then(idToken => {
        cy.fixture("image.jpg", "base64").then(fileContent => {
          cy.get("input[type=file]").upload({
            fileContent,
            fileName: "image.jpg",
            mimeType: "application/json"
          });
        });

        cy.get(".avatar button[type=submit]").click();

        cy.wait(20000);

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
          let profile = resp.body.data.user.files_connection[0].file_avatar;
          const extensionArray = profile.split(".");
          const ex = extensionArray[1].replace(/,/g, "");
          expect("jpg").to.eq(ex);
        });
      });
    });

    it("allows a user to change profile image (png)", () => {
      cy.log("testing png image");
      cy.getToken().then(idToken => {
        cy.fixture("image.png", "base64").then(fileContent => {
          cy.get("input[type=file]").upload({
            fileContent,
            fileName: "image.png",
            mimeType: "application/json"
          });
        });

        cy.get(".avatar button[type=submit]").click();

        cy.wait(20000);

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
          let profile = resp.body.data.user.files_connection[0].file_avatar;
          const extensionArray = profile.split(".");
          const ex = extensionArray[1].replace(/,/g, "");
          expect("png").to.eq(ex);
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
