import { useEffect, useState } from "react";

import { FormGuest } from "./components/FormGuest";
import { FormUser } from "./components/FormUser";
import styles from "./styles.module.css"
import logo from '../../assets/logo.svg';



import cloud1 from '../../assets/cloud/cloud_01.svg';
import cloud2 from '../../assets/cloud/cloud_02.svg';
import cloud3 from '../../assets/cloud/cloud_03.svg';
import cloud4 from '../../assets/cloud/cloud_04.svg';
import cloud5 from '../../assets/cloud/cloud_05.svg';
import LoginFx from "./components/fx";
import { Link, useNavigate } from "react-router-dom";


export function Login(){
    const navigate = useNavigate();

    const [loginOrGuest,setLoginOrGuest] = useState<'login' | 'guest'>('login')
    const clouds = [cloud1, cloud2, cloud3, cloud4, cloud5]

    const [pageLoaded, setPageLoaded] = useState<boolean>(false);

    useEffect(() => {
        if(!pageLoaded) {
            LoginFx();
            setPageLoaded(true);
        }
    }, [pageLoaded]);


    return(
        <main className={styles.container}>
            <div className={styles.clouds}>
                {
                clouds.map((cloud)=><img className={styles.cloud} key={`${cloud}`} src={cloud} alt=''/>)
                }
            </div>
           

            <div className={styles.app}>
                <div className={styles.logo} id="logo">
                    <img src={logo} alt="" />
                </div>

                <div id="form" style={{zIndex: '5'}}>
                    {
                        loginOrGuest==='guest'?<FormGuest setLoginOrGuest={setLoginOrGuest}/>:
                        <FormUser setLoginOrGuest={setLoginOrGuest}/> 
                    }             
                </div>
            </div>
          
           <div className={styles['bg-world']}/>
        </main>

    )
}