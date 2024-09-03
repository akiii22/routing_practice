import styles from "./About.module.css";

function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
          <div className={styles.info}>
            <h1>Alisa Mikhailovna Kujou</h1>
            <p>
              My nickname is Alya. I am a high school girl with silver hair who
              looks so beautiful that I turn heads wherever I go. Masachika
              Kuze, who sits next to me, is an unmotivated student who stays up
              late at night and is often a sleepyhead at school. I often
              complain about Masachika but secretly have feelings for him,
              occasionally making flirtatious remarks in my native Russian
              language. However, I am unaware that Masachika understands
              Russian, and my flirty comments toward him constantly leave him
              perplexed.
            </p>
          </div>
          <div className={styles.image}>
            <img src="../about1.png" />
          </div>
        </div>
        <div className={styles.btn}>
          <button>Hello</button>
        </div>
      </div>
    </>
  );
}

export default About;
