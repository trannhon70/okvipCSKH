import { Col, Row } from "antd";
import appConfig from "../../config/appConfig";

const F8ContactType = (props) => {
  const { contactType } = props;

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
    <div className="icon-cskh">
      <ul>
        <Row>
          {sortedData &&
            sortedData.map((item) => {
              return (
                <Col span={8} key={item?._id}>
                  <li data-color={item?.color}>
                    <a href={item?.slug} className="facebook">
                      <img
                       src={item?.img?.preview ? item?.img?.preview: `${appConfig.API_URL_UPLOAD_FILES}/${item?.img}`}
                        alt="tai app"
                        target="_blank"
                      />
                      <p>{item?.title}</p>
                    </a>
                  </li>
                </Col>
              );
            })}
        </Row>
      </ul>
    </div>
  );
};

export default F8ContactType;
