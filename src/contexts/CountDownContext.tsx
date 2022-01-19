import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChalengeContext } from "./ChalendsContext";



interface ICountDownContextProps {
    children : ReactNode
}

interface ICountDownContextData {

    minutes : number
     seconds : number
      isActive : boolean
       hasFinished : boolean
       startCountDown : () => void
        resetCountDown : () => void


}
    


 

export const CountDownContext = createContext({} as ICountDownContextData )

export function CountDownProvider({ children }: ICountDownContextProps ) {
 
    const [time, setTime] = useState(0.05 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFineshed] = useState(false)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    
    let countDownTimeout: NodeJS.Timeout

    const  {startNewChallenge} = useContext(ChalengeContext)
    useEffect(() => {

        if (isActive && time > 0) {

            countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)

        } else if (isActive && time === 0) {
            setHasFineshed(true)
            setIsActive(false)
            startNewChallenge()

           
        }

    }, [isActive, time])

    function startCountDown() {
        setIsActive(true)

    }
    function resetCountDown() {
        clearTimeout(countDownTimeout)
        setIsActive(false)
        setHasFineshed(false)
        setTime(0.05 * 60)

    }

    return (
        <CountDownContext.Provider value={{ 
          minutes , seconds , isActive , hasFinished ,startCountDown , resetCountDown
        }}
        > 
        {children}
        </CountDownContext.Provider>
        
    )
}