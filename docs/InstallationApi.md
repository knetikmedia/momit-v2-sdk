# MomitApi.InstallationApi

All URIs are relative to *http://api.momit.com:8080/momitapi/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](InstallationApi.md#callDelete) | **DELETE** /installation/{id} | This method delete an installation and all dependecies request by id
[**createCalendar**](InstallationApi.md#createCalendar) | **POST** /installation/{installationId}/calendar | This method create a calendar in a installation request by parameters
[**createInstallation**](InstallationApi.md#createInstallation) | **POST** /installation | This method create an installation
[**createInstallationDevice**](InstallationApi.md#createInstallationDevice) | **POST** /installation/{id}/device | This method create device in an installation request by parameters
[**createPeriod**](InstallationApi.md#createPeriod) | **POST** /installation/{installationId}/calendar/{calendarId}/period | This method create a calendar period in a calendar and installation request by parameters
[**deleteCalendar**](InstallationApi.md#deleteCalendar) | **DELETE** /installation/{installationId}/calendar/{calendarId} | This method delete a calendar request by id
[**deleteCalendarPeriod**](InstallationApi.md#deleteCalendarPeriod) | **DELETE** /installation/{installationId}/calendar/{calendarId}/period/{periodId} | This method delete a calendar period request by id
[**deleteInstallationDevice**](InstallationApi.md#deleteInstallationDevice) | **DELETE** /installation/{id}/device/{serialNumber} | This method delete a device and all dependecies request by id
[**getAllPropertiesByDevice**](InstallationApi.md#getAllPropertiesByDevice) | **GET** /installation/{idInstallation}/device/{serialNumber}/properties | This method returns a list of device properties availables for device request by parameters
[**getCurrentUserInstallations**](InstallationApi.md#getCurrentUserInstallations) | **GET** /installation | This method returns a list of installations for the logged user
[**getCurrentWeather**](InstallationApi.md#getCurrentWeather) | **GET** /installation/{idInstallation}/device/{serialNumber}/weathercurrent | This method returns a current weaher data request by parameters
[**getDeviceAvailability**](InstallationApi.md#getDeviceAvailability) | **GET** /installation/{idInstallation}/device/{serialNumber}/availability | This method returns if the device is available
[**getDeviceById**](InstallationApi.md#getDeviceById) | **GET** /installation/{idInstallation}/device/{serialNumber} | This method returns a device data request by parameters
[**getDeviceSmartConfigurationWorkingMode**](InstallationApi.md#getDeviceSmartConfigurationWorkingMode) | **GET** /installation/{idInstallation}/device/{serialNumber}/smartMode | This method returns a smart configuration request by parameters
[**getDeviceStats**](InstallationApi.md#getDeviceStats) | **GET** /installation/{idInstallation}/device/{serialNumber}/stats | This method returns the stats request by parameters
[**getDeviceStatsCost**](InstallationApi.md#getDeviceStatsCost) | **GET** /installation/{idInstallation}/device/{serialNumber}/statscost | This method returns the cost stats request by parameters
[**getInfoByDevice**](InstallationApi.md#getInfoByDevice) | **GET** /installation/{idInstallation}/device/{serialNumber}/info | This method returns a device info request by parameters
[**getInstallationById**](InstallationApi.md#getInstallationById) | **GET** /installation/{id} | This method returns an installation request by id
[**getInstallationCalendarPeriods**](InstallationApi.md#getInstallationCalendarPeriods) | **GET** /installation/{installationId}/calendar/{calendarId}/period | This method  returns a list of calendar periods in a calendar and installation request by parameters
[**getInstallationCalendars**](InstallationApi.md#getInstallationCalendars) | **GET** /installation/{installationId}/calendar | This method returns a list of calendars in an installation request by parameters
[**getInstallationDevices**](InstallationApi.md#getInstallationDevices) | **GET** /installation/{id}/device | This method returns a list of devices request by parameters
[**getPropertiesById**](InstallationApi.md#getPropertiesById) | **GET** /installation/{idInstallation}/device/{serialNumber}/property/{id} | This method returns a device property in an installation and device request by parameters
[**getWeather**](InstallationApi.md#getWeather) | **GET** /installation/{idInstallation}/device/{serialNumber}/weather | This method returns a forecast weather data request by parameters
[**modifyCalendarPeriod**](InstallationApi.md#modifyCalendarPeriod) | **PUT** /installation/{installationId}/calendar/{calendarId}/period/{periodId} | This method update the calendar period request by parameters
[**putDeviceSmartConfigurationWorkingMode**](InstallationApi.md#putDeviceSmartConfigurationWorkingMode) | **POST** /installation/{idInstallation}/device/{serialNumber}/smartMode | This method create a smart configuration request by parameters
[**setUp**](InstallationApi.md#setUp) | **PUT** /installation/{idInstallation}/device/{serialNumber}/setUp | This method create a set up for the device and installation request by parameters
[**startPairing**](InstallationApi.md#startPairing) | **PUT** /installation/{idInstallation}/device/{serialNumberMaster}/startPairing/{serialNumberSlave} | This method create a paired to devices request by parameters
[**update**](InstallationApi.md#update) | **PUT** /installation/{id} | This method update an installation request by id
[**updateCalendar**](InstallationApi.md#updateCalendar) | **PUT** /installation/{installationId}/calendar/{calendarId} | This method update the calendar request by parameters
[**updateDeviceProperty**](InstallationApi.md#updateDeviceProperty) | **PUT** /installation/{idInstallation}/device/{serialNumber}/properties | This method update a device property in an installation and device request by parameters
[**updateInstallationDevice**](InstallationApi.md#updateInstallationDevice) | **PUT** /installation/{id}/device/{serialNumber} | This method update a device request by id
[**updateSmartConfiguration**](InstallationApi.md#updateSmartConfiguration) | **PUT** /installation/{idInstallation}/device/{serialNumber}/smartMode | This method update the smart configuration request by parameters


<a name="callDelete"></a>
# **callDelete**
> callDelete(id)

This method delete an installation and all dependecies request by id

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

var apiInstance = new MomitApi.InstallationApi();

var id = 789; // Number | Id of the installation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.callDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the installation | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createCalendar"></a>
# **createCalendar**
> CalendarDTO createCalendar(installationId, body)

This method create a calendar in a installation request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var installationId = 789; // Number | Id of the installation

var body = new MomitApi.CalendarDTO(); // CalendarDTO | Data of the calendar


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCalendar(installationId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installationId** | **Number**| Id of the installation | 
 **body** | [**CalendarDTO**](CalendarDTO.md)| Data of the calendar | 

### Return type

[**CalendarDTO**](CalendarDTO.md)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createInstallation"></a>
# **createInstallation**
> InstallationDTO createInstallation(body)

This method create an installation

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

var apiInstance = new MomitApi.InstallationApi();

var body = new MomitApi.InstallationDTO(); // InstallationDTO | Data of the installation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createInstallation(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InstallationDTO**](InstallationDTO.md)| Data of the installation | 

### Return type

[**InstallationDTO**](InstallationDTO.md)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInstallationDevice"></a>
# **createInstallationDevice**
> DeviceDTO createInstallationDevice(id, body)

This method create device in an installation request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var id = 789; // Number | Id of the installation

var body = new MomitApi.DeviceDTO(); // DeviceDTO | Data of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createInstallationDevice(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the installation | 
 **body** | [**DeviceDTO**](DeviceDTO.md)| Data of the device | 

### Return type

[**DeviceDTO**](DeviceDTO.md)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPeriod"></a>
# **createPeriod**
> CalendarPeriodDTO createPeriod(installationId, calendarId, body)

This method create a calendar period in a calendar and installation request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var installationId = 789; // Number | Id of the installation

var calendarId = 789; // Number | Id of the calendar

var body = new MomitApi.CalendarPeriodDTO(); // CalendarPeriodDTO | Data of the calendar period


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPeriod(installationId, calendarId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installationId** | **Number**| Id of the installation | 
 **calendarId** | **Number**| Id of the calendar | 
 **body** | [**CalendarPeriodDTO**](CalendarPeriodDTO.md)| Data of the calendar period | 

### Return type

[**CalendarPeriodDTO**](CalendarPeriodDTO.md)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCalendar"></a>
# **deleteCalendar**
> deleteCalendar(installationId, calendarId)

This method delete a calendar request by id

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

var apiInstance = new MomitApi.InstallationApi();

var installationId = 789; // Number | Id of the installation

var calendarId = 789; // Number | Id of the calendar


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCalendar(installationId, calendarId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installationId** | **Number**| Id of the installation | 
 **calendarId** | **Number**| Id of the calendar | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCalendarPeriod"></a>
# **deleteCalendarPeriod**
> deleteCalendarPeriod(installationId, calendarId, periodId)

This method delete a calendar period request by id

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

var apiInstance = new MomitApi.InstallationApi();

var installationId = 789; // Number | Id of the installation

var calendarId = 789; // Number | Id of the calendar

var periodId = 789; // Number | Id of the calendar period


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCalendarPeriod(installationId, calendarId, periodId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installationId** | **Number**| Id of the installation | 
 **calendarId** | **Number**| Id of the calendar | 
 **periodId** | **Number**| Id of the calendar period | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInstallationDevice"></a>
# **deleteInstallationDevice**
> deleteInstallationDevice(id, serialNumber)

This method delete a device and all dependecies request by id

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

var apiInstance = new MomitApi.InstallationApi();

var id = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInstallationDevice(id, serialNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllPropertiesByDevice"></a>
# **getAllPropertiesByDevice**
> getAllPropertiesByDevice(idInstallation, serialNumber)

This method returns a list of device properties availables for device request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAllPropertiesByDevice(idInstallation, serialNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getCurrentUserInstallations"></a>
# **getCurrentUserInstallations**
> getCurrentUserInstallations()

This method returns a list of installations for the logged user

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

var apiInstance = new MomitApi.InstallationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCurrentUserInstallations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentWeather"></a>
# **getCurrentWeather**
> getCurrentWeather(idInstallation, serialNumber)

This method returns a current weaher data request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCurrentWeather(idInstallation, serialNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getDeviceAvailability"></a>
# **getDeviceAvailability**
> getDeviceAvailability(idInstallation, serialNumber)

This method returns if the device is available

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDeviceAvailability(idInstallation, serialNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceById"></a>
# **getDeviceById**
> getDeviceById(idInstallation, serialNumber)

This method returns a device data request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDeviceById(idInstallation, serialNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getDeviceSmartConfigurationWorkingMode"></a>
# **getDeviceSmartConfigurationWorkingMode**
> getDeviceSmartConfigurationWorkingMode(idInstallation, serialNumber)

This method returns a smart configuration request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDeviceSmartConfigurationWorkingMode(idInstallation, serialNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getDeviceStats"></a>
# **getDeviceStats**
> getDeviceStats(idInstallation, serialNumber, from, to, group)

This method returns the stats request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device

var from = "from_example"; // String | Start date for stats

var to = "to_example"; // String | End date for stats

var group = "group_example"; // String | Type of the stats


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDeviceStats(idInstallation, serialNumber, from, to, group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 
 **from** | **String**| Start date for stats | 
 **to** | **String**| End date for stats | 
 **group** | **String**| Type of the stats | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getDeviceStatsCost"></a>
# **getDeviceStatsCost**
> getDeviceStatsCost(idInstallation, serialNumber, from, to, group)

This method returns the cost stats request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device

var from = "from_example"; // String | Start date for stats

var to = "to_example"; // String | End date for stats

var group = "group_example"; // String | Type of the stats


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDeviceStatsCost(idInstallation, serialNumber, from, to, group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 
 **from** | **String**| Start date for stats | 
 **to** | **String**| End date for stats | 
 **group** | **String**| Type of the stats | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getInfoByDevice"></a>
# **getInfoByDevice**
> getInfoByDevice(idInstallation, serialNumber)

This method returns a device info request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInfoByDevice(idInstallation, serialNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getInstallationById"></a>
# **getInstallationById**
> getInstallationById(id)

This method returns an installation request by id

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

var apiInstance = new MomitApi.InstallationApi();

var id = 789; // Number | Id of the installation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInstallationById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the installation | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstallationCalendarPeriods"></a>
# **getInstallationCalendarPeriods**
> getInstallationCalendarPeriods(installationId, calendarId)

This method  returns a list of calendar periods in a calendar and installation request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var installationId = 789; // Number | Id of the installation

var calendarId = 789; // Number | Id of the calendar


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInstallationCalendarPeriods(installationId, calendarId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installationId** | **Number**| Id of the installation | 
 **calendarId** | **Number**| Id of the calendar | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstallationCalendars"></a>
# **getInstallationCalendars**
> getInstallationCalendars(installationId)

This method returns a list of calendars in an installation request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var installationId = 789; // Number | Id of the installation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInstallationCalendars(installationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installationId** | **Number**| Id of the installation | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstallationDevices"></a>
# **getInstallationDevices**
> getInstallationDevices(id)

This method returns a list of devices request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var id = 789; // Number | Id of the installation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInstallationDevices(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the installation | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPropertiesById"></a>
# **getPropertiesById**
> getPropertiesById(idInstallation, serialNumber, id)

This method returns a device property in an installation and device request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device

var id = 789; // Number | Id of the property


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPropertiesById(idInstallation, serialNumber, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 
 **id** | **Number**| Id of the property | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="getWeather"></a>
# **getWeather**
> getWeather(idInstallation, serialNumber)

This method returns a forecast weather data request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWeather(idInstallation, serialNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="modifyCalendarPeriod"></a>
# **modifyCalendarPeriod**
> modifyCalendarPeriod(installationId, calendarId, periodId, body)

This method update the calendar period request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var installationId = 789; // Number | Id of the installation

var calendarId = 789; // Number | Id of the calendar

var periodId = 789; // Number | Id of the calendar period

var body = new MomitApi.CalendarPeriodDTO(); // CalendarPeriodDTO | Data of the calendar period


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyCalendarPeriod(installationId, calendarId, periodId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installationId** | **Number**| Id of the installation | 
 **calendarId** | **Number**| Id of the calendar | 
 **periodId** | **Number**| Id of the calendar period | 
 **body** | [**CalendarPeriodDTO**](CalendarPeriodDTO.md)| Data of the calendar period | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putDeviceSmartConfigurationWorkingMode"></a>
# **putDeviceSmartConfigurationWorkingMode**
> SmartConfigurationDTO putDeviceSmartConfigurationWorkingMode(idInstallation, serialNumber, body)

This method create a smart configuration request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device

var body = new MomitApi.SmartConfigurationDTO(); // SmartConfigurationDTO | Data of the smart mode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putDeviceSmartConfigurationWorkingMode(idInstallation, serialNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 
 **body** | [**SmartConfigurationDTO**](SmartConfigurationDTO.md)| Data of the smart mode | 

### Return type

[**SmartConfigurationDTO**](SmartConfigurationDTO.md)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="setUp"></a>
# **setUp**
> setUp(idInstallation, serialNumber, body)

This method create a set up for the device and installation request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device

var body = new MomitApi.CDeviceSubTypeDTO(); // CDeviceSubTypeDTO | Data of the systeType


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setUp(idInstallation, serialNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 
 **body** | [**CDeviceSubTypeDTO**](CDeviceSubTypeDTO.md)| Data of the systeType | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="startPairing"></a>
# **startPairing**
> startPairing(idInstallation, serialNumberMaster, serialNumberSlave)

This method create a paired to devices request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumberMaster = 789; // Number | Id of the master device

var serialNumberSlave = 789; // Number | Id of the slave device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.startPairing(idInstallation, serialNumberMaster, serialNumberSlave, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumberMaster** | **Number**| Id of the master device | 
 **serialNumberSlave** | **Number**| Id of the slave device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="update"></a>
# **update**
> update(id, body)

This method update an installation request by id

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

var apiInstance = new MomitApi.InstallationApi();

var id = 789; // Number | Id of the installation

var body = new MomitApi.InstallationDTO(); // InstallationDTO | Data of the installation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.update(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the installation | 
 **body** | [**InstallationDTO**](InstallationDTO.md)| Data of the installation | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCalendar"></a>
# **updateCalendar**
> updateCalendar(installationId, calendarId, body)

This method update the calendar request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var installationId = 789; // Number | Id of the installation

var calendarId = 789; // Number | Id of the calendar

var body = new MomitApi.CalendarDTO(); // CalendarDTO | Data of the calendar


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCalendar(installationId, calendarId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installationId** | **Number**| Id of the installation | 
 **calendarId** | **Number**| Id of the calendar | 
 **body** | [**CalendarDTO**](CalendarDTO.md)| Data of the calendar | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDeviceProperty"></a>
# **updateDeviceProperty**
> updateDeviceProperty(idInstallation, serialNumber, body)

This method update a device property in an installation and device request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device

var body = new MomitApi.DevicePropertiesListDTO(); // DevicePropertiesListDTO | Data of the properties


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateDeviceProperty(idInstallation, serialNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 
 **body** | [**DevicePropertiesListDTO**](DevicePropertiesListDTO.md)| Data of the properties | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="updateInstallationDevice"></a>
# **updateInstallationDevice**
> updateInstallationDevice(id, serialNumber, body)

This method update a device request by id

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

var apiInstance = new MomitApi.InstallationApi();

var id = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device

var body = new MomitApi.DeviceDTO(); // DeviceDTO | Data of the device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInstallationDevice(id, serialNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 
 **body** | [**DeviceDTO**](DeviceDTO.md)| Data of the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSmartConfiguration"></a>
# **updateSmartConfiguration**
> updateSmartConfiguration(idInstallation, serialNumber, body)

This method update the smart configuration request by parameters

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

var apiInstance = new MomitApi.InstallationApi();

var idInstallation = 789; // Number | Id of the installation

var serialNumber = 789; // Number | Id of the device

var body = new MomitApi.SmartConfigurationDTO(); // SmartConfigurationDTO | Data of the smart mode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSmartConfiguration(idInstallation, serialNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idInstallation** | **Number**| Id of the installation | 
 **serialNumber** | **Number**| Id of the device | 
 **body** | [**SmartConfigurationDTO**](SmartConfigurationDTO.md)| Data of the smart mode | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

