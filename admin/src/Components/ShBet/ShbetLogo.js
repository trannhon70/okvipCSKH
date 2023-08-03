import appConfig from "../../config/appConfig";

const ShbetLogo = (props) => {
  const { logo
  } = props;
  return (
    <div className="shbet-logo" >
      <img className="shbet-logo-image" src={logo?.preview ? logo?.preview :`${appConfig.API_URL_UPLOAD_FILES}/${logo}`} />
    </div>
  );
};

export default ShbetLogo;
