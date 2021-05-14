import { Redirect, Route } from "react-router-dom";
import { useState } from "react";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonContent,
  IonTabButton,
  IonTabs,
  IonItem,
  IonFabButton,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, person, bookmarks, trendingUpSharp } from "ionicons/icons";
import Signup from "./pages/Signup";
import CompanyOverview from "./pages/CompanyOverview";
import { useEffect } from "react";

import Maintabs from "./pages/maintabs";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

/* Theme variables */
import "./theme/variables.css";
import React from "react";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyBJGGZa3q6GY8vMkaBex6E6aTdDUR652Rs",
  authDomain: "stoxticker.firebaseapp.com",
  projectId: "stoxticker",
  storageBucket: "stoxticker.appspot.com",
  messagingSenderId: "261467124957",
  appId: "1:261467124957:web:288582ae8f82144e3b9734",
  measurementId: "G-3VGD86C8L8",
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/Signup" component={Signup} exact={true} />
          <Route path="/" component={isLoggedIn ? Maintabs : Signup} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
