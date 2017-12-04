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
    define(['ApiClient', 'model/MyBudgetDeviceDTO', 'model/RestLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MyBudgetDeviceDTO'), require('./RestLink'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.MyBudgetRateDTO = factory(root.MomitApi.ApiClient, root.MomitApi.MyBudgetDeviceDTO, root.MomitApi.RestLink);
  }
}(this, function(ApiClient, MyBudgetDeviceDTO, RestLink) {
  'use strict';




  /**
   * The MyBudgetRateDTO model module.
   * @module model/MyBudgetRateDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>MyBudgetRateDTO</code>.
   * @alias module:model/MyBudgetRateDTO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>MyBudgetRateDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MyBudgetRateDTO} obj Optional instance to populate.
   * @return {module:model/MyBudgetRateDTO} The populated <code>MyBudgetRateDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [RestLink]);
      }
      if (data.hasOwnProperty('device')) {
        obj['device'] = MyBudgetDeviceDTO.constructFromObject(data['device']);
      }
      if (data.hasOwnProperty('rateId')) {
        obj['rateId'] = ApiClient.convertToType(data['rateId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/RestLink>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {module:model/MyBudgetDeviceDTO} device
   */
  exports.prototype['device'] = undefined;
  /**
   * @member {Number} rateId
   */
  exports.prototype['rateId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

