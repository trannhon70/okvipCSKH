import appConfig from "../../config/appConfig";

const Contact789Bet = (props) => {
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
    <div className="info-contact">
      {sortedData &&
        sortedData.map((item, index) => {
          return (
            <a className="flex" key={index}>
              <div className="icon" >
                <div className="img" style={{backgroundColor:`${item?.backgroundColor}`, borderRadius:`${item?.borderRadius}px`}}>
                  <img src={item?.icon.preview ? item?.icon?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${item?.icon}`} alt />
                </div>
              </div>
              <div className="name-789bet" style={{backgroundColor:`${item?.backgroundColor}`, borderRadius:`${item?.borderRadius}px`}}>
                <p
                  style={{
                    marginBottom: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    textTransform:'uppercase',
                    color:`${item?.color}`
                  }}
                >
                 {item?.title}
                </p>
              </div>
            </a>
          );
        })}
    </div>
  );
};

export default Contact789Bet;
