# MomitApi.InvitationApi

All URIs are relative to *http://api.momit.com:8080/momitapi/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](InvitationApi.md#create) | **POST** /invitation | This method create a invitation for user


<a name="create"></a>
# **create**
> InvitationDTO create(body)

This method create a invitation for user

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

var apiInstance = new MomitApi.InvitationApi();

var body = new MomitApi.InvitationDTO(); // InvitationDTO | Data of the invitation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.create(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvitationDTO**](InvitationDTO.md)| Data of the invitation | 

### Return type

[**InvitationDTO**](InvitationDTO.md)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

