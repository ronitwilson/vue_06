const app =  Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    methods: {
        Add5() {
            this.counter = this.counter + 5;
        },
        Add1() {
            this.counter = this.counter + 1;
        },
    },
    computed: {
        output() {
            if (this.counter < 37) {
                return `Not there yet ${this.counter}`;
            } else if (this.counter === 37) {
                return this.counter;
            } else {
                return 'Too much!';
            }
        }
    }, 
    watch: {
        counter(value) {
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            }, 10000);
        }
    }
});

app.mount('#assignment');