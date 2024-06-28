import { FC } from "react";

const ContentMaps: FC = () => {
  return (
    <div className="w-[100%] top-[18rem] absolute bottom-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15997379.189274801!2d96.01417914589841!3d11.792475765322886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1719551708329!5m2!1sen!2sid"
        width="100%"
        height="100%"
        style={{border: 0}}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};


export default ContentMaps