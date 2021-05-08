import {
  IonButton,
  IonListHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonSlides,
  IonSlide,
  IonText,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { personCircleOutline, arrowForwardOutline } from "ionicons/icons";
import Signup from "./Signup";
import CompanyOverview from "./CompanyOverview";

import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>
            <strong> Home </strong>
          </IonTitle>

          <IonButton
            href="./CompanyOverview"
            className="accountButton"
            color="primary"
            fill="solid"
            slot="end"
          >
            <IonIcon size="large" icon={personCircleOutline}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList lines="none">
          <IonListHeader>
            <IonText color="primary">
              <h1 className="forex">Forex</h1>
            </IonText>
          </IonListHeader>
          <IonItem>
            <IonLabel color="secondary">
              <h2>
                USD ➔ INR <br />{" "}
              </h2>
              <IonText color="medium">
                <p>United States Dollar - Indian Rupees </p>
              </IonText>
            </IonLabel>
            <p>hey there</p>
          </IonItem>

          <IonItem>
            <IonLabel color="secondary">
              <h2>
                EUR ➔ INR <br />{" "}
              </h2>
              <IonText color="medium">
                <p>Euro - Indian Rupees </p>
              </IonText>
            </IonLabel>
            <p>hey there</p>
          </IonItem>

          <IonItem>
            <IonLabel color="secondary">
              <h2>
                GBP ➔ INR <br />{" "}
              </h2>
              <IonText color="medium">
                <p>British Pound Sterling - Indian Rupees </p>
              </IonText>
            </IonLabel>
            <p>hey there</p>
          </IonItem>
        </IonList>

        <IonList lines="none">
          <IonListHeader>
            <IonText color="primary">
              <h1 className="forex">Suggestions</h1>
            </IonText>
          </IonListHeader>
          <IonItem>
            <IonLabel color="secondary">
              <h2>GOOGL</h2>
              <IonText color="medium">
                <p>Alphabet Inc. </p>
              </IonText>
            </IonLabel>
            <p>
              $ 4500
              <br />
              1.00 (0.69%)
            </p>
          </IonItem>

          <IonItem>
            <IonLabel color="secondary">
              <h2>AAPL</h2>
              <IonText color="medium">
                <p>Apple Inc.</p>
              </IonText>
            </IonLabel>
            <p>
              $ 4500
              <br />
              1.00 (0.69%)
            </p>
          </IonItem>
          <IonListHeader>
            <IonText color="primary">
              <h1 className="forex">News</h1>
              <IonText color="secondary">
                <p>Swipe right to view more ➔ </p>
              </IonText>
            </IonText>
          </IonListHeader>
        </IonList>

        <IonSlides options={slideOpts}>
          <IonSlide>
            <IonCard>
              <div className="ion-text-start">
                <IonCardHeader>
                  <img
                    src="https://images.assettype.com/freepressjournal%2F2021-04%2F034c1a5e-84a3-4ff4-9908-71c936b92f10%2Fpexels_gustavo_fring_4173094.jpg?rect=0%2C86%2C2275%2C1194&w=1200&auto=format%2Ccompress&ogImage=true"
                    alt=""
                  />
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </IonCardContent>{" "}
              </div>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <div className="ion-text-start">
                <IonCardHeader>
                  <img
                    src="https://images.moneycontrol.com/static-mcnews/2021/05/Comforting-770x433.jpg"
                    alt=""
                  />

                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </IonCardContent>{" "}
              </div>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <h1>Slide 3</h1>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
