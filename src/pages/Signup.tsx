import {
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonTabs,
  IonText,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonThumbnail,
  useIonViewWillEnter,
} from "@ionic/react";

import { logoGoogle } from "ionicons/icons";

import "./Signup.css";

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <img
          className="logo"
          src="assets/illustration/SVG/Asset 2.svg"
          alt=""
        />

        <div className="main">
          <h1 className="welcome">Welcome </h1>

          <p className="tagline">
            Learn about the market trends <br /> & stay ahead of the curve
          </p>

          <img
            height="190"
            className="illustration"
            src="assets\illustration\SVG\SVG\illustration.svg"
            alt=""
          />
        </div>

        <IonGrid className="buttonsgrid">
          <IonRow>
            <IonCol>
              <IonButton
                strong={true}
                fill="outline"
                shape="round"
                size="large"
                color="primary-shade"
              >
                <IonIcon slot="start" icon={logoGoogle} />
                Google Sign up
              </IonButton>
            </IonCol>
          </IonRow>
          <IonText color="dark">
            <h4>Or</h4>
          </IonText>
          <IonRow>
            <IonCol>
              <IonButton strong={true} fill="solid" shape="round" size="large">
                <IonIcon slot="start" icon={logoGoogle} />
                Google Sign in
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
