const Jun88Note = (props) => {
  const {title,icon, description, color, borderRadius,backgroundColor } = props
  return (
    <>
      <div className="cskh_text-1" style={{color:`${color}`}}>
        {title}
      </div>
      <a
        href="#"
        className="cskh_btn-1 display-center"
        target="_blank"
      >
        <span
          className="__cf_email__"
          data-cfemail="84e5e0e9edeac4cef1eabcbcaaf2edf4"
        >
          admin@okevip.vom
        </span>
      </a>
      <div className="cskh_text-1" style={{color:`${color}`}}>
        {description}
      </div>
    </>
  );
};

export default Jun88Note;
