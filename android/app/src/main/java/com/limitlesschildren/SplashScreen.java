package com.limitlesschildren;

import android.app.Activity;
import android.app.Dialog;
import android.content.DialogInterface;
import android.media.Image;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Handler;
import android.view.WindowManager;
import android.widget.ImageView;

import com.bumptech.glide.Glide;

import java.io.IOException;
import java.lang.ref.WeakReference;

/**
 * SplashScreen
 * 启动屏
 * from：http://www.devio.org
 * Author:CrazyCodeBoy
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
public class SplashScreen {
    private static Dialog mSplashDialog;
    private static WeakReference<Activity> mActivity;

    /**
     * 打开启动屏
     */
    public static void show(final Activity activity, final int themeResId, final boolean fullScreen) {
        if (activity == null) return;
        mActivity = new WeakReference<Activity>(activity);
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (!activity.isFinishing()) {
                    mSplashDialog = new Dialog(activity, themeResId);
                    mSplashDialog.setContentView(org.devio.rn.splashscreen.R.layout.launch_screen);
                    mSplashDialog.setCancelable(false);

                    ImageView img = mSplashDialog.findViewById(R.id.gif);
                    Glide.with(mSplashDialog.getContext()).load(R.drawable.gif).into(img);
                    MediaPlayer mediaPlayer = MediaPlayer.create(mSplashDialog.getContext(), R.raw.splash_tone);

                    mediaPlayer.start();


                    if (!mSplashDialog.isShowing()) {
                        mSplashDialog.show();

                        new Handler().postDelayed(new Runnable() {
                            @Override
                            public void run() {


                                mediaPlayer.stop();
                                mediaPlayer.release();
                                mSplashDialog.dismiss();

                            }
                        }, 7000);
                    }
                }
               /* if (!activity.isFinishing()) {
                    mSplashDialog = new Dialog(activity, themeResId);
                    mSplashDialog.setContentView(R.layout.launch_screen);

                    mSplashDialog.setCancelable(false);


                    ImageView gif_img = mSplashDialog.findViewById(R.id.gif);

                    Glide.with(mSplashDialog.getContext()).load(R.drawable.gif).into(gif_img);

                    MediaPlayer mediaPlayer = MediaPlayer.create(mSplashDialog.getContext(), R.raw.gif_audio);

                    mediaPlayer.start();
                    if (fullScreen) {
                        setActivityAndroidP(mSplashDialog);
                    }
                    if (mSplashDialog == null) {
                        mSplashDialog.show();

                        mSplashDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
                            @Override
                            public void onDismiss(DialogInterface dialogInterface) {
                                try {
                                    mediaPlayer.release();
                                    mediaPlayer.stop();
                                } catch (Exception e) {
                                    e.printStackTrace();
                                }

                            }
                        });
                    }


                }*/
            }
        });
    }

    /**
     * 打开启动屏
     */
    public static void show(final Activity activity, final boolean fullScreen) {
        int resourceId = fullScreen ? org.devio.rn.splashscreen.R.style.SplashScreen_Fullscreen : org.devio.rn.splashscreen.R.style.SplashScreen_SplashTheme;

        show(activity, resourceId, fullScreen);
    }

    /**
     * 打开启动屏
     */
    public static void show(final Activity activity) {
        show(activity, false);
    }

    /**
     * 关闭启动屏
     */
    public static void hide(Activity activity) {
        if (activity == null) {
            if (mActivity == null) {
                return;
            }
            activity = mActivity.get();
        }

        if (activity == null) return;

        final Activity _activity = activity;

        _activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (mSplashDialog != null && mSplashDialog.isShowing()) {
                    boolean isDestroyed = false;

                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
                        isDestroyed = _activity.isDestroyed();
                    }

                    if (!_activity.isFinishing() && !isDestroyed) {
                        mSplashDialog.dismiss();
                    }
                    mSplashDialog = null;
                }
            }
        });
    }

    private static void setActivityAndroidP(Dialog dialog) {
        //设置全屏展示
        if (Build.VERSION.SDK_INT >= 28) {
            if (dialog != null && dialog.getWindow() != null) {
                dialog.getWindow().addFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);//全屏显示
                WindowManager.LayoutParams lp = dialog.getWindow().getAttributes();
                lp.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
                dialog.getWindow().setAttributes(lp);
            }
        }
    }
}
