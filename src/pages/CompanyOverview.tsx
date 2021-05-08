import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonChip,
  IonLabel,
  IonIcon,
} from "@ionic/react";

import { cogOutline, earthOutline, cashOutline } from "ionicons/icons";

import "./CompanyOverview.css";

const CompanyOverview: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
            <strong>Company Overview</strong>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <div className="CompanyOverview">
          <IonText color="dark">
            <h3>
              <b>Reliance Industries</b>{" "}
            </h3>
          </IonText>
          <IonText className="ion-text-uppercase" color="medium">
            <h3 className="tickersymbol">rel</h3>
          </IonText>
          <div className="chips">
            <IonChip color="primary">
              <IonIcon icon={cogOutline} color="primary" />
              <IonLabel>Sector</IonLabel>
            </IonChip>
            <IonChip color="secondary">
              <IonIcon icon={cashOutline} color="secondary" />
              <IonLabel>Capitalization</IonLabel>
            </IonChip>
            <IonChip color="tertiary">
              <IonIcon icon={earthOutline} color="tertiary" />
              <IonLabel>Exchange</IonLabel>
            </IonChip>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CompanyOverview;
