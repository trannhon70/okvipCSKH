import appConfig from "../../config/appConfig";

const Jun88Contact = (props) => {
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
    <div className="cskh_list">
      {sortedData &&
        sortedData.map((item, index) => {
          return (
            <a className="cskh_item" target="_blank" key={index}>
              <div className="cskh_item_icon display-center" style={{backgroundColor:`${item?.backgroundColor}`}}>
                <img src={item?.icon.preview ? item?.icon.preview : `${appConfig.API_URL_UPLOAD_FILES}/${item?.icon}`} style={{width:'35px', height:'35px'}}/>
              </div>
              <div className="cskh_item_btn display-center" style={{ borderRadius:`${item?.borderRadius}px`, backgroundColor:`${item?.backgroundColor}`, color:`${item?.color}`}}>
                {item?.title}
              </div>
            </a>
          );
        })}
    </div>
  );
};

export default Jun88Contact;
