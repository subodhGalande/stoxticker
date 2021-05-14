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
import React, { useState, useEffect } from "react";
import ListTicker from "../components/listTicker";
import CompanyOverview from "./CompanyOverview";
import axios from "axios";

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState(" ");

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>
            <b> Search </b>
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
        <ListTicker result={searchText} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
