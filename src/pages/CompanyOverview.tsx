import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
} from "@ionic/react";

import "./CompanyOverview.css";

const CompanyOverview: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Company Overview</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        tavb11
        <IonText>
          <h1>Relaince Industries </h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default CompanyOverview;
