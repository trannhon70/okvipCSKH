import { Button, Col, Input, Row, Spin, message } from "antd";
import { useEffect, useState } from "react";
import BreadCrumb from "../../common/BreadCrumb";
import "./789Bet.scss";
import appConfig from "../../config/appConfig";
import Logo789Bet from "../../Components/Bet789/Logo789Bet";
import Note789Bet from "../../Components/Bet789/Note789Bet";
import Contact789Bet from "../../Components/Bet789/Contact789Bet";
import ContactType789Bet from "../../Components/Bet789/ContactType789Bet";
import Footer789Bet from "../../Components/Bet789/Footer789Bet";
import { getbyIdDomain, upDateUIDomain, uploadImageCard, uploadImageOption } from "../../helpers/okvip_helper";
import { useLocation } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { SketchPicker } from "react-color";
import { AiOutlineDelete } from "react-icons/ai";
const Bet789 = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const objectId = pathname.split("/").pop();
  const [isLoading, setIsLoading] = useState(false);
  const [background, setBackground] = useState("");
  const [bet789Logo, setBet789Logo] = useState("");
  const [noteLogo, setNoteLogo] = useState("");
  const [noteColorhiden, setNoteColorhiden] = useState(false);
  const [stateColorNote, setStateColorNote] = useState("");
  const [data, setData] = useState([]);
  const [cardColor, setCardColor] = useState({ hiden: false, index: "" });
  const [stateColor, setStateColor] = useState("");

  const getbyIdDomains = async () => {
    const result = await getbyIdDomain(objectId);
    setBackground(result?.banner.img);
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
        return <Logo789Bet {...props} />;
      case "note":
        return <Note789Bet {...props} />;
      case "contact":
        return <Contact789Bet {...props} />;
      case "contact_type":
        return <ContactType789Bet {...props} />;
      case "footer":
        return <Footer789Bet {...props} />;
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
    setBackground(uploadedImage);
  };

  //logo
  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setBet789Logo(uploadedImage);
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

  const onchangeViTriLogo789Bet = (e) => {
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

  const handleChangeTitleLogo789Bet = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "logo");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.title = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "logo") {
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

  const handleChangeContentLogo789Bet = (e) => {
    const updatedDataCard = [...data];
    const check = updatedDataCard?.filter((item) => item?.key === "logo");
    if (check && check.length > 0 && check[0].result) {
      check[0].result.content = e;
    }
    const updatedSortedData = data.map((item, index) => {
      if (item?.key === "logo") {
        return {
          ...item,
          result: {
            ...item.result,
            content: e,
          },
        };
      }
      return item;
    });
    setData(updatedSortedData);
  };

  //note
  const handleNoteLogo789Bet = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setNoteLogo(uploadedImage);
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

  const handleChangeVitriNote789Bet = (e) => {
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

  const handleChangeTitleNote789Bet = (e) => {
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
  };

  const handleChangeContentNote789Bet = (e) => {
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
  };

  const handleChangeColorNote789Bet = (e) => {
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
  };

  const handleChangeStateColorNote789Bet = (e) => {
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
  };

  //contact
  const handleChangeOrder1Contact789Bet = (e) => {
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

  const handleChangeOrderContact789Bet = (item, Contact, value, ind) => {
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

  const handleChangeTitleContact789Bet =(item, Contact, value, ind) => {
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

  const handlechangeLinkContact789Bet = (item, Contact, value, ind) => {
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

  const handleChangeBorderRadiusContact789Bet = (item, Contact, value, ind) =>{
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

  const handleChangeIconContact789Bet = async(item, Contact, acceptedFiles, ind) => {
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

  const handleChangeBackgroundColorContact789Bet = (item, Contact, value, ind) => {
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

  const handleChangeCompleteContact789Bet = (Contact, value, ind) => {
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

  const handleDeleteCard = (item, value, index) => {
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

  const AddCard789Bet = (index, item) => {
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
  }

  //contact type 
  const handleChangeOrder1ContactType789Bet = (e) => {
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

  const handleChangeOrderContactType789Bet = (item,type, value, ind) => {
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

  const handleChangeLinkContactType789Bet = (type, value, ind) => {
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

  const handlechangeBorderRadiusContactType789Bet = (type, value, ind) => {
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
  }

  const handleChangeIconContactType789Bet = async(item ,type, acceptedFiles, ind) => {
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

  const handleDeleteContactType789Bet = (item, type, index) => {
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

  const AddContactType = (item) => {
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

  //footer
  const handleChangeOrder1Footer789Bet = (e) => {
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

  const handleChangeUrrlFooter789Bet = (e) => {
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

  const handleChangeTitleFooter789Bet = (e) => {
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

  const handleUpdateUI = async() => {
    const formData = new FormData();
    formData.append("id", objectId);
    formData.append("fileLogo", bet789Logo);
    formData.append("background", background);
    formData.append("noteLogo", noteLogo);
    
    formData.append("data", JSON.stringify(data));
    if (objectId) {
      const result = await upDateUIDomain(formData);
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
            title="789Bet"
            pageTitle="Pages"
            slug="pages-management"
          />{" "}
          <Row>
            <Col span={12} style={{ paddingRight: "10px" }}>
              <Row
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col style={{ textAlign: "left" }} span={6}>
                  789Bet background-img :
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
                          789Bet logo :
                        </Col>
                        <Col span={7}>
                          <input
                            style={{ display: "block" }}
                            type="file"
                            onChange={(e) => handleDrop(e.target.files)}
                            accept="image/*"
                          />
                        </Col>
                        <Col style={{ textAlign: "left" }} span={2}>
                          Vị trí :
                        </Col>
                        <Col span={2}>
                          <Input
                            type="number"
                            value={item?.result?.order1}
                            onChange={(e) =>
                              onchangeViTriLogo789Bet(e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "15px" }}>
                        <Col span={3}>Title :</Col>
                        <Col span={21}>
                          <Input
                            value={item?.result?.title}
                            onChange={(e) =>
                              handleChangeTitleLogo789Bet(e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "15px" }}>
                        <Col span={3}>Content :</Col>
                        <Col span={21}>
                          <Input
                            value={item?.result?.content}
                            onChange={(e) =>
                              handleChangeContentLogo789Bet(e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                    </>
                  );
                }
                if (item.key === "note") {
                  return (
                    <>
                      <Row style={{ marginTop: "20px" }}>
                        <Col
                          span={24}
                          style={{ fontSize: "20px", textAlign: "center" }}
                        >
                          789Bet note
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
                            onChange={(e) =>
                              handleNoteLogo789Bet(e.target.files)
                            }
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
                              handleChangeVitriNote789Bet(e.target.value)
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
                              handleChangeTitleNote789Bet(e.target.value)
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
                              handleChangeContentNote789Bet(e.target.value)
                            }
                          />
                        </Col>
                      </Row>

                      <Row
                        style={{
                          marginTop: "20px",
                          display: "flex",
                        }}
                      >
                        <Col style={{ textAlign: "left" }} span={3}>
                          Color :
                        </Col>
                        <Col
                          style={{ textAlign: "left", paddingRight: "10px" }}
                          span={4}
                        >
                          <Input
                            value={item?.result?.color}
                            onChange={(e) =>
                              handleChangeColorNote789Bet(e.target.value)
                            }
                            onClick={(e) => setNoteColorhiden(true)}
                          />
                          {noteColorhiden === true ? (
                            <div style={{ position: "relative" }}>
                              <SketchPicker
                                onChangeComplete={(e) =>
                                  handleChangeStateColorNote789Bet(e)
                                }
                                color={stateColorNote.background}
                              />
                              <span
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "0px",
                                }}
                              >
                                <GrFormClose
                                  size={20}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => setNoteColorhiden(false)}
                                />{" "}
                              </span>
                            </div>
                          ) : (
                            ""
                          )}
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
                        {/* <Col style={{ textAlign: "left" }} span={4}>
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
                            </Col> */}
                      </Row>
                    </>
                  );
                }
                if (item.key === "contact") {
                  return (
                    <>
                      <Row style={{ marginTop: "20px" }}>
                        <Col
                          span={24}
                          style={{ fontSize: "20px", textAlign: "center" }}
                        >
                          Jun88 Contacts
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
                              handleChangeOrder1Contact789Bet(e.target.value)
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
                                          handleChangeOrderContact789Bet(
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
                                          handleChangeTitleContact789Bet(
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
                                          handlechangeLinkContact789Bet(
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
                                          handleChangeBorderRadiusContact789Bet(
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
                                          handleChangeIconContact789Bet(
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
                                          setCardColor({
                                            hiden: true,
                                            index: ind,
                                          })
                                        }
                                        value={contact?.backgroundColor}
                                        onChange={(e) =>
                                          handleChangeBackgroundColorContact789Bet(
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
                                              handleChangeCompleteContact789Bet(
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
                                </div>
                              </Col>
                            );
                          })}
                        <Col
                          span={24}
                          style={{ padding: "10px", textAlign: "center" }}
                        >
                          <Button onClick={(e) => AddCard789Bet(index, item)}>
                            Add Card
                          </Button>
                        </Col>
                      </Row>
                    </>
                  );
                }
                if(item.key === "contact_type"){
                  return (
                    <>
                    <Row style={{ marginTop: "10px" }}>
                      <Col
                        span={24}
                        style={{ fontSize: "20px", textAlign: "center" }}
                      >
                       Contact Type Jun88
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
                            handleChangeOrder1ContactType789Bet(e.target.value)
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
                                      handleChangeOrderContactType789Bet(
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
                                      handleDeleteContactType789Bet(item, type, ind)
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
                                  Link :
                                </Col>
                                <Col span={19}>
                                  <Input
                                    value={type?.slug}
                                    onChange={(e) =>
                                      handleChangeLinkContactType789Bet(
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
                                      handlechangeBorderRadiusContactType789Bet(
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
                                      handleChangeIconContactType789Bet(
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
                      <Button onClick={(e) => AddContactType(item)}>Add Card</Button>
                    </Col>
                  </Row>
                  </>
                  )
                }
                if(item.key === "footer"){
                  return(
                    <>
                        <Row style={{ marginTop: "10px" }}>
                        <Col span={24} style={{ fontSize: "20px" , textAlign:'center', marginBottom:'15px'}}>
                          ShBet Footer
                        </Col>
                        <Col span={3} style={{textAlign:'left'}}>
                          Vị trí: 
                        </Col>
                        <Col span={6} >
                            <Input value={item?.result?.order1}
                             onChange={(e) => handleChangeOrder1Footer789Bet(e.target.value)} 
                             />
                        </Col>
                        <Col span={3} style={{ textAlign:'center' }}>
                          Url: 
                        </Col>
                        <Col span={12} >
                            <Input value={item?.result?.slug} 
                            onChange={(e) => handleChangeUrrlFooter789Bet(e.target.value)} 
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
                            onChange={(e) => handleChangeTitleFooter789Bet(e.target.value)}
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
                  backgroundImage: `url(${
                    background?.preview ? background?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${background}`
                  })`,
                }}
              >
                <div className="container-789Bet">
                  {sortedData.map((item, index) => {
                    return renderComponentByKey(item?.key, item?.result);
                  })}
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

export default Bet789;
