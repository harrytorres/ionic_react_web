import React, { useState } from 'react';
import {  IonContent, IonGrid, IonHeader, IonLabel, IonMenu, IonRadio, IonRadioGroup,  IonTitle, IonToolbar } from '@ionic/react';


const Navigation: React.FC<{onNumberItemChange: any}> = ({ onNumberItemChange }) => {
  const [selectedValue, setSelectedValue] = useState(100);

  const handleRadioChange = (event:any) => {
    const value = parseInt(event.detail.value, 10);
    setSelectedValue(value);
    onNumberItemChange(value);
  }
  
  return (
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonRadioGroup value={selectedValue} onIonChange={handleRadioChange}>
                 <IonGrid>
                      <IonRadio value={100}>
                        <IonLabel>Show 100 users</IonLabel>
                      </IonRadio>
                      <IonRadio value={75}>
                        <IonLabel>Show 75 users</IonLabel>
                      </IonRadio>
                      <IonRadio value={25}>
                        <IonLabel>Show 25 users</IonLabel>
                      </IonRadio>
                      <IonRadio value={10}>
                        <IonLabel>Show 10 users</IonLabel>
                      </IonRadio>
                 </IonGrid>
          </IonRadioGroup>
        </IonContent>
      </IonMenu>
  );
}
export default Navigation;