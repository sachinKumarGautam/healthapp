import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';

const firebaseCloudMessaging = {
    tokenInlocalforage: async () => {
        return localforage.getItem('fcm_token');
    },

    init: async function () {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyAC5SnyUXz2UavxYeO-JPV-Y4EQjaWMVv4',
                projectId: 'healthapp-sk',
                messagingSenderId: '176104056037',
                appId: '1:176104056037:web:3d60e780e22ceccbbc200c',
            });
        } else {
            firebase.app(); // if already initialized, use that one
        }

        try {
            if ((await this.tokenInlocalforage()) !== null) {
                return false;
            }

            const messaging = firebase.messaging();
            await Notification.requestPermission();
            const token = await messaging.getToken();

            localforage.setItem('fcm_token', token);
            console.log('fcm_token', token);
        } catch (error) {
            console.error(error);
        }
    },
};

export { firebaseCloudMessaging };
