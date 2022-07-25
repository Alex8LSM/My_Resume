import styles from './TechSkills.module.css';

const TechSkills = () => {

  return (
     <div className={styles.container}>
     <h3 className={styles.title}>Tech Skills</h3>
     <ul className={styles.list}>
         <li className={styles.item}><span className={styles.text}>HTML5</span></li>
         <li className={styles.item}><span className={styles.text}>CSS3</span></li>
         <li className={styles.item}><span className={styles.text}>GIT</span></li>
         <li className={styles.item}><span className={styles.text}>WebPack</span></li>
         <li className={styles.item}><span className={styles.text}>JavaScript</span></li>
         <li className={styles.item}><span className={styles.text}>React.js</span></li>
         <li className={styles.item}><span className={styles.text}>Node.js</span></li>
     </ul>
 </div>
  );
};

export default TechSkills;