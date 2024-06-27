import { FC } from "react";
import styles from './_content.module.scss'


interface ContentOrderProps {
  price: number | null
}


const ContentOrderIcons: FC<ContentOrderProps> = () => {
  return (
    <>
      <span>Coming Soon</span>
      <button>Notify me</button>
    </>
  )
}



const ContentOrder: FC<ContentOrderProps> = (props) => {
  return (
    <div className={styles.content_order}>
      { !props.price && <ContentOrderIcons {...props} /> }
    </div>
  )
}

export default ContentOrder