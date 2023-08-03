import { Col, Row } from "antd";
import appConfig from "../../config/appConfig";

const Jun88ContactType = (props) => {
    const {contactType    } = props

    const sortedData = [];

    // Duyệt qua mảng gốc và tạo một bản sao của từng đối tượng
    for (let i = 0; i < contactType.length; i++) {
      const originalObject = contactType[i];
      const clonedObject = { ...originalObject };
      // Thêm đối tượng đã sao chép vào mảng mới
      sortedData.push(clonedObject);
    }
    sortedData.sort((a, b) => a?.order - b?.order)
  return (
    <div className="cskh_footer">
      <div className="cskh_footer_icons">
        <Row>
            {sortedData && 
                sortedData.map((item, index) => {
                    return (
                        <Col span={6} style={{ padding: "10px" }} key={index}>
                        <a href={item?.slug}>
                          <img src={item?.img?.preview ? item?.img?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${item?.img}`} style={{width:'80px', height:'80px', borderRadius:`${item?.borderRadius}px`}} />
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

export default Jun88ContactType;
