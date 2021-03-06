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
    define(['ApiClient', 'model/RestLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RestLink'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.CDeviceStateDTO = factory(root.MomitApi.ApiClient, root.MomitApi.RestLink);
  }
}(this, function(ApiClient, RestLink) {
  'use strict';




  /**
   * The CDeviceStateDTO model module.
   * @module model/CDeviceStateDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>CDeviceStateDTO</code>.
   * @alias module:model/CDeviceStateDTO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CDeviceStateDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CDeviceStateDTO} obj Optional instance to populate.
   * @return {module:model/CDeviceStateDTO} The populated <code>CDeviceStateDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('blocker')) {
        obj['blocker'] = ApiClient.convertToType(data['blocker'], 'Boolean');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [RestLink]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} blocker
   */
  exports.prototype['blocker'] = undefined;
  /**
   * @member {Array.<module:model/RestLink>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


