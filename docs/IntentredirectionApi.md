# MomitApi.IntentredirectionApi

All URIs are relative to *http://api.momit.com:8080/momitapi/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRedirect**](IntentredirectionApi.md#getRedirect) | **GET** /intentredirecction | This method redirect to intent url for app mobile


<a name="getRedirect"></a>
# **getRedirect**
> getRedirect(action, opts)

This method redirect to intent url for app mobile

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Example
```javascript
var MomitApi = require('momit_api');

var apiInstance = new MomitApi.IntentredirectionApi();

var action = "action_example"; // String | Action for redirect

var opts = { 
  'scheme': "scheme_example", // String | Scheme for for redirect
  'packageName': "packageName_example", // String | Package for redirect
  'userResetToken': "userResetToken_example", // String | Usertoken for redirect
  'invitationToken': "invitationToken_example", // String | Invitationtoken for redirect
  'invitationId': "invitationId_example", // String | Invitation id for redirect
  'state': "state_example" // String | State for redirect
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRedirect(action, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **String**| Action for redirect | 
 **scheme** | **String**| Scheme for for redirect | [optional] 
 **packageName** | **String**| Package for redirect | [optional] 
 **userResetToken** | **String**| Usertoken for redirect | [optional] 
 **invitationToken** | **String**| Invitationtoken for redirect | [optional] 
 **invitationId** | **String**| Invitation id for redirect | [optional] 
 **state** | **String**| State for redirect | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

