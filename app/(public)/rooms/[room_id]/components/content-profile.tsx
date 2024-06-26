import { User } from "@/app/api/product/_mode";
import { Avatar } from "@mantine/core";
import { FC } from "react";
import styles from './_content.module.scss'


interface ContentProfileProps {
  user: User
}


const ContentProfile: FC<ContentProfileProps> = ({ user }) => {
  return (
    <div className={styles.content_profile}>
      <Avatar size={60} src={'/user/' + user?.profile} />
      <div>
        <span>{user?.name}</span>
        <span>{user?.bio}</span>
      </div>
    </div>
  )
}


export default ContentProfile