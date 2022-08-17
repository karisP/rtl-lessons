# Events

`fireEvent`

- low level
- methods such as click(), mouseOver(), focus(), change()
- dispatches exactly the events you tell it to and just those - even if those exact events never had been dispatched in a real interaction in a browser.
- specific use if you want to test an event without triggering other events

`userEvent`

- higher level
- methods such as click(), type(), hover(), clear()
- makes use of fireEvent
- dispatches the events like they would happen if a user interacted with the document, focus, blur, hover..etc
- assumes the whole user experience from the onFocus to onKeyDown to onChange

For more examples and details read: https://blog.mimacom.com/react-testing-library-fireevent-vs-userevent/

RTL Docs: https://testing-library.com/docs/dom-testing-library/api-events

# Async Methods

When working with DOM events that do not happen immediately or queries that return a promise, most likely your tests need to...

![waitforittt](https://c.tenor.com/-kVddMMzOU4AAAAM/psych-shawn.gif)

`findBy` is an async query

example:

```
it("should display text after click", async() => {
    const button = screen.getByRole('button', {name: 'Click Me'})
    fireEvent.click(button)
    await screen.findByText('Clicked once')
});
```

RTL Docs: https://testing-library.com/docs/dom-testing-library/api-async

# Acceptance Criteria

- there should be a heading of "Castle Address"
- there should an input with a label of "Ye Ole Trail"
- there should be a checkbox field with a label of "Landmarks"
- there should be a select field with a label of "Castle Color"
- there should be an input with a label of "Secret Password"
- there should be a "Submit" button
- the "Ye Ole Trail" input should display "required field" if left empty
- the checkbox field should display "required field" if left unchecked
- the select field should display the text of the option selected
- the password field should display "the secret password must be a minimum of 8 characters" when it is less than 8 characters
- the password field should display "the secret password must have an uppercase letter" when it does not have an uppercase letter
- the password field should display "required field" if it is empty
- the button should be disabled when any field is invalid
- the button should be enabled when all fields are valid

![Let's Do This](https://media0.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.gif)
