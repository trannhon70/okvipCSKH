import { Col, Row } from "antd";
import appConfig from "../../config/appConfig";

const Jun41Contact = (props) => {
  const { contacts } = props;

  const sortedData = [];

  // Duyệt qua mảng gốc và tạo một bản sao của từng đối tượng
  for (let i = 0; i < contacts.length; i++) {
    const originalObject = contacts[i];
    const clonedObject = { ...originalObject };
    // Thêm đối tượng đã sao chép vào mảng mới
    sortedData.push(clonedObject);
  }
  sortedData.sort((a, b) => a?.order - b?.order);
  return (
    <div className="cskh">
      <div className="row-two">
        <Row>
          {sortedData.map((item, index) => {
            return (
              <Col span={6} style={{ padding: "10px" }} key={index}>
                <a href={item?.slug} target="_blank">
                  <div
                    className="card"
                    style={{ width: "90px", height: "85px", borderRadius:`${item?.borderRadius}px`, backgroundColor:`${item?.backgroundColor}` }}
                  >
                    <div className="content">
                      <img
                        src={
                          item?.icon?.preview
                            ? item?.icon?.preview
                            : `${appConfig.API_URL_UPLOAD_FILES}/${item?.icon}`
                        }
                        alt="CSKH 24/7"
                        width="50px"
                      />
                      <h2 style={{color:`${item?.color}`}}>{item?.title}</h2>
                    </div>
                  </div>
                </a>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Jun41Contact;
