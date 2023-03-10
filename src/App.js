import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';
import styles from './App.module.css';

import AddSkillsForm from './components/AddSkillsForm';
import WilderForm from './components/WilderForm';
import Wilder from './components/Wilder';


// function App() { = ligne 5
const App = () => {
  // Giving an empty array as parameter to useState, because wilders will be an array
  const [wilders, setWilders] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get('http://localhost:3030/api/wilder');
      // Axios fetches an object 'wilders' containing an array 'data'
      // (containing objects = wilders created in the API)
      console.log(wilders.data);
      // 
      setWilders(wilders.data);

      const skills = await axios.get('http://localhost:3030/api/skill');
      console.log(skills.data);
      setSkills(skills.data);
    };
  
    fetchData();
    // ! The empty array as second argument makes the useEffect to only load once when mounting the app,
    // TODO => otherwise, it would play at each rerendering
    // (in this case creating an infinite loop as the fetched wilders are uploaded, thus creating a new render)
  }, []);

  return (
    <div >
      <header>
        <div className={styles.container}>
          <h1>WildBook</h1>
        </div>
      </header>
      <main className={styles.container}>
        <h2>Wilders</h2>
        <WilderForm />
        {/* Passing props to the form to obtain their values in the AddSkillsForm.js */}
        <AddSkillsForm wilders={wilders} skills={skills} />
        <section className={styles.cardRow}>
          {/* Using array.map allows to loop on each element of an array to modifiy it.
              Here we're looping on the wildersDara array, naming each element as 'wilder',
              using props to assign dynamic values to our Wilder component based on
              what we obtained from wildersData.
               */}
          {wilders.map((wilder) => {
            return <Wilder
                      city={wilder.city}
                      id={wilder.id}
                      key={wilder.id}
                      name={wilder.name}
                      skills={wilder.skills} />
          })}
        </section>
      </main>
      <footer>
        <div className={styles.container}>
          <p>&copy; 2023 VictorGugg@WildCodeSchool</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
