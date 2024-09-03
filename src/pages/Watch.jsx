import styles from "./Watch.module.css";

function Watch() {
  return (
    <div className={styles.watch}>
      <div className={styles.image}>
        <img src="../cover.jpeg" />
      </div>
      <div className={styles.text}>
        <h1>Alya Sometimes Hide Her Feelings in Russian</h1>
        <p>
          Alya, who sits next to Masachika Kuze, always gives him a cold,
          indifferent gaze. However, sometimes, she quietly lets her feelings
          slip out in Russian… Those words do not go unnoticed by Masachika
          either. As it turns out, Masachika&apos;s listening comprehension in
          Russian is at a native level! Believing that he hasn&apos;t noticed,
          Alya occasionally shows her soft side. And Masachika, fully
          understanding its meaning, pretends as though he hasn&apos;t noticed.
          Unable to hide their smirks, where will the path of their romance take
          them?
        </p>
      </div>
    </div>
  );
}

export default Watch;
