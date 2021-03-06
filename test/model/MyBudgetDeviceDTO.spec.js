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
    instance = new MomitApi.MyBudgetDeviceDTO();
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

  describe('MyBudgetDeviceDTO', function() {
    it('should create an instance of MyBudgetDeviceDTO', function() {
      // uncomment below and update the code to test MyBudgetDeviceDTO
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be.a(MomitApi.MyBudgetDeviceDTO);
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be();
    });

    it('should have the property serialNumber (base name: "serialNumber")', function() {
      // uncomment below and update the code to test the property serialNumber
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be();
    });

    it('should have the property hvacType (base name: "hvacType")', function() {
      // uncomment below and update the code to test the property hvacType
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be();
    });

    it('should have the property goalCost (base name: "goalCost")', function() {
      // uncomment below and update the code to test the property goalCost
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "timeZone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be();
    });

    it('should have the property calendar (base name: "calendar")', function() {
      // uncomment below and update the code to test the property calendar
      //var instane = new MomitApi.MyBudgetDeviceDTO();
      //expect(instance).to.be();
    });

  });

}));
