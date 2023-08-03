import appConfig from "../../config/appConfig";


const Jun88Logo = (props) => {
  const {logo, logo1} = props
  return <div className="head-top">
      <div className="left">
        <a href="https://jun8858.com/">
          <img src={logo?.preview ? logo?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${logo}`} />
        </a>
      </div>
      <div className="right">
        <img src={logo1?.preview ? logo1?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${logo1}`} />
      </div>
    </div>
  
};

export default Jun88Logo;
