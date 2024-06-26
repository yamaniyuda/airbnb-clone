import { Facility } from "@/app/api/product/_mode";
import Image from "next/image";
import { FC } from "react";
import styles from './_content.module.scss'


interface ContentPrimaryFacilityProps {
  primerFacilities: Facility[]
}


const ContentPrimaryFacility: FC<ContentPrimaryFacilityProps> = ({ primerFacilities }) => {
  return (
    <div className={styles.content_primary_facility}>
      {
        primerFacilities?.map((data, key) => (
          <div key={key}>
            <Image src={'/facilities/' + data.icon}  width={24} height={24} unoptimized alt="icon" />
            <p>
              <span>{data.name}</span>
              <span>{data.desc}</span>
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default ContentPrimaryFacility