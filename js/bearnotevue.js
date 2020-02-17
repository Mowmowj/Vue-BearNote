var app = new Vue({
    el: "#todoapp",
    data: {
      list: ["meeting", "wear mask", "make framework"],
      inputValue: ""
    },
    methods: {
      add: function () {
        this.list.push(this.inputValue);
      },
      remove: function (index) {
        console.log("删除");
        console.log(index);
        this.list.splice(index, 1);
      },
      clear: function () {
        this.list = [];
      }
    },
  })