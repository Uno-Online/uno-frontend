import { useState } from "react";

import { FormGuest } from "./components/FormGuest";
import { FormUser } from "./components/FormUser";
import styles from "./styles.module.css"
import logo from '../../assets/logo.svg';

import cloud1 from '../../assets/cloud/cloud_01.svg';
import cloud2 from '../../assets/cloud/cloud_02.svg';
import cloud3 from '../../assets/cloud/cloud_03.svg';
import cloud4 from '../../assets/cloud/cloud_04.svg';
import cloud5 from '../../assets/cloud/cloud_05.svg';


export function Home(){

    const [loginOrGuest,setLoginOrGuest] = useState<'login' | 'guest'>('login')
    const clouds = [cloud1, cloud2, cloud3, cloud4, cloud5]

    return(
        <main className={styles.container}>
            <div className={styles.clouds}>
                {
                clouds.map((cloud)=><img className={styles.cloud} key={`${cloud}`} src={cloud} alt=''/>)
                }
            </div>
           
             <div className={styles.logo}>
                        <img src={logo} alt="" />
            </div>
                {
                    loginOrGuest==='guest'?<FormGuest setLoginOrGuest={setLoginOrGuest}/>:
                    <FormUser setLoginOrGuest={setLoginOrGuest}/> 
                }             
          
           <div className={styles['bg-world']}/>
        </main>

    )
}