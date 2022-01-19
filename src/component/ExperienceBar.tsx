import { useContext } from 'react'
import { ChalengeContext } from '../contexts/ChalendsContext'
import styles from '../styles/components/experienceBar.module.css'
export default function ExperienceBar() {
const  {currentExperience , experienceToNextLevel } = useContext(ChalengeContext)

const  porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: `${porcentToNextLevel}%` }} />

                <span
                    className={styles.currentExperience}
                    style={{ left: `${porcentToNextLevel}%` }}>{currentExperience}xp</span>
            </div>
            <span>{experienceToNextLevel} px</span>

        </header>
    )

}
  
