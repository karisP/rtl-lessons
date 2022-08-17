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

![Let's Do This](https://media0.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.gif)

# Acceptance Criteria
