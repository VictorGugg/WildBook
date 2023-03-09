import blank_profile from '../assets/blank_profile.png';
import Skill from './Skill';
import styles from './Wilder.module.css';

const Wilder = ({name, skills}) => {
    // Could replace "=> { return () }"
    // By "=> ( ) " (skipping the return and replacing curly braces by brackets)
    // Checkout arrow function documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    return (
    <article className={styles.card}>
        <img src={blank_profile} alt={`${name}'s Profile`} />
        <h3>{name}</h3>
        <p>Description du Wilder</p>
        <h4>Wild Skills</h4>
        <ul className={styles.skills}>
            {skills.map((skill) => {
            return <Skill name={skill.title} grade={skill.votes} />
            })}
        </ul>
    </article>
    )
};

export default Wilder;