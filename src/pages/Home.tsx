import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Navigation from '../components/Navigation';
import UsersList from '../components/UsersList';

const Home: React.FC = () => {
  
  return (
    <>
    <Navigation/>
    <IonPage id="main-content">
      <IonContent fullscreen className='ion-padding'>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <UsersList/>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Home;
