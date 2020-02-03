// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const { MailSlurp } = require("mailslurp-client");
//var Auth = require('@aws-amplify/auth').default;
import Auth from "@aws-amplify/auth";

Cypress.Commands.add("requestjwt", (method, query) => {
  cy.getToken().then(idToken => {
    return cy
      .request({
        method: "POST",
        url: "https://graphql.dev.esan.mn/v1/graphql",
        headers: {
          authorization: "Bearer " + idToken
        },
        body: {
          query
        }
      })
      .then(({ response }) => {
        return response;
      });
  });
});

Cypress.Commands.add("deleteInboxes", mailslurp => {
  let inboxes = mailslurp.getInboxes();
  inboxes.then(inbox => {
    console.log("inbox");
    console.log(inbox);
    if (inbox.length > 0) {
      let mailBoxId = inbox[0].id;
      console.log("deleting inbox : id: " + mailBoxId);
      return mailslurp.deleteInbox(mailBoxId);
    }
  });
});

Cypress.Commands.add("newEmailAddress", mailslurp => {
  return mailslurp.createInbox();
});

Cypress.Commands.add("getEmails", (mailslurp, id) => {
  return mailslurp.getEmails(id);
});

Cypress.Commands.add("getEmail", (mailslurp, id) => {
  return mailslurp.getEmail(id);
});

Cypress.Commands.add("getLastEmail", email => {
  function requestEmail() {
    return cy
      .request({
        method: "GET",
        url: "https://graphql.dev.esan.mn/v1/graphql",
        headers: {
          "content-type": "application/json"
        },
        qs: {
          email
        },
        json: true
      })
      .then(({ body }) => {
        if (body) {
          return body;
        }

        // If body is null, it means that no email was fetched for this address.
        // We call requestEmail recursively until an email is fetched.
        // We also wait for 300ms between each call to avoid spamming our server with requests
        cy.wait(300);

        return requestEmail();
      });
  }

  return requestEmail();
});

// user for local test
Cypress.Commands.add("getToken", () => {
  function tryGetCookie() {
    return cy.getCookie("esan_mn_token_store").then(result => {
      if (result) {
        return result.value;
      }
      cy.wait(3000);
      return tryGetCookie();
    });
  }
  return tryGetCookie();
});

Cypress.Commands.add("getSearchResult", (id, idToken) => {
  function tryGetResult() {
    return cy
      .request({
        method: "POST",
        url: "https://graphql.esan.mn/v1/graphql",
        headers: {
          authorization: "Bearer " + idToken
        },
        body: {
          operationName: "SEARCH_RESULT",
          variables: {
            id: id
          },
          query:
            'query SEARCH_RESULT($id: bigint!) { plagiarism_request: plagiarism_search_requests_by_pk(id: $id) { status token percent results(order_by: {page: asc_nulls_last, created_at: asc}) { prev_sentence next_sentence page content_id percent status sentence content { id name authors_connection { author { firstname lastname __typename } __typename } meta(path: "publishedAt") __typename } __typename } __typename }}'
        }
      })
      .then(result => {
        let status = result.body.data.plagiarism_request.status;
        if (status == "done") {
          return result;
        }
        cy.wait(5000);
        return tryGetResult();
      });
  }
  return tryGetResult();
});

// user for Esan.mn test
Cypress.Commands.add("getIdToken", () => {
  function tryGetCookie() {
    return cy
      .getCookie(
        "CognitoIdentityServiceProvider.4471tjirakcmanomec1sje86ii.6bc624f9-9f8e-4056-8ada-828ca67c1215.idToken"
      )
      .then(result => {
        if (result) {
          return result.value;
        }
        cy.wait(3000);
        return tryGetCookie();
      });
  }
  return tryGetCookie();
});
Cypress.Commands.add("login", () => {
  cy.visit("/auth/signin");
  cy.get("input#username").type("isiahaustin21@gmail.com");
  cy.get("input#password").type("Erkhemee0221");
  cy.get("form").submit();

  cy.wait(5000);
});

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("importImage", fileName => {
  cy.fixture(fileName).then(fileContent => {
    cy.get("input#cover").upload({
      fileContent,
      fileName,
      mimeType: "image/png"
    });
  });
});

Cypress.Commands.add("importAvatar", fileName => {
  cy.fixture(fileName).then(fileContent => {
    cy.get("input#avatar").upload({
      fileContent,
      fileName,
      mimeType: "image/png"
    });
  });
});

// Cypress.Commands.add("getToken", () => {
//   function tryGetCookie() {
//     return cy.getCookie("esan_mn_token_store").then(result => {
//       if (result) {
//         return result.value;
//       }
//       cy.wait(3000);
//       return tryGetCookie();
//     });
//   }
//   return tryGetCookie();
// });

// Cypress.Commands.add("getIdToken", () => {
//   function tryGetCookie() {
//     return cy
//       .getCookie(
//         "CognitoIdentityServiceProvider.4471tjirakcmanomec1sje86ii.6bc624f9-9f8e-4056-8ada-828ca67c1215.idToken"
//       )
//       .then(result => {
//         if (result) {
//           return result.value;
//         }
//         cy.wait(3000);
//         return tryGetCookie();
//       });
//   }
//   return tryGetCookie();
// });

/// attach word document
Cypress.Commands.add(
  "attachmentRequest",
  (method, attachmmentAPiUrl, body, xSiteUploadHeader) => {
    return cy
      .server()
      .route(method, attachmmentAPiUrl)
      .as("uploadFile")
      .window()
      .then(win => {
        const xhr = new win.XMLHttpRequest();
        xhr.open(method, attachmmentAPiUrl);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-Site", xSiteUploadHeader);
        xhr.send(body);
      })
      .wait("@uploadFile"); // this is important to wait till the send is successful before next test run starts
  }
);

Cypress.Commands.add("uploadAttachment", (url, xSite) => {
  let body = "";
  const method = "PUT";
  const attachmmentAPiUrl = url;
  const fileName = "image.png";
  const xSiteUploadHeader = xSite;

  cy.fixture(fileName, "base64").then(file => {
    body = JSON.stringify({
      attachment: "data:image/png;base64," + file,
      filename: fileName
    });
    cy.attachmentRequest(
      method,
      attachmmentAPiUrl,
      body,
      xSiteUploadHeader
    ).then(resp => {
      expect(resp.status).to.eq(204);
    });
  });
});
