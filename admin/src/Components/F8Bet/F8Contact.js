import { Col, Row } from "antd";
import appConfig from "../../config/appConfig";

const F8Contact = (props) => {
  const { contacts } = props;
  const sortedData = [];

    // Duyệt qua mảng gốc và tạo một bản sao của từng đối tượng
    for (let i = 0; i < contacts.length; i++) {
      const originalObject = contacts[i];
      const clonedObject = { ...originalObject };
      // Thêm đối tượng đã sao chép vào mảng mới
      sortedData.push(clonedObject);
    }
    sortedData.sort((a, b) => a?.order - b?.order)
  return (
    <div className="cskh">
      <div className="row-two">
        <Row style={{marginLeft:'10px', padding:'0px 30px'}}>
            {
                sortedData &&
                sortedData.map((item, index) => {
                    return (
                        <Col span={12} style={{ padding: "10px" }} key={index}>
                            <a href={item?.slug} target="_blank">
                            <div className="card" style={{background:`${item?.backgroundColor}`, borderRadius:`${item?.borderRadius}px`}}>
                                <div className="content">
                                <img
                                    src={item?.icon?.preview ? item?.icon?.preview: `${appConfig.API_URL_UPLOAD_FILES}/${item?.icon}`}
                                    alt="napruttien"
                                    width="50px"
                                />
                                <h2>{item?.title}</h2>
                                </div>
                            </div>
                            </a>
                        </Col>
                    )
                })
            }
        </Row>
      </div>
    </div>
  );
};

export default F8Contact;
