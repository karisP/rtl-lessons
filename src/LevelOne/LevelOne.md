# Level One Instructions

To start running the tests, use the command:

### `npm run test`

If you have a lot of tests running, you can filter out the specific file:

Example: `npm run test`...tests are running

- press `p`
- type `LevelOne`
- use the down arrow to select the correct file
- press enter

If you read the command prompt, it will explain the `a` key, `o` key..etc

If you want to focus in on a specific test within a file:
type `f` in front of the test.

Example: `fit("should have a heading", () => {});`

If you want to skip on a specific test within a file:
type `x` in front of the test.

Example: `xit("should have a heading", () => {});`

# Querying

For this lesson, focus on using the `getBy...` queries.

See [https://testing-library.com/docs/queries/about](https://testing-library.com/docs/queries/about) for reference.

# Debugging

Anytime you are unsure what element the query is returning try:

`console.log(prettyDom(myQueriedElement));`

The console will print out the html that it returned from the query.

See [https://testing-library.com/docs/dom-testing-library/api-debugging](https://testing-library.com/docs/dom-testing-library/api-debugging) for reference.

# Jest Assertions

Open [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom) in your browser.

Use this resource to get creative with your assertions.

# Acceptance Criteria