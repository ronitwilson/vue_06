const app = Vue.createApp({
  data() {
    return {
      name: "Ronit",
      age: 21,
      imageLink: "https://picsum.photos/id/237/200/300",
    };
  },
    methods: {
    randomNum() {
      return Math.random();
    }
  }
}).mount('#assignment');