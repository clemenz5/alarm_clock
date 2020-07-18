# SystemInfoApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkTemp**](SystemInfoApi.md#checkTemp) | **GET** /system_info/temperature | Check the temperature of your pi

<a name="checkTemp"></a>
# **checkTemp**
> Long checkTemp()

Check the temperature of your pi

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.SystemInfoApi;


SystemInfoApi apiInstance = new SystemInfoApi();
try {
    Long result = apiInstance.checkTemp();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SystemInfoApi#checkTemp");
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
 - **Accept**: */*

