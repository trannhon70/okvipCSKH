import appConfig from "../../config/appConfig";

const ContactType789Bet = (props) => {
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
    <div className="contact flex">
      {sortedData &&
        sortedData.map((item, index) => {
          return (
            <a
              key={index}
              className="icon"
              href={item?.slug}
              target="_blank"
            >
              <img src={item?.img?.preview ? item?.img?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${item?.img}`} alt="tele" style={{borderRadius:`${item?.borderRadius}px`}}/>
            </a>
          );
        })}
    </div>
  );
};

export default ContactType789Bet;
