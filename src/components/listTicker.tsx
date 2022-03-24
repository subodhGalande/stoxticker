import {
  IonLabel,
  IonItem,
  IonList,
  IonListHeader,
  IonText,
  IonContent,
  IonNote,
} from "@ionic/react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./listTicker.css";
import { useEffect, useState } from "react";
import CompanyOverview from "../pages/CompanyOverview";

interface ListProps {
  result: string;
}

const ListTicker: React.FC<ListProps> = ({ result }) => {
  const [ticker, setTicker] = useState([]);
  const alphaKey = "L7PARR4XLI2B8Z23";

  useEffect(() => {
    const getTicker = async () => {
      try {
        const res = await axios.get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${result}&apikey={alphaKey}`
        );
        setTicker(res.data.bestMatches);
        console.log(res.data.bestMatches);
      } catch (err) {
        console.log("error");

        console.error(err);
      }
    };

    getTicker();
  }, [result]);

  return (
    <IonContent>
      <IonList>
        <IonListHeader>
          <IonLabel>Tickers found</IonLabel>
        </IonListHeader>{" "}
        {ticker.map((tick, index) => (
          <Link className="listStyle" to={`/Tab2/${tick["1. symbol"]}`}>
            <IonItem key={index}>
              <IonLabel>
                <IonText color="primary">
                  <h1>{tick["1. symbol"]}</h1>
                </IonText>
                <IonText>
                  {" "}
                  <h2>{tick["2. name"]}</h2>
                </IonText>{" "}
                <IonText color="medium">
                  <p>
                    {tick["4. region"]} | {tick["8. currency"]}{" "}
                  </p>
                </IonText>{" "}
              </IonLabel>
            </IonItem>
          </Link>
        ))}
      </IonList>
    </IonContent>
  );
};

export default ListTicker;
