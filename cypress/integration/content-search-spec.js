
const apiUrl = Cypress.config('apiUrl')

describe("Check pages", () => {
    before(() => {
        cy.visit("/")
    })

    it("checking content search", () => {

        cy.get('.esan-search-input-wrapper input').focus().clear().type('test')

        cy.get('.esan-search-input-wrapper button').click()

        cy.wait(3000)

        cy.request({
            method: 'POST',
            url: apiUrl,
            body: {
                'operationName': 'CONTENT_SEARCH',
                'variables': {
                    'limit': 18,
                    'where': {
                        'query': 'test'
                    }
                },
                'query': 'query CONTENT_SEARCH($where: SearchWhere!, $limit: Int, $offset: Int, $order_by: [OrderBy]) {  search(where: $where, limit: $limit, offset: $offset, order_by: $order_by) {    id    name    average_rate    cover    type    published_at    price    payment_type    created_at    __typename  }}'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            const len = response.body.data.search.length
            cy.get('div.ant-row-flex.item-list div.content-card > a[href^="/content"]')
                .should('have.length', len)
                .each(($item, index, $list) => {
                    const urlArray = $item[0].href.split('/')
                    const i = urlArray.length
                    const id = parseFloat(urlArray[i - 1].replace(/,/g, ''))
                    expect(response.body.data.search[index].id).to.eq(id)
                })
        })
    })

    it("checking content filter", () => {

        cy.visit("/contents")

        cy.get('ul.filter-list li:first').click().then((item) => {
            cy.wait(3000)
            const categoryIdArray = item.prevObject[0].URL.split('=')
            const i = categoryIdArray.length
            cy.request({
                method: 'POST',
                url: apiUrl,
                body: {
                    'operationName': 'CONTENT_SEARCH',
                    'variables': {
                        'limit': 18,
                        'where': {
                            'category_id': categoryIdArray[i - 1]
                        }
                    },
                    'query': 'query CONTENT_SEARCH($where: SearchWhere!, $limit: Int, $offset: Int, $order_by: [OrderBy]) {  search(where: $where, limit: $limit, offset: $offset, order_by: $order_by) {    id    name    average_rate    cover    type    published_at    price    payment_type    created_at    __typename  }}'
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                console.log(response)
                const len = response.body.data.search.length
                cy.get('div.ant-row-flex.item-list div.content-card > a[href^="/content"]')
                    .should('have.length', len)
                    .each(($item, index, $list) => {
                        const urlArray = $item[0].href.split('/')
                        const i = urlArray.length
                        const id = parseFloat(urlArray[i - 1].replace(/,/g, ''))
                        expect(response.body.data.search[index].id).to.eq(id)
                    })
            })
        })
    })

    it("checking content sorting", () => {
        cy.visit("/contents")

        cy.get('a.ant-dropdown-link').click()

        cy.get('ul.ant-dropdown-menu li:first').click().then((item) => {
            item[0].click()
            cy.wait(3000)
            cy.request({
                method: 'POST',
                url: apiUrl,
                body: {
                    operationName: "CONTENT_SEARCH",
                    variables: {
                        limit: 18,
                        where: {},
                        order_by: [
                            {
                                created_at: "desc"
                            }
                        ]
                    },
                    'query': 'query CONTENT_SEARCH($where: SearchWhere!, $limit: Int, $offset: Int, $order_by: [OrderBy]){search(where: $where, limit: $limit, offset: $offset, order_by: $order_by){id name average_rate cover type published_at price payment_type created_at __typename}}'
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                const len = response.body.data.search.length
                cy.get('div.ant-row-flex.item-list div.content-card > a[href^="/content"]')
                    .should('have.length', len)
                    .each(($item, index, $list) => {
                        const urlArray = $item[0].href.split('/')
                        const i = urlArray.length
                        const id = parseFloat(urlArray[i - 1].replace(/,/g, ''))
                        expect(response.body.data.search[index].id).to.eq(id)
                    })
            })
        })
    })
})