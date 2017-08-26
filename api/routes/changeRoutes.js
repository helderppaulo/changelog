'use strict';
module.exports = function(app) {
  var changesList = require('../controllers/changeController');

  app.route('/changes')
    .get(changesList.list_all_changes)
    .post(changesList.create_change);


  app.route('/changes/:changeId')
    .get(changesList.retrieve_change)
    .put(changesList.update_change)
    .delete(changesList.delete_change);
};