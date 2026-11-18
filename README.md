# Demo Web Shop UI Automation and API Testing

## 1. Project Overview

This project focuses on Quality Assurance testing of the Demo Web Shop application using automated UI testing and API testing.

UI automation is developed using JavaScript and Playwright with the Page Object Model (POM) design pattern. API testing is performed using Postman and Newman with the JSONPlaceholder API.

**Project Repository:**  
https://github.com/srabonyislam/Demo-Web-Shop-Automation

## 2. Technologies Used

- JavaScript
- Node.js
- Playwright
- Postman
- Newman
- Allure Report
- Git and GitHub
- Page Object Model (POM)

## 3. Project Structure

```text
Project Week Assignment/
│
├── api_tests/
│   ├── Demo Web Shop API Testing.postman_collection.json
│   └── Newman-API-Report.html
│
├── Evidence/
│   ├── Q1 Terminal.png
│   ├── Q1 HTML Report.png
│   ├── Q1 Test Code.png
│   ├── Q2 Terminal.png
│   ├── Q2 HTML Report.png
│   ├── Q2 Test Code.png
│   ├── Q3 Terminal.png
│   ├── Q3 HTML Report.png
│   ├── Q3 Test Code.png
│   └── Allure Report.png
│
├── data/
│
├── pages/
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── ShoppingPage.js
│   ├── CartPage.js
│   ├── SearchPage.js
│   ├── ProductPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── q1-invalid-login.spec.js
│   ├── q2-register-add-to-cart.spec.js
│   └── q3-search-and-checkout.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## 4. Installation and Setup

### Prerequisites

- Node.js and npm
- Java JDK 17 or later (for Allure reporting)
- Git
- Visual Studio Code

### Clone the Repository

```bash
git clone https://github.com/srabonyislam/Demo-Web-Shop-Automation.git
```

Navigate to the project directory:

```bash
cd Demo-Web-Shop-Automation
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browser

```bash
npx playwright install chromium
```

## 5. UI Test Execution

UI automation consists of three independent test scenarios.

### Run Individual Test Cases

**Q1 – Invalid Login**

```bash
npm run test:q1
```

**Q2 – Registration and Add to Cart**

```bash
npm run test:q2
```

**Q3 – Product Search and Checkout**

```bash
npm run test:q3
```

### Run All UI Test Cases

To execute all three UI scenarios sequentially:

```bash
npm run test:ui
```

## 6. API Test Execution

API testing is performed using Postman and Newman with the JSONPlaceholder API.

### Run API Tests

```bash
npm run test:api
```

### API Test Scenarios

**GET – Retrieve All Users**

- Send a GET request to retrieve all users.
- Validate response status code 200.
- Verify that the response is a non-empty array.
- Validate user ID, name, and email fields.
- Save a selected user ID dynamically as a collection variable.

**PUT – Update User Information**

- Send a PUT request using the saved user ID.
- Update user name, email, phone number, and company name.
- Validate the returned user ID.
- Verify the updated name, email, phone number, and company name.

### API Test Results

- Total requests: 2
- Total assertions: 10
- Passed: 10
- Failed: 0

**Postman Collection:**

`api_tests/Demo Web Shop API Testing.postman_collection.json`

**Newman HTML Report:**

`api_tests/Newman-API-Report.html`

## 7. Combined UI and API Execution

To execute all UI scenarios followed by the API test collection in sequence, run:

```bash
npm run test:all
```

This command performs the following operations:

1. Executes Q1 – Invalid Login.
2. Executes Q2 – Registration and Add to Cart.
3. Executes Q3 – Product Search and Checkout.
4. Generates the Allure report after UI execution.
5. Executes the API collection using Newman.
6. Generates the Newman HTML report.

The combined execution was successfully verified with all three UI tests and all ten API assertions passing.

## 8. Test Reports

### Playwright HTML Report

The Playwright HTML report is generated automatically after UI test execution.

To open the report:

```bash
npx playwright show-report
```

Report directory:

`playwright-report/`

### Allure Report

Allure reports are generated automatically after individual UI test executions and full UI suite execution.

To open the Allure report:

```bash
npx allure open allure-report
```

Report directory:

`allure-report/`

### Newman HTML Report

The Newman HTML report is generated automatically after API test execution.

Report location:

`api_tests/Newman-API-Report.html`

## 9. GitHub Branching Strategy

Separate feature branches were created for each assignment scenario.

- `main`
- `feature/q1-invalid-login`
- `feature/q2-register-cart`
- `feature/q3-search-checkout`

Each feature branch was committed separately and merged into the main branch.

The completed project, API collection, reports, and evidence screenshots are available in the public GitHub repository.

## 10. Project Information

**Project:** Demo Web Shop UI Automation and API Testing

**Author:** Srabony Islam