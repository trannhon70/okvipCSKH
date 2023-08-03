import appConfig from "../../config/appConfig";

const ShbetNote = (props) => {
  const { backgroundColor, borderRadius, color, description, icon, title, order1 } = props;
  return (
    <div
      style={{ borderRadius: `${borderRadius}px`, backgroundColor: `${backgroundColor}` }}
      className="shbet-note"
    >
      <div className="shbet-note-title">
        <img
          className="warning-image"
          src={
            icon?.preview
              ? icon?.preview
              : `${appConfig.API_URL_UPLOAD_FILES}/${icon}`
          }
        />
       
        
        <h2 style={{ textTransform: "uppercase" }}>{title}</h2>
        <img
          className="warning-image"
          src={
            icon?.preview
              ? icon?.preview
              : `${appConfig.API_URL_UPLOAD_FILES}/${icon}`
          }
        />
      </div>
      <div className="shbet-note-content">{description}</div>
    </div>
  );
};

export default ShbetNote;
