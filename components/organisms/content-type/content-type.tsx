import { useSearchParams } from "next/navigation";
import { FC } from "react";
import ContentTypeCarauser from "./content-type-carauser";

const ContentType: FC = () => {
  const searchParams = useSearchParams()

  return (
    <div>
      <ContentTypeCarauser />
    </div>
  )
}

export default ContentType