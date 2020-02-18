package com.nativemoduletest;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.content.Intent;

import androidx.annotation.NonNull;

public class AndroidNativeModule extends ReactContextBaseJavaModule {
    public static ReactApplicationContext reactContext;
    public AndroidNativeModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext =reactContext;
    }

    @ReactMethod
    public void show()
    {
        ReactApplicationContext context = getReactApplicationContext();
        Intent intent = new Intent(context, ArMeasureActivity.class);
        context.startActivity(intent);
    }

    @NonNull
    @Override
    public String getName() {
        return "AndroidNativeModule";
    }
}
