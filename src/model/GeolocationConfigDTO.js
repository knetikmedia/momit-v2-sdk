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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CalendarDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CalendarDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.GeolocationConfigDTO = factory(root.MomitApi.ApiClient, root.MomitApi.CalendarDTO);
  }
}(this, function(ApiClient, CalendarDTO) {
  'use strict';




  /**
   * The GeolocationConfigDTO model module.
   * @module model/GeolocationConfigDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>GeolocationConfigDTO</code>.
   * @alias module:model/GeolocationConfigDTO
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>GeolocationConfigDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeolocationConfigDTO} obj Optional instance to populate.
   * @return {module:model/GeolocationConfigDTO} The populated <code>GeolocationConfigDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('geoInMode')) {
        obj['geoInMode'] = ApiClient.convertToType(data['geoInMode'], 'String');
      }
      if (data.hasOwnProperty('geoInSetPoint')) {
        obj['geoInSetPoint'] = ApiClient.convertToType(data['geoInSetPoint'], 'Number');
      }
      if (data.hasOwnProperty('geoInCalendar')) {
        obj['geoInCalendar'] = CalendarDTO.constructFromObject(data['geoInCalendar']);
      }
      if (data.hasOwnProperty('geoOutMode')) {
        obj['geoOutMode'] = ApiClient.convertToType(data['geoOutMode'], 'String');
      }
      if (data.hasOwnProperty('geoOutCalendar')) {
        obj['geoOutCalendar'] = CalendarDTO.constructFromObject(data['geoOutCalendar']);
      }
      if (data.hasOwnProperty('geoOutSetPoint')) {
        obj['geoOutSetPoint'] = ApiClient.convertToType(data['geoOutSetPoint'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/GeolocationConfigDTO.GeoInModeEnum} geoInMode
   */
  exports.prototype['geoInMode'] = undefined;
  /**
   * @member {Number} geoInSetPoint
   */
  exports.prototype['geoInSetPoint'] = undefined;
  /**
   * @member {module:model/CalendarDTO} geoInCalendar
   */
  exports.prototype['geoInCalendar'] = undefined;
  /**
   * @member {module:model/GeolocationConfigDTO.GeoOutModeEnum} geoOutMode
   */
  exports.prototype['geoOutMode'] = undefined;
  /**
   * @member {module:model/CalendarDTO} geoOutCalendar
   */
  exports.prototype['geoOutCalendar'] = undefined;
  /**
   * @member {Number} geoOutSetPoint
   */
  exports.prototype['geoOutSetPoint'] = undefined;


  /**
   * Allowed values for the <code>geoInMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GeoInModeEnum = {
    /**
     * value: "CALENDAR"
     * @const
     */
    "CALENDAR": "CALENDAR",
    /**
     * value: "OFF"
     * @const
     */
    "OFF": "OFF",
    /**
     * value: "CONSTANT_SETPOINT"
     * @const
     */
    "CONSTANT_SETPOINT": "CONSTANT_SETPOINT"  };

  /**
   * Allowed values for the <code>geoOutMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GeoOutModeEnum = {
    /**
     * value: "CALENDAR"
     * @const
     */
    "CALENDAR": "CALENDAR",
    /**
     * value: "OFF"
     * @const
     */
    "OFF": "OFF",
    /**
     * value: "CONSTANT_SETPOINT"
     * @const
     */
    "CONSTANT_SETPOINT": "CONSTANT_SETPOINT"  };


  return exports;
}));

