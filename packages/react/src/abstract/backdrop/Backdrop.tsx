import styles from "./Backdrop.module.scss";

interface BackdropProps {
  isAnimating: boolean;
  onClick?: () => void;
}

const Backdrop = ({ isAnimating, onClick }: BackdropProps) => {
  return <div className={styles["backdrop"]} data-open={isAnimating} onClick={onClick}></div>;
};

export default Backdrop;
