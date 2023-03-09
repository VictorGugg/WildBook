import './App.css';
import styles from './App.module.css';
import Wilder from './components/Wilder';

const wildersData = [
  {
    name: "Ringo",
    city: "London",
    skills: [
      { title: "JS", votes: 10 },
      { title: "React", votes: 8 },
    ],
  },
  {
    name: "John",
    city: "Paris",
    skills: [
      { title: "PHP", votes: 9 },
      { title: "Symfony", votes: 9 },
    ],
  },
  {
    name: "George",
    city: "Berlin",
    skills: [
      { title: "Ruby", votes: 10 },
      { title: "JS", votes: 8 },
    ],
  },
  {
    name: "Paul",
    city: "Reims",
    skills: [
      { title: "C++", votes: 10 },
      { title: "Rust", votes: 8 },
    ],
  },
];

// function App() { = ligne 5
const App = () => {
  return (
    <div >
      <header>
        <div className={styles.container}>
          <h1>WildBook</h1>
        </div>
      </header>
      <main className={styles.container}>
        <h2>Wilders</h2>
        <section className={styles.cardRow}>
          {/* Using array.map allows to loop on each element of an array to modifiy it.
              Here we're looping on the wildersDara array, naming each element as 'wilder',
              using props to assign dynamic values to our Wilder component based on
              what we obtained from wildersData.
               */}
          {wildersData.map((wilder) => {
            return <Wilder name={wilder.name} skills={wilder.skills} />
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
