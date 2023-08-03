import appConfig from "../../config/appConfig"


const Jun41Footer = (props) => {
    const { logo, title, description } = props
    return <div className="footer" style={{ left: 0, height: 'auto', backgroundImage: `url(https://jun41.com/wp-content/themes/flatsome/cskh/images/bg-bottom.png)`, backgroundSize: 'cover' }}>
        <img
            className="footer-logo"
            src={logo?.preview ? logo?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${logo}`}
            alt="..."
        />
        <p>
            {description}
        </p>
        <h4 className="title" style={{ color: 'white' }}>{title}</h4>
        <img
            className="partner"
            src="https://jun41.com/wp-content/themes/flatsome/cskh/images/partner.png"
            alt="..."
        />
    </div>
}

export default Jun41Footer