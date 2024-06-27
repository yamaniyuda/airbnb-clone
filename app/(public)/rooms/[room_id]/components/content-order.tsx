import { FC } from "react";
import styles from './_content.module.scss'


interface ContentOrderProps {
  price: number | null
  categoryType: string
}


const ContentOrderIcons: FC<ContentOrderProps> = () => {
  return (
    <>
      <span>Coming Soon</span>
      <button>Notify me</button>
    </>
  )
}


const ContentOrderChekInOut: FC<ContentOrderProps> = (props) => {
  return (
    <div className={styles.content_order__checkinout}>
      <h1>{props.price}</h1>
      <div>
        <div className="checkin">
          <input type="text" />
        </div>
        <div className="checkin">
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}



const ContentOrder: FC<ContentOrderProps> = (props) => {
  return (
    <div className={styles.content_order}>
      { props.categoryType !== 'icons' && <ContentOrderChekInOut {...props} />}
      { props.categoryType === 'icons' && <ContentOrderIcons {...props} /> }
    </div>
  )
}

export default ContentOrder