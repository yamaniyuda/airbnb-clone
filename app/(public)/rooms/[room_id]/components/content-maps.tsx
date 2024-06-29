import { FC } from "react";
import styles from "./_content.module.scss";

interface ContentMapsProps {
  address: string | null;
}

const ContentMaps: FC<ContentMapsProps> = ({ address }) => {
  return (
    <div className={styles.content_maps}>
      <h2>Where you'll be</h2>
      <p>{address}</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63711.956623089856!2d98.67427839999999!3d3.5880959999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1719459230924!5m2!1sen!2sid"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContentMaps;
