const request = require('supertest');
const assert = require('assert');

const app = require('../app');


describe("GET /", function () {
    it("should has status code 200", function (done) {
        request(app)
            .get("/")
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
    it("should return name daniel", function (done) {
        request(app)
            .get("/")
            .expect({ name: 'daniel' })
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
    it("should return query param", function (done) {
        request(app)
            .get("/?param=luis")
            .expect({ name: 'luis' })
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});

describe("POST /", function () {
    it("should has status code 200", function (done) {
        request(app)
            .post("/")
            .expect(200)
            .expect({ name: 'postdaniel' })
            .expect(function (res) {
                console.log('hola federico este el body de la respuesta', res.body);
            })
            .end(function (err, res) {
                console.log('error', err)
                if (err) done(err);
                done();
            });
    });
    it("should has status code 500 when query param es Federico", function (done) {
        request(app)
            .post("/?name=federico")
            .expect(500)
            .expect({ name: 'federico' })
            .end(function (err, res) {
                console.log('error', err)
                if (err) done(err);
                done();
            });
    });
});