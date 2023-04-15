import styles from "./pagination.module.css";
import Arrow from "../../assets/arrow.svg";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  previousPage: () => void;
  nextPage: () => void;
}

export function Pagination({
  currentPage = 1,
  totalPages = 1,
  previousPage,
  nextPage,
}: PaginationProps) {
  return (
    <div className={styles["container-pagination"]}>
      <button
        type="button"
        onClick={() => previousPage()}
        className={styles["button-pagination-left"]}
        disabled={currentPage <= 1}
      >
        <img src={Arrow} alt="" />
      </button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button
        type="button"
        className={styles["button-pagination-right"]}
        onClick={() => nextPage()}
        disabled={currentPage >= totalPages}
      >
        <img src={Arrow} alt="" />
      </button>
    </div>
  );
}
