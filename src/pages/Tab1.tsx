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
  useIonViewDidEnter,
  useIonViewWillEnter,
  IonCardTitle,
  IonSlides,
  IonSlide,
  IonImg,
  IonText,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { IonReactRouter } from "@ionic/react-router";

import {
  personCircleOutline,
  arrowForwardOutline,
  power,
  handLeft,
} from "ionicons/icons";
import axios from "axios";
import Signup from "./Signup";

import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
const slideOpts = {
  initialSlide: 1,
};

const Tab1: React.FC = () => {
  const [inr, setInr] = useState([]);
  const [google, setGoogle] = useState({});
  const [apple, setApple] = useState([]);

  const [news, setNews] = useState({ items: [] });

  const alphaKey = "L7PARR4XLI2B8Z23";
  const newsKey = "25ec636112f94478978f10ce27db744e";

  useEffect(() => {
    //forex api
    axios
      .get(
        "http://apilayer.net/api/live?access_key=62c14d157bb5ddbcb088df5effaddabf&currencies=EUR,GBP,INR&source=USD&format=1"
      )
      .then((res) => setInr(res.data.quotes));
    console.log(inr);
    //suggestion

    const getGoogle = async () => {
      try {
        const googl = await axios.get(
          "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOGL&apikey={alphakey}"
        );
        setGoogle(googl.data["Global Quote"]);
        console.log(google);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    getGoogle();

    const getApple = async () => {
      try {
        const aapl = await axios.get(
          "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey={alphakey}"
        );
        setApple(aapl.data["Global Quote"]);
        console.log(aapl.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    getApple();

    //test
    const getNews = async () => {
      try {
        const newsin = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=25ec636112f94478978f10ce27db744e"
        );
        setNews({ items: newsin.data.articles });
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    getNews();

    //news api
  }, []);

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButton slot="start" fill="clear">
            <IonIcon color="warning" icon={handLeft}></IonIcon>
          </IonButton>
          <IonTitle className="hi">
            Hi <b>Jack! </b>
          </IonTitle>

          <IonButton
            href="./CompanyOverview"
            className="accountButton"
            slot="end"
            fill="clear"
          >
            <IonIcon color="danger" icon={power}></IonIcon>
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
                {" "}
                USD ➔ INR <br />
              </h2>
              <IonText color="medium">
                <p>United States Dollar - Indian Rupees </p>
              </IonText>
            </IonLabel>
            <p>₹ {parseFloat(inr["USDINR"]).toFixed(2)}</p>
          </IonItem>

          <IonItem>
            <IonLabel color="secondary">
              <h2>
                USD ➔ EUR <br />{" "}
              </h2>
              <IonText color="medium">
                <p>United States Dollar - Euro </p>
              </IonText>
            </IonLabel>
            <p>€ {parseFloat(inr["USDEUR"]).toFixed(2)}</p>
          </IonItem>

          <IonItem>
            <IonLabel color="secondary">
              <h2>
                USD ➔ GBP <br />{" "}
              </h2>
              <IonText color="medium">
                <p>United States Dollar - Great Britain Pounds </p>
              </IonText>
            </IonLabel>
            <p>£ {parseFloat(inr["USDGBP"]).toFixed(2)}</p>
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
            <IonText color="dark" slot="end">
              <b> $ {parseFloat(google["05. price"]).toFixed(2)} </b>
            </IonText>

            <IonText color="medium" slot="end">
              {parseFloat(google["09. change"]).toFixed(2)} {"("}
              {parseFloat(google["10. change percent"]).toFixed(2)}%{")"}
            </IonText>
          </IonItem>

          <IonItem>
            <IonLabel color="secondary">
              <h2>AAPL</h2>
              <IonText color="medium">
                <p>Apple Inc.</p>
              </IonText>
            </IonLabel>
            <IonText color="dark" slot="end">
              <b> $ {parseFloat(apple["05. price"]).toFixed(2)} </b>
            </IonText>

            <IonText color="medium" slot="end">
              {parseFloat(apple["09. change"]).toFixed(2)} {"("}
              {parseFloat(apple["10. change percent"]).toFixed(2)}%{")"}
            </IonText>
          </IonItem>
          <br />
          <IonListHeader>
            <IonText color="primary">
              <h1 className="forex">News</h1>
            </IonText>
          </IonListHeader>
        </IonList>
        <div>
          <IonSlides options={slideOpts}>
            {news.items.map((item: any, index) => (
              <IonSlide key={index}>
                <IonCard href={item.url}>
                  <div className="ion-text-start">
                    <IonCardHeader>
                      <img src={item.urlToImage} alt="" />

                      <IonCardTitle color="dark">
                        <h6>{item.title}</h6>
                      </IonCardTitle>
                      <IonCardSubtitle>
                        {item.publishedAt.replace("T", " ").replace("Z", "")}
                      </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonText>{item.description}...</IonText>
                    </IonCardContent>
                  </div>
                </IonCard>
              </IonSlide>
            ))}
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
