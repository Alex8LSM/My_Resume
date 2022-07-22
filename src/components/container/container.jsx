
import styles from "./container.module.css";

export default function Section({ children, className }) {
  return (
    <div className={className}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
  );
}