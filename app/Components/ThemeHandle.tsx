import { useState } from 'react';
import { TbCircleHalf2 } from 'react-icons/tb';


export const ThemeHandle = () => {
    const [isDark,setDark] = useState(true);


    const handleTheme = () => {
        if(!isDark){
        document.documentElement.classList.add('dark');
        setDark(true);
        } else {
            document.documentElement.classList.remove('dark')
            setDark(false);
        }
    }

    return(
        <div>
            <button onClick={handleTheme}>
                {isDark ? <TbCircleHalf2/> : <TbCircleHalf2/>}
            </button>
        </div>
    )
}