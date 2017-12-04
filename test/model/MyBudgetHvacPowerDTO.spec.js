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
    instance = new MomitApi.MyBudgetHvacPowerDTO();
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

  describe('MyBudgetHvacPowerDTO', function() {
    it('should create an instance of MyBudgetHvacPowerDTO', function() {
      // uncomment below and update the code to test MyBudgetHvacPowerDTO
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be.a(MomitApi.MyBudgetHvacPowerDTO);
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property device (base name: "device")', function() {
      // uncomment below and update the code to test the property device
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property heatStg1Power (base name: "heatStg1Power")', function() {
      // uncomment below and update the code to test the property heatStg1Power
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property heatStg2Power (base name: "heatStg2Power")', function() {
      // uncomment below and update the code to test the property heatStg2Power
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property coolStg1Power (base name: "coolStg1Power")', function() {
      // uncomment below and update the code to test the property coolStg1Power
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property coolStg2Power (base name: "coolStg2Power")', function() {
      // uncomment below and update the code to test the property coolStg2Power
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property heatStg1Rate (base name: "heatStg1Rate")', function() {
      // uncomment below and update the code to test the property heatStg1Rate
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property heatStg2Rate (base name: "heatStg2Rate")', function() {
      // uncomment below and update the code to test the property heatStg2Rate
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property coolStg1Rate (base name: "coolStg1Rate")', function() {
      // uncomment below and update the code to test the property coolStg1Rate
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property coolStg2Rate (base name: "coolStg2Rate")', function() {
      // uncomment below and update the code to test the property coolStg2Rate
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property heatStg1Unit (base name: "heatStg1Unit")', function() {
      // uncomment below and update the code to test the property heatStg1Unit
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property heatStg2Unit (base name: "heatStg2Unit")', function() {
      // uncomment below and update the code to test the property heatStg2Unit
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property coolStg1Unit (base name: "coolStg1Unit")', function() {
      // uncomment below and update the code to test the property coolStg1Unit
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

    it('should have the property coolStg2Unit (base name: "coolStg2Unit")', function() {
      // uncomment below and update the code to test the property coolStg2Unit
      //var instane = new MomitApi.MyBudgetHvacPowerDTO();
      //expect(instance).to.be();
    });

  });

}));