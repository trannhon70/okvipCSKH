import { Button, Col, Input, Row, Spin, message } from "antd";
import { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import "./Jun41.scss";
import Jun41Logo from "../../Components/Jun41/Jun41Logo";
import Jun41note from "../../Components/Jun41/Jun41Note";
import Jun41Contact from "../../Components/Jun41/Jun41Contact";
import Jun41ContactType from "../../Components/Jun41/Jun41ContactType";
import Jun41Footer from "../../Components/Jun41/Jun41Footer";
import Jun41Menu from "../../Components/Jun41/Jun41Menu";
import { getByDomainIdJun41, upDateUIDomainJun41, uploadImageCard, uploadImageOption, uploadImgJun41, uploadImgMenuJun41 } from "../../helpers/okvip_helper";
import { useLocation } from "react-router-dom";
import appConfig from "../../config/appConfig";
import { GrFormClose } from "react-icons/gr";
import { SketchPicker } from "react-color";
import { AiOutlineDelete } from "react-icons/ai";
import { Editor } from "@tinymce/tinymce-react";
const Jun41 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const objectId = pathname.split("/").pop();
  const editorDescriptionRef = useRef(null);

  const [data, setData] = useState([]);
  const [banner, setBanner] = useState("");
  const [logo, setLogo] = useState("");
  const [logo1, setLogo1] = useState("");
  const [hidenNoteColor, setHidenNoteColor] = useState(false)
  const [stateColorNote, setStateColorNote] = useState("");
  const [hidenBgColorNote, setHidenBgColorNote] = useState(false);
  const [stateBackgroundColorNote, setStateBackgroundColorNote] = useState("");

  const [hidenColorMenu, setHidenColorMenu] =useState(false)

  const [cardBgColor,setCardBgColor] = useState({ hiden: false, index: ""});
  const [stateCardBgColor, setStateCardBgColor] = useState("")
  const [stateColorMenu, setStateColorMenu] = useState("")

  const [hidenBackgroundColorMenu, setHidenBackgroundColorMenu] =useState(false)
  const [stateBackgroundColor, setStateBackgroundColor]= useState("")
  const [hidenBgColorCityMenu, setHidenBgColorCityMenu] = useState({hiden: false, index: ""})
  const [stateBgColorCityMenu, setStateBgColorCityMenu] = useState("")

  const [stateBgColorCustormorMenu, setStateBgColorCustormorMenu] = useState("");
  const [hidenBgColorCustormorMenu, setHidenBgColorCustormorMenu] = useState({hiden :false, index: ""})

  const [logoFooter, setLogoFooter] = useState("")
  const getbyIdDomains = async () => {
    const result = await getByDomainIdJun41(objectId);
    setBanner(result?.banner?.img);
    setData(result?.data);
  };

  useEffect(() => {
    if (objectId) {
      getbyIdDomains();
    }
  }, [objectId]);

  const renderComponentByKey = (key, props) => {
    switch (key) {
      case "logo":
        return <Jun41Logo {...props} />;
      case "note":
        return <Jun41note {...props} />;
      case "contact":
        return <Jun41Contact {...props} />;
      case "contact_type":
        return <Jun41ContactType {...props} />;
      case "menu_jun41":
        return <Jun41Menu {...props} />;
      case "footer":
        return <Jun41Footer {...props} />;
      default:
        return null;
    }
  };

  const sortedData = [];

  // Duyệt qua mảng gốc và tạo một bản sao của từng đối tượng
  for (let i = 0; i < data.length; i++) {
    const originalObject = data[i];
    const clonedObject = { ...originalObject };
    // Thêm đối tượng đã sao chép vào mảng mới
    sortedData.push(clonedObject);
  }
  sortedData.sort((a, b) => a?.result?.order1 - b?.result?.order1);

  //background
  const handleBackgroundChange = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setBanner(uploadedImage);
  };

  //logo
  const handleChangeLogo = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setLogo(uploadedImage);
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "logo");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.logo = uploadedImage;
    }
    const updatedSortedData = sortedData.map((item, index) => {
      if (item?.key === "logo") {
        return {
          ...item,
          result: {
            ...item.result,
            logo: uploadedImage,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeLogo1 = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setLogo1(uploadedImage);
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "logo");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.logo1 = uploadedImage;
    }
    const updatedSortedData = sortedData.map((item, index) => {
      if (item?.key === "logo") {
        return {
          ...item,
          result: {
            ...item.result,
            logo1: uploadedImage,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeVitriLogoJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "logo");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.order1 = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "logo") {
        return {
          ...item,
          result: {
            ...item.result,
            order1: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  //note
  const handleChangeVitriNoteJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.order1 = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "note") {
        return {
          ...item,
          result: {
            ...item.result,
            order1: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeTitleNoteJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.title = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "note") {
        return {
          ...item,
          result: {
            ...item.result,
            title: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangedescriptionNoteJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.description = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "note") {
        return {
          ...item,
          result: {
            ...item.result,
            description: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeBorderNoteJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.borderRadius = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "note") {
        return {
          ...item,
          result: {
            ...item.result,
            borderRadius: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeColorNoteJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.color = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "note") {
        return {
          ...item,
          result: {
            ...item.result,
            color: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeStateColorNoteJun41 = (e) => {
    setStateColorNote({ background: e.hex });
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.color = e.hex;
    }
    const updatedSortedData = sortedData.map((item, index) => {
      if (item?.key === "note") {
        return {
          ...item,
          result: {
            ...item.result,
            color: e.hex,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeBackgroundColorNoteJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.backgroundColor = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "note") {
        return {
          ...item,
          result: {
            ...item.result,
            backgroundColor: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeCompleteNote = (e) => {
    setStateBackgroundColorNote({ background: e.hex });
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.backgroundColor = e.hex;
    }
    const updatedSortedData = sortedData.map((item, index) => {
      if (item?.key === "note") {
        return {
          ...item,
          result: {
            ...item.result,
            backgroundColor: e.hex,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  //contact
  const handleChangeOrder1ContactJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.order1 = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "contact") {
        return {
          ...item,
          result: {
            ...item.result,
            order1: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeOrderContactJun41 = (item, Contact, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contacts[ind].order = value;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact") {
        return {
          ...item,
          result: {
            ...item.result,
            contacts: item.result.contacts.map((contact, contactIdx) => {
              if (
                contact?._id === Contact?._id &&
                contact?.index === Contact?.index
              ) {
                return {
                  ...contact,
                  order: value,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeTitleContactJun41 = (item, Contact, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contacts[ind].title = value;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact") {
        return {
          ...item,
          result: {
            ...item.result,
            contacts: item.result.contacts.map((contact, contactIdx) => {
              if (
                contact?._id === Contact?._id &&
                contact?.index === Contact?.index
              ) {
                return {
                  ...contact,
                  title: value,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handlechangeLinkContactJun41 = (item, Contact, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contacts[ind].slug = value;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact") {
        return {
          ...item,
          result: {
            ...item.result,
            contacts: item.result.contacts.map((contact, contactIdx) => {
              if (
                contact?._id === Contact?._id &&
                contact?.index === Contact?.index
              ) {
                return {
                  ...contact,
                  slug: value,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeBorderRadiusContactJun41 = (item, Contact, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contacts[ind].borderRadius = value;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact") {
        return {
          ...item,
          result: {
            ...item.result,
            contacts: item.result.contacts.map((contact, contactIdx) => {
              if (
                contact?._id === Contact?._id &&
                contact?.index === Contact?.index
              ) {
                return {
                  ...contact,
                  borderRadius: value,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeIconContactJun41 =async (item,Contact,acceptedFiles,ind) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contacts[ind].icon = uploadedImage;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact") {
        return {
          ...item,
          result: {
            ...item.result,
            contacts: item.result.contacts.map((contact, contactIdx) => {
              if (
                contact?._id === Contact?._id &&
                contact?.index === Contact?.index
              ) {
                return {
                  ...contact,
                  icon: uploadedImage,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);

    const form = new FormData();
    form.append("id", item?.result?._id);
    form.append("file", uploadedImage);
    form.append("contact", Contact?._id);
    await uploadImageCard(form);
    getbyIdDomains();
  }

  const handleChangeBackgroundColorContactJun41 = (item, Contact, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contacts[ind].backgroundColor = value;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact") {
        return {
          ...item,
          result: {
            ...item.result,
            contacts: item.result.contacts.map((contact, contactIdx) => {
              if (
                contact?._id === Contact?._id &&
                contact?.index === Contact?.index
              ) {
                return {
                  ...contact,
                  backgroundColor: value,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeCompleteContactJun41 = (Contact, value, ind) => {
    setStateCardBgColor({ background: value.hex });
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contacts[ind].backgroundColor = value.hex;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact") {
        return {
          ...item,
          result: {
            ...item.result,
            contacts: item.result.contacts.map((contact, contactIdx) => {
              if (
                contact?._id === Contact?._id &&
                contact?.index === Contact?.index
              ) {
                return {
                  ...contact,
                  backgroundColor: value.hex,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleDeleteCard = async(item, value, index) => {
    const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "contact"
    );
    if (contactIndex !== -1) {
      const contactItemIndex = index; // Use the index directly
      if (contactItemIndex !== -1) {
        updatedData[contactIndex].result.contacts.splice(contactItemIndex, 1);
        setData(updatedData);
      }
    }
  }

  const AddCardF8Bet = (index, item) => {
    const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "contact"
    );
    if (contactIndex !== -1) {
      const newContact = {
        backgroundColor: "#5398b5",
        borderRadius: 15,
        color: "",
        icon: "",
        order: "",
        slug: "",
        title: "",
        index: item?.result?.contacts.length,
      }; // Create an empty object

      updatedData[contactIndex].result.contacts.push(newContact);
      setData(updatedData);
    }
  };

  //contact type
  const handleChangeOrder1ContactTypeJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter(
      (item) => item?.key === "contact_type"
    );
    if (check && check.length > 0 && check[0].result) {
      check[0].result.order1 = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "contact_type") {
        return {
          ...item,
          result: {
            ...item.result,
            order1: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeOrderContactTypeJun41 = (item,type, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact_type");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contactType[ind].order = value;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact_type") {
        return {
          ...item,
          result: {
            ...item.result,
            contactType: item.result.contactType.map((contact, contactIdx) => {
              if (contact?._id === type?._id && contact?.index=== type?.index) {
                return {
                  ...contact,
                  order: value,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeTitleContactTypeJun41 = (type, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact_type");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contactType[ind].title = value;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact_type") {
        return {
          ...item,
          result: {
            ...item.result,
            contactType: item.result.contactType.map((contact, contactIdx) => {
              if (contact?._id === type?._id && contact?.index=== type?.index) {
                return {
                  ...contact,
                  title: value,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeLinkContactTypejun41 = (type, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact_type");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contactType[ind].slug = value;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact_type") {
        return {
          ...item,
          result: {
            ...item.result,
            contactType: item.result.contactType.map((contact, contactIdx) => {
              if (contact?._id === type?._id && contact?.index=== type?.index) {
                return {
                  ...contact,
                  slug: value,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeIconContactTypejun41 = async(item ,type, acceptedFiles, ind) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact_type");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contactType[ind].img = uploadedImage;
    }
    const updatedSortedData = data.map((item) => {
      if (item?.key === "contact_type") {
        return {
          ...item,
          result: {
            ...item.result,
            contactType: item.result.contactType.map((contact, contactIdx) => {
              if (contact?._id === type?._id && contact?.index=== type?.index) {
                return {
                  ...contact,
                  img: uploadedImage,
                };
              }
              return contact;
            }),
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);

    const form = new FormData();
    form.append("id", item?.result?._id);
    form.append("file", uploadedImage);
    form.append("contactType", type?._id);
    await uploadImageOption(form);
    getbyIdDomains();
  }

  const handleDeleteContactTypeJun41 = (item, type, index) => {
    const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "contact_type"
    );
    if (contactIndex !== -1) {
      const contactItemIndex = index; // Use the index directly
      if (contactItemIndex !== -1) {
        updatedData[contactIndex].result.contactType.splice(contactItemIndex, 1);
        setData(updatedData);
      }
    }
  }

  const AddContactTypeJun41 = (item) => {
    const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "contact_type"
    );
    if (contactIndex !== -1) {
      const newContact = {
        backgroundColor: "#5398b5",
        borderRadius: 15,
        color: "",
        icon: "",
        order: "",
        slug: "",
        title: "",
        index: item?.result?.contactType.length,
      }; // Create an empty object

      updatedData[contactIndex].result.contactType.push(newContact);
      setData(updatedData);
    }
  }

  //menu component
  const handleChangetitleLinkMenuJun41 = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter(
      (item) => item?.key === "menu_jun41"
    );
    if (check && check.length > 0 && check[0].result) {
      check[0].result.menuJun.titleLink = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                titleLink :e
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeBorderMenuJun41 = (e) => {
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                borderRadius :e
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeColorMenuJun41 =(e) => {
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                color :e
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeStateColorMenuJun41 = (e) => {
    setStateColorMenu({ background: e.hex });
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                color :e.hex
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeBackgroundColorMenuJun41 =(e) => {
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                backgroundColor :e
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  } 

  const handleChangeStateBackgroundColorMenuJun41 = (e) => {
    setStateBackgroundColor({ background: e.hex });
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                backgroundColor :e.hex
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeOrderCityMenuJun41 = (item, City, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              city: item?.result?.menuJun?.city.map((cit, citInd) =>{
                if(cit?._id === City?._id && cit.index === City?.index){
                  return {
                    ...cit, order: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeTitleCityMenuJun41 = (item, City, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              city: item?.result?.menuJun?.city.map((cit, citInd) =>{
                if(cit?._id === City?._id && cit.index === City?.index){
                  return {
                    ...cit, title: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handlechangeLinkCityMenuJun41 = (item, City, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              city: item?.result?.menuJun?.city.map((cit, citInd) =>{
                if(cit?._id === City?._id && cit.index === City?.index){
                  return {
                    ...cit, slug: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeBorderRadiusCityMenuJun41 = (item, City, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              city: item?.result?.menuJun?.city.map((cit, citInd) =>{
                if(cit?._id === City?._id && cit.index === City?.index){
                  return {
                    ...cit, borderRadius: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeBackgroundColorCityJun41 = (item, City, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              city: item?.result?.menuJun?.city.map((cit, citInd) =>{
                if(cit?._id === City?._id && cit.index === City?.index){
                  return {
                    ...cit, backgroundColor: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeCompleteStaeBgColorCityMenuJun41 = (City, value, ind) => {
    setStateBgColorCityMenu({background: value.hex})
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              city: item?.result?.menuJun?.city.map((cit, citInd) =>{
                if(cit?._id === City?._id && cit.index === City?.index){
                  return {
                    ...cit, backgroundColor: value.hex
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleDeleteCardCityMenu = (item, city, index) => {
    const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "menu_jun41"
    );
    if (contactIndex !== -1) {
      const contactItemIndex = index; // Use the index directly
      if (contactItemIndex !== -1) {
        updatedData[contactIndex].result.menuJun.city.splice(contactItemIndex, 1);
        setData(updatedData);
      }
    }
  }

  const AddCardCityMenuJun41 = (index, item) => {
    const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "menu_jun41"
    );
    if (contactIndex !== -1) {
      const newContact = {
        backgroundColor: "#5398b5",
        borderRadius: 15,
        color: "",
        icon: "",
        order: "",
        slug: "",
        title: "",
        index: item?.result.menuJun.city.length,
      }; // Create an empty object

      updatedData[contactIndex].result.menuJun.city.push(newContact);
      setData(updatedData);
    }
  }

  const handleChangetitleIntroduceMenuJun41 = (e) => {
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                titleIntroduce :e
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangedescriptionIntroduceMenuJun41 = (e) => {
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                descriptionIntroduce :e
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeOrderimageIntroduceCityMenuJun41 = (item, Img, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              imageIntroduce: item?.result?.menuJun?.imageIntroduce.map((cit, citInd) =>{
                if(cit?._id === Img?._id && cit.index === Img?.index){
                  return {
                    ...cit, order: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handlechangeLinkImageIntroduceMenuJun41 = (item, Img, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              imageIntroduce: item?.result?.menuJun?.imageIntroduce.map((cit, citInd) =>{
                if(cit?._id === Img?._id && cit.index === Img?.index){
                  return {
                    ...cit, slug: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeIconImageIntroduceMenuJun41 = async( item,Img, acceptedFiles,ind) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              imageIntroduce: item?.result?.menuJun?.imageIntroduce.map((cit, citInd) =>{
                if(cit?._id === Img?._id && cit.index === Img?.index){
                  return {
                    ...cit, img: uploadedImage
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);

    const form = new FormData();
    form.append("id", item?.result?.menuJun?._id);
    form.append("file", uploadedImage);
    form.append("image", Img?._id);
    await uploadImgMenuJun41(form);
    getbyIdDomains();
  }

  const handleDeleteCardImageIntroduceMenu = (item, city, index) => {
    const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "menu_jun41"
    );
    if (contactIndex !== -1) {
      const contactItemIndex = index; // Use the index directly
      if (contactItemIndex !== -1) {
        updatedData[contactIndex].result.menuJun.imageIntroduce.splice(contactItemIndex, 1);
        setData(updatedData);
      }
    }
  }

  const AddCardImageIntroduceMenuJun41 = (index, item) => {
    const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "menu_jun41"
    );
    if (contactIndex !== -1) {
      const newContact = {
        backgroundColor: "#5398b5",
        borderRadius: 15,
        order: "",
        img: "",
        slug: "",
        index: item?.result.menuJun.imageIntroduce.length,
      }; // Create an empty object

      updatedData[contactIndex].result.menuJun.imageIntroduce.push(newContact);
      setData(updatedData);
  } }

  const handleChangeTitleNewMenuJun41 = (e) => {
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                titleNew :e
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  
  }

  const handleChangeTitleCustormorNewMenuJun41 = (e) => {
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
              menuJun: {
                ...item.result.menuJun,
                titleCustormor :e
              }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeOrderCustormorMenuJun41 = (item, Cust, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              custormor: item?.result?.menuJun?.custormor.map((cit, citInd) =>{
                if(cit?._id === Cust?._id && cit.index === Cust?.index){
                  return {
                    ...cit, order: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeTitleCustormorMenuJun41 = (item, Cust, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              custormor: item?.result?.menuJun?.custormor.map((cit, citInd) =>{
                if(cit?._id === Cust?._id && cit.index === Cust?.index){
                  return {
                    ...cit, title: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handlechangeLinkCustormorMenuJun41 = (item, Cust, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              custormor: item?.result?.menuJun?.custormor.map((cit, citInd) =>{
                if(cit?._id === Cust?._id && cit.index === Cust?.index){
                  return {
                    ...cit, slug: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeBorderRadiusCustormorMenuJun41 = (item, Cust, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              custormor: item?.result?.menuJun?.custormor.map((cit, citInd) =>{
                if(cit?._id === Cust?._id && cit.index === Cust?.index){
                  return {
                    ...cit, borderRadius: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeBackgroundColorCustormorJun41 = (item, Cust, value, ind) => {
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              custormor: item?.result?.menuJun?.custormor.map((cit, citInd) =>{
                if(cit?._id === Cust?._id && cit.index === Cust?.index){
                  return {
                    ...cit, backgroundColor: value
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeCompleteStaeBgColorCustormorMenuJun41 = ( Cust,value, ind) => {
    setStateBgColorCustormorMenu({background: value.hex})
    const updatedSortedData = data.map((item) => {
      if (item?.key === "menu_jun41") {
        return {
          ...item,
          result: {
            ...item.result,
            menuJun:{
              ...item.result.menuJun,
              custormor: item?.result?.menuJun?.custormor.map((cit, citInd) =>{
                if(cit?._id === Cust?._id && cit.index === Cust?.index){
                  return {
                    ...cit, backgroundColor: value.hex
                  }
                }
                return cit;
              })
            }
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleDeleteCardCustormorMenu = (item, city, index) => {
    const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "menu_jun41"
    );
    if (contactIndex !== -1) {
      const contactItemIndex = index; // Use the index directly
      if (contactItemIndex !== -1) {
        updatedData[contactIndex].result.menuJun.custormor.splice(contactItemIndex, 1);
        setData(updatedData);
      }
    }
}

const AddCardCustormorMenuJun41 = (index, item) => {
  const updatedData = [...data];
    const contactIndex = updatedData.findIndex(
      (item) => item.key === "menu_jun41"
    );
    if (contactIndex !== -1) {
      const newContact = {
        backgroundColor: "#5398b5",
        borderRadius: 15,
        order: "",
        title:"",
        img: "",
        slug: "",
        index: item?.result.menuJun.custormor.length,
      }; // Create an empty object

      updatedData[contactIndex].result.menuJun.custormor.push(newContact);
      setData(updatedData);
}
}

const handleChangeTitleNTMenuJun41 = (e) => {
  const updatedSortedData = data.map((item, index) => {
    if (item?.key === "menu_jun41") {
      return {
        ...item,
        result: {
          ...item.result,
            menuJun: {
              ...item.result.menuJun,
              titleNT :e
            }
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}

const handleChangeEditorDescriptionPostMenuJun41 = (value) => {
  const updatedSortedData = data.map((item, index) => {
    if (item?.key === "menu_jun41") {
      return {
        ...item,
        result: {
          ...item.result,
            postRT: {
              ...item.result.postRT,
              description :value
            }
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}

const handleChangeTitleRTMenuJun41 = (e) => {
  const updatedSortedData = data.map((item, index) => {
    if (item?.key === "menu_jun41") {
      return {
        ...item,
        result: {
          ...item.result,
            menuJun: {
              ...item.result.menuJun,
              titleRT :e
            }
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}

const handleChangeTitleQAMenuJun41 = (e) => {
  const updatedSortedData = data.map((item, index) => {
    if (item?.key === "menu_jun41") {
      return {
        ...item,
        result: {
          ...item.result,
            menuJun: {
              ...item.result.menuJun,
              titleQA :e
            }
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}

const handleChangeContentQAMenuJun41 = (e) => {
  const updatedSortedData = data.map((item, index) => {
    if (item?.key === "menu_jun41") {
      return {
        ...item,
        result: {
          ...item.result,
            menuJun: {
              ...item.result.menuJun,
              contentQA :e
            }
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}

const handleChangeDescriptionQAMenuJun41 = (e) => {
  const updatedSortedData = data.map((item, index) => {
    if (item?.key === "menu_jun41") {
      return {
        ...item,
        result: {
          ...item.result,
            menuJun: {
              ...item.result.menuJun,
              descriptionQA :e
            }
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}

//footer
const handleChangeTitleFooterJun41 = (e) => {
  const updatedSortedData = data.map((item, index) => {
    if (item?.key === "footer") {
      return {
        ...item,
        result: {
          ...item.result,
          title: e,
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}

const handleChangeOrder1FooterJun41= (e) => {
  const updatedSortedData = data.map((item, index) => {
    if (item?.key === "footer") {
      return {
        ...item,
        result: {
          ...item.result,
          order1: e,
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}

const handleChangeDescriptionFooterJun41 = (e) => {
  const updatedSortedData = data.map((item, index) => {
    if (item?.key === "footer") {
      return {
        ...item,
        result: {
          ...item.result,
          description: e,
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}

const handleChangeLogoFooterJum41 = (acceptedFiles) => {
  const file = acceptedFiles[0];
  const uploadedImage = Object.assign(file, {
    preview: URL.createObjectURL(file),
  });
  setLogoFooter(uploadedImage);
  
  const updatedSortedData = sortedData.map((item, index) => {
    if (item?.key === "footer") {
      return {
        ...item,
        result: {
          ...item.result,
          logo: uploadedImage,
        },
      };
    }
    return item;
  });
  setData(updatedSortedData);
}


  const handleUpdateUI = async() => {
    const formData = new FormData();
    formData.append("id", objectId);
    formData.append("fileLogo", logo);
    formData.append("fileLogo1", logo1);
    formData.append("background", banner);
    formData.append("logoFooter", logoFooter);
    
    formData.append("data", JSON.stringify(data));
    if (objectId) {
      const result = await upDateUIDomainJun41(formData);
      if (result?.status === 1) {
        getbyIdDomains();
        message.success("Cập nhật thành công!");
      }
    }
  }
  return (
    <>
      <Spin spinning={isLoading}>
        <div className="page-content">
          <BreadCrumb
            title="Cập nhật jun41"
            pageTitle="Pages"
            slug="pages-management"
          />
          <Row>
                <Col id="scrollY" span={12} style={{padding:'10px', overflowY:'auto', overflowX:'hidden', height:'100vh'}}>
              <Row
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col style={{ textAlign: "left" }} span={6}>
                  Jun41 background-img :
                </Col>
                <Col span={18}>
                  <input
                    style={{ display: "block" }}
                    type="file"
                    onChange={(e) => handleBackgroundChange(e.target.files)}
                    accept="image/*"
                  />
                </Col>
              </Row>
              {data.map((item, index) =>{
                if(item?.key === "logo"){
                  
                  return (
                    <Row
                        style={{ marginTop: "15px" }}
                        key={item?.result?._id}
                      >
                        <Col
                          span={24}
                          style={{ textAlign: "center", fontSize: "20px" }}
                        >
                          Jun41 Logo
                        </Col>
                        <Col style={{ textAlign: "left" }} span={2}>
                          Logo :
                        </Col>
                        <Col span={8}>
                          <input
                            style={{ display: "block" }}
                            type="file"
                            onChange={(e) => handleChangeLogo(e.target.files)}
                            accept="image/*"
                          />
                        </Col>
                        <Col style={{ textAlign: "left" }} span={2}>
                          Logo1 :
                        </Col>
                        <Col span={8}>
                          <input
                            style={{ display: "block" }}
                            type="file"
                            onChange={(e) => handleChangeLogo1(e.target.files)}
                            accept="image/*"
                          />
                        </Col>
                        <Col span={2}>Vị trí :</Col>
                        <Col span={2}>
                          <Input
                            value={item?.result?.order1}
                            onChange={(e) =>
                              handleChangeVitriLogoJun41(e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                  )
                }
                if(item?.key === "note"){
                  return (
                    <>
                        <Row>
                          <Col
                            span={24}
                            style={{ textAlign: "center", fontSize: "20px" }}
                          >
                            Jun41 Note
                          </Col>
                        </Row>

                        <Row style={{ marginTop: "15px" }}>
                          <Col style={{ textAlign: "left" }} span={3}>
                            Vị trí :
                          </Col>
                          <Col span={2}>
                            <Input
                              value={item?.result?.order1}
                              onChange={(e) =>
                                handleChangeVitriNoteJun41(e.target.value)
                              }
                            />
                          </Col>
                          <Col style={{ textAlign: "center" }} span={3}>
                            Title :
                          </Col>
                          <Col span={16}>
                            <Input
                              value={item?.result?.title}
                              onChange={(e) =>
                                handleChangeTitleNoteJun41(e.target.value)
                              }
                            />
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "15px" }}>
                          <Col style={{ textAlign: "left" }} span={3}>
                            Description :
                          </Col>
                          <Col span={21}>
                            <Input.TextArea
                              value={item?.result?.description}
                              onChange={(e) =>
                                handleChangedescriptionNoteJun41(e.target.value)
                              }
                            />
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "20px", display: "flex" }}>
                          <Col style={{ textAlign: "left" }} span={3}>
                            Border-radius :
                          </Col>
                          <Col
                            style={{ textAlign: "left", paddingRight: "10px" }}
                            span={2}
                          >
                            <Input
                              type="number"
                              value={item?.result?.borderRadius}
                              onChange={(e) =>
                                handleChangeBorderNoteJun41(e.target.value)
                              }
                            />
                          </Col>
                          <Col style={{ textAlign: "left" }} span={2}>
                    Color :
                </Col>
                <Col style={{ textAlign: "left", paddingRight:'10px' }} span={6}>
                    <Input type="text" value={item?.result?.color}
                     onChange={(e) => handleChangeColorNoteJun41(e.target.value)}
                      onClick={() => setHidenNoteColor(true)} 
                      />
                    {hidenNoteColor === true ? <div style={{position:'relative'}}>
                      <SketchPicker onChangeComplete={(e) => handleChangeStateColorNoteJun41( e)} color={stateColorNote.background} />
                      <span style={{position:'absolute' ,top:'0', left:'0px'}}><GrFormClose size={20} style={{cursor:'pointer'}} onClick={()=> setHidenNoteColor(false)} /> </span>
                    </div> : ''}
                </Col>
                          <Col style={{ textAlign: "left" }} span={4}>
                            Background-color :
                          </Col>
                          <Col style={{ textAlign: "left" }} span={7}>
                            <Input
                              value={item?.result?.backgroundColor}
                              onChange={(e) =>
                                handleChangeBackgroundColorNoteJun41(
                                  e.target.value
                                )
                              }
                              onClick={() => setHidenBgColorNote(true)}
                            />
                            {hidenBgColorNote === true ? (
                              <div style={{ position: "relative" }}>
                                <SketchPicker
                                  onChangeComplete={(e) =>
                                    handleChangeCompleteNote(e)
                                  }
                                  color={stateBackgroundColorNote.background}
                                />
                                <span
                                  style={{
                                    position: "absolute",
                                    top: "0",
                                    right: "5px",
                                  }}
                                >
                                  <GrFormClose
                                    size={20}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setHidenBgColorNote(false)}
                                  />{" "}
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                          </Col>
                        </Row>
                      </>
                  )
                }
                if(item?.key === "contact") {
                  return (
                    <>
                        <Row style={{ marginTop: "20px" }}>
                          <Col
                            span={24}
                            style={{ fontSize: "20px", textAlign: "center" }}
                          >
                            Jun41 Contacts
                          </Col>
                          <Col
                            span={4}
                            style={{ fontSize: "20px", textAlign: "left" }}
                          >
                            Vị trí :
                          </Col>
                          <Col span={4}>
                            <Input
                              value={item?.result?.order1}
                              onChange={(e) =>
                                handleChangeOrder1ContactJun41(e.target.value)
                              }
                            />
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "15px" }}>
                          {item?.result?.contacts &&
                            item?.result?.contacts.map((contact, ind) => {
                              return (
                                <Col
                                  span={12}
                                  style={{ padding: "5px" }}
                                  key={ind}
                                >
                                  <div
                                    style={{
                                      border: "1px solid #d9d9d9",
                                      padding: "10px",
                                      borderRadius: "10px",
                                    }}
                                  >
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        Vị trí :
                                      </Col>
                                      <Col span={15}>
                                        <Input
                                          type="number"
                                          value={contact?.order}
                                          onChange={(e) =>
                                            handleChangeOrderContactJun41(
                                              item,
                                              contact,
                                              Number(e.target.value),
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                      <Col span={4}>
                                        <AiOutlineDelete
                                          size={20}
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            handleDeleteCard(item, contact, ind)
                                          }
                                        />
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        Title :
                                      </Col>
                                      <Col span={19}>
                                        <Input
                                          value={contact?.title}
                                          onChange={(e) =>
                                            handleChangeTitleContactJun41(
                                              item,
                                              contact,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        link :
                                      </Col>
                                      <Col span={19}>
                                        <Input
                                          value={contact?.slug}
                                          onChange={(e) =>
                                            handlechangeLinkContactJun41(
                                              item,
                                              contact,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                    </Row>

                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={10}
                                        style={{ textAlign: "left" }}
                                      >
                                        Border-radius :
                                      </Col>
                                      <Col span={14}>
                                        <Input
                                          value={contact?.borderRadius}
                                          onChange={(e) =>
                                            handleChangeBorderRadiusContactJun41(
                                              item,
                                              contact,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                          type="number"
                                        />{" "}
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        Icon :
                                      </Col>
                                      <Col span={19}>
                                        <input
                                          style={{ display: "block" }}
                                          type="file"
                                          onChange={(e) =>
                                            handleChangeIconContactJun41(
                                              item,
                                              contact,
                                              e.target.files,
                                              ind
                                            )
                                          }
                                          accept="image/*"
                                        />{" "}
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={10}
                                        style={{ textAlign: "left" }}
                                      >
                                        Background-color :
                                      </Col>
                                      <Col span={14}>
                                        <Input
                                          onClick={() =>
                                            setCardBgColor({
                                              hiden: true,
                                              index: ind,
                                            })
                                          }
                                          value={contact?.backgroundColor}
                                          onChange={(e) =>
                                            handleChangeBackgroundColorContactJun41(
                                              item,
                                              contact,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />
                                        {cardBgColor.hiden === true &&
                                        cardBgColor.index === ind ? (
                                          <div style={{ position: "relative" }}>
                                            <SketchPicker
                                              onChangeComplete={(e) =>
                                                handleChangeCompleteContactJun41(
                                                  contact,
                                                  e,
                                                  ind
                                                )
                                              }
                                              color={stateCardBgColor.background}
                                            />
                                            <span
                                              style={{
                                                position: "absolute",
                                                top: "0",
                                                right: "-7px",
                                              }}
                                            >
                                              {" "}
                                              <GrFormClose
                                                style={{ cursor: "pointer" }}
                                                size={20}
                                                onClick={() =>
                                                  setCardBgColor({
                                                    hiden: false,
                                                    index: index,
                                                  })
                                                }
                                              />{" "}
                                            </span>
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                              );
                            })}
                          <Col
                            span={24}
                            style={{ padding: "10px", textAlign: "center" }}
                          >
                            <Button onClick={(e) => AddCardF8Bet(index, item)}>
                              Add Card
                            </Button>
                          </Col>
                        </Row>
                      </>
                  )
                }
                if(item?.key === "contact_type"){
                  return (
                    <>
                        <Row style={{ marginTop: "10px" }}>
                          <Col
                            span={24}
                            style={{ fontSize: "20px", textAlign: "center" }}
                          >
                           Contact Type Jun41
                          </Col>
                          <Col
                            span={4}
                            style={{ fontSize: "20px", textAlign: "left" }}
                          >
                            Vị trí :
                          </Col>
                          <Col span={4}>
                            <Input
                              value={item?.result?.order1}
                              onChange={(e) =>
                                handleChangeOrder1ContactTypeJun41(e.target.value)
                              }
                            />
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "15px" }}>
                        {item?.result?.contactType &&
                          item?.result?.contactType.map((type, ind) => {
                            return (
                              <Col
                                span={8}
                                style={{ padding: "5px" }}
                                key={ind}
                              >
                                <div
                                  style={{
                                    border: "1px solid #d9d9d9",
                                    padding: "10px",
                                    borderRadius: "10px",
                                  }}
                                >
                                  <Row
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Col span={5} style={{ textAlign: "left" }}>
                                      Vị trí :
                                    </Col>
                                    <Col span={15}>
                                      <Input
                                        value={type?.order}
                                        onChange={(e) =>
                                          handleChangeOrderContactTypeJun41(
                                            item,
                                            type,
                                            Number(e.target.value),
                                            ind
                                          )
                                        }
                                      />{" "}
                                    </Col>
                                    <Col span={4}>
                                      <AiOutlineDelete
                                        size={20}
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          handleDeleteContactTypeJun41(item, type, ind)
                                        }
                                      />
                                    </Col>
                                  </Row>
                                  <Row
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginTop: "15px",
                                    }}
                                  >
                                    <Col span={5} style={{ textAlign: "left" }}>
                                      Title :
                                    </Col>
                                    <Col span={19}>
                                      <Input
                                        value={type?.title}
                                        onChange={(e) =>
                                          handleChangeTitleContactTypeJun41(
                                            type, e.target.value, ind
                                          )
                                        }
                                      />{" "}
                                    </Col>
                                  </Row>
                                  <Row
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginTop: "15px",
                                    }}
                                  >
                                    <Col span={5} style={{ textAlign: "left" }}>
                                      Link :
                                    </Col>
                                    <Col span={19}>
                                      <Input
                                        value={type?.slug}
                                        onChange={(e) =>
                                          handleChangeLinkContactTypejun41(
                                            type, e.target.value, ind
                                          )
                                        }
                                      />{" "}
                                    </Col>
                                  </Row>
                                  <Row
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginTop: "15px",
                                    }}
                                  >
                                    <Col span={5} style={{ textAlign: "left" }}>
                                      Icon :
                                    </Col>
                                    <Col span={19}>
                                      <input
                                        style={{ display: "block" }}
                                        type="file"
                                        onChange={(e) =>
                                          handleChangeIconContactTypejun41(
                                            item,
                                            type,
                                            e.target.files,
                                            ind
                                          )
                                        }
                                        accept="image/*"
                                      />{" "}
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            );
                          })}
                        <Col span={24} style={{ padding: "10px", textAlign:'center' }}>
                          <Button onClick={(e) => AddContactTypeJun41(item)}>Add Card</Button>
                        </Col>
                      </Row>
                      </>
                  )
                }
                if(item?.key === "menu_jun41"){
                  return (
                    <>
                      <Row style={{ marginTop: "10px" }}>
                          <Col
                            span={24}
                            style={{ fontSize: "20px", textAlign: "center" }}
                          >
                           Menu Component
                          </Col>
                          
                        </Row>
                        <Row style={{ marginTop: "15px" }}>
                          <Col span={3}>Title Link :</Col>
                          <Col span={21}><Input value={item?.result?.menuJun?.titleLink} onChange={(e) => handleChangetitleLinkMenuJun41(e.target.value)} /></Col>
                        </Row>
                        <Row style={{ marginTop: "15px" }}>
                          <Col span={3}>borderRadius :</Col>
                          <Col span={2}><Input value={item?.result?.menuJun?.borderRadius} onChange={(e) => handleChangeBorderMenuJun41(e.target.value)} /></Col>
                          <Col span={3} style={{textAlign:'center'}}>Color :</Col>
                          <Col span={6}>
                            <Input 
                            value={item?.result?.menuJun?.color} 
                            onChange={(e) => handleChangeColorMenuJun41(e.target.value)} 
                            onClick={() => setHidenColorMenu(true)}
                            />
                            {
                              hidenColorMenu === true ? <div style={{position:'relative'}}>
                              <SketchPicker 
                              onChangeComplete={(e) => handleChangeStateColorMenuJun41( e)} 
                              color={stateColorMenu.background} 
                              />
                              <span style={{position:'absolute' ,top:'0', left:'0px'}}><GrFormClose size={20} style={{cursor:'pointer'}} onClick={()=> setHidenColorMenu(false)} /> </span>
                            </div> : ''
                            }
                            
                          </Col>
                          <Col span={4} style={{textAlign:'center'}}>BackgroundColor :</Col>
                          <Col span={6}>
                            <Input 
                            value={item?.result?.menuJun?.backgroundColor} 
                            onChange={(e)=> handleChangeBackgroundColorMenuJun41(e.target.value)}
                            onClick={() => setHidenBackgroundColorMenu(true)}
                            />
                            {
                              hidenBackgroundColorMenu === true ? <div style={{position:'relative'}}>
                              <SketchPicker 
                              onChangeComplete={(e) => handleChangeStateBackgroundColorMenuJun41( e)} 
                              color={stateBackgroundColor.background} 
                              />
                              <span style={{position:'absolute' ,top:'0', left:'0px'}}><GrFormClose size={20} style={{cursor:'pointer'}} onClick={()=> setHidenBackgroundColorMenu(false)} /> </span>
                            </div> : ''
                            }
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "15px" }}>
                          {
                            item?.result?.menuJun?.city &&
                            item?.result?.menuJun?.city.map((city, ind) => {
                                return (
                                  <Col
                                  span={12}
                                  style={{ padding: "5px" }}
                                  key={ind}
                                >
                                  <div
                                    style={{
                                      border: "1px solid #d9d9d9",
                                      padding: "10px",
                                      borderRadius: "10px",
                                    }}
                                  >
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        Vị trí :
                                      </Col>
                                      <Col span={15}>
                                        <Input
                                          type="number"
                                          value={city?.order}
                                          onChange={(e) =>
                                            handleChangeOrderCityMenuJun41(
                                              item,
                                              city,
                                              Number(e.target.value),
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                      <Col span={4}>
                                        <AiOutlineDelete
                                          size={20}
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            handleDeleteCardCityMenu(item, city, ind)
                                          }
                                        />
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        Title :
                                      </Col>
                                      <Col span={19}>
                                        <Input
                                          value={city?.title}
                                          onChange={(e) =>
                                            handleChangeTitleCityMenuJun41(
                                              item,
                                              city,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        link :
                                      </Col>
                                      <Col span={19}>
                                        <Input
                                          value={city?.slug}
                                          onChange={(e) =>
                                            handlechangeLinkCityMenuJun41(
                                              item,
                                              city,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                    </Row>

                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={10}
                                        style={{ textAlign: "left" }}
                                      >
                                        Border-radius :
                                      </Col>
                                      <Col span={14}>
                                        <Input
                                          value={city?.borderRadius}
                                          onChange={(e) =>
                                            handleChangeBorderRadiusCityMenuJun41(
                                              item,
                                              city,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                          type="number"
                                        />{" "}
                                      </Col>
                                    </Row>
                                    
                                    <Row
                                      style={{
                                        display: "flex",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={10}
                                        style={{ textAlign: "left" }}
                                      >
                                        Background-color :
                                      </Col>
                                      <Col span={14}>
                                        <Input
                                          onClick={() =>
                                            setHidenBgColorCityMenu({
                                              hiden: true,
                                              index: ind,
                                            })
                                          }
                                          value={city?.backgroundColor}
                                          onChange={(e) =>
                                            handleChangeBackgroundColorCityJun41(
                                              item,
                                              city,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />
                                        {hidenBgColorCityMenu.hiden === true &&
                                        hidenBgColorCityMenu.index === ind ? (
                                          <div style={{ position: "relative" }}>
                                            <SketchPicker
                                              onChangeComplete={(e) =>
                                                handleChangeCompleteStaeBgColorCityMenuJun41(
                                                  city,
                                                  e,
                                                  ind
                                                )
                                              }
                                              color={stateBgColorCityMenu.background}
                                            />
                                            <span
                                              style={{
                                                position: "absolute",
                                                top: "0",
                                                right: "-7px",
                                              }}
                                            >
                                              {" "}
                                              <GrFormClose
                                                style={{ cursor: "pointer" }}
                                                size={20}
                                                onClick={() =>
                                                  setHidenBgColorCityMenu({
                                                    hiden: false,
                                                    index: index,
                                                  })
                                                }
                                              />{" "}
                                            </span>
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                                )
                            })
                          }
                          <Col
                            span={24}
                            style={{ padding: "10px", textAlign: "center" }}
                          >
                            <Button onClick={(e) => AddCardCityMenuJun41(index, item)}>
                              Add Card
                            </Button>
                          </Col>
                        </Row>
                        <Row style={{marginTop:'15px'}}>
                          <Col span={3}>Title giới thiệu :</Col>
                          <Col span={21}><Input value={item?.result?.menuJun?.titleIntroduce} onChange={(e) => handleChangetitleIntroduceMenuJun41(e.target.value)} /></Col>
                        </Row>
                        <Row style={{marginTop:'15px'}}>
                          <Col span={3}>description giới thiệu :</Col>
                          <Col span={21}><Input.TextArea value={item?.result?.menuJun?.descriptionIntroduce} onChange={(e) => handleChangedescriptionIntroduceMenuJun41(e.target.value)} /></Col>
                        </Row>
                        <Row style={{marginTop:'15px'}}> 
                          {
                            item?.result?.menuJun?.imageIntroduce &&
                            item?.result?.menuJun?.imageIntroduce.map((img, ind) => {
                              return (
                                <Col
                                  span={8}
                                  style={{ padding: "5px" }}
                                  key={ind}
                                >
                                  <div
                                    style={{
                                      border: "1px solid #d9d9d9",
                                      padding: "10px",
                                      borderRadius: "10px",
                                    }}
                                  >
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        Vị trí :
                                      </Col>
                                      <Col span={15}>
                                        <Input
                                          type="number"
                                          value={img?.order}
                                          onChange={(e) =>
                                            handleChangeOrderimageIntroduceCityMenuJun41(
                                              item,
                                              img,
                                              Number(e.target.value),
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                      <Col span={4}>
                                        <AiOutlineDelete
                                          size={20}
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            handleDeleteCardImageIntroduceMenu(item, img, ind)
                                          }
                                        />
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        link :
                                      </Col>
                                      <Col span={19}>
                                        <Input
                                          value={img?.slug}
                                          onChange={(e) =>
                                            handlechangeLinkImageIntroduceMenuJun41(
                                              item,
                                              img,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        Icon :
                                      </Col>
                                      <Col span={19}>
                                        <input
                                          style={{ display: "block" }}
                                          type="file"
                                          onChange={(e) =>
                                            handleChangeIconImageIntroduceMenuJun41(
                                              item,
                                              img,
                                              e.target.files,
                                              ind
                                            )
                                          }
                                          accept="image/*"
                                        />{" "}
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                              )
                            })
                          }
                        </Row>
                        <Col
                            span={24}
                            style={{ padding: "10px", textAlign: "center" }}
                          >
                            <Button onClick={(e) => AddCardImageIntroduceMenuJun41(index, item)}>
                              Add Card
                            </Button>
                          </Col>
                          <Row style={{marginTop:'15px'}}>
                          <Col span={3}>Title news :</Col>
                          <Col span={21}><Input value={item?.result?.menuJun?.titleNew} onChange={(e) => handleChangeTitleNewMenuJun41(e.target.value)} /></Col>
                        </Row>
                        <Row style={{marginTop:'15px'}}>
                          <Col span={3}>Title Thông tin :</Col>
                          <Col span={21}><Input value={item?.result?.menuJun?.titleCustormor} onChange={(e) => handleChangeTitleCustormorNewMenuJun41(e.target.value)} /></Col>
                        </Row>
                        <Row style={{ marginTop: "15px" }}>
                          {
                            item?.result?.menuJun?.custormor &&
                            item?.result?.menuJun?.custormor.map((cust, ind) => {
                                return (
                                  <Col
                                  span={12}
                                  style={{ padding: "5px" }}
                                  key={ind}
                                >
                                  <div
                                    style={{
                                      border: "1px solid #d9d9d9",
                                      padding: "10px",
                                      borderRadius: "10px",
                                    }}
                                  >
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        Vị trí :
                                      </Col>
                                      <Col span={15}>
                                        <Input
                                          type="number"
                                          value={cust?.order}
                                          onChange={(e) =>
                                            handleChangeOrderCustormorMenuJun41(
                                              item,
                                              cust,
                                              Number(e.target.value),
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                      <Col span={4}>
                                        <AiOutlineDelete
                                          size={20}
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            handleDeleteCardCustormorMenu(item, cust, ind)
                                          }
                                        />
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        Title :
                                      </Col>
                                      <Col span={19}>
                                        <Input
                                          value={cust?.title}
                                          onChange={(e) =>
                                            handleChangeTitleCustormorMenuJun41(
                                              item,
                                              cust,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                    </Row>
                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={5}
                                        style={{ textAlign: "left" }}
                                      >
                                        link :
                                      </Col>
                                      <Col span={19}>
                                        <Input
                                          value={cust?.slug}
                                          onChange={(e) =>
                                            handlechangeLinkCustormorMenuJun41(
                                              item,
                                              cust,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />{" "}
                                      </Col>
                                    </Row>

                                    <Row
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={10}
                                        style={{ textAlign: "left" }}
                                      >
                                        Border-radius :
                                      </Col>
                                      <Col span={14}>
                                        <Input
                                          value={cust?.borderRadius}
                                          onChange={(e) =>
                                            handleChangeBorderRadiusCustormorMenuJun41(
                                              item,
                                              cust,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                          type="number"
                                        />{" "}
                                      </Col>
                                    </Row>
                                    
                                    <Row
                                      style={{
                                        display: "flex",
                                        marginTop: "15px",
                                      }}
                                    >
                                      <Col
                                        span={10}
                                        style={{ textAlign: "left" }}
                                      >
                                        Background-color :
                                      </Col>
                                      <Col span={14}>
                                        <Input
                                          onClick={() =>
                                            setHidenBgColorCustormorMenu({
                                              hiden: true,
                                              index: ind,
                                            })
                                          }
                                          value={cust?.backgroundColor}
                                          onChange={(e) =>
                                            handleChangeBackgroundColorCustormorJun41(
                                              item,
                                              cust,
                                              e.target.value,
                                              ind
                                            )
                                          }
                                        />
                                        {hidenBgColorCustormorMenu.hiden === true &&
                                        hidenBgColorCustormorMenu.index === ind ? (
                                          <div style={{ position: "relative" }}>
                                            <SketchPicker
                                              onChangeComplete={(e) =>
                                                handleChangeCompleteStaeBgColorCustormorMenuJun41(
                                                  cust,
                                                  e,
                                                  ind
                                                )
                                              }
                                              color={stateBgColorCustormorMenu.background}
                                            />
                                            <span
                                              style={{
                                                position: "absolute",
                                                top: "0",
                                                right: "-7px",
                                              }}
                                            >
                                              {" "}
                                              <GrFormClose
                                                style={{ cursor: "pointer" }}
                                                size={20}
                                                onClick={() =>
                                                  setHidenBgColorCustormorMenu({
                                                    hiden: false,
                                                    index: index,
                                                  })
                                                }
                                              />{" "}
                                            </span>
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                                )
                            })
                          }
                          <Col
                            span={24}
                            style={{ padding: "10px", textAlign: "center" }}
                          >
                            <Button onClick={(e) => AddCardCustormorMenuJun41(index, item)}>
                              Add Card
                            </Button>
                          </Col>
                        </Row>
                        <Row style={{marginTop:'15px'}}>
                          <Col span={3}>Title Nạp tiền :</Col>
                          <Col span={21}><Input value={item?.result?.menuJun?.titleNT} onChange={(e) => handleChangeTitleNTMenuJun41(e.target.value)} /></Col>
                        </Row>
                        <Row style={{marginTop:'15px'}}>
                          <Col span={3}>Title Rút tiền :</Col>
                          <Col span={21}><Input value={item?.result?.menuJun?.titleRT} onChange={(e) => handleChangeTitleRTMenuJun41(e.target.value)} /></Col>
                        </Row>  
                        <Row style={{marginTop:'15px'}}>
                          <Col span={24}>
                          <Editor
                        apiKey={
                          "w17lpon88s3owkb87t8wnmyrb7dnvziqf3mrghzfk7ft8cpl"
                        }
                        onInit={(evt, editor) =>
                          (editorDescriptionRef.current = editor)
                        }
                        onEditorChange={handleChangeEditorDescriptionPostMenuJun41}
                        value={item?.result?.postRT?.description || ""}
                        init={{
                          height: 200,
                          menubar: false,
                          file_picker_callback: function (cb, value, meta) {
                            var input = document.createElement("input");
                            input.setAttribute("type", "file");
                            input.setAttribute("accept", "image/*");
                            input.onchange = function () {
                              var file = this.files[0];

                              var reader = new FileReader();
                              reader.onload = function () {
                                var id = "blobid1" + new Date().getTime();
                                var blobCache =
                                  editorDescriptionRef.current.editorUpload
                                    .blobCache;
                                var base64 = reader.result.split(",")[1];
                                var blobInfo = blobCache.create(
                                  id,
                                  file,
                                  base64
                                );
                                blobCache.add(blobInfo);

                                /* call the callback and populate the Title field with the file name */
                                cb(blobInfo.blobUri(), { title: file.name });
                              };
                              reader.readAsDataURL(file);
                            };
                            input.click();
                          },
                          paste_data_images: true,
                          image_title: true,
                          automatic_uploads: true,
                          file_picker_types: "image",
                          plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "image",
                          ],
                          toolbar:
                            "undo redo | blocks | " +
                            "bold italic forecolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | link image | code",
                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
                          </Col>
                        </Row>  
                        <Row style={{marginTop:'15px'}}>
                          <Col span={3}>Title Hỏi đáp :</Col>
                          <Col span={21}><Input value={item?.result?.menuJun?.titleQA} onChange={(e) => handleChangeTitleQAMenuJun41(e.target.value)} /></Col>
                        </Row>
                        <Row style={{marginTop:'15px'}}>
                          <Col span={3}>Content Hỏi đáp :</Col>
                          <Col span={21}><Input value={item?.result?.menuJun?.contentQA} onChange={(e) => handleChangeContentQAMenuJun41(e.target.value)} /></Col>
                        </Row>
                        <Row style={{marginTop:'15px'}}>
                          <Col span={3}>Description Hỏi đáp :</Col>
                          <Col span={21}><Input.TextArea value={item?.result?.menuJun?.descriptionQA} onChange={(e) => handleChangeDescriptionQAMenuJun41(e.target.value)} /></Col>
                        </Row>  
                    </>
                  )
                }
                if(item?.key === "footer"){
                  return (
                    <>
                    <Row
                    style={{ marginTop: "15px" }}
                  >
                    <Col span={24} style={{fontSize:'20px', textAlign:'center'}}>Footer</Col>
                   
                  </Row>
                   <Row style={{ marginTop: "15px" }}>
                   <Col span={3}> Vị trí : </Col>
                   <Col span={21}> <Input value={item?.result?.order1} onChange={(e) => handleChangeOrder1FooterJun41(e.target.value)} /></Col>
                   
                 </Row>
                 <Row style={{ marginTop: "15px" }}>
                 <Col span={3}> Title : </Col>
                   <Col span={21}> <Input value={item?.result?.title} onChange={(e) => handleChangeTitleFooterJun41(e.target.value)} /></Col>
                 </Row>
                 <Row style={{ marginTop: "15px" }}>
                 <Col span={3}> Description : </Col>
                   <Col span={21}> <Input.TextArea value={item?.result?.description} onChange={(e) => handleChangeDescriptionFooterJun41(e.target.value)} /></Col>
                 </Row>
                 <Row style={{marginTop:'15px'}}>
                 <Col style={{ textAlign: "left" }} span={2}>
                          Logo :
                        </Col>
                        <Col span={8}>
                          <input
                            style={{ display: "block" }}
                            type="file"
                            onChange={(e) => handleChangeLogoFooterJum41(e.target.files)}
                            accept="image/*"
                          />
                        </Col>
                 </Row>
                 </>
                  )
                }
              })}
            </Col>
            <Col span={12}>
              <div
                style={{
                  backgroundImage: `url(${banner?.preview ? banner?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${banner}` })`,
                }}
              >
                <div id="mobile" style={{ textAlign: "center", width: "100%" }}>
                  <div
                    id="scrollY"
                    className="container mobile"
                    style={{ display: "inline-block", overflowX: "hidden" }}
                  >
                     {sortedData.map((item, index) => {
                      return renderComponentByKey(item?.key, item?.result);
                    })}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }}>
            <Col span={24} style={{ textAlign: "center" }}>
              <Button type="primary" onClick={handleUpdateUI}>
                Cập nhật
              </Button>
            </Col>
          </Row>
        </div>
      </Spin>
    </>
  );
};

export default Jun41;
