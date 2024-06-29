import { FC } from "react";
import styles from './_content.module.scss'
import Link from "next/link";

interface ContentButton {
  searchParams: any;
}


const ContentButton: FC<ContentButton> = ({ searchParams }) => {
  const urlSearch = new URLSearchParams(searchParams)
  const show = urlSearch.get('show') ?? 'list'
  urlSearch.set('show', (show === 'list' ? 'map' : 'list'))


  return (
    <div className={styles.content_button}>
      <Link prefetch={false} replace={false} href={'?' + urlSearch.toString()}>
        <button>
          Show {show === 'list' ? 'Map' : 'List'}
        </button>
      </Link>
    </div>
  )
}

export default ContentButton