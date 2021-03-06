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
    root.MomitApi.FaqApi = factory(root.MomitApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Faq service.
   * @module api/FaqApi
   * @version 1.0
   */

  /**
   * Constructs a new FaqApi. 
   * @alias module:api/FaqApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getFAQ operation.
     * @callback module:api/FaqApi~getFAQCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method return the faq appropiate for the request parameter
     * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     * @param {String} faq Faq language
     * @param {module:api/FaqApi~getFAQCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getFAQ = function(faq, callback) {
      var postBody = null;

      // verify the required parameter 'faq' is set
      if (faq === undefined || faq === null) {
        throw new Error("Missing the required parameter 'faq' when calling getFAQ");
      }


      var pathParams = {
        'faq': faq
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key', 'token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/faqs/{faq}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
