import Image from "next/image";
import { FC } from "react";
import style from "./_content.module.scss"

interface ContentHeadingImageProps {
  images: string[]
}


const ContentHeadingImage: FC<ContentHeadingImageProps> = ({ images }) => {
  return (
    <div className={`
      ${style.content_heading_image__container}
      ${images.length !== 1 && style.content_heading_image}
    `}>
      {
        images?.map((data, key) => {
          return (
            <Image
              key={key}
              width={100}
              quality={100}
              unoptimized
              className={`
                ${style.content_heading_image__img}
                ${(images.length !== 1 && key === 0) && style.content_heading_image_single}  
              `}
              height={100}
              alt={'picture-heading-' + key}
              src={'/contents/' + data}
            />
          )
        })
      }
    </div>
  )
}

export default ContentHeadingImage