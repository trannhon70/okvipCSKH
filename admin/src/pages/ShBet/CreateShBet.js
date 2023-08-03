import { Button, Col, Input, Popconfirm, Row, Spin, message } from "antd";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { useEffect, useState } from "react";
import "./CreateShBet.scss";
import { SketchPicker } from "react-color";
import ShbetLogo from "../../Components/ShBet/ShbetLogo";
import ShbetNote from "../../Components/ShBet/ShbetNote";
import ShbetCard from "../../Components/ShBet/ShbetCart";
import ShbetOption from "../../Components/ShBet/shbetOption";
import ShbetTitleVip from "../../Components/ShBet/shbetTitleVip";
import {
  deleteCardContacts,
  deleteCardOption,
  getbyIdDomain,
  upDateUIDomain,
  uploadImageCard,
  uploadImageOption,
} from "../../helpers/okvip_helper";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import appConfig from "../../config/appConfig";
import { AiOutlineDelete } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

const acceptFileType = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "application/pdf",
  "image/jpeg",
  "image/png",
];

const ShBet = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const objectId = pathname.split("/").pop();
  const [isLoading, setIsLoading] = useState(false);
  const [shbetLogo, setShbetLogo] = useState("");

  //state note
  const [noteLogo, setNoteLogo] = useState("");
  const [notehiden, setNoteHiden] = useState(false);
  const [stateColorNote, setStateColorNote] = useState("");

  // state Card
  const [cardColor, setCardColor] = useState({ hiden: false, index: "" });
  const [stateColor, setStateColor] = useState("");
  //state Option
  const [optionColor, setOptionColor] = useState({ hiden: false, index: "" });
  const [optionStateColor, setOptionStateColor] = useState("");

  //state Footer
  const [stateFooterBg, setStateFooterBg] = useState("")
  const [hidenFooterBg, setHidenFooterBg] = useState(false)

  //background Image
  const [background, setBackground] = useState("");

  const [data, setData] = useState([]);

  //logo
  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setShbetLogo(uploadedImage);
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
  };

  const onchangeViTriLogoShBet = (e) => {
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
  };

  //shbet note
  const handleNoteLogo = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setNoteLogo(uploadedImage)
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.icon = uploadedImage;
    }
    const updatedSortedData = sortedData.map((item, index) => {
      if (item?.key === "note") {
        return {
          ...item,
          result: {
            ...item.result,
            icon: uploadedImage,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  };

  const handleChangeNoteShber = (e) => {
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.title = e;
    }
    const updatedSortedData = sortedData.map((item, index) => {
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
  };

  const handleChangeVitriNotShBet = (e) => {
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
  };

  const handleChangeContentNoteShber = (e) => {
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.description = e;
    }
    const updatedSortedData = sortedData.map((item, index) => {
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
  };

  const handleChangeBoderRadiusNoteShbet = (e) => {
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.borderRadius = e;
    }
    const updatedSortedData = sortedData.map((item, index) => {
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
  };

  const handleChangeBgColorNoteShbet = (e) => {
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "note");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.backgroundColor = e;
    }
    const updatedSortedData = sortedData.map((item, index) => {
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
  };

  const handleChangeCompleteNote = (e) => {
    setStateColorNote({ background: e.hex });
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
  };

  //shbet Card
  const handleChangeOrder1CardShbet = (e) => {
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
  };

  const handleCardIndexChange = (item, Contact, value, ind) => {
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
              if (contact?._id === Contact?._id && contact?.index=== Contact?.index) {
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
  };

  const handleCardTitleChange = (item, Contact, value, ind) => {
  

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
              
              if (contact?._id === Contact?._id && contact?.index=== Contact?.index) {
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
  };

  const handleCardLinkChange = (item, Contact, value, ind) => {
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
              if (contact?._id === Contact?._id && contact?.index=== Contact?.index) {
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
  };

  const handleCardBg = (item, Contact, value, ind) => {
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
              if (contact?._id === Contact?._id && contact?.index=== Contact?.index) {
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
  };

  const handleCarBorder = (item, Contact, value, ind) => {
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
              if (contact?._id === Contact?._id && contact?.index=== Contact?.index) {
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
  };

  const handleCarIcon = async (item, Contact, acceptedFiles, ind) => {
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
              if (contact?._id === Contact?._id && contact?.index=== Contact?.index) {
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
  };

  const handleDeleteCard = async (item, value, index) => {
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
    // if (value?._id) {
    //   const result = await deleteCardContacts(value?._id);
    //   if (result.status === 1) {
    //     message.success("Xóa thành công!");
    //     getbyIdDomains();
    //   }
    // }
  };

  const AddCardShbet = (index, item) => {
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

  const handleChangeComplete = (Contact, value, ind) => {
    setStateColor({ background: value.hex });
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
              if (contact?._id === Contact?._id && contact?.index=== Contact?.index) {
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
  };

  //shbet option
  const handleChangeOrder1OptionShbet = (e) => {
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
  };

  const handleChangeCompleteOption = (type, value, ind) => {
    setOptionStateColor({ background: value.hex });
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact_type");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contactType[ind].backgroundColor = value.hex;
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
  };

  const handleOptionIndexChange = ( item,type, value, ind) => {
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
  };

  const handleOptionTitleChange = (type, value, ind) => {
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
  };

  const handleOptionLinkChange = (type, value, ind) => {
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
  };

  const handleOptionBg = (type, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact_type");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contactType[ind].backgroundColor = value;
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
  };

  const handleOptionBorder = (type, value, ind) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "contact_type");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.contactType[ind].borderRadius = value;
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
  };

  const handleOptionIcon = async (item ,type, acceptedFiles, ind) => {
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
  };

  const AddOptionShbet = (item) => {
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
  };

  const handleBackgroundChange = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setBackground(uploadedImage);
  };

  const getbyIdDomains = async () => {
    const result = await getbyIdDomain(objectId);
    setBackground(result?.banner.img);
    setData(result?.data);
  };

  const renderComponentByKey = (key, props) => {
    switch (key) {
      case "logo":
        return <ShbetLogo {...props} />;
      case "note":
        return <ShbetNote {...props} />;
      case "contact":
        return <ShbetCard {...props} />;
      case "contact_type":
        return <ShbetOption {...props} />;
      case "footer":
        return <ShbetTitleVip {...props} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (objectId) {
      getbyIdDomains();
    }
  }, [objectId]);

  const handleUpdateUI = async () => {
    const formData = new FormData();
    formData.append("id", objectId);
    formData.append("fileLogo", shbetLogo);
    formData.append("background", background);
    formData.append("noteLogo", noteLogo);
    
    formData.append("data", JSON.stringify(data));
    // formData.append("dataOption", JSON.stringify(dataOption));
    if (objectId) {
      const result = await upDateUIDomain(formData);
      if (result?.status === 1) {
        getbyIdDomains();
        message.success("Cập nhật thành công!");
      }
    }
  };

  const handleDeleteOption = async (item, type, index) => {
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
    // if (value?._id) {
    //   const result = await deleteCardOption(value?._id);
    //   if (result.status === 1) {
    //     message.success("Xóa thành công!");
    //     getbyIdDomains();
    //   }
    // } 
  };

  // footer 
  const handleChangeOrder1FooterShbet = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "footer");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.order1 = e;
    }
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
  const handleChangeUrrlFooterShbet = (e) => {
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "footer");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.slug = e;
    }
    const updatedSortedData = sortedData.map((item, index) => {
      if (item?.key === "footer") {
        return {
          ...item,
          result: {
            ...item.result,
            slug: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  }

  const handleChangeTitleFooterShbet = (e) => {
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "footer");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.title = e;
    }
    const updatedSortedData = sortedData.map((item, index) => {
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

  const handleChangeDescriptionFooterShbet = (e) => {
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "footer");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.description = e;
    }
    const updatedSortedData = sortedData.map((item, index) => {
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

  const handleChangeBorderFooterSHbet = (e) => {
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "footer");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.borderRadius = e;
    }
    const updatedSortedData = sortedData.map((item, index) => {
      if (item?.key === "footer") {
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

  const handleChangeBgColorFooterShbet = (e) => {
    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "footer");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.backgroundColor = e;
    }
    const updatedSortedData = sortedData.map((item, index) => {
      if (item?.key === "footer") {
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

  const handleChangeCompleteBgFooter = (e) => {
    setStateFooterBg({ background: e.hex });

    const updatedDataCard = [...sortedData];
    const check = updatedDataCard?.filter((item) => item?.key === "footer");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.backgroundColor = e.hex;
    }
    const updatedSortedData = sortedData.map((item, index) => {
      if (item?.key === "footer") {
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

  const sortedData = [];

  // Duyệt qua mảng gốc và tạo một bản sao của từng đối tượng
  for (let i = 0; i < data.length; i++) {
    const originalObject = data[i];
    const clonedObject = { ...originalObject };
    // Thêm đối tượng đã sao chép vào mảng mới
    sortedData.push(clonedObject);
  }
  sortedData.sort((a, b) => a?.result?.order1 - b?.result?.order1);
  return (
    <>
      <Spin spinning={isLoading}>
        <div className="page-content">
          <BreadCrumb
            title="Cập nhật Shbet"
            pageTitle="Pages"
            slug="pages-management"
          />
          <Row>
            <Col
              span={12}
              style={{ textAlign: "center", paddingRight: "10px" }}
            >
              <Row
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col style={{ textAlign: "left" }} span={6}>
                  ShBet background-img :
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

              {data.map((item, index) => {
                if (item.key === "logo") {
                  return (
                    <>
                      <Row style={{ marginTop: "15px" }}>
                        <Col style={{ textAlign: "left" }} span={3}>
                          ShBet logo :
                        </Col>
                        <Col span={9}>
                          <input
                            style={{ display: "block" }}
                            type="file"
                            onChange={(e) => handleDrop(e.target.files)}
                            accept="image/*"
                          />
                        </Col>
                        <Col style={{ textAlign: "left" }} span={3}>
                          Vị trí :
                        </Col>
                        <Col span={5}>
                          <Input
                            type="number"
                            value={item?.result?.order1}
                            onChange={(e) =>
                              onchangeViTriLogoShBet(e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                    </>
                  );
                }
                if (item?.key === "note") {
                  return (
                    <>
                      <Row style={{ marginTop: "20px" }}>
                        <Col span={24} style={{ fontSize: "20px" }}>
                          ShBet note
                        </Col>
                      </Row>
                      <Row
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Col style={{ textAlign: "left" }} span={3}>
                          Logo :
                        </Col>
                        <Col style={{ textAlign: "left" }} span={9}>
                          <input
                            style={{ display: "block" }}
                            type="file"
                            onChange={(e) => handleNoteLogo(e.target.files)}
                            accept="image/*"
                          />
                        </Col>
                        <Col style={{ textAlign: "left" }} span={3}>
                          Vị trí :
                        </Col>
                        <Col style={{ textAlign: "left" }} span={5}>
                          <Input
                            value={item?.result?.order1}
                            onChange={(e) =>
                              handleChangeVitriNotShBet(e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                      <Row
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Col style={{ textAlign: "left" }} span={3}>
                          Title :
                        </Col>
                        <Col style={{ textAlign: "left" }} span={21}>
                          <Input
                            value={item?.result?.title}
                            onChange={(e) =>
                              handleChangeNoteShber(e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                      <Row
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Col style={{ textAlign: "left" }} span={3}>
                          Content :
                        </Col>
                        <Col style={{ textAlign: "left" }} span={21}>
                          <Input.TextArea
                            value={item?.result?.description}
                            onChange={(e) =>
                              handleChangeContentNoteShber(e.target.value)
                            }
                          />
                        </Col>
                      </Row>

                      <Row
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          // alignItems: "center",
                        }}
                      >
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
                              handleChangeBoderRadiusNoteShbet(e.target.value)
                            }
                          />
                        </Col>
                        {/* <Col style={{ textAlign: "left" }} span={2}>
                          Color :
                        </Col>
                        <Col
                          style={{ textAlign: "left", paddingRight: "10px" }}
                          span={6}
                        >
                          <Input
                            type="number"
                            value={item?.result?.borderRadius}
                            onChange={(e) => handleChangeBoderRadiusNoteShbet(e.target.value)}
                          />
                        </Col> */}
                        <Col style={{ textAlign: "left" }} span={4}>
                          Background-color :
                        </Col>
                        <Col style={{ textAlign: "left" }} span={7}>
                         
                          <Input
                            value={item?.result?.backgroundColor}
                            onChange={(e) =>
                              handleChangeBgColorNoteShbet(e.target.value)
                            }
                            onClick={() => setNoteHiden(true)}
                          />
                          {notehiden === true ? (
                            <div style={{ position: "relative" }}>
                              <SketchPicker
                                onChangeComplete={(e) =>
                                  handleChangeCompleteNote(e)
                                }
                                color={stateColorNote.background}
                              />
                              <span
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  right: "30px",
                                }}
                              >
                                <GrFormClose
                                  size={20}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => setNoteHiden(false)}
                                />{" "}
                              </span>
                            </div>
                          ) : (
                            ""
                          )}
                        </Col>
                      </Row>
                    </>
                  );
                }
                if (item?.key === "contact") {
                  return (
                    <>
                      <Row style={{ marginTop: "20px" }}>
                        <Col span={24} style={{ fontSize: "20px" }}>
                          ShBet Card
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
                              handleChangeOrder1CardShbet(e.target.value)
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
                                    <Col span={5} style={{ textAlign: "left" }}>
                                      Vị trí :
                                    </Col>
                                    <Col span={15}>
                                      <Input
                                        type="number"
                                        value={contact?.order}
                                        onChange={(e) =>
                                          handleCardIndexChange(
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
                                    <Col span={5} style={{ textAlign: "left" }}>
                                      Title :
                                    </Col>
                                    <Col span={19}>
                                      <Input
                                        value={contact?.title}
                                        onChange={(e) =>
                                          handleCardTitleChange(
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
                                    <Col span={5} style={{ textAlign: "left" }}>
                                      link :
                                    </Col>
                                    <Col span={19}>
                                      <Input
                                        value={contact?.slug}
                                        onChange={(e) =>
                                          handleCardLinkChange(
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
                                      // alignItems: "center",
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
                                          setCardColor({
                                            hiden: true,
                                            index: ind,
                                          })
                                        }
                                        value={contact?.backgroundColor}
                                        onChange={(e) =>
                                          handleCardBg(
                                            item,
                                            contact,
                                            e.target.value,
                                            ind
                                          )
                                        }
                                      />
                                      {cardColor.hiden === true &&
                                      cardColor.index === ind ? (
                                        <div style={{ position: "relative" }}>
                                          <SketchPicker
                                            onChangeComplete={(e) =>
                                              handleChangeComplete(
                                                contact,
                                                e,
                                                ind
                                              )
                                            }
                                            color={stateColor.background}
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
                                                setCardColor({
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
                                          handleCarBorder(
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
                                    <Col span={5} style={{ textAlign: "left" }}>
                                      Icon :
                                    </Col>
                                    <Col span={19}>
                                      <input
                                        style={{ display: "block" }}
                                        type="file"
                                        onChange={(e) =>
                                          handleCarIcon(
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
                                </div>
                              </Col>
                            );
                          })}

                        <Col span={24} style={{ padding: "10px" }}>
                          <Button onClick={(e) => AddCardShbet(index, item)}>
                            Add Card
                          </Button>
                        </Col>
                      </Row>
                    </>
                  );
                }
                if (item?.key === "contact_type") {
                  return (
                    <div key={index}>
                      <Row style={{ marginTop: "10px" }}>
                        <Col span={24} style={{ fontSize: "20px" }}>
                          ShBet Option
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
                              handleChangeOrder1OptionShbet(e.target.value)
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
                                          handleOptionIndexChange(
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
                                          handleDeleteOption(item, type, ind)
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
                                          handleOptionTitleChange(
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
                                          handleOptionLinkChange(
                                            type, e.target.value, ind
                                          )
                                        }
                                      />{" "}
                                    </Col>
                                  </Row>
                                  <Row
                                    style={{
                                      display: "flex",
                                      // alignItems: "center",
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
                                        value={type?.backgroundColor}
                                        onChange={(e) =>
                                          handleOptionBg(type, e.target.value, ind)
                                        }
                                        onClick={() =>
                                          setOptionColor({
                                            hiden: true,
                                            index: ind,
                                          })
                                        }
                                      />
                                      {optionColor.hiden === true &&
                                      optionColor.index === ind ? (
                                        <div style={{ position: "relative" }}>
                                          <SketchPicker
                                            onChangeComplete={(e) =>
                                              handleChangeCompleteOption(
                                                type, e, ind
                                              )
                                            }
                                            color={optionStateColor.background}
                                          />
                                          <span
                                            style={{
                                              position: "absolute",
                                              top: "0",
                                              left: "0",
                                            }}
                                          >
                                            <GrFormClose
                                              size={20}
                                              style={{ cursor: "pointer" }}
                                              onClick={() =>
                                                setOptionColor({
                                                  hiden: false,
                                                  index: index,
                                                })
                                              }
                                            />
                                          </span>
                                        </div>
                                      ) : (
                                        ""
                                      )}
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
                                        value={type?.borderRadius}
                                        onChange={(e) =>
                                          handleOptionBorder(
                                            type, e.target.value, ind
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
                                    <Col span={5} style={{ textAlign: "left" }}>
                                      Icon :
                                    </Col>
                                    <Col span={19}>
                                      <input
                                        style={{ display: "block" }}
                                        type="file"
                                        onChange={(e) =>
                                          handleOptionIcon(
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
                        <Col span={24} style={{ padding: "10px" }}>
                          <Button onClick={(e) => AddOptionShbet(item)}>Add Option</Button>
                        </Col>
                      </Row>
                    </div>
                  );
                }
                if(item?.key === 'footer'){
                  return (
                    <>
                        <Row style={{ marginTop: "10px" }}>
                        <Col span={24} style={{ fontSize: "20px" }}>
                          ShBet Footer
                        </Col>
                        <Col span={3} style={{ fontSize: "20px" , textAlign:'left'}}>
                          Vị trí: 
                        </Col>
                        <Col span={6} >
                            <Input value={item?.result?.order1} onChange={(e) => handleChangeOrder1FooterShbet(e.target.value)} />
                        </Col>
                        <Col span={3} style={{ fontSize: "20px" }}>
                          Url: 
                        </Col>
                        <Col span={12} >
                            <Input value={item?.result?.slug} onChange={(e) => handleChangeUrrlFooterShbet(e.target.value)} />
                        </Col>
                      </Row>
                      <Row
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Col style={{ textAlign: "left" }} span={3}>
                          Title :
                        </Col>
                        <Col style={{ textAlign: "left" }} span={21}>
                          <Input
                            value={item?.result?.title}
                            onChange={(e) => handleChangeTitleFooterShbet(e.target.value)}
                          />
                        </Col>
                      </Row>
                      <Row
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Col style={{ textAlign: "left" }} span={3}>
                          Dự kiến :
                        </Col>
                        <Col style={{ textAlign: "left" }} span={21}>
                          <Input
                            value={item?.result?.description}
                            onChange={(e) => handleChangeDescriptionFooterShbet(e.target.value)}
                          />
                        </Col>
                      </Row>
                      <Row style={{marginTop:'15px'}} >
                            <Col span={12}>
                                <Row>
                                    <Col style={{textAlign:'left'}} span={8}>Background-color: </Col>
                                    <Col span={16} >
                                        <Input value={item?.result?.backgroundColor} onChange={(e) => handleChangeBgColorFooterShbet(e.target.value)} onClick={()=> setHidenFooterBg(true)} /> 
                                        {hidenFooterBg === true ?
                                          <div style={{position:'relative'}}>
                                              <SketchPicker onChangeComplete={(e) => handleChangeCompleteBgFooter(e)} color={stateFooterBg.background}  /> 
                                              <span style={{position:'absolute', top:'0', right:'45px'}}><GrFormClose size={20} style={{ cursor: "pointer" }} onClick={() => setHidenFooterBg(false)} /></span>
                                          </div>
                                         
                                         : ''}
                                        </Col>
                                </Row>
                            </Col>    
                            <Col span={12}>
                                <Row>
                                    <Col span={8}>Border-radius: </Col>
                                    <Col span={16} ><Input value={item?.result?.borderRadius} onChange={(e) => handleChangeBorderFooterSHbet(e.target.value)} /> </Col>
                                </Row>
                            </Col>    
                      </Row>
                    </>
                  )
                }
              })}
            </Col>
            <Col span={12}>
              <div
                id="shbet"
                style={{
                  backgroundImage: `url(${
                    background?.preview
                      ? background?.preview
                      : `${appConfig.API_URL_UPLOAD_FILES}/${background}`
                  })`,
                }}
              >
                <div className="container-shbet">
                  <div className="content-wrapper">
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

export default ShBet;
