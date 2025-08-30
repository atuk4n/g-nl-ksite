// Firebase SDK'larını ES Modül formatında içe aktar
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-sw.js';

   const firebaseConfig = {
    apiKey: "AIzaSyATzx1zCbCrmTx2KCkYVlJTMW6CzgUIUJg",
    authDomain: "elata-b07a8.firebaseapp.com",
    projectId: "elata-b07a8",
    storageBucket: "elata-b07a8.firebasestorage.app",
    messagingSenderId: "944810364139",
    appId: "1:944810364139:web:127f1d2ebf473aead802ae",
    measurementId: "G-55XEGRPFHW"
  };

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Arka planda bir bildirim geldiğinde ne yapılacağını tanımla
onBackgroundMessage(messaging, (payload) => {
  console.log('Arka plan mesajı alındı: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png' // Bildirimde görünecek ikon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
