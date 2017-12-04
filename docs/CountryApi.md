# MomitApi.CountryApi

All URIs are relative to *http://api.momit.com:8080/momitapi/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAll**](CountryApi.md#getAll) | **GET** /countries | This method returns the list of countries availables in the API
[**getById**](CountryApi.md#getById) | **GET** /countries/{id} | This method returns a country request by id


<a name="getAll"></a>
# **getAll**
> getAll(opts)

This method returns the list of countries availables in the API

If the query param is null all countries will be returned

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

var apiInstance = new MomitApi.CountryApi();

var opts = { 
  'code': "code_example" // String | Query param code of country
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Query param code of country | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getById"></a>
# **getById**
> getById(id)

This method returns a country request by id

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

var apiInstance = new MomitApi.CountryApi();

var id = 789; // Number | Id of the country


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
 **id** | **Number**| Id of the country | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

