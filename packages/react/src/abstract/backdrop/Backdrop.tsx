import styles from "./Backdrop.module.scss";

interface BackdropProps {
  isAnimating: boolean;
  isFreezingNavigation?: boolean;
  onClick?: () => void;
}

const Backdrop = ({ isAnimating, onClick }: BackdropProps) => {
  return (
    <div className={styles["backdrop"]} data-open={isAnimating} data-interactive={!!onClick} onClick={onClick}></div>
  );
};

export default Backdrop;
