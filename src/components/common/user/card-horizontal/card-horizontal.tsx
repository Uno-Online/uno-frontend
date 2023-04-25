import stylesCard from "./card-horizontal.module.css";
import svgURLArrowDown from "@/assets/icons/Arrow-down.svg"

interface CardHorizontalProps{
    userName: string;
    userPhotoURL: string;

}

export function CardHorizontal({userName, userPhotoURL}:CardHorizontalProps){



    return <div className={stylesCard['card-container']}>
        <div className={stylesCard["container-img"]}>
            <img src={userPhotoURL} alt={userName} />
        </div>
        <p>{userName}</p>
        <img className={stylesCard["arrow-down"]} src={svgURLArrowDown} alt="" /> 

    </div>;

}


