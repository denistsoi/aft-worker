var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  director: {
    type: String
  },
  release_year: {
    type: String
  }
});

MovieSchema.options.toJSON = {
  transform: function(doc, ret) {
    delete ret._id;
    delete ret.__v;
  }
};

module.exports = mongoose.model('Movie', MovieSchema);