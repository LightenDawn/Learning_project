const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and laern Vue!',
            courseGoalB: 'Master Vue aand build amazing apps!',
            vueLink: 'https://google.com.tw'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');