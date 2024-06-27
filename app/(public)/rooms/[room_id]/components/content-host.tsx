import { FC } from "react";
import { Avatar } from "@mantine/core";
import { User } from "@/app/api/product/_mode";
import styles from "./_content.module.scss";

interface ContentHostProps {
  user: User;
}

const ContentHost: FC<ContentHostProps> = ({ user }) => {
  return (
    <div className={styles.content_host}>
      <span className={styles.content_host__title}>Meet your house</span>
      <div className={styles.content_host__card}>
        <Avatar src={"/user/" + user.profile} size={100} />
        <span>{user.name}</span>
        <span>Started hosting in {user.start_year}</span>
      </div>
      <div className={styles.content_host__skill_container}>
        <div className={styles.skill_wrapping}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z"></path>
            </svg>
          </div>
          <div className="">Where I went to school: ENSCI-Les Ateliers</div>
        </div>
        <div className={styles.skill_wrapping}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m28 2.12-.22.01-16 1.78A2 2 0 0 0 10 5.89v15.14A4.95 4.95 0 0 0 7 20a5 5 0 1 0 5 5V11.9l16-1.78v8.9A4.95 4.95 0 0 0 25 18a5 5 0 1 0 5 5V4.12a2 2 0 0 0-2-2zM7 28a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5-18.12V5.9l16-1.77V8.1L12 9.88zM25 26a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
            </svg>
          </div>
          <div className="">
            Favorite song in high school: Nothing compares 2U, Jimmy Scott
            version
          </div>
        </div>
        <div className={styles.skill_wrapping}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M26 2a5 5 0 0 1 5 4.78V21a5 5 0 0 1-4.78 5h-6.06L16 31.08 11.84 26H6a5 5 0 0 1-4.98-4.56L1 21.22 1 21V7a5 5 0 0 1 4.78-5H26zm0 2H6a3 3 0 0 0-3 2.82V21a3 3 0 0 0 2.82 3H12.8l3.2 3.92L19.2 24H26a3 3 0 0 0 3-2.82V7a3 3 0 0 0-2.82-3H26zM16 6a8.02 8.02 0 0 1 8 8.03A8 8 0 0 1 16.23 22h-.25A8 8 0 0 1 8 14.24v-.25A8 8 0 0 1 16 6zm1.68 9h-3.37c.11 1.45.43 2.76.79 3.68l.09.22.13.3c.23.45.45.74.62.8H16c.33 0 .85-.94 1.23-2.34l.11-.44c.16-.67.29-1.42.34-2.22zm4.24 0h-2.23c-.1 1.6-.42 3.12-.92 4.32a6 6 0 0 0 3.1-4.07l.05-.25zm-9.61 0h-2.23a6 6 0 0 0 3.14 4.32c-.5-1.2-.82-2.71-.91-4.32zm.92-6.32-.13.07A6 6 0 0 0 10.08 13h2.23c.1-1.61.42-3.12.91-4.32zM16 8h-.05c-.27.08-.64.7-.97 1.65l-.13.4a13.99 13.99 0 0 0-.54 2.95h3.37c-.19-2.66-1.1-4.85-1.63-5H16zm2.78.69.02.05c.48 1.19.8 2.68.9 4.26h2.21A6.02 6.02 0 0 0 19 8.8l-.22-.12z"></path>
            </svg>
          </div>
          <div className="">Speaks English and French</div>
        </div>
        <div className={styles.skill_wrapping}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m5.7 1.3 3 3-.66.72a12 12 0 0 0 16.95 16.94l.72-.67 3 3-1.42 1.42-1.67-1.68A13.94 13.94 0 0 1 18 26.96V29h3v2h-8v-2h3v-2.04a13.95 13.95 0 0 1-8.92-4.08 14 14 0 0 1-1.11-18.5L4.29 2.71zm18.18 4.44.21.21.21.22a10 10 0 1 1-.64-.63zm-9.34 11.13-2.45 2.45a8 8 0 0 0 8.04 1.05 16.7 16.7 0 0 1-5.59-3.5zm4.91-4.91-3.5 3.5c2.85 2.54 6.08 3.82 6.7 3.2.63-.61-.66-3.85-3.2-6.7zm-9.81-2.1-.08.19a8 8 0 0 0 1.12 7.86l2.45-2.45a16.68 16.68 0 0 1-3.5-5.6zM23.32 8.1l-2.45 2.44a16.73 16.73 0 0 1 3.5 5.6 8 8 0 0 0-1.05-8.05zm-11.98-.76c-.62.62.66 3.86 3.2 6.7l3.5-3.5c-2.85-2.54-6.07-3.82-6.7-3.2zm2.54-1.7c1.75.59 3.75 1.83 5.58 3.49l2.44-2.45a8.03 8.03 0 0 0-8.02-1.04z"></path>
            </svg>
          </div>
          <div className="">Lives in Paris, France</div>
        </div>
      </div>
    </div>
  );
};

export default ContentHost;
