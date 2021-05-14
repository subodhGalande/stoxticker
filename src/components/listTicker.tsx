import {
  IonLabel,
  IonItem,
  IonList,
  IonListHeader,
  IonText,
  IonNote,
} from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CompanyOverview from "../pages/CompanyOverview";

interface ListProps {
  result: string;
}

const ListTicker: React.FC<ListProps> = ({ result }) => {
  const [ticker, setTicker] = useState([]);

  useEffect(() => {
    const getTicker = async () => {
      try {
        const res = await axios.get(
          `https://api.twelvedata.com/symbol_search?symbol=${result}&apikey=860e2a4ebcde4d5882aa0eeede1ca87e`
        );
        setTicker(res.data.data);
        console.log(res);
      } catch (err) {
        console.log("error");

        console.error(err);
      }
    };

    getTicker();
  }, [result]);
  console.log(ticker);
  return (
    <IonList>
      <IonListHeader>
        <IonText color="primary">
          <h5>Results</h5>
        </IonText>
      </IonListHeader>
      {ticker.map((item, index) => (
        <IonItem key={index} routerLink="/CompanyOverview">
          <IonLabel color="dark">
            <IonText>
              <strong> {item.symbol} </strong> <br />{" "}
              <IonNote color="secondary">{item.exchange}</IonNote>
            </IonText>
          </IonLabel>
          <IonText>
            <p>{item.instrument_name}</p>
          </IonText>
        </IonItem>
      ))}
    </IonList>
  );
};

export default ListTicker;
