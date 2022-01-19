import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json'
import { LevelUpModal } from "../component/LevelUpModal";

interface IChallenge {
    type: 'body' | 'eye'
    description: string
    amount: number

}

interface IChallengecontextData {
    level: number
    currentExperience: number
    chelledsCompleted: number
    activeChallenge: IChallenge
    experienceToNextLevel: number
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
    complitedChellenge: () => void
    closelevelUpModalOpen :  () => void
}

interface IchalengeContextProps {
    children: ReactNode
    level: number
    currentExperience: number
    chelledsCompleted: number
}



export const ChalengeContext = createContext({} as IChallengecontextData)

export function ChallengeProvider({ children,

    
    ...rest


}: IchalengeContextProps) {

    const [level, setLevel] = useState<number>(rest.level? Number(rest.level) :   1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ? Number(rest.currentExperience): 0)
    const [chelledsCompleted, setChelledsCompleted] = useState(rest.chelledsCompleted ? Number(rest.chelledsCompleted) : 0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const  [islevelUpModalOpen , setIslevelUpModalOpen] = useState(false)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])
    useEffect(() => {
 
        Cookies.set('level' , String(level) ) 
        Cookies.set('currentExperience' , String(currentExperience) ) 
        Cookies.set('chelledsCompleted' , String(chelledsCompleted) ) 

    } , [level , currentExperience , chelledsCompleted])

    function levelUp() {
        setLevel(level + 1)
setIslevelUpModalOpen(true)

    }
    function closelevelUpModalOpen() {
        setIslevelUpModalOpen(false)
        
    }
    function complitedChellenge() {
        if (!activeChallenge) {
            return
        }

        const { amount } = activeChallenge
        let finalExpecience = currentExperience + amount

        if (finalExpecience >= experienceToNextLevel) {
            finalExpecience = finalExpecience - experienceToNextLevel
            levelUp()
        }
        setCurrentExperience(finalExpecience)
        setActiveChallenge(null)
        setChelledsCompleted(chelledsCompleted + 1)

    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function startNewChallenge() {
        const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[ramdomChallengeIndex]
        setActiveChallenge(challenge)

        new Audio(`/notification.mp3`).play()

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio.', {
                body: `Valendo ${challenge.amount} XP`
            })
        }
    }
    return (
        <ChalengeContext.Provider value={{
            level,
            currentExperience,
            chelledsCompleted,
            activeChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            resetChallenge,
            complitedChellenge,
            closelevelUpModalOpen
        }} >
            {children}
           { islevelUpModalOpen && ( <LevelUpModal/>)}
        </ChalengeContext.Provider>
    )
}