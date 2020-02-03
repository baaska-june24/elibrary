import moment from "moment";
import numeral from "numeral";
const apiUrl = Cypress.config("apiUrl");

describe("Sales", () => {
  beforeEach(() => {
    cy.log("Visiting Dashboard");
    cy.restoreLocalStorage();
  });
  it("Visiting sales list", () => {
    cy.login();
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-col-md-6 > .ant-menu > :nth-child(6) > a").click();
    cy.visit("/dashboard/sales");
    cy.get(".ant-select-arrow > .anticon > svg").type("Гүнсэн");
    cy.get(".ant-select-dropdown-menu-item").click();
    cy.wait(3000);
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: { query: sum }
    }).then(result => {
      expect(result.status).to.eq(200);
      const data =
        result.body.data.payment_vw_paid_contents_aggregate.aggregate.sum.total;

      cy.get(":nth-child(1) > .payment_card > h2").then(total => {
        const sum_total = parseInt(total[0].textContent.replace(/,/g, ""));
        expect(sum_total).to.eq(data);
      });
    });
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: { query: sum_month }
    }).then(result => {
      expect(result.status).to.eq(200);
      const monthData =
        result.body.data.payment_vw_paid_contents_aggregate.aggregate.sum.total;
      cy.get(":nth-child(2) > .payment_card > h2").then(month => {
        const sumMonth = parseInt(month[0].textContent.replace(/,/g, ""));
        expect(sumMonth).to.eq(monthData || 0);
      });
    });
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: { query: sum_week }
    }).then(result => {
      expect(result.status).to.eq(200);
      const weekData =
        result.body.data.payment_vw_paid_contents_aggregate.aggregate.sum.total;
      cy.get(":nth-child(3) > .payment_card > h2").then(week => {
        const sumWeek = parseInt(week[0].textContent.replace(/,/g, ""));
        expect(sumWeek).to.eq(weekData || 0);
      });
    });
  });

  it("Detail list", () => {
    cy.visit("/dashboard/sales");
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: { query: contents }
    }).then(result => {
      expect(result.status).to.eq(200);
      const data = result.body.data.payment_vw_paid_contents[0];
      const len = result.body.data.payment_vw_paid_contents.length;
      cy.get('[data-row-key="0"] > :nth-child(1)').then(nameRes => {
        expect(nameRes[0].textContent).to.eq(data.name);
      });
      cy.get("[data-row-key] > :nth-child(1)").should("have.length", len);
      cy.get('[data-row-key="0"] > :nth-child(2)').then(income => {
        const total = parseInt(income[0].textContent);
        expect(total).to.eq(data.total);
      });
      cy.get('[data-row-key="0"] > .ant-table-column-has-actions').then(
        date => {
          const dateData = moment(data.created_at).format(
            "YYYY/MM/DD HH:mm:ss"
          );
          expect(date[0].textContent).to.eq(dateData);
        }
      );
    });
  });

  it("Checking my wallet", () => {
    cy.visit("/dashboard");
    cy.url("include", "/dashboard");
    cy.get(".ant-col-md-6 > .ant-menu > :nth-child(6) > a").click();
    cy.visit("/dashboard/sales");
    cy.get(".ant-select-arrow > .anticon > svg").type("Гүнсэн");
    cy.get(".ant-select-dropdown-menu-item").click();
    cy.wait(3000);
    cy.get(".info2 > a > h4").click();
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "x-hasura-admin-secret": "esansecret"
      },
      body: { query: balance }
    }).then(result => {
      expect(result.status).to.eq(200);
      const data = result.body.data.payment_vw_organizations_balance[0];

      cy.get(":nth-child(2) > div > p").then(total => {
        expect(total[0].textContent).to.eq(
          numeral(parseInt(data.total_amount))
            .format("0,0 $")
            .replace("$", "₮")
        );
      });
      cy.get(":nth-child(3) > div > p").then(afterVat => {
        expect(afterVat[0].textContent).to.eq(
          numeral(parseInt(data.after_vat))
            .format("0,0 $")
            .replace("$", "₮")
        );
      });
      cy.get(
        '[style="margin-left: -12px; margin-right: -12px; margin-top: 20px;"] > :nth-child(1) > div > p'
      ).then(esan => {
        expect(esan[0].textContent).to.eq(
          numeral(parseInt(data.esan_amount))
            .format("0,0 $")
            .replace("$", "₮")
        );
      });
      cy.get(
        '[style="margin-left: -12px; margin-right: -12px; margin-top: 20px;"] > :nth-child(2) > div > p'
      ).then(withdraw => {
        expect(withdraw[0].textContent).to.eq(
          numeral(parseInt(data.total_withdrawed_amount))
            .format("0,0 $")
            .replace("$", "₮")
        );
      });
      cy.get(
        '[style="margin-left: -12px; margin-right: -12px; margin-top: 20px;"] > :nth-child(3) > div > p'
      ).then(endBal => {
        expect(endBal[0].textContent).to.eq(
          numeral(parseInt(data.end_balance))
            .format("0,0 $")
            .replace("$", "₮")
        );
      });
      cy.request({
        method: "POST",
        url: apiUrl,
        headers: {
          "x-hasura-admin-secret": "esansecret"
        },
        body: { query: withdraw }
      }).then(result => {
        expect(result.status).to.eq(200);
        const data = result.body.data.payment_withdraw_requests[0];
        cy.get(
          '[style="margin-left: -6px; margin-right: -6px; margin-top: 20px;"] > .ant-col > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-body > table > .ant-table-tbody > [data-row-key="1"] > :nth-child(1)'
        ).then(firstItem => {
          const first = parseInt(firstItem[0].textContent);
          expect(first).to.eq(data.amount);
        });
        cy.get(
          '[style="margin-left: -6px; margin-right: -6px; margin-top: 20px;"] > .ant-col > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-body > table > .ant-table-tbody > [data-row-key="1"] > :nth-child(2)'
        ).then(secondItem => {
          const second = secondItem[0].textContent;
          const date = moment(data.created_at).format("YYYY/MM/DD HH:mm:ss");
          expect(second).to.eq(date);
        });
        const len = result.body.data.payment_withdraw_requests.length;
        cy.get("[data-row-key] > :nth-child(3) > div").should(
          "have.length",
          len
        );
        cy.get('[data-row-key="1"] > :nth-child(3) > div').then(status => {
          const stat = data.is_transfered;
          if (stat) {
            expect(status[0].textContent).to.eq("Шилжүүлсэн");
          } else {
            expect(status[0].textContent).to.eq("Хүлээгдэж буй");
          }
        });
      });
    });
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });
});

//Custom queries

let months;
let week;

week = moment()
  .subtract(7, "days")
  .format("YYYY/MM/DD");
months = moment()
  .subtract(30, "days")
  .format("YYYY/MM/DD");

export const sum = `query GET_PAID_CONTENTS_AGGREGATE{
    payment_vw_paid_contents_aggregate(where: {organization_id:{_eq:15}}) {
      aggregate {
        count
        sum {
          total
        }
      }
    }
  }`;

export const sum_month = `query GET_PAID_CONTENTS_AGGREGATE{
    payment_vw_paid_contents_aggregate(where: {organization_id:{_eq:15},created_at:{_gte:"${months}"}}) {
      aggregate {
        count
        sum {
          total
        }
      }
    }
  }`;

export const sum_week = `query GET_PAID_CONTENTS_AGGREGATE{
    payment_vw_paid_contents_aggregate(where: {organization_id:{_eq:15},created_at:{_gte:"${week}"}}) {
      aggregate {
        count
        sum {
          total
        }
      }
    }
  }`;

export const contents = `query GET_PAID_CONTENTS {
    payment_vw_paid_contents(
      where: {organization_id:{_eq:15}},limit:10
    ) {
      content_id: id
      name
      discount
      price
      total
      type
      qty
      created_at
    }
  }`;

export const balance = `query GET_ORGANIZATION_BALANCE{
    payment_vw_organizations_balance(where: {organization_id:{_eq:15}}) {
      end_balance
      total_withdraw_amount
      after_vat
      total_balance
      total_amount
      total_withdrawed_amount
      esan_amount
    }
  }
  `;

export const withdraw = `query GET_WITHDRAWAL_REQUEST {
  payment_withdraw_requests(
    where: { organization_id: { _eq: 15 } }
  ) {
    id
    key: id
    is_transfered
    transfered_user_id
    amount
    created_at
  }
}`;
