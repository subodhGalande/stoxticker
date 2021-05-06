import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonSearchbar,
  IonToolbar,
  IonLabel,
  IonItem,
  IonText,
  IonListHeader,
  IonList,
  IonNote,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import React, { useState } from "react";

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>
            <strong> Search </strong>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <br />
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="never"
          placeholder="Search Ticker"
          animated={true}
        ></IonSearchbar>

        <IonList lines="inset">
          <IonListHeader>
            <IonText color="primary">
              <h5>Results</h5>
            </IonText>
          </IonListHeader>
          <IonItem>
            <IonLabel color="dark">
              <IonText>
                <strong> TESO </strong> <br />{" "}
                <IonNote color="secondary"> USA </IonNote>
              </IonText>
            </IonLabel>
            <IonText>
              <p>Tesco Corporation USA</p>
            </IonText>
          </IonItem>
          <IonItem>
            <IonLabel color="dark">
              <IonText>
                <strong> TESO </strong> <br />{" "}
                <IonNote color="secondary"> USA </IonNote>
              </IonText>
            </IonLabel>
            <IonText>
              <p>Tesco Corporation USA</p>
            </IonText>
          </IonItem>
          <IonItem>
            <IonLabel color="dark">
              <IonText>
                <strong> TESO </strong> <br />{" "}
                <IonNote color="secondary"> USA </IonNote>
              </IonText>
            </IonLabel>
            <IonText>
              <p>Tesco Corporation USA</p>
            </IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
