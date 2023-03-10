import axios from "axios";
import { useState } from "react";

// Obtaining wilders and skills from props given to AddSkillsForm in App.js
const AddSkillsToWilder = ({wilders, skills}) => {
    const [wilder, setWilder] = useState(wilders);
    const [skill, setSkill] = useState(skills);
    const [selectedWilder, setSelectedWilder] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    console.log(wilders)
    
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log('Selected Wilder : ', selectedWilder);
                console.log('Selected Skills : ', selectedSkills);
                axios.put('http://localhost:3030/api/wilder-add-skills', {
                    wilder: selectedWilder,
                    skill: selectedSkills
                });
            }}
        >
            <h3>Add Skills to a Wilder</h3>
            <label>Wilder :</label>
            <select
                onChange={(event) => {
                    setSelectedWilder(event.target.value);
                }}
            >
                <option value='disabled' disabled>
                    Select a Wilder
                </option>
                {/* This syntax => ( ....... ) is equivalent to => return { ....... } */}
                {wilders.map((wilder) => (
                <option key={wilder.id} value={wilder.name}>
                    {wilder.name}
                </option>
                ))}
            </select>
            <br />
            <label>Skills :</label>
            <select
                onChange={(event) => {
                    setSelectedSkills
                    // Making an array from the selectedOptions (which is an HTMLCollection) to map on it,
                    // and obtaining only the value (in this case, the name of the skill) to setSelectedSkills
                    (Array.from(event.target.selectedOptions).map((element) => element.value));
                }}
                multiple={true}
                defaultValue={['disabled']}
            >
                <option value='disabled' disabled>
                    Select skills
                </option>
                {skills.map((skill) => (
                    <option key={skill.id} value={skill.name}>
                        {skill.name}
                    </option>
                ))}
            </select>
            <br />
            <button>Update the skills of {selectedWilder}</button>
        </form>
    );
};

export default AddSkillsToWilder;