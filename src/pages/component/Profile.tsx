  import { useContext } from 'react'
import { ChalengeContext } from '../../contexts/ChalendsContext'
import styles from '../../styles/components/profile.module.css'
 
 export  function Profile () {
   const {level} = useContext(ChalengeContext)
     return (
       <div className= {styles.profileContainer }>
           <img src="https://avatars.githubusercontent.com/u/24922545?v=4" alt="rdsdo" />
           <div>
               <strong>Rubens Diego</strong>
               <p>
                 <img src="icons/level.svg" alt="level" />
                 Level {level}
                 </p>
           </div>
       </div>  
     )
 } 