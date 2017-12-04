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
    root.MomitApi.CUserRoleDTO = factory(root.MomitApi.ApiClient, root.MomitApi.RestLink);
  }
}(this, function(ApiClient, RestLink) {
  'use strict';




  /**
   * The CUserRoleDTO model module.
   * @module model/CUserRoleDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>CUserRoleDTO</code>.
   * @alias module:model/CUserRoleDTO
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CUserRoleDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CUserRoleDTO} obj Optional instance to populate.
   * @return {module:model/CUserRoleDTO} The populated <code>CUserRoleDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [RestLink]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('userRoleName')) {
        obj['userRoleName'] = ApiClient.convertToType(data['userRoleName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/RestLink>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} userRoleName
   */
  exports.prototype['userRoleName'] = undefined;



  return exports;
}));

