import { useSearchParams } from "next/navigation";
import { FC } from "react";
import ContentTypeCarauser from "./content-type-carauser";
import ContentTypeFilter from "./content-type-filter";
import styles from "./_content-type.module.scss";

const ContentType: FC = () => {
  const searchParams = useSearchParams();
  const productType = searchParams.get('product-type') || "icons"

  return (
    <div className={productType !== "icons" ? styles.content_type : undefined}>
      <div className={productType !== "icons" ? "w-[73%]" : undefined}>
        <ContentTypeCarauser />
      </div>
      {productType !== "icons" && <ContentTypeFilter />}
    </div>
  );
};

export default ContentType;
