const { MailSlurp } = require('mailslurp-client');
import faker from 'faker'

describe("user signup and password recovery", () => {
  // we will set these with emaile2e
  const mailslurp = new MailSlurp({ apiKey: '6dd69adcd9c188c2a53c523225aaaf442310f04bf8bbd235ea54d47181c57a7e' });
  let emailAddress;
  let mailBoxId;
  const password = faker.internet.password()

  before(() => {
    //delete existing inboxes (for free usage allows 1 mailbox https://app.mailslurp.com/)
    cy.deleteInboxes(mailslurp).then(() => { })
  })

  it("create a new email inbox and signup form", () => {
    // create a new email inbox that returns an id and an address
    cy.newEmailAddress(mailslurp).then((result) => {
      emailAddress = result.emailAddress;
      mailBoxId = result.id;
      expect(emailAddress).to.eq(result.emailAddress);
      // sign up page
      cy.visit("/auth/signup");
      cy.get('input[id=username]').clear().type(emailAddress);
      cy.get('input[id=password]').clear().type(password);
      cy.get('input[id=passwordConfirm]').clear().type(password);
      // Agreement
      cy.get('[type="checkbox"]').check()
      cy.get('form').submit()
      cy.wait(20000)
    })
  });

  it(
    "sends a verification code which can be " +
    "received by user, extracted, and submitted",
    () => {

      let verificationCode;
      //let email = mailslurp.getEmail(mailBoxId);
      cy.getEmails(mailslurp, mailBoxId).then((result) => {
        if (result.length > 0) {
          cy.getEmail(mailslurp, result[0].id).then((emailBody) => {
            let body = emailBody.body
            // regex match for the confirmation code
            // within the email body
            const r = /код: (\d{6})/g;
            // extract the verication code
            verificationCode = r.exec(body)[1]
            cy.get('input[id=code]').type(verificationCode);
            cy.get('form').submit()
            cy.wait(20000)
          })
        }
      })
    })

  it("successfully verifies a user" + "and allows that user to login", () => {
    cy.visit('/auth/signin')
    cy.get('input[id=username]').type(emailAddress);
    cy.get('input[id=password]').type(password);
    cy.get('form').submit();
    cy.wait(3000)
    cy.visit("my/profile")
    cy.location("pathname").should("eq", "/my/profile");
  })

  it("testing logout function", () => {
    cy.get("span.ant-avatar").click();
    cy.get("ul.ant-dropdown-menu li:last-child").click().then((liChild) => {
      liChild[0].click()
    })
  })

  it("testing password recovery module", () => {

    cy.visit("/auth/signin")
    cy.wait(1000)
    //cy.get('.ant-btn.ant-btn-link.ant-btn-round.ant-btn-sm button').click();
    // Нууц үгээ мартсан button
    cy.get('form button.ant-btn-link').click();

    cy.wait(1000)

    cy.get('input[id=username]').clear().type(emailAddress);
    cy.get('button[type=submit]').click();

    cy.visit('auth/recover?username=' + emailAddress)

    let resetPassword = faker.internet.password()

    let verificationOfResetPassword // get verification here

    cy.wait(20000) // wait to get email
    cy.getEmails(mailslurp, mailBoxId).then((result) => {
      if (result.length > 0) {
        cy.getEmail(mailslurp, result[0].id).then((emailBody) => {
          let body = emailBody.body
          // regex match for the confirmation code
          // within the email body
          const r = /код: (\d{6})/g;
          // extract the verication code
          verificationOfResetPassword = r.exec(body)[1]
          //cy.get('input[id=code]').type(verificationCode);
          //cy.get('form').submit()
          cy.get('input[id=code]').clear().type(verificationOfResetPassword);
          cy.get('input[id=new_password]').clear().type(resetPassword);
          cy.get('input[id=passwordConfirm]').clear().type(resetPassword);
          cy.get('button[type=submit]').click();
          cy.wait(20000)
          // should redirect to login page

          cy.visit('/auth/signin')
          cy.get('input[id=username]').type(emailAddress);
          cy.get('input[id=password]').type(resetPassword);
          cy.get('form').submit();
          cy.wait(3000)
          cy.visit("my/profile")
          cy.location("pathname").should("eq", "/my/profile");
        })
      }
    })
  })

  after(() => {
    cy.deleteInboxes(mailslurp).then(() => { })
    //cy.deactivate()
    //cy.logout()
  })
});