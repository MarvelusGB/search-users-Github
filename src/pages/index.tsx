import React, { useEffect, useState } from 'react';
import api from '../services/api';



import { 
    HomeComponent, 
} from './style';


interface User {
  avatar_url: string;
  login: string;
  url: string;
  id: string;
}

const Home = () =>{
  const [user, setUser] = useState<User[]>([]);
  const [text, setText] = useState('');


  useEffect(() => {
    async function loadData(){
      if (text) {
        api
        .get(`users?q=${text}`)
        .then((response) => { setUser(response.data.items)})
        .catch((err) => console.error("ops! ocorreu um erro" + err));
      }
    }
      
      loadData();
      
  }, [text]);



  return (

    <HomeComponent>
      <div className='header'>
        <div>
          <img src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png" alt="logo github" />
        </div>
        <div>
          <p>Busque na Git API por nome de Usuário</p>
        </div>
        <div>
          <input
              placeholder="Usuário"
              value={text}
              onChange={(search) => setText(search.target.value)}
            />
        </div>
      </div>
      
      <div className='list'>
            <div className='box-list'>
            {user.map((user: User) => (
                    <div key={user.id} className='card'>
                        <div className='card-box'>
                          <img
                                src={`${user.avatar_url}`}
                                alt={`${user.login} banner`}
                            />           
                          <div className='description-box'>
                              <strong>{user.login}</strong>
                              <p>{user.url}</p>
                          </div>
                        </div>
                    </div>
                ))}
            </div>  
          </div>
    </HomeComponent>
  );
}


export default Home;