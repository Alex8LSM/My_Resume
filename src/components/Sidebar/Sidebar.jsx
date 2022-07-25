import styles from './Sidebar.module.css';

const Sidebar = ({ children }) => {

  return (
    <section className={styles.container}>
      <img src="./photo.jpg" alt="My_photo"/>
      {children}
    </section>
  );
};

export default Sidebar;