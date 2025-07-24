import styles from "styles/container.module.css"

export default function Container({ children, large = false }) {
  return <div className={large ? styles.large : styles.defalut}>{children}</div>
}
