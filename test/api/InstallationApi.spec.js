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
    instance = new MomitApi.InstallationApi();
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

  describe('InstallationApi', function() {
    describe('callDelete', function() {
      it('should call callDelete successfully', function(done) {
        //uncomment below and update the code to test callDelete
        //instance.callDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCalendar', function() {
      it('should call createCalendar successfully', function(done) {
        //uncomment below and update the code to test createCalendar
        //instance.createCalendar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createInstallation', function() {
      it('should call createInstallation successfully', function(done) {
        //uncomment below and update the code to test createInstallation
        //instance.createInstallation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createInstallationDevice', function() {
      it('should call createInstallationDevice successfully', function(done) {
        //uncomment below and update the code to test createInstallationDevice
        //instance.createInstallationDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPeriod', function() {
      it('should call createPeriod successfully', function(done) {
        //uncomment below and update the code to test createPeriod
        //instance.createPeriod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCalendar', function() {
      it('should call deleteCalendar successfully', function(done) {
        //uncomment below and update the code to test deleteCalendar
        //instance.deleteCalendar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCalendarPeriod', function() {
      it('should call deleteCalendarPeriod successfully', function(done) {
        //uncomment below and update the code to test deleteCalendarPeriod
        //instance.deleteCalendarPeriod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInstallationDevice', function() {
      it('should call deleteInstallationDevice successfully', function(done) {
        //uncomment below and update the code to test deleteInstallationDevice
        //instance.deleteInstallationDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllPropertiesByDevice', function() {
      it('should call getAllPropertiesByDevice successfully', function(done) {
        //uncomment below and update the code to test getAllPropertiesByDevice
        //instance.getAllPropertiesByDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUserInstallations', function() {
      it('should call getCurrentUserInstallations successfully', function(done) {
        //uncomment below and update the code to test getCurrentUserInstallations
        //instance.getCurrentUserInstallations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentWeather', function() {
      it('should call getCurrentWeather successfully', function(done) {
        //uncomment below and update the code to test getCurrentWeather
        //instance.getCurrentWeather(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceAvailability', function() {
      it('should call getDeviceAvailability successfully', function(done) {
        //uncomment below and update the code to test getDeviceAvailability
        //instance.getDeviceAvailability(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceById', function() {
      it('should call getDeviceById successfully', function(done) {
        //uncomment below and update the code to test getDeviceById
        //instance.getDeviceById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceSmartConfigurationWorkingMode', function() {
      it('should call getDeviceSmartConfigurationWorkingMode successfully', function(done) {
        //uncomment below and update the code to test getDeviceSmartConfigurationWorkingMode
        //instance.getDeviceSmartConfigurationWorkingMode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceStats', function() {
      it('should call getDeviceStats successfully', function(done) {
        //uncomment below and update the code to test getDeviceStats
        //instance.getDeviceStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceStatsCost', function() {
      it('should call getDeviceStatsCost successfully', function(done) {
        //uncomment below and update the code to test getDeviceStatsCost
        //instance.getDeviceStatsCost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInfoByDevice', function() {
      it('should call getInfoByDevice successfully', function(done) {
        //uncomment below and update the code to test getInfoByDevice
        //instance.getInfoByDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstallationById', function() {
      it('should call getInstallationById successfully', function(done) {
        //uncomment below and update the code to test getInstallationById
        //instance.getInstallationById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstallationCalendarPeriods', function() {
      it('should call getInstallationCalendarPeriods successfully', function(done) {
        //uncomment below and update the code to test getInstallationCalendarPeriods
        //instance.getInstallationCalendarPeriods(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstallationCalendars', function() {
      it('should call getInstallationCalendars successfully', function(done) {
        //uncomment below and update the code to test getInstallationCalendars
        //instance.getInstallationCalendars(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstallationDevices', function() {
      it('should call getInstallationDevices successfully', function(done) {
        //uncomment below and update the code to test getInstallationDevices
        //instance.getInstallationDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPropertiesById', function() {
      it('should call getPropertiesById successfully', function(done) {
        //uncomment below and update the code to test getPropertiesById
        //instance.getPropertiesById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWeather', function() {
      it('should call getWeather successfully', function(done) {
        //uncomment below and update the code to test getWeather
        //instance.getWeather(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyCalendarPeriod', function() {
      it('should call modifyCalendarPeriod successfully', function(done) {
        //uncomment below and update the code to test modifyCalendarPeriod
        //instance.modifyCalendarPeriod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putDeviceSmartConfigurationWorkingMode', function() {
      it('should call putDeviceSmartConfigurationWorkingMode successfully', function(done) {
        //uncomment below and update the code to test putDeviceSmartConfigurationWorkingMode
        //instance.putDeviceSmartConfigurationWorkingMode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setUp', function() {
      it('should call setUp successfully', function(done) {
        //uncomment below and update the code to test setUp
        //instance.setUp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startPairing', function() {
      it('should call startPairing successfully', function(done) {
        //uncomment below and update the code to test startPairing
        //instance.startPairing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update', function() {
      it('should call update successfully', function(done) {
        //uncomment below and update the code to test update
        //instance.update(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCalendar', function() {
      it('should call updateCalendar successfully', function(done) {
        //uncomment below and update the code to test updateCalendar
        //instance.updateCalendar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDeviceProperty', function() {
      it('should call updateDeviceProperty successfully', function(done) {
        //uncomment below and update the code to test updateDeviceProperty
        //instance.updateDeviceProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstallationDevice', function() {
      it('should call updateInstallationDevice successfully', function(done) {
        //uncomment below and update the code to test updateInstallationDevice
        //instance.updateInstallationDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSmartConfiguration', function() {
      it('should call updateSmartConfiguration successfully', function(done) {
        //uncomment below and update the code to test updateSmartConfiguration
        //instance.updateSmartConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
