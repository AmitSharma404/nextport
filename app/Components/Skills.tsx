import data from '../data/data'
export const Skills = () => {
    return (
        <div className="skills flex gap-3 flex-wrap py-3">
            {data.skills.map((skill)=>(
               <button key={skill.id} className={`flex items-center skillbtn gap-1 font-medium border-foreground/50`}>
                <skill.icon className="flex" fill={skill.color}/>{skill.name}
               </button>
            ))}
        </div>
    )
}