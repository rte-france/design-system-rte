import styles from "./Backdrop.module.scss";

interface BackdropProps {
  isAnimating: boolean;
}

const Backdrop = ({ isAnimating }: BackdropProps) => {
  return <div className={styles["backdrop"]} data-open={isAnimating}></div>;
};

export default Backdrop;
