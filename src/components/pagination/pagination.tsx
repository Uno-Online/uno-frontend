import styles from "./pagination.module.css";
import ArrowLeft from '../../assets/arrow left.svg'
import ArrowRight from '../../assets/arrow right.svg'

interface PaginationProps{
    currentPage?: number
    totalPages?: number
    previousPage:()=>void
    nextPage:()=>void
}
export function Pagination({currentPage=1,totalPages=1,previousPage,nextPage}:PaginationProps){
    return(
        <div className={styles["container-pagination"]}>
            <button type="button" onClick={()=>previousPage()} className={styles['button-pagination']} disabled={currentPage<=1}>
                <img src={ArrowLeft} alt=""/>
            </button>
            
            <span>{`${currentPage} / ${totalPages}`}</span>
            <button type="button" className={styles['button-pagination']} onClick={()=>nextPage()} disabled={currentPage>=totalPages}>
             <img src={ArrowRight} alt=""/>
            </button>
            
        </div>
    )
}