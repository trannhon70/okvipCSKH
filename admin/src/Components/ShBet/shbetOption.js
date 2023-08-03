import appConfig from "../../config/appConfig";

const ShbetOption = (props) => {
  const {  contactType } = props;
  
  const sortedData = [];

  // Duyệt qua mảng gốc và tạo một bản sao của từng đối tượng
  for (let i = 0; i < contactType.length; i++) {
    const originalObject = contactType[i];
    const clonedObject = { ...originalObject };
    // Thêm đối tượng đã sao chép vào mảng mới
    sortedData.push(clonedObject);
  }
  sortedData.sort((a, b) => a?.order - b?.order)
  return <div className="shbet-list-option">
    {sortedData.map((item) => {
        return (
          <div
            style={{
              backgroundColor: `${item?.backgroundColor}`,
              borderRadius: `${item?.borderRadius}px`,
            }}
            className="shbet-option"
            key={item?.order}
          >
            <a href={item?.slug}>
              <p style={{ textTransform: "uppercase" }}>{item?.title}</p>
              <div className="shbet-circle">
                <img
                  src={
                    item?.img?.preview
                      ? item?.img?.preview
                      : `${appConfig.API_URL_UPLOAD_FILES}/${item?.img}`
                  }
                />
              </div>
            </a>
          </div>
        );
      })}
  </div>
};

export default ShbetOption;
