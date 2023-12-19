import  { useEffect, useState } from 'react';
import { IonAvatar, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonLoading } from '@ionic/react';
import { fetchData } from '../services/apiServices';
import { trash, search, person } from 'ionicons/icons';

interface Users {
  gender: '',
  name: {
    'title' : '',
    'first' : '',
    'last' : ''
  },
  location: {
    'street': {
        "number": number,
        "name": ''
    },
    'city': '',
    'state': '',
    'country': '',
    'postcode': '',
    'coordinates': {
        'latitude': '',
        'longitude': ''
        },
      'timezone': {
          'offset': '',
          'description': ''
      }   
  },
  email: '',
  phone: '',
  cell: '',
  id: {
    name: '',
    value: ''
  },
  picture: {
    'large': '',
    'medium' : '',
    'thumbnail' : ''
  }
} 

interface UsersState {
  users: Users[] | null;
  error: string | null;
}

function UsersList() {

  const [userState, setUserState] = useState<UsersState>({
    users: null,
    error: null
  });
  const [loading, setLoading] = useState(true);
  const { users, error } = userState;

  useEffect(() => {
      const fetchUsers = async () => {
        try {
          setLoading(true);
          const response = await fetchData('?results=100');
          if(response !== null){
            setLoading(false);
            setUserState({ users: response.results, error: null });
          }
        } catch (error:any) {
          setUserState({ users: null, error: error.message });
        }
      };
      fetchUsers();
    }, []);
    
  if (loading) {
    return <IonLoading message="Loading..." duration={3000} />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleDelete = (index:any) => {
    try {
      setUserState({
        users: users?.filter((_, userIndex) => userIndex !== index) ?? null,
        error: null
      });
      document.querySelector("ion-item-sliding")?.closeOpened();
    } catch(error:any) {
      setUserState({ users: null, error: error.message });
    }
  };
  
  return(
      <IonList>
        {users?.map((user, index) => (
          <IonItemSliding key={index} id={"slidingItem"+index} >
            <IonItem>
                  <IonAvatar><img alt={user.name['first'] + ' ' + user.name['last']} src={user.picture['thumbnail']} /></IonAvatar>
                  <IonLabel className='ion-margin'>
                      <h2>{user.name['first'] + ' ' + user.name['last']}</h2>
                      <p>{user.email}</p>
                  </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>
                  <IonIcon slot="start" icon={search}></IonIcon>
                    Preview
              </IonItemOption>
              <IonItemOption color="danger" onClick={() => handleDelete(index)}>
                  <IonIcon slot="start" icon={trash}></IonIcon>
                    Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
         ))}
      </IonList>
  );
}

export default UsersList;