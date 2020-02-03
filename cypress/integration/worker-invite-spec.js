const { MailSlurp } = require('mailslurp-client');
import faker from 'faker'
describe("Invite", () => {

    let idToken
    let hostUsername = "khosbayar@steppelink.mn"
    let hostPassword = "YHg#ce4TWX#ULE"
    let userid = "6bc624f9-9f8e-4056-8ada-828ca67c1215"

    const mailslurp = new MailSlurp({ apiKey: '6dd69adcd9c188c2a53c523225aaaf442310f04bf8bbd235ea54d47181c57a7e' });
    let emailAddress = "tuvshuumng@gmail.com";
    const password = faker.internet.password()
    let mailBoxId;

    beforeEach(function () {
        cy.deleteInboxes(mailslurp).then(() => { })
    })

    it("Урих ажилтныг эхлээд бүртгүүлэх хэрэгтэй", () => {
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

    it("Шинэ хэрэглэгчийн бүртгэлийг баталгаажуулах", () => {
        cy.wait(20000)
        let verificationCode;
        //let email = mailslurp.getEmail(mailBoxId);
        cy.getEmails(mailslurp, mailBoxId).then((result) => {
            if (result.length > 0) {
                cy.getEmail(mailslurp, result[0].id).then((emailBody) => {

                    console.log('email body:')
                    console.log(emailBody)

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

    it("Ажилтан урих", () => {
        cy.wait(3000)
        cy.visit('/auth/signin')
        cy.get(selectors.usernameInput).type(hostUsername);
        cy.get(selectors.signInPasswordInput).type(hostPassword);
        cy.get('form').submit()
        //wait 3 sec to login
        cy.wait(3000)
        cy.visit('/dashboard/worker')
        cy.wait(3000)
        cy.get('div.ant-row .ant-col.ant-col-md-16 button').click()
        cy.wait(3000)
        cy.get('input[id=InviteEmail]').clear().type(emailAddress)
        cy.get('div.ant-modal-footer button.ant-btn-primary').click()
        cy.wait(3000)
    })

    it("Урилга холбоосыг баталгаажуулах", () => {
        cy.visit('/auth/signin')
        cy.get('input[id=username]').type(emailAddress);
        cy.get('input[id=password]').type(password);
        cy.get('form').submit();
        cy.wait(3000)

        cy.getEmails(mailslurp, mailBoxId).then((result) => {
            if (result.length > 0) {
                cy.getEmail(mailslurp, result[0].id).then((emailBody) => {
                    let body = emailBody.body
                    // regex match for the confirmation code
                    // within the email body
                    //const r = /код: (\d{6})/g;

                    // extract the activation link with token
                    const urlRegex = '^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$'

                    activationLink = urlRegex.exec(body)[1]

                    console.log('activation url : ' + activationLink)

                    cy.visit(activationLink)

                    //cy.get('input[id=code]').type(verificationCode);
                    //cy.get('form').submit()
                    cy.wait(20000)
                })
            }
        })
    })
})

export const selectors = {
    // Auth component classes
    usernameInput: 'input[id=username]',
    signInPasswordInput: 'input[type=password]',
    signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    signOutButton: '[data-test="sign-out-button"]'
}