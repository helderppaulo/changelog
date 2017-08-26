'use strict';


var mongoose = require('mongoose'),
  Change = mongoose.model('Changes');

exports.list_all_changes = function(req, res) {
  Change.find({}, function(err, change) {
    if (err)
      res.send(err);
    res.json(change);
  });
};

exports.create_change = function(req, res) {
  var new_change = new Change(req.body);
  new_change.save(function(err, change) {
    if (err)
      res.send(err);
    res.json(change);
  });
};

exports.retrieve_change = function(req, res) {
  Change.findById(req.params.changeId, function(err, change) {
    if (err)
      res.send(err);
    res.json(change);
  });
};


exports.update_change = function(req, res) {
  Change.findOneAndUpdate({_id: req.params.changeId}, req.body, {new: true}, function(err, change) {
    if (err)
      res.send(err);
    res.json(change);
  });
};


exports.delete_change = function(req, res) {
  Change.remove({
    _id: req.params.taskId
  }, function(err, change) {
    if (err)
      res.send(err);
    res.json({ message: 'Change successfully deleted' });
  });
};
