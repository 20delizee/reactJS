const Group = require('../models/Group');

exports.createGroup = (req, res, next) => {
  const group = new Group({
    groupName: req.body.groupName,
    userId: req.body.userId,
    updated_date: req.body.updated_date,
  });
  group.save().then(
    () => {
      res.status(201).json({
        id: group._id
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneGroup = (req, res, next) => {
  Group.findOne({
    _id: req.params.id
  }).then(
    (group) => {
      res.status(200).json(group);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyGroup = (req, res, next) => {
  const group = new Group({
    _id: req.params.id,
    groupName: req.body.groupName,
    userId: req.body.userId,
    updated_date: req.body.updated_date
  });
  Group.updateOne({_id: req.params.id}, group).then(
    () => {
      res.status(201).json({
        message: 'Group updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteGroup = (req, res, next) => {
  Group.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllGroup = (req, res, next) => {
    Group.find()
      .then(groups => res.status(200).json(groups))
      .catch(error => res.status(400).json({ error }));
};