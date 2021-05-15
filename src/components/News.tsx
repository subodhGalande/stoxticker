import {
  IonLabel,
  IonItem,
  IonList,
  IonListHeader,
  IonText,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonNote,
} from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";

const News: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://free-news.p.rapidapi.com/v1/search?q=stock&lang=en", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d899770335mshe25a5db7cd0ddfap1650b2jsn254245def881",
        "x-rapidapi-host": "free-news.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((response) => setNews(response.articles));
  }, []);
  console.log(news);
  return (
    <div>
      {news.map((item: any, index) => (
        <IonCard key={index} href={item.link}>
          <div className="ion-text-start">
            <IonCardHeader>
              <img src={item.media} alt="" />

              <IonCardTitle color="dark">
                <h6>{item.title}</h6>
              </IonCardTitle>
              <IonCardSubtitle>{item.published_date}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>{item.summary}...</IonText>
            </IonCardContent>
          </div>
        </IonCard>
      ))}
    </div>
  );
};

export default News;
