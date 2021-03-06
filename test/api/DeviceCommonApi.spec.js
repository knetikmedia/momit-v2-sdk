/**
 * Momit API
 * momit API
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MomitApi);
  }
}(this, function(expect, MomitApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MomitApi.DeviceCommonApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeviceCommonApi', function() {
    describe('deviceTypes', function() {
      it('should call deviceTypes successfully', function(done) {
        //uncomment below and update the code to test deviceTypes
        //instance.deviceTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModeById', function() {
      it('should call getModeById successfully', function(done) {
        //uncomment below and update the code to test getModeById
        //instance.getModeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProperties', function() {
      it('should call getProperties successfully', function(done) {
        //uncomment below and update the code to test getProperties
        //instance.getProperties(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStateById', function() {
      it('should call getStateById successfully', function(done) {
        //uncomment below and update the code to test getStateById
        //instance.getStateById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
