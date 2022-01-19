import { useContext, useEffect, useState } from "react"
import { ChalengeContext } from "../../contexts/ChalendsContext"
import { CountDownContext } from "../../contexts/CountDownContext"

import styles from "../../styles/components/countDown.module.css"



export function CountDown() {

    const { minutes,
        seconds,
        isActive,
        hasFinished,
        startCountDown,
        resetCountDown } = useContext(CountDownContext)

    const [minutesLeft, minutesRith] = String(minutes).padStart(2, "0").split('')
    const [secondsLeft, secondsRith] = String(seconds).padStart(2, "0").split('')




    return (
        <div>

            <div className={styles.CountDownContainer}>
                <div>

                    <span>{minutesLeft}</span>
                    <span>{minutesRith}</span>
                </div>
                <span>:</span>
                <div>

                    <span>{secondsLeft}</span>
                    <span>{secondsRith}</span>
                </div>
            </div>

            {hasFinished ? (


                <button
                    disabled
                    className={`${styles.countDownButton}`}  >
                    Ciclo Encerrado
                </button>


            ) : (<>


                {isActive ? (


                    <button
                        onClick={resetCountDown}
                        type="button" className={`${styles.countDownButton} ${styles.countDownButtonActive} `}  >
                        Abandonar um ciclo
                    </button>

                ) : (
                    <button
                        onClick={startCountDown}
                        type="button" className={styles.countDownButton} >
                        Iniciar um ciclo
                    </button>
                )}

            </>)}

        </div>
    )
}

