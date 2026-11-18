# Demo Web Shop UI Automation and API Testing

## 1. Project Overview

This project focuses on Quality Assurance testing of the Demo Web Shop application using automated UI testing and API testing.

The UI automation is developed using JavaScript and Playwright with the Page Object Model (POM) design pattern. API testing is planned using Postman and Newman.

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

### Run All Test Cases

```bash
npx playwright test
```

### Run Individual Test Cases

**Q1 – Invalid Login**

```bash
npx playwright test tests/q1-invalid-login.spec.js
```

**Q2 – Registration and Add to Cart**

```bash
npx playwright test tests/q2-register-add-to-cart.spec.js
```

**Q3 – Product Search and Checkout**

```bash
npx playwright test tests/q3-search-and-checkout.spec.js
```

## 6. Test Scenarios

| Test Case | Description |
|---|---|
| Q1 | Verify login failure with invalid credentials |
| Q2 | Register a new customer, log in, and add a product to the cart |
| Q3 | Search for a product, update quantity, add to cart, and complete checkout |

## 7. Test Reports

### Playwright HTML Report

After test execution, open the HTML report using:

```bash
npx playwright show-report
```

### Allure Report

Generate the Allure report:

```bash
npx allure generate allure-results --clean
```

Open the report:

```bash
npx allure open allure-report
```

## 8. GitHub Branching Strategy

Separate feature branches were created for each assignment scenario.

- `main`
- `feature/q1-invalid-login`
- `feature/q2-register-cart`
- `feature/q3-search-checkout`

Each feature branch was committed separately and merged into the main branch.

## 9. API Testing

API testing will use Postman and Newman.

Planned API scenarios:

- GET request to retrieve user information.
- Validate response status and user data.
- Save a selected user ID as a collection variable.
- PUT request to update user information.
- Validate the updated response.

The Postman collection and Newman execution instructions will be added to this repository as the API testing work is completed.

---

**Project:** Demo Web Shop UI Automation and API Testing  
**Author:** Srabony Islam
