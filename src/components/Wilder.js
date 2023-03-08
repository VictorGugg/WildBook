import blank_profile from '../assets/blank_profile.png';
import Skill from './Skill';

const Wilder = ({name, skills}) => {
    return (
    <article className='card'>
        <img src={blank_profile} alt={`${name}'s Profile`} />
        <h3>{name}</h3>
        <p>Description du Wilder</p>
        <h4>Wild Skills</h4>
        <ul className='skills'>
            {skills.map((skill) => {
            return <Skill name={skill.title} grade={skill.votes} />
            })}
        </ul>
    </article>
    )
};

export default Wilder;