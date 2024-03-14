# Vue Project Introduction

### What is Vue?

#### Vue is one of the `javascript` `frameworks` that make building interactive and `reactive` `web frontends`.

- #### Javascript: A programming language that is supported by all browsers.

- #### framework: Is a third-party library that exposes utility functionalities.

- #### reactive: App is able to react use input, update the screen dynamically.

- #### web frontends: Display the view seen by the user through HTML+CSS+JS.


#### `Widget`: The web page has a part using vue item called widget. Is approach on multi-page-application.

#### `SPA`: Single-Page-Application, all pages use the vue items and controls the UI.

### Alternatives

#### Vue: Complete component-based UI framework.

#### React: Lean and focused component-baased UI library.

#### Angular: Complete component-based UI framework. Use TypeScript.


### Syntax

#### Vue.createApp(): Initialize the vue object.

#### data(): Define the key:value object, and set the value through `{{}}`.

#### methods: Define function names that can be used by vue objects.

#### v-bind: to set value of something.

- v-bind:href="vueLink" => dynamic set value to href element

#### {{}}: to set value to the html element

#### this: this.variable will look for a `variable` that has been defined in the `data()` field.

#### v-html: Will interpret html tags in `data()` variables. (May cause the xss problem)

#### v-on: A listener that can monitor onclick, onmouseup ... etc.