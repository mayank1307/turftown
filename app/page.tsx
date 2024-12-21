import SignupContainer from "@/components/SignupContainer";
import ImageContainer from "@/components/ImageContainer";

import styles from "./page.module.css";
import "@/resources/variables.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SignupContainer />
      <ImageContainer />
    </div>
  );
}
