const app = Vue.createApp({
    data() {
        return {
            authorName: 'Ray',
            authorAge: 26,
            customPage: 'https://i.kym-cdn.com/photos/images/original/002/350/540/240.jpg'
        };
    },
    methods: {
        roundTo(randomNum, decimal) {
            return Math.round((randomNum + Number.EPSILON) * Math.pow(10, decimal)) / Math.pow(10, decimal);
        }
    }
});

app.mount('#assignment');