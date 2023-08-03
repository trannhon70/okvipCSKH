import { Col, Label } from "reactstrap";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
const Images = ({
  label,
  fileList,
  onChange,
  onPreview,
  id,
  formAddImage,
  hidenImage,
  errImage,
  number,
}) => {
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <Col lg={6}>
      <Label style={{ width: "100%" }} className="mb-1">
        {label}
      </Label>
      <span style={{ width: " 40%", float: "left" }}>
          <Upload
            customRequest={dummyRequest}
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList?.length < 1 && "+ Upload"}
          </Upload>
      </span>

      {id ? (
        <span style={{ width: "60%", clear: "both" }}>
          <img
            src={formAddImage}
            alt="..."
            width="28%"
            style={hidenImage ? { display: "none" } : {}}
          />
        </span>
      ) : null}
      {!errImage?.length ? null : (
        <span style={{ color: "red" }}>
          Hình ảnh {number} không được bỏ trống!
        </span>
      )}
    </Col>
  );
};

export default Images;
