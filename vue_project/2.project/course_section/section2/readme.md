```javascript
<input type="text" v-on:input="setName">
```

#### `v-on` is a listener. This part listens for input events. When the user inputs, the setName function will be called.

```javascript
setName(event) {
    (this.name = event.target.value);
}
```

#### The setName function can set the event to be a user input value event.

```javascript
<input type="text" v-on:input="setName($event,'customName')">
```

#### When the function has other parameters that need to be set, you can pass the default $event value that Windows uses to handle the value.

```javascript
setName(event, custom) {
    (this.name = event.target.value + ' ' + custom);
}
```

---

```javascript
<form>
    <input type="text" />
    <button>Sign Up</button>
</form>
```

#### When we send the form, it will be submitted to the server and the page reloaded, and the data will no longer be there.

```javascript
<form v-on:submit="submitForm">
    <input type="text" />
    <button>Sign Up</button>
</form>

submitForm(event) {
    event.preventDefault();
    alert('The form has submitted!');
}
```

#### Therefore, we can use a v-on listener to listen for the form when it is submitted and trigger the SubmitForm function. It uses a javascript built-in function called PreventDefailt function. It will stop the form submit event.

```javascript
<form v-on:submit.prevent="submitForm">
    <input type="text" />
    <button>Sign Up</button>
</form>

submitForm() {
    alert('The form has submitted!');
}
```

#### Vue has another solution, which listens to the commit event and blocks the commit operation directly.

```html
<p>Starting Counter: {{ counter }}</p>
<p>Result: {{ counter }}</p>
```

#### What should we do if there is a situation where the starting counter shows the original value and the result counter shows the dynamic value of the user operation?

```html
<p v-once>Starting Counter: {{ counter }}</p>
<p>Result: {{ counter }}</p>
```

#### The v-once method tells Vue to display the value only once and not to change it.