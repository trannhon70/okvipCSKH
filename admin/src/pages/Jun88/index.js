import { Button, Col, Input, Row, Spin, message } from "antd";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { useEffect, useState } from "react";
import "./Jun88.scss";
import Jun88Logo from "../../Components/Jun88/Jun88Logo";
import Jun88Note from "../../Components/Jun88/Jun88Note";
import Jun88Contact from "../../Components/Jun88/Jun88Contact";
import Jun88ContactType from "../../Components/Jun88/Jun88ContactType";
import { useLocation } from "react-router-dom";
import { getbyIdDomain, upDateUIDomain, uploadImageCard, uploadImageOption } from "../../helpers/okvip_helper";
import appConfig from "../../config/appConfig";
import { GrFormClose } from "react-icons/gr";
import { SketchPicker } from "react-color";
import { AiOutlineDelete } from "react-icons/ai";

const Jun88 = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const objectId = pathname.split("/").pop();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [background, setBackground] = useState("");
  const [shbetLogo, setShbetLogo] = useState("");
  const [shbetLogo1, setShbetLogo1] = useState("");
  const [noteColorhiden, setNoteColorhiden] = useState(false)
  const [stateColorNote, setStateColorNote] = useState("")
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
        return <Jun88Logo {...props} />;
      case "note":
        return <Jun88Note {...props} />;
      case "contact":
        return <Jun88Contact {...props} />;
      case "contact_type":
        return <Jun88ContactType {...props} />;
      default:
        return null;
    }
  };

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

  const handleDrop1 = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const uploadedImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setShbetLogo1(uploadedImage);
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
  };

  const onchangeViTriLogoJun88 = (e) => {
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
  const handleChangeVitriNoteJun88 = (e) => {
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

  const handleChangeTitleNoteJun88 = (e) => {
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

  const handleChangeContentNoteJun88 = (e) => {
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

  const handleChangeColorNoteJun88 = (e) => {
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

  const handleChangeStateColorNoteJun88 = (e) => {
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

  //contact
  const handleChangeOrder1ContactJun88 = (e) => {
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

  const handleChangeOrderContactJun88 = (item, Contact, value, ind) => {
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

  const handleChangeTitleContactJun88 = (item, Contact, value, ind) => {
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

  const handlechangeLinkContactJun88 = (item, Contact, value, ind) =>{
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

  const handleChangeBorderRadiusContactJun88 = (item, Contact, value, ind) => {
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

  const handleChangeIconContactJun88 = async (item, Contact, acceptedFiles, ind) => {
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

  const handleChangeBackgroundColorContactJun88 = (item, Contact, value, ind) => {
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

  const handleChangeCompleteContactJun88 = (Contact, value, ind) => {
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
  const handleChangeOrder1ContactTypeJun88 = (e) => {
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

  const handleChangeOrderContactTypeJun88 = (item,type, value, ind) =>{
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

  const handleChangeLinkContactTypeJun88 = (type, value, ind) => {
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

  const handleChangeIconContactTypeJun88 = async(item ,type, acceptedFiles, ind) => {
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

  const handlechangeBorderRadiusContactTypeJun88 = (type, value, ind) => {
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

  const handleDeleteContactTypeJun88 = (item, type, index) => {
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
    formData.append("fileLogo", shbetLogo);
    formData.append("fileLogo1", shbetLogo1);
    formData.append("background", background);
    
    
    formData.append("data", JSON.stringify(data));
    if (objectId) {
      const result = await upDateUIDomain(formData);
      if (result?.status === 1) {
        getbyIdDomains();
        message.success("Cập nhật thành công!");
      }
    }
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
          <BreadCrumb title="Jun88" pageTitle="Pages" slug="pages-management" />
          <Row>
            <Col span={12} style={{padding:'10px'}}>
              <Row
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col style={{ textAlign: "left" }} span={6}>
                  Jun88 background-img :
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
                if (item.key === "logo") {
                    return (
                      <>
                        <Row style={{ marginTop: "15px" }}>
                          <Col style={{ textAlign: "left" }} span={3}>
                            Jun 88 logo :
                          </Col>
                          <Col span={7}>
                            <input
                              style={{ display: "block" }}
                              type="file"
                              onChange={(e) => handleDrop(e.target.files)}
                              accept="image/*"
                            />
                          </Col>
                          <Col style={{ textAlign: "left" }} span={3}>
                            Jun 88 logo 1:
                          </Col>
                          <Col span={7}>
                            <input
                              style={{ display: "block" }}
                              type="file"
                              onChange={(e) => handleDrop1(e.target.files)}
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
                                onchangeViTriLogoJun88(e.target.value)
                              }
                            />
                          </Col>
                        </Row>
                      </>
                    );
                  }
                  if(item.key === "note"){
                    return (
                        <>
                          <Row style={{ marginTop: "20px" }}>
                            <Col span={24} style={{ fontSize: "20px", textAlign:'center' }}>
                              Jun88 note
                            </Col>
                          </Row>
                          <Row
                            style={{
                              marginTop: "20px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {/* <Col style={{ textAlign: "left" }} span={3}>
                              Logo :
                            </Col>
                            <Col style={{ textAlign: "left" }} span={9}>
                              <input
                                style={{ display: "block" }}
                                type="file"
                                onChange={(e) => handleNoteLogo(e.target.files)}
                                accept="image/*"
                              />
                            </Col> */}
                            <Col style={{ textAlign: "left" }} span={3}>
                              Vị trí :
                            </Col>
                            <Col style={{ textAlign: "left" }} span={5}>
                              <Input
                                value={item?.result?.order1}
                                onChange={(e) =>
                                  handleChangeVitriNoteJun88(e.target.value)
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
                                  handleChangeTitleNoteJun88(e.target.value)
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
                                  handleChangeContentNoteJun88(e.target.value)
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
                                  handleChangeColorNoteJun88(e.target.value)
                                }
                                onClick={(e)=> setNoteColorhiden(true)}
                              />
                              {noteColorhiden === true ? (
                                <div style={{ position: "relative" }}>
                                  <SketchPicker
                                    onChangeComplete={(e) =>
                                      handleChangeStateColorNoteJun88(e)
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
                  if(item?.key === "contact"){
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
                                handleChangeOrder1ContactJun88(e.target.value)
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
                                            handleChangeOrderContactJun88(
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
                                            handleChangeTitleContactJun88(
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
                                            handlechangeLinkContactJun88(
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
                                            handleChangeBorderRadiusContactJun88(
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
                                            handleChangeIconContactJun88(
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
                                            handleChangeBackgroundColorContactJun88(
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
                                                handleChangeCompleteContactJun88(
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
                    )
                  }
                  if(item?.key === "contact_type"){
                    return(
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
                                handleChangeOrder1ContactTypeJun88(e.target.value)
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
                                          handleChangeOrderContactTypeJun88(
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
                                          handleDeleteContactTypeJun88(item, type, ind)
                                        }
                                      />
                                    </Col>
                                  </Row>
                                  {/* <Row
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
                                  </Row> */}
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
                                          handleChangeLinkContactTypeJun88(
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
                                          handlechangeBorderRadiusContactTypeJun88(
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
                                          handleChangeIconContactTypeJun88(
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
                          <Button onClick={(e) => AddContactType(item)}>Add Card</Button>
                        </Col>
                      </Row>
                      </>
                    )
                  }
              })}
            </Col>
            <Col span={12}>
              <div>
                <div
                  className="wrap-cskh"
                  style={{
                    backgroundImage: `url(${
                      background?.preview
                        ? background?.preview
                        : `${appConfig.API_URL_UPLOAD_FILES}/${background}`
                    })`,
                  }}
                >
                  <div className="wrap-cskh_content">
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

export default Jun88;
