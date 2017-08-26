'use strict';
module.exports = function(app) {
  var changesList = require('../controllers/changeController');

  // todoList Routes
  app.route('/changes')
    .get(changesList.list_all_changes)
    .post(todoList.create_a_change);


  app.route('/changes/:changeId')
    .get(changesList.read_a_change)
    .put(changesList.update_a_change)
    .delete(changesList.delete_a_change);
};