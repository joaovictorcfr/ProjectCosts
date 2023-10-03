import loading from "../../img/loading.svg";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div classeName={styles.loader_container}>
      <img classeName={styles.loader} src={loading} alt="Loading" />
    </div>
  );
}

export default Loading;
