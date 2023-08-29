import Cat from "@assets/icon/cat.svg";
import styles from "./index.module.scss"

export const Logo = () => {
  return (
    <a href="/" class={styles.logo}>
      <img src={Cat} />
      <div class="text-black font-medium italic text-base">Ananiah</div>
    </a>
  );
};
