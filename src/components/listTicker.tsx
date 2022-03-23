import {
  IonLabel,
  IonItem,
  IonList,
  IonListHeader,
  IonText,
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

  return <p>hello</p>;
};

export default ListTicker;
