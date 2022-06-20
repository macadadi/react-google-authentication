/// <reference types="cypress" />

describe("before signing in", () => {
  it("mounts without crushing", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").should("be.visible");
  });

  it("should not display user profile", () => {
    cy.visit("http://localhost:3000");
    cy.get("img").should("not.exist");
  });
});

describe("Logged in users", () => {
  const dtone_id =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJiMDllNzQ0ZDU4Yzk5NTVkNGYyNDBiNmE5MmY3YjM3ZmVhZDJmZjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NTU2NTc5MjIsImF1ZCI6IjMwMDAxMzgwMzEyNi1qN2U4a2hsdm1qZnRtbmtqZm41cnR2ZHRmNGhwMmVvYy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNjAyMTg3NDUzMTg2Mjg1OTgyNyIsImVtYWlsIjoibWFjYWRhZGkzNkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMzAwMDEzODAzMTI2LWo3ZThraGx2bWpmdG1ua2pmbjVydHZkdGY0aHAyZW9jLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6Ik1hcmljdXMgQWRhZGkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKek1IWEpfYVdveTBwbnhEb19NUW5FS21TTkVPaFJFQUl6TXpZTT1zOTYtYyIsImdpdmVuX25hbWUiOiJNYXJpY3VzIiwiZmFtaWx5X25hbWUiOiJBZGFkaSIsImlhdCI6MTY1NTY1ODIyMiwiZXhwIjoxNjU1NjYxODIyLCJqdGkiOiI4NzY2YmQ5Yjk5MTJiMWRjYTA3ZGYyZDdlNzk1NGE1NDIyMjdmZjI5In0.XtHOXlcHNP5ekJieXIFESatvLR6qsy3E35pE0e-8al0dKq-R1K4W59sPDwDK5MYDI1vUtQc8Ue9tscjI5qnuNLM3eO9A7BS1qnCVs7w9vYdAnKWMCNFYTF6l4TOL8F6-tnJjJmsTmH2ZBvv3OfMwTGMN85zbAbI0GjRNVNiAnRa6Iu7Zop_R6TRtQy_DM_aiRy_9SexeEWJYPLVaecRoUFilnonZMiIHH4q6C3AUAkUr70bAMYTtIiQQT_LXoPr8tOONIotKE9LbLBKVVfGKHIf1QzzF0SSuxQmkqd0cjM_ItAmmy_UJH6898KoIEXuXjKNFC7iTDu6tpcsloYi6aw";
  beforeEach(() => {
    localStorage.setItem("dtone_id", dtone_id);
  });
  it("should desplay user profile", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Maricus").should("exist");
  });

  it("correctely serch for a school", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "*/search?name=middle", {
      fixture: "school.json",
      statusCode: 200,
    });
    cy.get("input").type("eas");
    cy.contains("Middle East University").should("exist");
  });
  it("should pop up a modal with more details when a list of item is clicked", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "*/search?name=middle", {
      fixture: "school.json",
      statusCode: 200,
    }).as("result");
    cy.get("input").type("Middle East University");
    cy.get("li").click();
    cy.contains("Country: Jordan").should("exist");
    cy.get(".schoolContainer").should("exist");
  });

  it("clicking close should close the modal", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "*/search?name=middle", {
      fixture: "school.json",
      statusCode: 200,
    });
    cy.get("input").type("Middle East University");
    cy.get("li").click();
    cy.contains("Country: Jordan").should("exist");
    cy.get(".closebtn > button").should("exist").click();
    cy.get(".schoolContainer").should("not.exist");
  });
});
