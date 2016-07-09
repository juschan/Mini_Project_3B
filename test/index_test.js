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

    //test to return summary with name and tagline
    it('should return a summary with name and tagline', (done) => {
        api.get('/')
        .set('Accept', 'application.json')
        .expect(200,done)
        .end((end, res) => {
            expect(response.body.summary).to.have.property('name');
            expect(response.body.summary).to.have.property('tagline');
        }); //end api.end
    }); //end it

}); //end describe