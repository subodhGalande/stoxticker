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

/* Theme variables */
import "./theme/variables.css";
import React from "react";
import axios from "axios";

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
