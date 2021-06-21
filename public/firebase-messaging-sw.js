/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyAC5SnyUXz2UavxYeO-JPV-Y4EQjaWMVv4',
    projectId: 'healthapp-sk',
    messagingSenderId: '176104056037',
    appId: '1:176104056037:web:3d60e780e22ceccbbc200c',
});

firebase.messaging();
