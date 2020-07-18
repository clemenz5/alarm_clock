# AlarmClockApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllAlarmClocks**](AlarmClockApi.md#getAllAlarmClocks) | **GET** /alarm_clock/all | Get all existing Alarm Clocks

<a name="getAllAlarmClocks"></a>
# **getAllAlarmClocks**
> Long getAllAlarmClocks()

Get all existing Alarm Clocks

Get all existing Alarm Clocks

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AlarmClockApi;


AlarmClockApi apiInstance = new AlarmClockApi();
try {
    Long result = apiInstance.getAllAlarmClocks();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AlarmClockApi#getAllAlarmClocks");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Long**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

