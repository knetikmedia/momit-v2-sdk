# MomitApi.TimezoneApi

All URIs are relative to *http://api.momit.com:8080/momitapi/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getById**](TimezoneApi.md#getById) | **GET** /timezone/{id} | This method returns a timezone request by id
[**getByName**](TimezoneApi.md#getByName) | **GET** /timezone | This method returns the list of timezones availables in the API


<a name="getById"></a>
# **getById**
> getById(id)

This method returns a timezone request by id

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

var apiInstance = new MomitApi.TimezoneApi();

var id = 789; // Number | Id of the timezone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the timezone | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByName"></a>
# **getByName**
> getByName(opts)

This method returns the list of timezones availables in the API

If the query param is null all timezones will be returned

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

var apiInstance = new MomitApi.TimezoneApi();

var opts = { 
  'name': "name_example" // String | Timezone name string
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getByName(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Timezone name string | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

