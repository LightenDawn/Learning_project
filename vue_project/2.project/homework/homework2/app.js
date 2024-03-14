const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            userEnter: ""
        };
    },
    methods: {
        showAlert() {
            alert("Warning...warning...");
        },
        getUserInput(event) {
            this.userInput = event.target.value;
        },
        enterUserInput() {
            this.userEnter = this.userInput;
        }
    },
});

app.mount("#assignment");
