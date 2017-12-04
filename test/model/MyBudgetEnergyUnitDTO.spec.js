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
    instance = new MomitApi.MyBudgetEnergyUnitDTO();
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

  describe('MyBudgetEnergyUnitDTO', function() {
    it('should create an instance of MyBudgetEnergyUnitDTO', function() {
      // uncomment below and update the code to test MyBudgetEnergyUnitDTO
      //var instane = new MomitApi.MyBudgetEnergyUnitDTO();
      //expect(instance).to.be.a(MomitApi.MyBudgetEnergyUnitDTO);
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new MomitApi.MyBudgetEnergyUnitDTO();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new MomitApi.MyBudgetEnergyUnitDTO();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instane = new MomitApi.MyBudgetEnergyUnitDTO();
      //expect(instance).to.be();
    });

    it('should have the property unitDescription (base name: "unitDescription")', function() {
      // uncomment below and update the code to test the property unitDescription
      //var instane = new MomitApi.MyBudgetEnergyUnitDTO();
      //expect(instance).to.be();
    });

  });

}));
