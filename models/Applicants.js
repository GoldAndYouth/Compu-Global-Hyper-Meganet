var mongoose = require('mongoose');

var ApplicantSchema = new mongoose.Schema({
  	title: String,
  	link: String,
  	employment: String
});

mongoose.model('Applicant', ApplicantSchema);