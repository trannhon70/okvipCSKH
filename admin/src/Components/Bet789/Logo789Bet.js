import appConfig from "../../config/appConfig";

const Logo789Bet = (props) => {
    const {title, content,logo} = props
  return (
    <>
      <h1>{title}</h1>
      <a href="https://789b.vin/CSKH" target="_blank">
        <div className="title" style={{backgroundImage:`url(${logo?.preview ? logo?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${logo}`})`}}>
          <h2>{content}</h2>
        </div>
      </a>
    </>
  );
};

export default Logo789Bet;
