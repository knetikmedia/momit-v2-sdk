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
    instance = new MomitApi.SmartConfigurationDTO();
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

  describe('SmartConfigurationDTO', function() {
    it('should create an instance of SmartConfigurationDTO', function() {
      // uncomment below and update the code to test SmartConfigurationDTO
      //var instane = new MomitApi.SmartConfigurationDTO();
      //expect(instance).to.be.a(MomitApi.SmartConfigurationDTO);
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new MomitApi.SmartConfigurationDTO();
      //expect(instance).to.be();
    });

    it('should have the property mode (base name: "mode")', function() {
      // uncomment below and update the code to test the property mode
      //var instane = new MomitApi.SmartConfigurationDTO();
      //expect(instance).to.be();
    });

    it('should have the property calendar (base name: "calendar")', function() {
      // uncomment below and update the code to test the property calendar
      //var instane = new MomitApi.SmartConfigurationDTO();
      //expect(instance).to.be();
    });

    it('should have the property geolocationConfig (base name: "geolocationConfig")', function() {
      // uncomment below and update the code to test the property geolocationConfig
      //var instane = new MomitApi.SmartConfigurationDTO();
      //expect(instance).to.be();
    });

  });

}));
