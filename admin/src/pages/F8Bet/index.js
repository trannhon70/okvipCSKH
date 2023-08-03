import { Button, Col, Input, Row, Spin, message } from "antd";
import "./F8Bet.scss";
import { useEffect, useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { SketchPicker } from "react-color";
import { GrFormClose } from "react-icons/gr";
import { getbyIdDomain, upDateUIDomain, uploadImageCard, uploadImageOption } from "../../helpers/okvip_helper";
import { useLocation } from "react-router-dom";
import F8BetNote from "../../Components/F8Bet/F8BetNote";
import F8Contact from "../../Components/F8Bet/F8Contact";
import F8ContactType from "../../Components/F8Bet/F8ContactType";
import F8BetLogo from "../../Components/F8Bet/F8BetLogo";
import appConfig from "../../config/appConfig";
import { handleChangeContact } from "../../utils";

const F8bet = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const objectId = pathname.split("/").pop();

  const [isLoading, setIsLoading] = useState(false);
  const [backgroudUrl, setBackgroundUrl] = useState("");
  const [logo, setLogo] = useState("");
  const [hidenBgColor, setHidenBgColor] = useState(false);
  const [stateBackgroundColor, setStateBackgroundColor] = useState("");
  const [stateColor, setStateColor] = useState("");
  const [stateColorNote, setStateColorNote] = useState("");

  const [cardColor, setCardColor] = useState({ hiden: false, index: "" });
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState({
    slug: "",
    img: "",
    domain: "",
    _id: "",
  });
  
  const [hidenColor, setHidenColor] = useState(false)

  const getbyIdDomains = async () => {
    const result = await getbyIdDomain(objectId);
    setBanner(result?.banner);
    setData(result?.data);
  };

  useEffect(() => {
    if (objectId) {
      getbyIdDomains();
    }
  }, [objectId]);

  //background-url
  const handleChangeBackgroundUrl = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setBackgroundUrl(uploadedImage);
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
  };

  const handleChangeVitriLogoF8bet = (e) => {
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

  //note
  const handleChangeVitriNoteF8Bet = (e) => {
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

  const handleChangeTitleNoteF8Bet = (e) => {
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

  const handleChangedescriptionNoteF8Bet = (e) => {
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

  const handleChangeBorderNoteF8Bet = (e) => {
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
  };

  const handleChangeBackgroundColorNoteF8Bet = (e) => {
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
  };

  const handleChangeColorNoteF8Bet = (e) => {
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

  const handleChangeStateColorNoteF8Bet = (e) => {
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

  const handleChangeCompleteNote = (e) => {
    setStateBackgroundColor({ background: e.hex });
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

  //contacts
  const handleChangeOrder1ContactF8Bet = (e) => {
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

  const handleChangeOrderContactF8Bet = (item, Contact, value, ind) => {
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
  };

  const handleChangeTitleContactF8bet = (item, Contact, value, ind) => {
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
  };

  const handlechangeLinkContactF8Bet = (item, Contact, value, ind) => {
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
  };

  const handleChangeBorderRadiusContactF8Bet = (item, Contact, value, ind) => {
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
  };

  const handleChangeIconContactF8Bet = async (
    item,
    Contact,
    acceptedFiles,
    ind
  ) => {
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
  };

  const handleChangeBackgroundColorContactF8Bet = (
    item,
    Contact,
    value,
    ind
  ) => {
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
  };

  const handleChangeCompleteContactF8Bet = (Contact, value, ind) => {
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
  };

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
  };


  //contact type
  const handleChangeOrder1ContactTypeF8Bet = (e) => {
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

  const handleChangeOrderContactTypeF8Bet = (item,type, value, ind) => {
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

  const handleChangeTitleContactTypeF8bet = (type, value, ind) => {
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

  const handleChangeLinkContactTypeF8Bet = (type, value, ind) => {
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

  const handleChangeIconContactTypeF8Bet = async(item ,type, acceptedFiles, ind) => {
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

  const AddContactTypeF8Bet = (item) => {
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

  const handleDeleteContactTypeF8Bet = (item, type, index) => {
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

  const handleUpdateUI = async() => {
    const formData = new FormData();
    formData.append("id", objectId);
    formData.append("fileLogo", logo);
    formData.append("background", backgroudUrl);
    // formData.append("noteLogo", noteLogo);
    
    formData.append("data", JSON.stringify(data));
    if (objectId) {
      const result = await upDateUIDomain(formData);
      if (result?.status === 1) {
        getbyIdDomains();
        message.success("Cập nhật thành công!");
      }
    }
  }
  const renderComponentByKey = (key, props) => {
    switch (key) {
      case "logo":
        return <F8BetLogo {...props} />;
      case "note":
        return <F8BetNote {...props} />;
      case "contact":
        return <F8Contact {...props} />;
      case "contact_type":
        return <F8ContactType {...props} />;
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


  return (
    <>
      <Spin spinning={isLoading}>
        <div className="page-content">
          <BreadCrumb
            title="F8-Bet"
            pageTitle="Pages"
            slug="pages-management"
          />
          <Row>
            <Col span={12} style={{ padding: "0px 10px" }}>
              <Row>
                <Col style={{ textAlign: "left" }} span={3}>
                  backgroudUrl :
                </Col>
                <Col span={21}>
                  <input
                    style={{ display: "block" }}
                    type="file"
                    onChange={(e) => handleChangeBackgroundUrl(e.target.files)}
                    accept="image/*"
                  />
                </Col>
              </Row>
              {data &&
                data.map((item, index) => {
                  // console.log(item, 'item');
                  if (item.key === "logo") {
                    return (
                      <Row
                        style={{ marginTop: "15px" }}
                        key={item?.result?._id}
                      >
                        <Col
                          span={24}
                          style={{ textAlign: "center", fontSize: "20px" }}
                        >
                          F8 Bet Logo
                        </Col>
                        <Col style={{ textAlign: "left" }} span={3}>
                          Logo :
                        </Col>
                        <Col span={11}>
                          <input
                            style={{ display: "block" }}
                            type="file"
                            onChange={(e) => handleChangeLogo(e.target.files)}
                            accept="image/*"
                          />
                        </Col>
                        <Col span={3}>Vị trí :</Col>
                        <Col span={7}>
                          <Input
                            value={item?.result?.order1}
                            onChange={(e) =>
                              handleChangeVitriLogoF8bet(e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                    );
                  }
                  if (item.key === "note") {
                    return (
                      <>
                        <Row>
                          <Col
                            span={24}
                            style={{ textAlign: "center", fontSize: "20px" }}
                          >
                            F8 Bet Note
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
                                handleChangeVitriNoteF8Bet(e.target.value)
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
                                handleChangeTitleNoteF8Bet(e.target.value)
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
                                handleChangedescriptionNoteF8Bet(e.target.value)
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
                                handleChangeBorderNoteF8Bet(e.target.value)
                              }
                            />
                          </Col>
                          <Col style={{ textAlign: "left" }} span={2}>
                    Color :
                </Col>
                <Col style={{ textAlign: "left", paddingRight:'10px' }} span={6}>
                    <Input type="text" value={item?.result?.color} onChange={(e) => handleChangeColorNoteF8Bet(e.target.value)} onClick={() => setHidenColor(true)} />
                    {hidenColor === true ? <div style={{position:'relative'}}>
                      <SketchPicker onChangeComplete={(e) => handleChangeStateColorNoteF8Bet( e)} color={stateColorNote.background} />
                      <span style={{position:'absolute' ,top:'0', left:'0px'}}><GrFormClose size={20} style={{cursor:'pointer'}} onClick={()=> setHidenColor(false)} /> </span>
                    </div> : ''}
                </Col>
                          <Col style={{ textAlign: "left" }} span={4}>
                            Background-color :
                          </Col>
                          <Col style={{ textAlign: "left" }} span={7}>
                            <Input
                              value={item?.result?.backgroundColor}
                              onChange={(e) =>
                                handleChangeBackgroundColorNoteF8Bet(
                                  e.target.value
                                )
                              }
                              onClick={() => setHidenBgColor(true)}
                            />
                            {hidenBgColor === true ? (
                              <div style={{ position: "relative" }}>
                                <SketchPicker
                                  onChangeComplete={(e) =>
                                    handleChangeCompleteNote(e)
                                  }
                                  color={stateBackgroundColor.background}
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
                                    onClick={() => setHidenBgColor(false)}
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
                  if (item.key === "contact") {
                    return (
                      <>
                        <Row style={{ marginTop: "20px" }}>
                          <Col
                            span={24}
                            style={{ fontSize: "20px", textAlign: "center" }}
                          >
                            F8 Bet Contacts
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
                                handleChangeOrder1ContactF8Bet(e.target.value)
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
                                            handleChangeOrderContactF8Bet(
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
                                            handleChangeTitleContactF8bet(
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
                                            handlechangeLinkContactF8Bet(
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
                                            handleChangeBorderRadiusContactF8Bet(
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
                                            handleChangeIconContactF8Bet(
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
                                            handleChangeBackgroundColorContactF8Bet(
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
                                                handleChangeCompleteContactF8Bet(
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
                            <Button onClick={(e) => AddCardF8Bet(index, item)}>
                              Add Card
                            </Button>
                          </Col>
                        </Row>
                      </>
                    );
                  }
                  if (item.key === "contact_type") {
                    return (
                      <>
                        <Row style={{ marginTop: "10px" }}>
                          <Col
                            span={24}
                            style={{ fontSize: "20px", textAlign: "center" }}
                          >
                           Contact Type F8 Bet
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
                                handleChangeOrder1ContactTypeF8Bet(e.target.value)
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
                                          handleChangeOrderContactTypeF8Bet(
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
                                          handleDeleteContactTypeF8Bet(item, type, ind)
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
                                          handleChangeTitleContactTypeF8bet(
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
                                          handleChangeLinkContactTypeF8Bet(
                                            type, e.target.value, ind
                                          )
                                        }
                                      />{" "}
                                    </Col>
                                  </Row>
                                  
                                  {/* <Row
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
                                  </Row> */}
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
                                          handleChangeIconContactTypeF8Bet(
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
                                  {/* <Row
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
                                  </Row> */}
                                </div>
                              </Col>
                            );
                          })}
                        <Col span={24} style={{ padding: "10px", textAlign:'center' }}>
                          <Button onClick={(e) => AddContactTypeF8Bet(item)}>Add Card</Button>
                        </Col>
                      </Row>
                      </>
                    );
                  }
                })}
            </Col>
            <Col span={12}>
              <div
                className="Jun-body"
                style={{
                  backgroundImage: `url(${
                    backgroudUrl?.preview ? backgroudUrl?.preview : `${appConfig.API_URL_UPLOAD_FILES}/${banner.img}`
                  })`,
                }}
              >
                <div
                  id="mobile"
                  style={{ textAlign: "center", paddingTop: "5%" }}
                >
                  <div
                    className="container mobile"
                    style={{ display: "inline-block" }}
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

export default F8bet;
