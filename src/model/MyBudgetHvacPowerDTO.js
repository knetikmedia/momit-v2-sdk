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
    define(['ApiClient', 'model/MyBudgetDeviceDTO', 'model/MyBudgetEnergyUnitDTO', 'model/MyBudgetRateDTO', 'model/RestLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MyBudgetDeviceDTO'), require('./MyBudgetEnergyUnitDTO'), require('./MyBudgetRateDTO'), require('./RestLink'));
  } else {
    // Browser globals (root is window)
    if (!root.MomitApi) {
      root.MomitApi = {};
    }
    root.MomitApi.MyBudgetHvacPowerDTO = factory(root.MomitApi.ApiClient, root.MomitApi.MyBudgetDeviceDTO, root.MomitApi.MyBudgetEnergyUnitDTO, root.MomitApi.MyBudgetRateDTO, root.MomitApi.RestLink);
  }
}(this, function(ApiClient, MyBudgetDeviceDTO, MyBudgetEnergyUnitDTO, MyBudgetRateDTO, RestLink) {
  'use strict';




  /**
   * The MyBudgetHvacPowerDTO model module.
   * @module model/MyBudgetHvacPowerDTO
   * @version 1.0
   */

  /**
   * Constructs a new <code>MyBudgetHvacPowerDTO</code>.
   * @alias module:model/MyBudgetHvacPowerDTO
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>MyBudgetHvacPowerDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MyBudgetHvacPowerDTO} obj Optional instance to populate.
   * @return {module:model/MyBudgetHvacPowerDTO} The populated <code>MyBudgetHvacPowerDTO</code> instance.
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
      if (data.hasOwnProperty('heatStg1Power')) {
        obj['heatStg1Power'] = ApiClient.convertToType(data['heatStg1Power'], 'Number');
      }
      if (data.hasOwnProperty('heatStg2Power')) {
        obj['heatStg2Power'] = ApiClient.convertToType(data['heatStg2Power'], 'Number');
      }
      if (data.hasOwnProperty('coolStg1Power')) {
        obj['coolStg1Power'] = ApiClient.convertToType(data['coolStg1Power'], 'Number');
      }
      if (data.hasOwnProperty('coolStg2Power')) {
        obj['coolStg2Power'] = ApiClient.convertToType(data['coolStg2Power'], 'Number');
      }
      if (data.hasOwnProperty('heatStg1Rate')) {
        obj['heatStg1Rate'] = MyBudgetRateDTO.constructFromObject(data['heatStg1Rate']);
      }
      if (data.hasOwnProperty('heatStg2Rate')) {
        obj['heatStg2Rate'] = MyBudgetRateDTO.constructFromObject(data['heatStg2Rate']);
      }
      if (data.hasOwnProperty('coolStg1Rate')) {
        obj['coolStg1Rate'] = MyBudgetRateDTO.constructFromObject(data['coolStg1Rate']);
      }
      if (data.hasOwnProperty('coolStg2Rate')) {
        obj['coolStg2Rate'] = MyBudgetRateDTO.constructFromObject(data['coolStg2Rate']);
      }
      if (data.hasOwnProperty('heatStg1Unit')) {
        obj['heatStg1Unit'] = MyBudgetEnergyUnitDTO.constructFromObject(data['heatStg1Unit']);
      }
      if (data.hasOwnProperty('heatStg2Unit')) {
        obj['heatStg2Unit'] = MyBudgetEnergyUnitDTO.constructFromObject(data['heatStg2Unit']);
      }
      if (data.hasOwnProperty('coolStg1Unit')) {
        obj['coolStg1Unit'] = MyBudgetEnergyUnitDTO.constructFromObject(data['coolStg1Unit']);
      }
      if (data.hasOwnProperty('coolStg2Unit')) {
        obj['coolStg2Unit'] = MyBudgetEnergyUnitDTO.constructFromObject(data['coolStg2Unit']);
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
   * @member {Number} heatStg1Power
   */
  exports.prototype['heatStg1Power'] = undefined;
  /**
   * @member {Number} heatStg2Power
   */
  exports.prototype['heatStg2Power'] = undefined;
  /**
   * @member {Number} coolStg1Power
   */
  exports.prototype['coolStg1Power'] = undefined;
  /**
   * @member {Number} coolStg2Power
   */
  exports.prototype['coolStg2Power'] = undefined;
  /**
   * @member {module:model/MyBudgetRateDTO} heatStg1Rate
   */
  exports.prototype['heatStg1Rate'] = undefined;
  /**
   * @member {module:model/MyBudgetRateDTO} heatStg2Rate
   */
  exports.prototype['heatStg2Rate'] = undefined;
  /**
   * @member {module:model/MyBudgetRateDTO} coolStg1Rate
   */
  exports.prototype['coolStg1Rate'] = undefined;
  /**
   * @member {module:model/MyBudgetRateDTO} coolStg2Rate
   */
  exports.prototype['coolStg2Rate'] = undefined;
  /**
   * @member {module:model/MyBudgetEnergyUnitDTO} heatStg1Unit
   */
  exports.prototype['heatStg1Unit'] = undefined;
  /**
   * @member {module:model/MyBudgetEnergyUnitDTO} heatStg2Unit
   */
  exports.prototype['heatStg2Unit'] = undefined;
  /**
   * @member {module:model/MyBudgetEnergyUnitDTO} coolStg1Unit
   */
  exports.prototype['coolStg1Unit'] = undefined;
  /**
   * @member {module:model/MyBudgetEnergyUnitDTO} coolStg2Unit
   */
  exports.prototype['coolStg2Unit'] = undefined;



  return exports;
}));


