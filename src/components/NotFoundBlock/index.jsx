import styles from "../NotFoundBlock/NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>Нічого не знайдено</h1>
      <p className={styles.description}>
        На жаль дана сторінка відсутня у нашому магазині
      </p>
    </div>
  );
}

export default NotFoundBlock;
