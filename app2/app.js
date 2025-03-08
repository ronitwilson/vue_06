const app = Vue.createApp({ data()  {
    return {
      input: '',
      confirmedInput: '',
    }},
    methods: {
        showAlert() {
            console.log('Alert!');
            alert('Alert!');
        },
        captureInput(event) {
            this.input = event.target.value;
        },
        captureConfirmedInput() {
            this.confirmedInput = this.input;
        }
    }
}).mount('#assignment');