// Firebase'in v9 "compat" (uyumluluk) versiyonlarını içe aktar
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATzx1zCbCrmTx2KCkYVlJTMW6CzgUIUJg",
  authDomain: "elata-b07a8.firebaseapp.com",
  projectId: "elata-b07a8",
  storageBucket: "elata-b07a8.firebasestorage.app",
  messagingSenderId: "944810364139",
  appId: "1:944810364139:web:127f1d2ebf473aead802ae",
  measurementId: "G-55XEGRPFHW"
};

// Firebase'i compat (eski stil) syntax ile başlat
firebase.initializeApp(firebaseConfig);

// Mesajlaşma servisini al
const messaging = firebase.messaging();

// Arka planda gelen mesajları dinle (bu kısım daha sonra kullanılacak)
messaging.onBackgroundMessage((payload) => {
  console.log('Arka plan mesajı alındı: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
