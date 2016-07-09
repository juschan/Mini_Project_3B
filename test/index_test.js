"use strict";

/* globals describe it before */
var util = require('util');
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

//test the summary
describe('GET /', () => {

    it('should return a 200 response', (done) => {
        api.get('/')
        .set('Accept', 'application.json')
        .expect(200,done);

    }); //end it

}); //end describe