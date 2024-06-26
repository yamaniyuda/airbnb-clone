import { FC } from "react";
import styles from './_content.module.scss'


const ContentOrderIcons: FC = () => {
  return (
    <>
      <span>Coming Agust</span>
      <button>Notify me</button>
    </>
  )
}



const ContentOrder: FC = () => {
  return (
    <div className={styles.content_order}>
      <ContentOrderIcons />
    </div>
  )
}

export default ContentOrder