import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.info}>
          <h1>Welcome to my Page</h1>
          <p>
            Добро пожаловать на мою страницу. Наслаждайтесь просмотром аниме
            &quot;Аля&quot;!
          </p>
          <button>HI</button>
        </div>
        <div className={styles.image}>
          <img src="../watch.png" />
        </div>
      </div>
    </>
  );
}

export default Home;
