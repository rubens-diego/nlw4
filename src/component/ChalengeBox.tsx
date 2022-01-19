

import Image from "next/image"
import { useContext } from "react"
import { ChalengeContext } from "../contexts/ChalendsContext"
import { CountDownContext } from "../contexts/CountDownContext"
import styled from "../styles/components/chalengeBox.module.css"

export function ChalendBox() {


    const { activeChallenge, resetChallenge, complitedChellenge } = useContext(ChalengeContext)
const {resetCountDown} = useContext(CountDownContext)

function handleCjalenheSucessed() {
    complitedChellenge()
    resetCountDown()
}

function handleCjalenheFailed() {
    resetChallenge()
    resetCountDown()

}

    return (
        <div className={styled.chalengeBoxContainer}>
            {activeChallenge ? (
                <div className={styled.chalengeActive}>
                    <header>
                        Ganhe {activeChallenge.amount} XP
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="bodt" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description} </p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styled.chalengeFailButton}
                            onClick={handleCjalenheFailed}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styled.chalengeSucceededButton}
                            onClick={handleCjalenheSucessed}
                        >Completei</button>
                    </footer>

                </div>
            ) : (<div className={styled.chalengeNotActive}>
                <strong>Finalize um ciclo opara recber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level uo" />
                    Avance de level completando desafios
                </p>
            </div>)}

        </div>
    )
}