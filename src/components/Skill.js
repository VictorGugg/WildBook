import styles from './Skill.module.css'

const Skill = ({name, grade}) => {
    return (
    <li>
        {name}
        <span className={styles.votes}>{grade}</span>
    </li>
    )
};

export default Skill;