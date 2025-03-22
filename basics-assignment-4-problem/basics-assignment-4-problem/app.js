const app = Vue.createApp({
    data() {
        return {
        inputClass: '',
        isVisible: true,
        inputStyle: "red"
        };
    },
    methods: {
        toggleVisibility() {
        this.isVisible = !this.isVisible;
        }
    }
});


app.mount('#assignment');