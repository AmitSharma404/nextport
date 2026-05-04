'use client';
import { createContext, useContext } from "react";


interface Counter{
        count:number,
        increment:() => void,
        decrement:() => void
    }

const Mycontext = createContext<Counter | undefined>(undefined);

export const MyContextProvider = ({children}:{children:React.ReactNode}) => {
    
    const counter:Counter = {
        count:0,
        increment:() => {
            counter.count += 1;
        },
        decrement:() => {
            counter.count -= 1;
        }
    }

    return (
        <Mycontext.Provider value={counter}>
            {children}
        </Mycontext.Provider>
    )
}

export const useMyContext = () => {
    return useContext(Mycontext);
}

 