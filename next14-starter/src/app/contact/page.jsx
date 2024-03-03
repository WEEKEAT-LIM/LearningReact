import Image from "next/image";
import styles from "./contact.module.css"

export const metadata = {
  title: 'Contact',
  description: 'Contact description',
}

function contact()
{
    return(
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src="/contact.png" alt="contact image" fill/>
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <input placeholder="Name and Surname"/>
                <input placeholder="Email Address"/>
                <input placeholder="Phone Number (optional)"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"/>
                <button>Send</button>
            </form>
        </div>
    </div>
    );
}

export default contact