var mongoose = require('mongoose');

var oneselfSchema = new mongoose.Schema({
    summary: {
        name: String,
        tagline: String,
        statement: String
    },
    links: [{
        name: String,
        link: String
    }],
    projects: [{
        name: String,
        github_link: String,
        heroku_link: String
    }],
    skills: [{
        name: String,
        score: String
    }]
});

var Oneself = mongoose.model('Oneself', oneselfSchema);

module.exports = Oneself;

