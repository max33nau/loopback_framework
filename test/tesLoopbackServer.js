"use strict";
//var assert = require('assert');
var chai = require('chai');
//var fs = require('fs');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
//var expect = chai.expect;

var loopback = require('loopback');
var app = loopback();
var Item = loopback.createModel(
  'Item',
  {
    description: 'string',
    completed: 'boolean'
  }
);

app.model(Item);
app.use('/api', loopback.rest());

describe('loopback framework', function(){
  var server;
  before('it should connect to a server', function(done){
  server = app.listen(process.env.PORT || 3030, function() {
          console.log('server is connected');
          done();
        });
  });



  after(function(done){
    server.close(done);
  });

});
