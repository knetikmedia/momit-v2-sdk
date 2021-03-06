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
    define(['ApiClient', 'model/CUserRoleDTO', 'model/InstallationDTO', 'model/RestLink', 'model/UserDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CUserRoleDTO'), require('./InstallationDTO'), require('./RestLink'), require('./UserDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.InstallationUserRoleDTO = factory(root.MomitApi.ApiClient, root.MomitApi.CUserRoleDTO, root.MomitApi.InstallationDTO, root.MomitApi.RestLink, root.MomitApi.UserDTO);
  }
}(this, function(ApiClient, CUserRoleDTO, InstallationDTO, RestLink, UserDTO) {
  'use strict';




  /**
   * The InstallationUserRoleDTO model module.
   * @module model/InstallationUserRoleDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>InstallationUserRoleDTO</code>.
   * @alias module:model/InstallationUserRoleDTO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InstallationUserRoleDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstallationUserRoleDTO} obj Optional instance to populate.
   * @return {module:model/InstallationUserRoleDTO} The populated <code>InstallationUserRoleDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [RestLink]);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserDTO.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('installation')) {
        obj['installation'] = InstallationDTO.constructFromObject(data['installation']);
      }
      if (data.hasOwnProperty('userRole')) {
        obj['userRole'] = CUserRoleDTO.constructFromObject(data['userRole']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/RestLink>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {module:model/UserDTO} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:model/InstallationDTO} installation
   */
  exports.prototype['installation'] = undefined;
  /**
   * @member {module:model/CUserRoleDTO} userRole
   */
  exports.prototype['userRole'] = undefined;



  return exports;
}));


