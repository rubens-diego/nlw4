import { useContext } from "react"
import { ChalengeContext } from "../../contexts/ChalendsContext"
import styles from "../../styles/components/levelUpModal.module.css"

export  function LevelUpModal () {
    const  {level , closelevelUpModalOpen} = useContext(ChalengeContext)
    return (
        <div className={styles.overLay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você Alcançou um novo Level.</p>
                <button
                 type="button"
                 onClick={closelevelUpModalOpen} >
                      <img src="/icons/close.svg" alt="close" />
                      </button>
                </div> 
        </div>
    )
    
}