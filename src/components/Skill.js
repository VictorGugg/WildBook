const Skill = ({name, grade}) => {
    return (
    <li>
        {name}
        <span className='votes'>{grade}</span>
    </li>
    )
};

export default Skill;