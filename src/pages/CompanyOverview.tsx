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
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

import {
  flash,
  cogOutline,
  sparkles,
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
          <IonGrid>
            <IonRow>
              <IonCol className="tickerprice" size="4">
                <IonText color="dark">
                  <h1>
                    <strong>1927.40</strong>
                  </h1>
                </IonText>
              </IonCol>
              <IonCol className="tickerchange" size="8">
                <IonIcon icon={caretUpOutline} color="success"></IonIcon>
                <IonText color="success">2.69 (0.79%)</IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonText color="dark">
                  <strong>Open</strong>
                </IonText>
                <IonText>
                  <div className="thirdrowvalues">
                    <span>&#8377;</span> 1926.40
                  </div>
                </IonText>
              </IonCol>

              <IonCol>
                <IonText color="dark">
                  <strong>High</strong>
                </IonText>
                <IonText>
                  <div className="thirdrowvalues">
                    <span>&#8377;</span> 1926.40
                  </div>
                </IonText>
              </IonCol>

              <IonCol>
                <IonText color="dark">
                  <strong>Low</strong>
                </IonText>
                <IonText>
                  <div className="thirdrowvalues">
                    <span>&#8377;</span> 1926.40
                  </div>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>

          <div className="graph ion-padding-top ion-text-center">graph</div>
        </div>
        <div className="cards">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle color="Dark">
                <IonIcon color="secondary" icon={flash}></IonIcon>
                <b> Key Metrics </b>
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="4">
                    <IonText color="dark">
                      <strong>PE Ratio</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>PB Ratio</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>Div. Yield</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4">
                    <IonText color="dark">
                      <strong>PTS Ratio</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>EPS</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>ROE</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle color="Dark">
                <IonIcon color="secondary" icon={sparkles}></IonIcon>
                <b> Extras </b>
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="4">
                    <IonText color="dark">
                      <strong>Market Cap</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>Beta</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>52WHigh</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4">
                    <IonText color="dark">
                      <strong>52WLow</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>Volume</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>Diluted EPS</strong>
                    </IonText>
                    <IonText>
                      <div>
                        <span>&#8377;</span> 1926.40
                      </div>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CompanyOverview;
