import faker from 'faker'

//var Auth = require('@aws-amplify/auth').default;
import Auth from "@aws-amplify/auth";

describe('my san:', function () {

    let idToken;
    let username = "khosbayar@steppelink.mn"
    let password = "YHg#ce4TWX#ULE"
    let userId = "6bc624f9-9f8e-4056-8ada-828ca67c1215"

    beforeEach(function () {

        // Login before test
        cy.visit('https://esan.mn/auth/signin')
        cy.get(selectors.usernameInput).type(username);
        cy.get(selectors.signInPasswordInput).type(password);
        cy.get('form').submit()
        // wait 2 sec to login
        cy.getIdToken().then((idTokenResult) => {
            idToken = idTokenResult;
            cy.log('token id : ' + idTokenResult);
        })
    });

    it('my library', () => {
        cy.visit("https://esan.mn/my/library")
        cy.request({
            method: 'POST',
            url: 'https://graphql.esan.mn/v1/graphql',
            headers: {
                authorization: 'Bearer ' + idToken
            },
            body: {
                'operationName': 'GET_PAID_CONTENT_LIST',
                'variables': {
                    'where': {
                        'header': {
                            'details': {
                                'content_id': {
                                    _is_null: false
                                }
                            }
                        },
                        'status': {
                            _eq: "success"
                        },
                        'user_id': {
                            _eq: null
                        }
                    }
                },
                'query': 'query GET_PAID_CONTENT_LIST($where: payment_transactions_bool_exp) {transactions: payment_transactions(where: $where) {  header {  details(where: {content_id: {_is_null: false}}) { content { ...ContentCard  __typename  }  __typename }  __typename}  __typename }}fragment ContentCard on contents {id name files(where: {type: {_eq: "cover"}}) { file_id: file_id    file {bucket  __typename}    __typename  }  created_at  prices { price payment_type   __typename  }  is_published  meta  __typename}'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            const len = resp.body.data.transactions.length
            cy.get('div.ant-row-flex.item-list a[href^="/content"]')
                .should('have.length', len)
                .each(($item, index, $list) => {
                    const urlArray = $item[0].href.split('/')
                    const i = urlArray.length
                    const id = parseFloat(urlArray[i - 1].replace(/,/g, ''))
                    expect(resp.body.data.transactions[index].header.details[0].content.id).to.eq(id)
                })
        })
    });

    it('my bookmarked contents', () => {
        cy.visit("https://esan.mn/my/bookmarks")
        //cy.get('a[href="/my/bookmarks"]').click();
        cy.wait(3000)
        cy.request({
            method: 'POST',
            url: 'https://graphql.esan.mn/v1/graphql',
            headers: {
                authorization: 'Bearer ' + idToken
            },
            body: {
                'query': 'query GET_BOOKMARKED_CONTENTS {bookmarks( order_by: { created_at: desc } where: { content: { _and: { is_published: { _eq: true }, deleted_at: { _is_null: true } } }}) {content {id name files(where: { type: { _eq: "cover" } }) {file_id: file_id file {bucket}}reviews_aggregate { aggregate {avg { rate } } } prices(where: { is_active: { _eq: true } }) { price payment_type}}}}'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            const len = resp.body.data.bookmarks.length
            cy.get('div.ant-row a[href^="/content"]')
                .should('have.length', len)
                .each(($item, index, $list) => {
                    const urlArray = $item[0].href.split('/')
                    const i = urlArray.length
                    const id = parseFloat(urlArray[i - 1].replace(/,/g, ''))
                    expect(resp.body.data.bookmarks[index].content.id).to.eq(id)
                })
        })
    });

    it('my reads', () => {
        cy.visit("https://esan.mn/my/reads")
        //cy.visit("/my/reads")
        cy.request({
            method: 'POST',
            url: 'https://graphql.esan.mn/v1/graphql',
            headers: {
                authorization: 'Bearer ' + idToken
            },
            body: {
                'query': 'query GET_USERS_CONTENTS{map_users_contents_status(order_by:{updated_at: desc}){content_id current_page max_page  content { ...ContentCard pageLength: meta(path: "pageLength") __typename} __typename  }}fragment ContentCard on contents {  id  name  files(where: {type: {_eq: "cover"}}) {file_id: file_id file {bucket __typename }  __typename}created_at  prices{price    payment_type    __typename  }  is_published  meta __typename}'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            console.log(resp)

            const len = resp.body.data.map_users_contents_status.length
            cy.get('div.ant-row a[href^="/content"]')
                .should('have.length', len)
                .each(($item, index, $list) => {
                    const urlArray = $item[0].href.split('/')
                    const i = urlArray.length
                    const id = parseFloat(urlArray[i - 1].replace(/,/g, ''))
                    expect(resp.body.data.map_users_contents_status[index].content.id).to.eq(id)
                })
        })
    });

    it("my history", () => {
        cy.visit("https://esan.mn/my/history")
        cy.request({
            method: 'POST',
            url: 'https://graphql.esan.mn/v1/graphql',
            headers: {
                authorization: 'Bearer ' + idToken
            },
            body: {
                'operationName': "GET_TRANSACTION_USER",
                'variables': {
                    'where': {
                        'user_id': {
                            '_eq': userId
                        },
                        'status': {
                            '_eq': "success"
                        }
                    }
                },
                'query': 'query GET_TRANSACTION_USER($where: payment_transactions_bool_exp, $limit: Int, $offset: Int, $order_by: [payment_transactions_order_by!]) { payment_transactions(where: $where, limit: $limit, offset: $offset, order_by: $order_by) {id key: id  meta(path: "noatus") created_at  payment_type amount  header { details { content { id name oldcover: meta(path: "cover") files(where: {type: {_eq: "cover"}}) { file_id: file_id file { bucket __typename } __typename } prices { price payment_type __typename  } is_published __typename } membership {id name __typename } package { id name __typename } id qty price total   __typename} __typename}  __typename}}'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            const len = resp.body.data.payment_transactions.length
            cy.get('table tbody tr')
                .should('have.length', len)
            //.each(($item, index, $list) => {
            //const urlArray = $item[0].href.split('/')
            //const i = urlArray.length
            //const id = parseFloat(urlArray[i - 1].replace(/,/g, ''))
            //expect(resp.body.data.map_users_contents_status[index].content.id).to.eq(id)
            //})
            console.log(resp)
        })
    })
});

export const selectors = {
    // Auth component classes
    usernameInput: 'input[id=username]',
    signInPasswordInput: 'input[type=password]',
    signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    signOutButton: '[data-test="sign-out-button"]'
}