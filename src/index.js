const { Task } = require('./models');

(async () => {
  const task = await Task.query();
  console.log(task);
})();
