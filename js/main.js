(function () {
  'use strict';
  let vm = new Vue({
    el: "#app",
    data: {
      newItem: "",
      todos: [
        {
          title: "task 1",
          isDone: false,
        },
        {
          title: "task 2",
          isDone: false,
        },
        {
          title: "task 3",
          isDone: true,
        },
      ],
    },
    methods: {
      addItem: function (e) {
        let item = {
          title: this.newItem,
          isDone: false
        }
        this.todos.push(item);
        this.newItem = "";
      },
      deleteItem: function (index) {
        if (confirm("are you sure?")) {
          this.todos.splice(index, 1);
        }
      },
      purge: function (index) {
        if (!confirm("delete finished?")) {
          return;
        }
        this.todos = this.remaining;
      },
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();