const Message = require('../models/Message');
const moment = require('moment');

exports.createMessage = (req, res, next) => {
  console.log(req.body);

  const message = new Message({
    message: req.body.message,
    date: moment(req.body.date).format('YYYY-MM-DD'), // Format de la date
    time: moment(req.body.date).format('HH:mm:ss'), // Utilisation de Moment.js pour formater la date
    email: req.body.email,
    receiver: req.body.receiver,
  });

  message.save().then(
    () => {
      res.status(201).json({
        id: message._id
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

exports.getOneMessage = (req, res, next) => {
    Message.findOne({
    _id: req.params.id
  }).then(
    (message) => {
      res.status(200).json(message);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.getMessagesByEmail = (req, res, next) => {
  const email = req.params.email;
  const sender = req.query.sender;

  Message.find({
    $or: [
      { email: email, receiver: sender },
      { email: sender, receiver: email }
    ]
  })
    .then((messages) => {
      res.status(200).json(messages);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};


exports.modifyMessage = (req, res, next) => {
  const message = new Message({
    _id: req.params.id,
    message: req.body.message,
    date: req.body.date,
  });
  Message.updateOne({_id: req.params.id}, message).then(
    () => {
      res.status(201).json({
        message: 'Message updated successfully!'
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

exports.deleteMessage = (req, res, next) => {
    Message.deleteOne({_id: req.params.id}).then(
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

exports.getAllMessage= (req, res, next) => {
    Message.find()
    .sort({ date: 1 }) // Tri par ordre croissant de la propriété 'date'
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(error => {
      res.status(400).json({ error });
    });
};
exports.getMessageTest = (req, res, next) => {
    Message.finds()
    .sort({ date: 1 }) // Tri par ordre croissant de la propriété 'date'
    .exec((err, messages) => {
      if (err) {
        // Gérer l'erreur
      } else {
        // Faire quelque chose avec les messages triés par ordre d'horaire
        console.log(messages);
      }
    });
};