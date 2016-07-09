"use strict";

/* globals describe it before */
var util = require('util');
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

//test the default response - show summary
describe('GET /', () => {

    //test to return 200 response
    it('should return a 200 response', (done) => {
        api.get('/')
        .set('Accept', 'application.json')
        .expect(200,done);
    }); //end it

    //expect response to return summary with name and tagline
    it('should return a summary with name and tagline', (done) => {
        api.get('/')
        .set('Accept', 'application.json')
        .end((end, response) => {
            expect(response.body.summary).to.have.property('name');
            expect(response.body.summary).to.have.property('tagline');
            done();
        }); //end api.end
    }); //end it

}); //end describe


//test to get profile statement
describe('GET /profile', () => {

    //test to return 200 response
    it('should return a 200 response', (done) => {
        api.get('/profile')
        .set('Accept', 'application.json')
        .expect(200,done);
    }); //end it

    //expect response to return profle statement
    it('should return a profile statement', (done) => {
        api.get('/profile')
        .set('Accept', 'application.json')
        .end((end, response) => {
            expect(response.body.summary).to.have.property('statement');
            done();
        }); //end api.end
    }); //end it

}); //end describe

//test to get named links
describe('GET /profile', () => {

    //test to return 200 response
    it('should return a 200 response', (done) => {
        api.get('/links')
        .set('Accept', 'application.json')
        .expect(200,done);
    }); //end it

    //expect response to return a list of named links
    it('should return an array of links, each element having fields name and link', (done) => {
        api.get('/links')
        .set('Accept', 'application.json')
        .end((end, response) => {
            expect(util.isArray(response.body.links)).to.be.true;
            expect(response.body.links[0]).to.have.property('name');
            expect(response.body.links[0]).to.have.property('link');
            done();
        }); //end api.end
    }); //end it

}); //end describe


//test to get projects
describe('GET /projects', () => {

    //test to return 200 response
    it('should return a 200 response', (done) => {
        api.get('/projects')
        .set('Accept', 'application.json')
        .expect(200,done);
    }); //end it

    //expect response to return a list of projects, each with name and field
    it('should return an array of projects, each element with name, github link and heroku link', (done) => {
        api.get('/projects')
        .set('Accept', 'application.json')
        .end((end, response) => {
            expect(util.isArray(response.body.projects)).to.be.true;
            expect(response.body.projects[0]).to.have.property('name');
            expect(response.body.projects[0]).to.have.property('github_link');
            expect(response.body.projects[0]).to.have.property('heroku_link');
            done();
        }); //end api.end
    }); //end it

}); //end describe


//test to get details from individual projects
describe('GET /projects/:id', () => {

    //test to return 200 response
    it('should return a 200 response', (done) => {
        api.get('/projects/1')
        .set('Accept', 'application.json')
        .expect(200,done);
    }); //end it

    //expect response to one project with various details
    it('should return a project, each element with name, github link and heroku link', (done) => {
        api.get('/projects/1')
        .set('Accept', 'application.json')
        .end((end, response) => {
            expect(response.body.project).to.have.property('name');
            expect(response.body.project).to.have.property('github_link');
            expect(response.body.project).to.have.property('heroku_link');
            done();
        }); //end api.end
    }); //end it

    //expect 422 error response
    it('should return 422 response to invalid project id', (done) => {
        api.get('/projects/100')
        .set('Accept', 'application.json')
        .expect(422,done);
    }); //end it

    //expect error message
    it('should return an error message to invalid project id', (done) => {
        api.get('/projects/100')
        .set('Accept', 'application.json')
        .end((end, response) => {
            expect(response.body.message).to.be.equal('ID out of range.');
            done();
        }); //end api.end
    }); //end it

}); //end describe