import styles from "./header.module.scss";
import Link from "next/link";
import {Navbar} from "@/components/navbar/navbar";

export const Header = () => (
  <header className={`container ${styles.container}`}>
    <div className={`container-inner ${styles.inner}`}>
      <Link href="/">
        <img src="/logo.svg" alt="logo" width={128} height={67} style={{display: 'block'}}/>
      </Link>
      <Navbar />
    </div>
  </header>
)
