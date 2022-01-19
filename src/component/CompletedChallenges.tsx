
import { useContext } from "react"
import { ChalengeContext } from "../contexts/ChalendsContext"
import styles from "../styles/components/completedChallenges.module.css"

export function CompletedChallenges() {
    const {chelledsCompleted} = useContext(ChalengeContext)
    return (
        <div className={styles.completedChallengesContainer} >
            <span>Desafios completos</span>
            <span>{chelledsCompleted}</span>
        </div>
    )
}  