// History API
history.pushState({ page: 1 }, "title 1", "?page=1");
console.log("State pushed:", history.state);