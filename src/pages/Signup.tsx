import {
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonTabs,
  IonText,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonThumbnail,
  useIonViewWillEnter,
} from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import "./Signup.css";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
firebase.initializeApp(firebase);
firebase.analytics();

onsubmit = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithRedirect(provider);

  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        const credential = result.credential as firebase.auth.OAuthCredential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <img
          className="logo"
          src="assets/illustration/SVG/Asset 2.svg"
          alt=""
        />

        <div className="main">
          <h1 className="welcome">Welcome </h1>

          <p className="tagline">
            Learn about the market trends <br /> & stay ahead of the curve
          </p>

          <img
            height="190"
            className="illustration"
            src="assets\illustration\SVG\SVG\illustration.svg"
            alt=""
          />
        </div>

        <IonGrid className="buttonsgrid">
          <IonRow>
            <IonCol>
              <IonButton strong={true} fill="solid" shape="round" size="large">
                <IonIcon slot="start" icon={logoGoogle} />
                Google Sign in
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
