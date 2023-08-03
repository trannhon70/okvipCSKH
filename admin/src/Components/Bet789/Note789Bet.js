import appConfig from "../../config/appConfig";

const Note789Bet = (props) => {
    const {backgroundColor, borderRadius, color, description, icon, title} = props
  return (
    <div className="info" style={{backgroundImage:`url(${icon?.preview ? icon?.preview : `${appConfig.API_URL_UPLOAD_FILES}/>${icon}`})`}}>
      <div className="content">
        <p style={{ marginTop: 25, marginBottom: 5, padding:'0px 90px', textTransform:'uppercase', color:`${color}` }}>
          {title}
        </p>
        <h3 className="h3-789bet">
          <b>
            <a className="h3-789bet" href="#">
              Admin@789bet.com
            </a>
          </b>
        </h3>
        <p style={{ marginBottom: 25, marginTop: 5 , padding:'0px 90px', textTransform:'uppercase', color:`${color}`}}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Note789Bet;
