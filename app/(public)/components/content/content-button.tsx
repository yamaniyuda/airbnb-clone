import { FC } from "react";
import styles from './_content.module.scss'
import Link from "next/link";

interface ContentButton {
  searchParams: any;
}


const ContentButton: FC<ContentButton> = ({ searchParams }) => {
  const urlSearch = new URLSearchParams(searchParams).get('show') ?? 'list'
  

  return (
    <div className={styles.content_button}>
      <Link prefetch={false} replace={false} href={'?show=' + (urlSearch === 'list' ? 'map' : 'list')}>
        <button>
          Show {urlSearch === 'list' ? 'Map' : 'List'}
        </button>
      </Link>
    </div>
  )
}

export default ContentButton