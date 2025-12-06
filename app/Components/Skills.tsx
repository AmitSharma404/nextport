import data from '../data/data'
export const Skills = () => {
    return (
        <div className="skills flex gap-2 flex-wrap border-b border-dashed py-3 border-foreground/20">
            {data.skills.map((skill)=>(
               <button key={skill.id} className={`flex items-center skillbtn gap-1 font-normal border-foreground/50`}>
                <skill.icon className="flex" fill={skill.color}/>{skill.name}
               </button>
            ))}
        </div>
    )
}