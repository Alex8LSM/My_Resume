import styles from './AboutMe.module.css';

const AboutMe = () => {


  return (
                <section className={styles.container}>
                    <h2 className={styles.profession}> Front-End Developer</h2>
                    <h1 className={styles.myName}> Anton Chornyi</h1>
                    <p className={styles.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                    </p>    
                </section>
  );
};

export default AboutMe;