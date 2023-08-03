import { Button, Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import appConfig from "../../config/appConfig";

const Jun41Logo = (props) => {
    const {logo, logo1}= props
  return (
    <>
      <img
        src={logo?.preview ? logo?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${logo}`}
        alt="Logo Jun88"
        style={{ height: 75 }}
      />
      <div className="daisu">
        <img
          src={logo1?.preview ? logo1?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${logo1}`}
          alt="RobetoCalos"
          style={{ height: 150 }}
        />
      </div>
      <div className="search" style={{padding:'15px 0px'}}>
      <Input
        className="searchBx"
        style={{
          margin: "0 29px 0 30px",
          borderRadius: "16px",
        }}
      />
      <Button
        style={{ width: "80px", borderRadius: "16px" }}
        icon={<AiOutlineSearch />}
        type="primary"
      ></Button>
    </div>
    </>
  );
};

export default Jun41Logo;
