# MomitApi.SystemtypeApi

All URIs are relative to *http://api.momit.com:8080/momitapi/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByDeviceTypeAndSystemTypeName**](SystemtypeApi.md#getByDeviceTypeAndSystemTypeName) | **GET** /systemType | This method returns the list of systemtypes availables in the API


<a name="getByDeviceTypeAndSystemTypeName"></a>
# **getByDeviceTypeAndSystemTypeName**
> getByDeviceTypeAndSystemTypeName(opts)

This method returns the list of systemtypes availables in the API

If the query param deviceTypeId is null all systemTypes will be returned 

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

var apiInstance = new MomitApi.SystemtypeApi();

var opts = { 
  'deviceTypeId': 789, // Number | Id of the device type
  'systemTypeName': "systemTypeName_example" // String | Id of the systemtype
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getByDeviceTypeAndSystemTypeName(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTypeId** | **Number**| Id of the device type | [optional] 
 **systemTypeName** | **String**| Id of the systemtype | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

