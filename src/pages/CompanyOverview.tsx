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
  IonButton,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import axios from "axios";

import {
  flash,
  cogOutline,
  sparkles,
  earthOutline,
  bookmarks,
  cashOutline,
  caretDownOutline,
  calendarClearOutline,
  caretUpOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import Graph from "../components/graph";
import { RouteComponentProps } from "react-router-dom";
import { useEffect } from "react";
import "./CompanyOverview.css";

interface TickerDetailProps
  extends RouteComponentProps<{
    ticker: string;
  }> {}

const CompanyOverview: React.FC<TickerDetailProps> = ({ match }) => {
  const [upper, setUpper] = useState({});
  const [lower, setLower] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.twelvedata.com/quote?symbol=${match.params.ticker}&apikey=860e2a4ebcde4d5882aa0eeede1ca87e`
      )
      .then((twelve) => setUpper(twelve.data));
    console.log(upper);

    //alphavantage api

    axios
      .get(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${match.params.ticker}&apikey=L7PARR4XLI2B8Z23`
      )
      .then((alpha) => setLower(alpha.data));
    console.log(lower);
  }, [match]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
            <strong>Company Overview</strong>
          </IonTitle>
          <IonButton slot="end">
            <IonIcon icon={bookmarks}></IonIcon>{" "}
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="scrollcontent">
        <div className="CompanyOverview">
          <IonText color="dark">
            <h3>
              <b>{upper["name"]}</b>{" "}
            </h3>
          </IonText>
          <IonText className="ion-text-uppercase" color="medium">
            <h6 className="tickersymbol">
              <b>{upper["symbol"]}</b>
            </h6>
          </IonText>
          <div className="chips">
            <IonChip color="primary">
              <IonIcon icon={cogOutline} color="primary" />
              <IonLabel>{lower["Sector"]}</IonLabel>
            </IonChip>
            <IonChip color="secondary">
              <IonIcon icon={cashOutline} color="secondary" />
              <IonLabel>{upper["currency"]}</IonLabel>
            </IonChip>
            <IonChip color="tertiary">
              <IonIcon icon={earthOutline} color="tertiary" />
              <IonLabel>{upper["exchange"]}</IonLabel>
            </IonChip>
          </div>
          <IonGrid>
            <IonRow>
              <IonCol className="tickerprice" size="4">
                <IonText color="dark">
                  <h1>
                    <strong>{parseFloat(upper["close"]).toFixed(2)}</strong>
                  </h1>
                </IonText>
              </IonCol>
              <IonCol className="tickerchange" size="8">
                <IonIcon
                  icon={
                    `${upper["change"]}`.includes("-")
                      ? caretDownOutline
                      : caretUpOutline
                  }
                  color={
                    `${upper["change"]}`.includes("-") ? "danger" : "success"
                  }
                ></IonIcon>
                <IonText
                  color={
                    `${upper["change"]}`.includes("-") ? "danger" : "success"
                  }
                >
                  {parseFloat(upper["change"]).toFixed(2)} {"("}{" "}
                  {parseFloat(upper["percent_change"]).toFixed(2)}
                  {"%)"}
                </IonText>
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
                    <span>&#8377;</span> {parseFloat(upper["open"]).toFixed(2)}
                  </div>
                </IonText>
              </IonCol>

              <IonCol>
                <IonText color="dark">
                  <strong>High</strong>
                </IonText>
                <IonText>
                  <div className="thirdrowvalues">
                    <span>&#8377;</span> {parseFloat(upper["high"]).toFixed(2)}
                  </div>
                </IonText>
              </IonCol>

              <IonCol>
                <IonText color="dark">
                  <strong>Low</strong>
                </IonText>
                <IonText>
                  <div className="thirdrowvalues">
                    <span>&#8377;</span> {parseFloat(upper["low"]).toFixed(2)}
                  </div>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div className="graph ion-padding-top ion-text-center"></div>
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
                      <div>{parseFloat(lower["PERatio"]).toFixed(2)}</div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>PB Ratio</strong>
                    </IonText>
                    <IonText>
                      <div>
                        {parseFloat(lower["PriceToBookRatio"]).toFixed(2)}
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>Div. Yield</strong>
                    </IonText>
                    <IonText>
                      <div>{parseFloat(lower["DividendYield"]).toFixed(2)}</div>
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
                        {parseFloat(lower["PriceToSalesRatioTTM"]).toFixed(2)}
                      </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>EPS</strong>
                    </IonText>
                    <IonText>
                      <div>{parseFloat(lower["EPS"]).toFixed(2)}</div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>ROE</strong>
                    </IonText>
                    <IonText>
                      <div>
                        {parseFloat(lower["ReturnOnEquityTTM"]).toFixed(2)}
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
                      <strong>Book Value</strong>
                    </IonText>
                    <IonText>
                      <div>{parseFloat(lower["BookValue"]).toFixed(2)} </div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>Beta</strong>
                    </IonText>
                    <IonText>
                      <div>{parseFloat(lower["Beta"]).toFixed(2)}</div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>52WHigh</strong>
                    </IonText>
                    <IonText>
                      <div>{parseFloat(lower["52WeekHigh"]).toFixed(2)}</div>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4">
                    <IonText color="dark">
                      <strong>52WLow</strong>
                    </IonText>
                    <IonText>
                      <div>{parseFloat(lower["52WeekLow"]).toFixed(2)}</div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>Profit Margin</strong>
                    </IonText>
                    <IonText>
                      <div>{parseFloat(lower["ProfitMargin"]).toFixed(2)}</div>
                    </IonText>
                  </IonCol>

                  <IonCol>
                    <IonText color="dark">
                      <strong>Diluted EPS</strong>
                    </IonText>
                    <IonText>
                      <div>{parseFloat(lower["DilutedEpsTTM"]).toFixed(2)}</div>
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
