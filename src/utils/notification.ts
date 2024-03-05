import admin from 'firebase-admin';

export async function sendPushNotification(
  fcmToken: string,
  title: string,
  body: string
): Promise<void> {
  try {
    await admin.messaging().send({
      token: fcmToken,
      notification: {
        title,
        body,
      },
    });

    console.log('Push notification sent successfully');
  } catch (error) {
    console.error('Error sending push notification:', error);
    throw new Error('Failed to send push notification');
  }
}
