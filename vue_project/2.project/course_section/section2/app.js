const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmName: "",
        };
    },
    methods: {
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        },
        reset() {
            this.counter = 0;
        },
        setName(event, custom) {
            this.name = event.target.value + " " + custom;
        },
        submitForm() {
            alert("The form has submitted!");
        },
        confirmInput() {
            this.confirmName = this.name;
        },
    },
});

app.mount("#events");
