import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Navigation from '../components/Navigation';
import UsersList from '../components/UsersList';
import {  useState } from 'react';

const Home: React.FC = () => {
  const [numberOfUsers, setNumberOfUsers] = useState(100);

  const handleNumberOfItemChange = (value:number) => {
    setNumberOfUsers(value);
    console.log(numberOfUsers)
  }
   
  return (
    <>
    <Navigation onNumberItemChange={handleNumberOfItemChange}/>
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
        <UsersList numberOfUsers={numberOfUsers}/>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Home;
