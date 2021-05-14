import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonListHeader,
  IonText,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { caretUpOutline, caretDownOutline } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>
            <b> Watchlist </b>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonCard routerLink="/CompanyOverview">
          <IonCardHeader className="ion-float-left">
            <IonCardTitle color="secondary">
              {" "}
              <strong> GOOGL </strong>{" "}
            </IonCardTitle>
            <IonCardSubtitle color="primary"> Alphabet Inc. </IonCardSubtitle>
          </IonCardHeader>
          <div className="ion-text-end">
            <IonCardContent className="cardContent">
              <IonText color="dark">
                <p>
                  <strong>$ 4500</strong>
                </p>
              </IonText>
              <IonText color="success">
                <p>
                  <span>
                    {" "}
                    <IonIcon size="small" icon={caretUpOutline}></IonIcon>{" "}
                  </span>
                  1.29 (0.69%)
                </p>
              </IonText>
            </IonCardContent>
          </div>
        </IonCard>
        <IonCard>
          <IonCardHeader className="ion-float-left">
            <IonCardTitle color="secondary">
              {" "}
              <strong> AAPL </strong>{" "}
            </IonCardTitle>
            <IonCardSubtitle color="primary"> Apple Inc. </IonCardSubtitle>
          </IonCardHeader>
          <div className="ion-text-end">
            <IonCardContent className="cardContent">
              <IonText color="dark">
                <p>
                  <strong>$ 6500</strong>
                </p>
              </IonText>
              <IonText color="danger">
                <p>
                  <span>
                    {" "}
                    <IonIcon
                      size="small"
                      icon={caretDownOutline}
                    ></IonIcon>{" "}
                  </span>
                  1.29 (0.69%)
                </p>
              </IonText>
            </IonCardContent>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
