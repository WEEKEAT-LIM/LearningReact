import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";

function Home() {

// throw new Error('Error in Home');
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        blanditiis adipisci minima reiciendis a autem assumenda dolore.
      </p>
      <div className={styles.btns}>
        <Link href="/about"><button className={styles.btn} >Learn More</button></Link>
        <Link href="/contact" ><button className={styles.btn2} >Contact</button></Link>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandsImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>
  );
};

export default Home;