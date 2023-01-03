import styles from "./Contact.module.css"
import React from "react"



const Contact = ({ titre, corps }) => {


    return (
        <div className={styles.contact}>
            <h1 className={styles.contactTitle}>{titre}</h1>
            <p className={styles.contactDesc}>{corps}</p>
            <div className={styles.formContainer}>
                <form className={styles.contactForm} name="contact" method="post" data-netlify="true" onSubmit="submit" >
                    <p className={styles.ItemContainer}>
                        <input type="hidden" name="form-name" value="contact" />
                        <label className={styles.textLabel} for="name">Votre nom:
                            <input className={styles.formItem} placeholder="Votre nom" type="text" name="name" />
                        </label>

                    </p>
                    <p className={styles.ItemContainer}>
                        <label className={styles.textLabel} for="email">Votre Email:
                            <input className={styles.formItem} placeholder="Votre-email@exemple.fr" type="email" name="email" />
                        </label>
                    </p>
                    <p className={styles.ItemContainerItemContainer}>
                        <label className={styles.textLabel} for="message">Votre message:
                            <textarea className={styles.formItem} placeholder="Ecrivez votre message ici" name="message"></textarea>
                        </label>
                    </p>
                    <p className={styles.ItemContainer}>
                        <button className={styles.formBtn} type="submit">Envoyer</button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Contact