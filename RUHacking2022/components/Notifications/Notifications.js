import Deso from 'deso-protocol';
import {Notifications} from 'react-native-notifications';

const deso = new Deso();
const request = {
  NumToFetch: 50,
  PublicKeyBase58Check:
    'BC1YLjMYu2ahUtWgSX34cNLeM9BM9y37cqXzxAjbvPfbxppDh16Jwog',
  FetchStartIndex: 100,
};

export const DesoNotification = async () => {
  const response = await deso.notifications.getNotifications(request);

  Notifications.registerRemoteNotifications();

  Notifications.events().registerNotificationReceivedForeground(
    (notification, completion) => {
      console.log(
        `Notification received in foreground: ${notification.title} : ${notification.body}`,
      );
      console.log('DeSo notification received:', response);
      completion({alert: false, sound: false, badge: false});
    },
  );

  Notifications.events().registerNotificationOpened(
    (notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
      console.log('DeSo notification received:', response);
      completion();
    },
  );

  return;
};
