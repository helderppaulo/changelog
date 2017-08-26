'use strict';
module.exports = function(app) {
  var changesList = require('../controllers/changeController');

  // todoList Routes
  app.route('/changes')
    .get(changesList.list_all_changes)
    .post(todoList.create_change);


  app.route('/changes/:changeId')
    .get(changesList.retrieve_change)
    .put(changesList.update_change)
    .delete(changesList.delete_change);
};