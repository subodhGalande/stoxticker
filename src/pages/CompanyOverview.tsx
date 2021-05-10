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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import {
  cogOutline,
  earthOutline,
  cashOutline,
  caretUpOutline,
  caretDownOutline,
} from "ionicons/icons";
import React from "react";

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

          <div>
            <h1>
              <strong>1927.40</strong>
            </h1>
            <span>
              <IonText color="success">
                <p>
                  <IonIcon size="small" icon={caretUpOutline}></IonIcon> 1.29
                  (0.69%)
                </p>
              </IonText>
            </span>
          </div>

          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonText color="dark">
                  <strong>Open</strong>
                </IonText>
                <IonText>
                  <div>
                    <span>&#8377;</span> 1926.40
                  </div>
                </IonText>
              </IonCol>

              <IonCol>
                <IonText color="dark">
                  <strong>High</strong>
                </IonText>
                <IonText>
                  <div>
                    <span>&#8377;</span> 1926.40
                  </div>
                </IonText>
              </IonCol>

              <IonCol>
                <IonText color="dark">
                  <strong>Low</strong>
                </IonText>
                <IonText>
                  <div>
                    <span>&#8377;</span> 1926.40
                  </div>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CompanyOverview;
