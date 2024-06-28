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
      <div className={styles.content_order__wraper}>
        <table className={styles.content_order__checkinout__container}>
          <tbody>
            <tr>
              <td className={styles.content_order__checkinout__chheckin}>
                <label htmlFor="">CHECK-IN</label>
                <input type="text" placeholder="Add date" />
              </td>
              <td className={styles.content_order__checkinout__chheckin}>
                <label htmlFor="">CHECK-OUT</label>
                <input type="text" placeholder="Add date" />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className={styles.content_order__checkinout__chheckin}>
                <label htmlFor="">GUESTS</label>
                <input type="text" placeholder="Guest" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button>Reserve</button>
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