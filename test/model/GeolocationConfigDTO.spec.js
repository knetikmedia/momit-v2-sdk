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
    instance = new MomitApi.GeolocationConfigDTO();
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

  describe('GeolocationConfigDTO', function() {
    it('should create an instance of GeolocationConfigDTO', function() {
      // uncomment below and update the code to test GeolocationConfigDTO
      //var instane = new MomitApi.GeolocationConfigDTO();
      //expect(instance).to.be.a(MomitApi.GeolocationConfigDTO);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new MomitApi.GeolocationConfigDTO();
      //expect(instance).to.be();
    });

    it('should have the property geoInMode (base name: "geoInMode")', function() {
      // uncomment below and update the code to test the property geoInMode
      //var instane = new MomitApi.GeolocationConfigDTO();
      //expect(instance).to.be();
    });

    it('should have the property geoInSetPoint (base name: "geoInSetPoint")', function() {
      // uncomment below and update the code to test the property geoInSetPoint
      //var instane = new MomitApi.GeolocationConfigDTO();
      //expect(instance).to.be();
    });

    it('should have the property geoInCalendar (base name: "geoInCalendar")', function() {
      // uncomment below and update the code to test the property geoInCalendar
      //var instane = new MomitApi.GeolocationConfigDTO();
      //expect(instance).to.be();
    });

    it('should have the property geoOutMode (base name: "geoOutMode")', function() {
      // uncomment below and update the code to test the property geoOutMode
      //var instane = new MomitApi.GeolocationConfigDTO();
      //expect(instance).to.be();
    });

    it('should have the property geoOutCalendar (base name: "geoOutCalendar")', function() {
      // uncomment below and update the code to test the property geoOutCalendar
      //var instane = new MomitApi.GeolocationConfigDTO();
      //expect(instance).to.be();
    });

    it('should have the property geoOutSetPoint (base name: "geoOutSetPoint")', function() {
      // uncomment below and update the code to test the property geoOutSetPoint
      //var instane = new MomitApi.GeolocationConfigDTO();
      //expect(instance).to.be();
    });

  });

}));