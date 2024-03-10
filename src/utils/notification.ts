import admin from "firebase-admin";

export async function sendPushNotification(
  fcmToken: string,
  title: string,
  body: string
): Promise<void> {
  try {
    await admin.messaging().send({
      token: fcmToken,
      data: {
        title,
        body,
      },
      android: {
        priority: "high", // Set priority to high for Android
      },
    });

    console.log("Push notification sent successfully");
  } catch (error) {
    console.error("Error sending push notification:", error);
    throw new Error("Failed to send push notification");
  }
}
