import axios from 'axios';
import blank_profile from '../assets/blank_profile.png';
import Skill from './Skill';
import styles from './Wilder.module.css';

const Wilder = ({city, id, name, skills}) => {
    // Could replace "=> { return () }"
    // By "=> ( ) " (skipping the return and replacing curly braces by brackets)
    // Checkout arrow function documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    return (
    <article className={styles.card}>
        <img src={blank_profile} alt={`${name}'s Profile`} />
        <h3>{name}</h3>
        {city ? <h4>{city}</h4> : null}
        <p>Description du Wilder</p>
        <button onClick={() => 
        axios.delete('http://localhost:3030/api/wilder/' + id)
        }>Delete the Wilder</button>
        <h4>Wild Skills</h4>
        <ul className={styles.skills}>
            {skills.map((skill) => {
            return <Skill name={skill.name} grade={skill.votes} key={skill.id} />
            })}
        </ul>
    </article>
    )
};

export default Wilder;