import "cypress-file-upload";
const apiUrl = Cypress.config("apiUrl");
// testing on esan.mn (local doesn't work)
describe("Хуулбар шалгуур", () => {
  let idToken;

  let username = "isiahaustin21@gmail.com";
  let password = "Erkhemee0221";
  let userid = "686f1799-6cf2-46ee-8ee6-8143e1e50697";

  beforeEach(function() {
    // Login before test
    cy.visit("/auth/signin");
    cy.get(selectors.usernameInput).type(username);
    cy.get(selectors.signInPasswordInput).type(password);
    cy.get("form").submit();
    // wait 3 sec to login
    cy.wait(3000);

    //cy.visit("/plagiarism")
  });

  it("Хуулбар шалгуурын түүх", () => {
    cy.visit("/plagiarism");

    cy.get(".ant-col-13.ant-col-offset-5 ul.ant-menu li.ant-menu-item").each(
      (item, index, $list) => {
        if (index == 2) {
          item[0].click();
          //   cy.getIdToken().then(idToken => {
          //     cy.request({
          //       method: "POST",
          //       url: apiUrl,
          //       headers: {
          //         authorization: "Bearer " + idToken
          //       },
          //       body: {
          //         operationName: "GET_PLAGIARISM_HISTORY",
          //         variables: {
          //           userID: userid
          //         },
          //         query:
          //           'query GET_PLAGIARISM_HISTORY($userID: String!) { plagiarism_search_requests(where: {status: {_eq: "done"}, user_id: {_eq: $userID}}, order_by: {created_at: desc}) { id search_text status created_at type __typename }}'
          //       }
          //     }).then(resp => {
          //       expect(resp.status).to.eq(200);
          //   cy.get("tbody td").each(($item, index, $list) => {
          //     let rowIndex = index % 5;
          //     let columnIndex = (index - rowIndex) / 5;

          //     if (rowIndex == 1) {
          //       let rowText = $item[0].innerText.split(".");
          //       expect(
          //         resp.body.data.plagiarism_search_requests[
          //           columnIndex
          //         ].search_text.trim()
          //       ).to.contain(rowText[0].trim());
          //     }

          //     if (rowIndex == 2) {
          //       let type = $item[0].innerText;
          //       expect(
          //         resp.body.data.plagiarism_search_requests[columnIndex].type
          //       ).to.contain(type);
          //     }
          //   });
          // });
          //   });
        }
      }
    );
    //ant-menu g-menu ant-menu-light ant-menu-root ant-menu-horizontal
  });

  it("Текстээс хуулбар шалгах", () => {
    ////Гэхдээ энэхүү үүргийн гүйцэтгэл нь харилцааных онцлогоос хамаарч хоёр талтай.

    let text =
      "Гэхдээ энэхүү үүргийн гүйцэтгэл нь харилцааных онцлогоос хамаарч хоёр талтай";

    cy.visit("/plagiarism");

    cy.get("textarea.ant-input")
      .clear()
      .type(text);

    cy.get(".textarea button").click();

    cy.wait(3000);

    // cy.getIdToken().then(idToken => {
    //   cy.request({
    //     method: "POST",
    //     url: apiUrl,
    //     headers: {
    //       authorization: "Bearer " + idToken
    //     },
    //     body: {
    //       query:
    //         'query{plagiarism_search_requests(limit: 1 order_by: {created_at: desc}, where:{user_id: {_eq: "6bc624f9-9f8e-4056-8ada-828ca67c1215"}}) {id status}}'
    //     }
    //   }).then(searchRequest => {
    //     let id = searchRequest.body.data.plagiarism_search_requests[0].id;

    //     cy.getSearchResult(id, idToken).then(result => {
    //       let len = result.body.data.plagiarism_request.results.length;

    //       if (len > 0) {
    //         let contentId =
    //           result.body.data.plagiarism_request.results[0].content_id;
    //         cy.get('.ant-modal-body a[href^="contents"]')
    //           //.should('have.length', len)
    //           .each(($item, index, $list) => {
    //             const urlArray = $item[0].href.split("/");
    //             const i = urlArray.length;
    //             const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
    //             expect(contentId).to.eq(id);
    //           });
    //       }
    //     });
    //   });
    // });
  });

  //   it("Файлаас хуулбар шалгах", () => {
  //     cy.visit("https://esan.mn/plagiarism");
  //     cy.get(".ant-col-13.ant-col-offset-5 ul.ant-menu li.ant-menu-item").each(
  //       (item, index, $list) => {
  //         if (index == 1) {
  //           item[0].click();

  //           cy.fixture("filesample.docx", "binary").then(myFile => {
  //             const file = new File([myFile], "filesample.docx", {
  //               type:
  //                 "application/application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  //             });

  //             console.log(file);

  //             cy.get("div.ant-upload.ant-upload-drag").trigger("drop", {
  //               dataTransfer: {
  //                 files: [file]
  //               }
  //             });
  //           });

  //           cy.wait(10000);

  //           cy.getIdToken().then(idToken => {
  //             cy.request({
  //               method: "POST",
  //               url: "https://graphql.esan.mn/v1/graphql",
  //               headers: {
  //                 authorization: "Bearer " + idToken
  //               },
  //               body: {
  //                 query:
  //                   'query{plagiarism_search_requests(limit: 1 order_by: {created_at: desc}, where:{user_id: {_eq: "6bc624f9-9f8e-4056-8ada-828ca67c1215"}}) {id status}}'
  //               }
  //             }).then(searchRequest => {
  //               let id = searchRequest.body.data.plagiarism_search_requests[0].id;

  //               cy.getSearchResult(id, idToken).then(result => {
  //                 let len = result.body.data.plagiarism_request.results.length;

  //                 if (len > 0) {
  //                   let contentId =
  //                     result.body.data.plagiarism_request.results[0].content_id;
  //                   cy.get('.ant-modal-body a[href^="contents"]')
  //                     //.should('have.length', len)
  //                     .each(($item, index, $list) => {
  //                       const urlArray = $item[0].href.split("/");
  //                       const i = urlArray.length;
  //                       const id = parseFloat(urlArray[i - 1].replace(/,/g, ""));
  //                       expect(contentId).to.eq(id);
  //                     });
  //                 }
  //               });
  //             });
  //           });

  //           /*
  //                 cy.get('input[type=file]').then((inputFile) => {
  //                     console.log('input file:')
  //                     console.log(inputFile)
  //                 })

  //                 cy.fixture('test.doc', 'base64').then(fileContent => {
  //                     cy.get('input[type=file]').upload({
  //                         fileContent,
  //                         fileName: 'test.doc',
  //                         mimeType: 'application/application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  //                     });
  //                 })*/
  //           /*
  //                                 cy.fixture('test.docx', 'utf8').then(fileContent => {

  //                                     console.log('file content:')

  //                                     console.log(fileContent)

  //                                     cy.get('input[type=file]').upload({
  //                                         fileContent,
  //                                         fileName: 'test.docx',
  //                                         mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template'
  //                                     });
  //                                 })*/

  //           //
  // }
  //   }
  // );
  //   });
});

export const selectors = {
  // Auth component classes
  usernameInput: "input[id=username]",
  signInPasswordInput: "input[type=password]",
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  signOutButton: '[data-test="sign-out-button"]'
};
