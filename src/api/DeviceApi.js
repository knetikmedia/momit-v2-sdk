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
    define(['ApiClient', 'model/DeviceDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.DeviceApi = factory(root.MomitApi.ApiClient, root.MomitApi.DeviceDTO);
  }
}(this, function(ApiClient, DeviceDTO) {
  'use strict';

  /**
   * Device service.
   * @module api/DeviceApi
   * @version 1.0
   */

  /**
   * Constructs a new DeviceApi. 
   * @alias module:api/DeviceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/DeviceApi~createCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DeviceDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method create a device
     * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     * @param {module:model/DeviceDTO} body Data of the device
     * @param {module:api/DeviceApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DeviceDTO>}
     */
    this.create = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [DeviceDTO];

      return this.apiClient.callApi(
        '/device', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDevice operation.
     * @callback module:api/DeviceApi~updateDeviceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method update the device request by parameter
     * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     * @param {Number} serialNumber Id of the device
     * @param {module:model/DeviceDTO} body Data of the device
     * @param {module:api/DeviceApi~updateDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateDevice = function(serialNumber, body, callback) {
      var postBody = body;

      // verify the required parameter 'serialNumber' is set
      if (serialNumber === undefined || serialNumber === null) {
        throw new Error("Missing the required parameter 'serialNumber' when calling updateDevice");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDevice");
      }


      var pathParams = {
        'serialNumber': serialNumber
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/device/{serialNumber}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
