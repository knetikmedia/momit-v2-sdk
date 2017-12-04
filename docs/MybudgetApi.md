# MomitApi.MybudgetApi

All URIs are relative to *http://api.momit.com:8080/momitapi/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addHvacPower**](MybudgetApi.md#addHvacPower) | **PUT** /mybudget/device/{id}/hvacpower | This method create or update configuration of device in MyBudget
[**addRate**](MybudgetApi.md#addRate) | **POST** /mybudget/device/{id}/rate | This method create the rate request by parameter
[**addRate_0**](MybudgetApi.md#addRate_0) | **POST** /mybudget/rate/{id}/rateperiod | This method create the rate period request by parameter
[**deleteHvacPower**](MybudgetApi.md#deleteHvacPower) | **DELETE** /mybudget/device/{id}/hvacpower | This method remove the device configuration in MyBudget
[**deleteRate**](MybudgetApi.md#deleteRate) | **DELETE** /mybudget/rate/{id} | This method remove the rate request by parameter in MyBudget
[**deleteRatePeriod**](MybudgetApi.md#deleteRatePeriod) | **DELETE** /mybudget/rateperiod/{id} | This method remove the rate period request by parameter in MyBudget
[**getDevice**](MybudgetApi.md#getDevice) | **GET** /mybudget/device/{id} | This method return the device in MyBudget
[**getEnergyUnitById**](MybudgetApi.md#getEnergyUnitById) | **GET** /mybudget/energyunit | This method returns the list of energy units availables in the API
[**getEnergyUnitById_0**](MybudgetApi.md#getEnergyUnitById_0) | **GET** /mybudget/energyunit/{id} | This method returns the energy unit request by id
[**getHvacPower**](MybudgetApi.md#getHvacPower) | **GET** /mybudget/device/{id}/hvacpower | This method return the device configuration in MyBudget
[**getPrediction**](MybudgetApi.md#getPrediction) | **GET** /mybudget/device/{id}/prediction | This method returns the prediction data for the device
[**getRateById**](MybudgetApi.md#getRateById) | **GET** /mybudget/rate/{id} | This method returns the rate request by id
[**getRatePeriodById**](MybudgetApi.md#getRatePeriodById) | **GET** /mybudget/rateperiod/{id} | This method returns the rate period request by id
[**getRatesByDevice**](MybudgetApi.md#getRatesByDevice) | **GET** /mybudget/device/{id}/rate | This method returns the rates request by device id
[**getRatesPeriodByRate**](MybudgetApi.md#getRatesPeriodByRate) | **GET** /mybudget/rate/{id}/rateperiod | This method returns the rate periods request by rate id
[**updateGoalCost**](MybudgetApi.md#updateGoalCost) | **PUT** /mybudget/device/{id}/goalcost | This method update the goal cost request by parameter in MyBudget
[**updateRate**](MybudgetApi.md#updateRate) | **PUT** /mybudget/rate/{id} | This method update the rate request by parameter
[**updateRatePeriod**](MybudgetApi.md#updateRatePeriod) | **PUT** /mybudget/rateperiod/{id} | This method update the rate period request by parameter


<a name="addHvacPower"></a>
# **addHvacPower**
> addHvacPower(id, body)

This method create or update configuration of device in MyBudget

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the device

var body = new MomitApi.MyBudgetHvacPowerDTO(); // MyBudgetHvacPowerDTO | Data of the hvacpower


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addHvacPower(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the device | 
 **body** | [**MyBudgetHvacPowerDTO**](MyBudgetHvacPowerDTO.md)| Data of the hvacpower | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addRate"></a>
# **addRate**
> MyBudgetRateDTO addRate(id, body)

This method create the rate request by parameter

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the device

var body = new MomitApi.MyBudgetRateDTO(); // MyBudgetRateDTO | Data of the rate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the device | 
 **body** | [**MyBudgetRateDTO**](MyBudgetRateDTO.md)| Data of the rate | 

### Return type

[**MyBudgetRateDTO**](MyBudgetRateDTO.md)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addRate_0"></a>
# **addRate_0**
> MyBudgetRatePeriodDTO addRate_0(id, body)

This method create the rate period request by parameter

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the rate

var body = new MomitApi.MyBudgetRatePeriodDTO(); // MyBudgetRatePeriodDTO | Data of the rate period


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRate_0(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the rate | 
 **body** | [**MyBudgetRatePeriodDTO**](MyBudgetRatePeriodDTO.md)| Data of the rate period | 

### Return type

[**MyBudgetRatePeriodDTO**](MyBudgetRatePeriodDTO.md)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHvacPower"></a>
# **deleteHvacPower**
> deleteHvacPower(id)

This method remove the device configuration in MyBudget

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteHvacPower(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRate"></a>
# **deleteRate**
> deleteRate(id)

This method remove the rate request by parameter in MyBudget

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the rate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the rate | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRatePeriod"></a>
# **deleteRatePeriod**
> deleteRatePeriod(id)

This method remove the rate period request by parameter in MyBudget

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the rate period


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRatePeriod(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the rate period | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDevice"></a>
# **getDevice**
> getDevice(id)

This method return the device in MyBudget

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDevice(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEnergyUnitById"></a>
# **getEnergyUnitById**
> getEnergyUnitById()

This method returns the list of energy units availables in the API

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEnergyUnitById(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEnergyUnitById_0"></a>
# **getEnergyUnitById_0**
> getEnergyUnitById_0(id)

This method returns the energy unit request by id

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the energyunit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEnergyUnitById_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the energyunit | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getHvacPower"></a>
# **getHvacPower**
> getHvacPower(id)

This method return the device configuration in MyBudget

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getHvacPower(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPrediction"></a>
# **getPrediction**
> getPrediction(id)

This method returns the prediction data for the device

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPrediction(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRateById"></a>
# **getRateById**
> getRateById(id)

This method returns the rate request by id

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the rate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRateById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the rate | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRatePeriodById"></a>
# **getRatePeriodById**
> getRatePeriodById(id)

This method returns the rate period request by id

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the rate period


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRatePeriodById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the rate period | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRatesByDevice"></a>
# **getRatesByDevice**
> getRatesByDevice(id)

This method returns the rates request by device id

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRatesByDevice(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRatesPeriodByRate"></a>
# **getRatesPeriodByRate**
> getRatesPeriodByRate(id)

This method returns the rate periods request by rate id

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the rate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRatesPeriodByRate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the rate | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGoalCost"></a>
# **updateGoalCost**
> updateGoalCost(id, body)

This method update the goal cost request by parameter in MyBudget

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the device

var body = new MomitApi.MyBudgetDeviceDTO(); // MyBudgetDeviceDTO | Data of the goalCost


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateGoalCost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the device | 
 **body** | [**MyBudgetDeviceDTO**](MyBudgetDeviceDTO.md)| Data of the goalCost | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRate"></a>
# **updateRate**
> MyBudgetRateDTO updateRate(id, body)

This method update the rate request by parameter

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the rate

var body = new MomitApi.MyBudgetRateDTO(); // MyBudgetRateDTO | Data of the rate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the rate | 
 **body** | [**MyBudgetRateDTO**](MyBudgetRateDTO.md)| Data of the rate | 

### Return type

[**MyBudgetRateDTO**](MyBudgetRateDTO.md)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRatePeriod"></a>
# **updateRatePeriod**
> updateRatePeriod(id, body)

This method update the rate period request by parameter

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');
var defaultClient = MomitApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new MomitApi.MybudgetApi();

var id = 789; // Number | Id of the rate period

var body = new MomitApi.MyBudgetRatePeriodDTO(); // MyBudgetRatePeriodDTO | Data of the rate period


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRatePeriod(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the rate period | 
 **body** | [**MyBudgetRatePeriodDTO**](MyBudgetRatePeriodDTO.md)| Data of the rate period | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

