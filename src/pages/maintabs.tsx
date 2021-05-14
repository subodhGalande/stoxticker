import { Redirect, Route } from "react-router-dom";
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
import { homeSharp, person, bookmarksSharp, searchSharp } from "ionicons/icons";
import Signup from "./Signup";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import CompanyOverview from "./CompanyOverview";

const Maintabs: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/CompanyOverview">
            <CompanyOverview />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Tab1 />
          </Route>
        </IonRouterOutlet>

        <IonTabBar id="tabbar" slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={homeSharp} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={searchSharp} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={bookmarksSharp} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Maintabs;
