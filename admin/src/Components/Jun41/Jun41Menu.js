import { Col, Row } from "antd";
import appConfig from "../../config/appConfig";

const Jun41Menu = (props) => {
    const { menuJun, post, postNT, postRT } = props;
    return (
        <div className="wrapper">
            <div className="links-redirect">
                <h3
                    className="title-jun41"
                    style={{
                        textTransform: "uppercase",
                        background: `${menuJun?.backgroundColor}`,
                        borderRadius: `${menuJun?.borderRadius}px`,
                        color: `${menuJun?.color}`,
                    }}
                >
                    {menuJun?.titleLink}
                </h3>
                <div className="box-content">
                    <div className="row">
                        <Row>
                            {menuJun?.city?.map((item, index) => {
                                return (
                                    <Col
                                        span={8}
                                        style={{ height: "50px", marginTop: "15px" }}
                                        key={index}
                                    >
                                        <a
                                            style={{
                                                backgroundColor: `${item?.backgroundColor}`,
                                                borderRadius: `${item?.borderRadius}px`,
                                            }}
                                            className="jun41-a"
                                            target="_blank"
                                            href={item?.slug}
                                        >
                                            {item?.title}
                                        </a>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </div>
            </div>
            <div className="intro-agent">
                <h3
                    className="title-jun41"
                    style={{
                        textTransform: "uppercase",
                        background: `${menuJun?.backgroundColor}`,
                        borderRadius: `${menuJun?.borderRadius}px`,
                        color: `${menuJun?.color}`,
                    }}
                >
                    {" "}
                    {menuJun?.titleIntroduce}
                </h3>
                <p style={{ fontSize: "16px" }}>{menuJun?.descriptionIntroduce}</p>
                <div className="box-content">
                    <Row>
                        {menuJun?.imageIntroduce.map((item, index) => {
                            return (
                                <Col span={8} style={{ padding: "10px" }} key={index}>
                                    <img
                                        src={
                                            item?.img?.preview
                                                ? item?.img?.preview
                                                : `${appConfig.API_URL_UPLOAD_FILES}/${item?.img}`
                                        }
                                        alt
                                        style={{ width: "100%" }}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </div>
            <div className="newest">
                <h4
                    className="title-jun41"
                    style={{
                        textTransform: "uppercase",
                        background: `${menuJun?.backgroundColor}`,
                        borderRadius: `${menuJun?.borderRadius}px`,
                        color: `${menuJun?.color}`,
                    }}
                >
                    {menuJun?.titleNew}
                </h4>
                <div className="box-content">
                    {post?.map((item, index) => {
                        return (
                            <a key={index} style={{ marginTop: "10px" }} href={item?.slug}>
                                <div style={{ display: "flex", marginBottom: "15px" }}>
                                    <img
                                        src={
                                            item?.img?.preview
                                                ? item?.img?.preview
                                                : `${appConfig.API_URL_UPLOAD_FILES}/${item?.img}`
                                        }
                                        alt
                                        style={{ width: "123px" }}
                                    />
                                    <span
                                        style={{
                                            textAlign: "left",
                                            paddingLeft: "10px",
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            color: "black",
                                        }}
                                    >
                                        {item?.title}
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className="info-client">
                <h4
                    className="title-jun41"
                    style={{
                        textTransform: "uppercase",
                        background: `${menuJun?.backgroundColor}`,
                        borderRadius: `${menuJun?.borderRadius}px`,
                        color: `${menuJun?.color}`,
                    }}
                >
                    {menuJun?.titleCustormor}
                </h4>
                <div className="box-content">
                    <Row>
                        {menuJun?.custormor.map((item, index) => {
                            return (
                                <Col span={12} style={{ padding: "10px" }} key={index}>
                                    <div
                                        className="col-info-client"
                                        style={{
                                            borderRadius: `${item?.borderRadius}px`,
                                            backgroundColor: `${item?.backgroundColor}`,
                                        }}
                                    >
                                        <a style={{ color: `${item?.color}` }} href={item?.slug}>
                                            {item?.title}
                                        </a>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </div>
            <div className="input-money">
                <h3
                    className="title-jun41"
                    style={{
                        textTransform: "uppercase",
                        background: `${menuJun?.backgroundColor}`,
                        borderRadius: `${menuJun?.borderRadius}px`,
                        color: `${menuJun?.color}`,
                    }}
                >
                    {menuJun?.titleNT}
                </h3>
                <div className="box-content">
                    <a href="https://jun41.com/cach-nap-tien-tai-jun41/">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={
                                    postNT?.img?.preview
                                        ? postNT?.img?.preview
                                        : `${appConfig.API_URL_UPLOAD_FILES}/${postNT?.img}`
                                }
                                alt
                                width="50%"
                            />
                            <p style={{ fontSize: "16px", color: "black", fontWeight: 600 }}>
                                {postNT?.title}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="output-money">
                <h3
                    className="title-jun41"
                    style={{
                        textTransform: "uppercase",
                        background: `${menuJun?.backgroundColor}`,
                        borderRadius: `${menuJun?.borderRadius}px`,
                        color: `${menuJun?.color}`,
                    }}
                >
                    {menuJun?.titleRT}
                </h3>
                <div
                    className="box-content"
                    dangerouslySetInnerHTML={{ __html: postRT?.description }}
                ></div>
            </div>
            <div className="q-and-a">
                <h4
                    className="title-jun41"
                    style={{
                        textTransform: "uppercase",
                        background: `${menuJun?.backgroundColor}`,
                        borderRadius: `${menuJun?.borderRadius}px`,
                        color: `${menuJun?.color}`,
                    }}
                >
                    {menuJun?.titleQA}
                </h4>
            </div>
            <div className="conclude">
                <h4 className="title" style={{ textTransform: "uppercase" }}>
                    {menuJun?.contentQA}
                </h4>
                <p>{menuJun?.descriptionQA}</p>
            </div>
        </div>
    );
};

export default Jun41Menu;
