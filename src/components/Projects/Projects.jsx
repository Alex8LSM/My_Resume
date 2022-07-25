import styles from './Projects.module.css';

const Projects = () => {

  return (
    <section className={styles.container}>
      <h3 className={styles.mainTitle}>Projects</h3>
  
      <ol className={styles.projectsList}>
          <li className={styles.projectsItem}>
              <a href="https://hellenglish.goit.global/" className={styles.projectsLink}>https://hellenglish.goit.global/</a>
              <span className={styles.projectsText}>...................................
                  <span className={styles.projectsBracket}>[</span> HTML5, CSS3 <span className={styles.My_projects_bracket}>]</span>
              </span>
          </li>
      
          <li className={styles.projectsItem}>
              <a href="https://kidslike.goit.global/" className={styles.projectsLink}>https://kidslike.goit.global/</a>
              <span className={styles.projectsText}>...........................................
                  <span className={styles.projectsBracket}>[</span> JavaScript <span className={styles.My_projects_bracket}>]</span>
              </span>

          </li>

          <li className={styles.projectsItem}>
              <a href="https://cryptohub.goit.global" className={styles.projectsLink}>https://cryptohub.goit.global/</a>
              <span className={styles.projectsText}>....................................
                  <span className={styles.projectsBracket}>[</span> React.js, Node.js <span className={styles.My_projects_bracket}>]</span>
              </span>

          </li>
      </ol>


    </section>
  )
};

export default Projects;