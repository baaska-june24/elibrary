const apiUrl = Cypress.config("apiUrl");
describe("checking payment methods", () => {
  //let idToken

  let username = "isiahaustin21@gmail.com";
  let password = "Erkhemee0221";
  let userid = "cb9a0de1-44a2-4eaf-9976-6cc7d28b1d80"; //"6bc624f9-9f8e-4056-8ada-828ca67c1215"

  beforeEach(function() {
    // Login before test
    cy.visit("/auth/signin");
    cy.wait(3000);
    cy.get(selectors.usernameInput).type(username);
    cy.get(selectors.signInPasswordInput).type(password);
    cy.get("form").submit();
    // wait 3 sec to login

    cy.wait(3000);

    // delete transactions

    //cy.visit("/plagiarism")
  });
  /*
      it("Сагсанд нэмэх", () => {
  
          cy.visit('/contents/240')
  
          cy.wait(3000)
  
          cy.get('.header.purple button.ant-btn.ant-btn-primary.ant-btn-round').click()
     
  
        
          let id 
  
          cy.getToken().then((idToken) => {
              
  
              cy.request({
                  method: 'POST',
                  url: 'https://graphql.dev.esan.mn/v1/graphql',
  
                  headers: {
                      authorization: 'Bearer ' + idToken
                  },
                  body: {
                      query: 'query contents {contents(where: {prices: {price: {_neq: "0"}}}, limit: 1) {id }}'
                  }
              }).then((resp) => {
  
  
                  console.log(resp)
  
                  id = resp.body.data.contents[0].id
  
                  console.log(resp)
  
                  //cy.visit('/contents/' + id + '')
  
                  //cy.visit('/contents/240')
  
  
  
                  // added
                  // then add to 
  
              })
  
              cy.wait(3000)
              cy.visit('/contents/' + id + '')
              cy.wait(3000)
              cy.get('.header.purple button.ant-btn.ant-btn-primary.ant-btn-round').click()
              
          })
         
      })
   */

  it("Сагсанд нэмэх, Төлбөр төлөх, И-Баримт шалгах", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: {
        query:
          'mutation deleteTransactions{ delete_payment_transactions(where: {user_id: {_eq: "686f1799-6cf2-46ee-8ee6-8143e1e50697"}}) { affected_rows  }  delete_payment_headers(where: {user_id: {_eq: "cb9a0de1-44a2-4eaf-9976-6cc7d28b1d80"}}) {affected_rows  }}'
      }
    }).then(lastTransition => {
      console.log("delete exiting transactions");
      console.log(lastTransition);

      cy.wait(10000);

      cy.visit("/contents/1642");

      cy.wait(3000);

      cy.get(".button-wrapper > .ant-btn-primary").click();

      cy.wait(3000);

      //cy.visit('/payment')

      cy.get('div.esan-navigation a[href^="/payment"]').click();

      cy.wait(50000);

      cy.get("button[type=submit]").click();

      cy.wait(10000);

      cy.log("getting last transition");

      cy.request({
        method: "POST",
        url: apiUrl,
        headers: {
          "x-hasura-admin-secret": "esansecret"
        },
        body: {
          query:
            "query myQuery {payment_transactions(order_by: {created_at: desc}) { user_id    id    status amount created_at payment_type }}"
        }
      }).then(lastTransition => {
        console.log(lastTransition);

        let transitionId = lastTransition.body.data.payment_transactions[0].id;

        console.log(transitionId);

        cy.log("buying content");

        // waiting to create transition (20 sec)
        cy.wait(20000);

        cy.request({
          method: "POST",
          url: apiUrl,
          headers: {
            "x-hasura-admin-secret": "esansecret"
          },
          body: {
            query:
              "mutation updateTransition {update_payment_transactions(where: {id: {_eq: " +
              transitionId +
              '}}, _set: {status: "success"}) { affected_rows}}'
          }
        }).then(sucessResult => {
          console.log("success result");
          console.log(sucessResult);
        });

        cy.wait(20000);

        // cy.get(".ebarimt svg").should("have.length", 1);
        //cy.request('')
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
