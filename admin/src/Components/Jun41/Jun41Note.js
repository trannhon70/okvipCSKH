
const Jun41note = (props) => {
    const {backgroundColor, borderRadius, color, description, title}= props
    return<div className="cskh">
    <div className="cskh2">
      <div
        className="cs1"
        style={{ backgroundColor: `${backgroundColor}`, borderRadius: `${borderRadius}px` }}
      >
        <p className="line2" style={{color: `${color}`}}>{title}</p>
        <div style={{ padding: 5 }}>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div></div>
}

export default Jun41note