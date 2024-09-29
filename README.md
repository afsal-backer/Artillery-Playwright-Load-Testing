# Artillery Playwright Load Testing

This project demonstrates how to perform frontend load testing using Artillery and Playwright. It combines the power of Artillery for generating load and Playwright for browser automation to test web applications under various load conditions.

## Project Overview

The project is set up to load test the [Sauce Demo](https://www.saucedemo.com/) website, specifically the "Add to Cart" functionality. It uses Playwright to automate browser interactions and Artillery to manage the load testing scenarios.

IMPORTANT: Only perform load testing on websites you have full control of. Saucedemo is used here as an example with very minimal load.

## Features

- Load testing with Artillery
- Browser automation with Playwright
- Configurable test scenarios
- Support for running tests locally and on AWS Fargate

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- Yarn package manager

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/artillery-playwright-demo.git
   cd artillery-playwright-demo
   ```

2. Install dependencies:
   ```
   yarn install
   ```

## Running Tests

The project includes several scripts for running tests:

1. Run Playwright test:
   ```
   yarn playwright-test
   ```

2. Run local Artillery test:
   ```
   yarn local-test
   ```

3. Run Artillery test on AWS Fargate (single instance):
   ```
   yarn fargate-single
   ```

4. Run Artillery test on AWS Fargate (multiple instances):
   ```
   yarn fargate-multiple
   ```

5. Generate a report from the test results:
   ```
   yarn report
   ```

## Project Structure

- `artillery/`: Contains Artillery configuration and test scripts
- `tests/`: Contains Playwright test scripts and page objects
- `playwright.config.ts`: Playwright configuration file

## Configuration

- Artillery test scenarios are defined in `artillery/cart/add-to-cart.yml`
- Playwright configuration is in `playwright.config.ts`
- Test functions and page objects are in the `tests/` directory

## Customizing Tests

To modify the load testing scenarios:
1. Edit `artillery/cart/add-to-cart.yml` to adjust the phases and arrival rates
2. Modify the test functions in `artillery/cart/add-to-cart.runner.ts` and `artillery/cart/add-to-cart.actions.ts`

## Reporting

After running a local test, you can generate a report using:
```
yarn report
```
This will create an HTML report from the JSON output of the test run.

## Contributing

Contributions to this project are welcome. Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
