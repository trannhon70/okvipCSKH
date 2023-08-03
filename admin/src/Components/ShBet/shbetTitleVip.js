const ShbetTitleVip = (props) => {
  const {backgroundColor, borderRadius, color ,description, order1, title} = props;
  return (
    <div
      className="title-vip"
      style={{
        maxWidth: 600,
        width: "100%",
        backgroundColor: `${backgroundColor}`,
        borderRadius: `${borderRadius}px`,
        marginTop:'30px'
      }}
    >
      <a href="vip.html" target="_blank">
        <div id="myBtn">
          <p style={{ textTransform: "uppercase", color:`${color}` }}>{title}</p>
          <p style={{color:`${color}`}}>Dự kiến: {description}</p>
        </div>
      </a>
    </div>
  );
};

export default ShbetTitleVip;
