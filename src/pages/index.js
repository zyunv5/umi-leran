import styles from './index.css';
import {Link} from "react-router-dom"

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
        <Link to="/login">去登陆</Link>
      </ul>
    </div>
  );
}
