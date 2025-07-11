package com.example;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // 1. Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // 2. Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // 3. Use mock in service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // 4. Verify result
        assertEquals("Mock Data", result);
    }
}
