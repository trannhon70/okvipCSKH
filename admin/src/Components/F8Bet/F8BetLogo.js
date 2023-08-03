import { Button, Input } from "antd"
import { AiOutlineSearch } from "react-icons/ai"
import appConfig from "../../config/appConfig";

const F8BetLogo = (props) => {
    const {logo} = props
    return<div>
    <img
      src={logo?.preview ? logo?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${logo}`}
      alt="Logo Jun88"
      style={{ height: 75 }}
    />
    <div className="search">
      <Input
        className="searchBx"
        style={{
          margin: "0 29px 0 30px",
          borderRadius: "16px",
          textAlign: "center",
        }}
      />
      <Button
        style={{ width: "80px", borderRadius: "16px" }}
        icon={<AiOutlineSearch />}
        type="primary"
      ></Button>
    </div>
  </div>
}

export default F8BetLogo