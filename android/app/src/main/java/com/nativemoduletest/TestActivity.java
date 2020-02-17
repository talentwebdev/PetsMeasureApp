package com.nativemoduletest;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;

public class TestActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle saveInstanceState) {
        super.onCreate(saveInstanceState);

        this.setContentView(R.layout.main_activity);
    }
}
