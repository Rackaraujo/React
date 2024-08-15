import styles from "./Card.module.css";

function Card (){
    return(
        <section className={styles.card}>
            <a href="https://youtu.be/aZenmeRytEM?si=156jZmar59ID2hzw"
            rel="noreferrer noopener" 
            target="_blank">
                <img src="https://i.ytimg.com/vi/aZenmeRytEM/mqdefault.jpg"  alt="Capa"/>
            </a>
        </section>
    );
}

export default Card;