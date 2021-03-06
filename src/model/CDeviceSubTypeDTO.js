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
    define(['ApiClient', 'model/CDeviceTypeDTO', 'model/RestLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CDeviceTypeDTO'), require('./RestLink'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.CDeviceSubTypeDTO = factory(root.MomitApi.ApiClient, root.MomitApi.CDeviceTypeDTO, root.MomitApi.RestLink);
  }
}(this, function(ApiClient, CDeviceTypeDTO, RestLink) {
  'use strict';




  /**
   * The CDeviceSubTypeDTO model module.
   * @module model/CDeviceSubTypeDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>CDeviceSubTypeDTO</code>.
   * @alias module:model/CDeviceSubTypeDTO
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CDeviceSubTypeDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CDeviceSubTypeDTO} obj Optional instance to populate.
   * @return {module:model/CDeviceSubTypeDTO} The populated <code>CDeviceSubTypeDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('deviceTypeRelated')) {
        obj['deviceTypeRelated'] = CDeviceTypeDTO.constructFromObject(data['deviceTypeRelated']);
      }
      if (data.hasOwnProperty('systemTypeName')) {
        obj['systemTypeName'] = ApiClient.convertToType(data['systemTypeName'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
   * @member {module:model/CDeviceTypeDTO} deviceTypeRelated
   */
  exports.prototype['deviceTypeRelated'] = undefined;
  /**
   * @member {String} systemTypeName
   */
  exports.prototype['systemTypeName'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/RestLink>} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


