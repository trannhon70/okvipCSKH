const F8BetNote = (props) => {
  const { title, description, borderRadius, backgroundColor, color } = props;
  return (
    <div className="cskh" style={{ marginTop: "10px" }}>
      <div className="cskh2">
        <div
          className="cs1"
          style={{
            backgroundColor: `${backgroundColor}`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          <p className="line2" style={{ color: `${color}` }}>
            {title}
          </p>

          <div style={{ padding: 5 }}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default F8BetNote;
