import { FC } from "react";
import styles from "./_content.module.scss";

interface ContentDescProps {
  desc: string;
  categoryName: string;
}

const ContentDesc: FC<ContentDescProps> = ({ categoryName, desc }) => {
  return (
    <div className={styles.content_desc}>
      <span>{desc}</span>
    </div>
  );
};

export default ContentDesc;
