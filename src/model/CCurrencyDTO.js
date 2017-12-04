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
    root.MomitApi.CCurrencyDTO = factory(root.MomitApi.ApiClient, root.MomitApi.RestLink);
  }
}(this, function(ApiClient, RestLink) {
  'use strict';




  /**
   * The CCurrencyDTO model module.
   * @module model/CCurrencyDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>CCurrencyDTO</code>.
   * @alias module:model/CCurrencyDTO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CCurrencyDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CCurrencyDTO} obj Optional instance to populate.
   * @return {module:model/CCurrencyDTO} The populated <code>CCurrencyDTO</code> instance.
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
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
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
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;
  /**
   * @member {String} format
   */
  exports.prototype['format'] = undefined;



  return exports;
}));


