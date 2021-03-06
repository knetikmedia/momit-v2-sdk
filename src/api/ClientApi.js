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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.ClientApi = factory(root.MomitApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Client service.
   * @module api/ClientApi
   * @version 1.0
   */

  /**
   * Constructs a new ClientApi. 
   * @alias module:api/ClientApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAvailableProducts operation.
     * @callback module:api/ClientApi~getAvailableProductsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method return the list of devices types availables in the API
     * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     * @param {module:api/ClientApi~getAvailableProductsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getAvailableProducts = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key', 'token'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/appClient/availableProducts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
