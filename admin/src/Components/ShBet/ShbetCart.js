import appConfig from "../../config/appConfig";

const ShbetCard = (props) => {
    const { item, key,contacts  } = props

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
      <div className="shbet-list-card">
        {
          sortedData.map((item)=>{
              return (<div style={{borderRadius: `${item?.borderRadius}px`}} className= "shbet-card" key={item?.order}>
              <a href={item?.slug}>
                <div style={{backgroundColor:`${item?.backgroundColor}`}} className="shbet-card-title">
                  <p style={{textTransform:'uppercase'}} >{item?.title}</p>
                </div>
                <div className="shbet-card-image">
                  <img src={item?.icon?.preview ? item?.icon?.preview: `${appConfig.API_URL_UPLOAD_FILES}/${item?.icon}`} />
                  {/* <img alt="..." src={item?.icon} /> */}
                </div>
              </a>
            </div>)
          })
        }
      
      </div>
    );
  };
  
  export default ShbetCard;