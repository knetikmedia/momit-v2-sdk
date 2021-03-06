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
    define(['ApiClient', 'model/CountryDTO', 'model/LanguageDTO', 'model/RestLink', 'model/UserPreferencesDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CountryDTO'), require('./LanguageDTO'), require('./RestLink'), require('./UserPreferencesDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.UserDTO = factory(root.MomitApi.ApiClient, root.MomitApi.CountryDTO, root.MomitApi.LanguageDTO, root.MomitApi.RestLink, root.MomitApi.UserPreferencesDTO);
  }
}(this, function(ApiClient, CountryDTO, LanguageDTO, RestLink, UserPreferencesDTO) {
  'use strict';




  /**
   * The UserDTO model module.
   * @module model/UserDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>UserDTO</code>.
   * @alias module:model/UserDTO
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>UserDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDTO} obj Optional instance to populate.
   * @return {module:model/UserDTO} The populated <code>UserDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('surname')) {
        obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
      }
      if (data.hasOwnProperty('newsletter')) {
        obj['newsletter'] = ApiClient.convertToType(data['newsletter'], 'Boolean');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = CountryDTO.constructFromObject(data['country']);
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = LanguageDTO.constructFromObject(data['language']);
      }
      if (data.hasOwnProperty('imageResource')) {
        obj['imageResource'] = ApiClient.convertToType(data['imageResource'], 'String');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [RestLink]);
      }
      if (data.hasOwnProperty('userPreferences')) {
        obj['userPreferences'] = UserPreferencesDTO.constructFromObject(data['userPreferences']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} surname
   */
  exports.prototype['surname'] = undefined;
  /**
   * @member {Boolean} newsletter
   */
  exports.prototype['newsletter'] = undefined;
  /**
   * @member {module:model/CountryDTO} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {module:model/LanguageDTO} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {String} imageResource
   */
  exports.prototype['imageResource'] = undefined;
  /**
   * @member {Array.<module:model/RestLink>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {module:model/UserPreferencesDTO} userPreferences
   */
  exports.prototype['userPreferences'] = undefined;



  return exports;
}));


