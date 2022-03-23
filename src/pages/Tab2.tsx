import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonSearchbar,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonButton,
  IonItem,
  IonText,
  IonListHeader,
  IonList,
  IonNote,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import "./Tab2.css";
import React, { useState } from "react";
import ListTicker from "../components/listTicker";
import { useForm } from "react-hook-form";

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setSearchText(data.SearchTicker);
  };
  console.log(errors);
  console.log(searchText);
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>
            <b> Search </b>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />

        <div className="search">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="search-input"
              type="text"
              placeholder="Search Ticker"
              {...register("SearchTicker")}
            />{" "}
            <button className="search-btn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <ListTicker result={searchText} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
