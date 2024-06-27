import { Text } from "@mantine/core";
import { FC, Fragment } from "react";
import styles from './_content.module.scss'


interface ContentAdressProps {
  address: string | null
  facilityDesc: string[] | null
  ranting: number | null
}


const ContentAdress: FC<ContentAdressProps> = (props) => {
  return (
    <Fragment>
      {
        props.address !== null && (
          <div className={styles.content_adress}>
            <Text >{props.address}</Text>
            <Text>{props.facilityDesc?.join(' · ')}</Text>
          </div>
        )
      }
    </Fragment>
  )
}

export default ContentAdress