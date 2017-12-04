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
    define(['ApiClient', 'model/CCurrencyDTO', 'model/RestLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CCurrencyDTO'), require('./RestLink'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.MeasureDTO = factory(root.MomitApi.ApiClient, root.MomitApi.CCurrencyDTO, root.MomitApi.RestLink);
  }
}(this, function(ApiClient, CCurrencyDTO, RestLink) {
  'use strict';




  /**
   * The MeasureDTO model module.
   * @module model/MeasureDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>MeasureDTO</code>.
   * @alias module:model/MeasureDTO
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>MeasureDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MeasureDTO} obj Optional instance to populate.
   * @return {module:model/MeasureDTO} The populated <code>MeasureDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('numberFormat')) {
        obj['numberFormat'] = ApiClient.convertToType(data['numberFormat'], 'String');
      }
      if (data.hasOwnProperty('dateFormat')) {
        obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
      }
      if (data.hasOwnProperty('hourFormat')) {
        obj['hourFormat'] = ApiClient.convertToType(data['hourFormat'], 'String');
      }
      if (data.hasOwnProperty('firstDayWeek')) {
        obj['firstDayWeek'] = ApiClient.convertToType(data['firstDayWeek'], 'String');
      }
      if (data.hasOwnProperty('distanceMeasure')) {
        obj['distanceMeasure'] = ApiClient.convertToType(data['distanceMeasure'], 'String');
      }
      if (data.hasOwnProperty('temperatureMeasure')) {
        obj['temperatureMeasure'] = ApiClient.convertToType(data['temperatureMeasure'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = CCurrencyDTO.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [RestLink]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} numberFormat
   */
  exports.prototype['numberFormat'] = undefined;
  /**
   * @member {String} dateFormat
   */
  exports.prototype['dateFormat'] = undefined;
  /**
   * @member {String} hourFormat
   */
  exports.prototype['hourFormat'] = undefined;
  /**
   * @member {String} firstDayWeek
   */
  exports.prototype['firstDayWeek'] = undefined;
  /**
   * @member {String} distanceMeasure
   */
  exports.prototype['distanceMeasure'] = undefined;
  /**
   * @member {String} temperatureMeasure
   */
  exports.prototype['temperatureMeasure'] = undefined;
  /**
   * @member {module:model/CCurrencyDTO} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {Array.<module:model/RestLink>} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


