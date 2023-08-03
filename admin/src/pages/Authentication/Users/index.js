import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import {
  message,
  Input,
  Button,
  Form,
  Space,
  Select,
  Tooltip,
  Table,
  Drawer,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  deleteUser,
  getAllRole,
  getPagingUser,
  insertUser,
  updateUser,
} from "../../../helpers/helper";
import moment from "moment";
import BreadCrumb from "../../../common/BreadCrumb";
import UserStatus from "../../../store/status/userStatus";
import regexPhone from "../../../common/regexPhone";
import { DeleteFailed, DeleteSuccess, SaveFailed, SaveSuccess, UpdateFailed, UpdateSuccess } from "../../../common/notification";

const { Option } = Select;

const Users = () => {
  document.title = "Management Users";

  const [form] = Form.useForm();
  const [formSearch] = Form.useForm();
  const [listUser, setListUser] = useState([]);
  const [listRole, setListRole] = useState([]);
  const [listStatus, setListStatus] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
     async function fetchData() {
      const dataRes = await getAllData();
      setListUser(dataRes);
      //get role
      const resListRole = await getAllRole();
      setListRole(resListRole);
      setListStatus(UserStatus);
    }
    fetchData();
  }, []);

  const getAllData = async (_prams) => {
    const params = _prams
      ? _prams
      : {
          pageIndex: 1,
          pageSize: 10,
          search: "",
        };
    const dataRes = await getPagingUser(params);

    const data =
      dataRes?.data &&
      dataRes?.data.length > 0 &&
      dataRes?.data.map((item) => {
        return {
          key: item?._id,
          userName: item?.userName,
          fullName: item?.fullName,
          email: item?.email,
          phoneNumber: item?.phoneNumber,
          roleName: item?.role?.roleName,
          activeStatus:
            item?.activeStatus === 1 ? "Kích hoạt" : "Ngưng kích hoạt",
          createdTime: moment(new Date(item?.createdTime)).format("DD/MM/YYYY"),
        };
      });

    return dataRes?.data ? data : [];
  };

  const onFinish = async (data) => {
    console.log(data.phoneNumber)
    if(regexPhone(data.phoneNumber)){
      return message.error(`Phone number is not in the correct format`);
    }

    const dataReq = {
      userName: data.userName,
      password: data.password,
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      activeStatus: data.activeStatus,
      role: data.role,
    };

    if (!data.id) {
      const dataRes = await insertUser(dataReq);
      dataRes.status === 1
        ? message.success(`${SaveSuccess}! ${dataRes.message}`)
        : message.error(`${SaveFailed}! ${dataRes.message}`);
      if (dataRes.status === 1) {
        onClose();
      }
    } else {
      const dataRes = await updateUser(data.id, dataReq);
      dataRes.status === 1
        ? message.success(`${UpdateSuccess}! ${dataRes.message}`)
        : message.error(`${UpdateFailed}! ${dataRes.message}`);
      if (dataRes.status === 1) {
        onClose();
      }
    }

    form.resetFields();
    formSearch.resetFields();
    handleRefresh();
    const dataRes = await getAllData();
    setListUser(dataRes);
  };

  const handleRefresh = async () => {
    form.resetFields();
  };

  const handleRefreshSearch = async () => {
    formSearch.resetFields();
    const dataRes = await getAllData();
    setListUser(dataRes);
  };

  const handleSearch = async () => {
    const dataForm = formSearch.getFieldsValue();
    const params = {
      pageIndex: 1,
      pageSize: 1000,
      search: dataForm.userName ? dataForm.userName : "",
    };

    const dataRes = await getAllData(params);
    setListUser(dataRes);
  };

  const onClose = () => {
    setVisibleForm(false);
  };

  const showDrawer = () => {
    setVisibleForm(true);
  };

  const handleNewUser = () => {
    setDrawerTitle("Tạo tài khoản");
    showDrawer();
    setIsEdit(false)
    form.resetFields();
  };
  
  const onEdit = (key) => {
    const dataEdit = listUser?.filter((item) => item.key === key);
    const dataRole = listRole?.filter(
      (item) => item.roleName === dataEdit[0]?.roleName
    );
    const dataStatus = listStatus?.filter(
      (item) => item.label === dataEdit[0]?.activeStatus
    );

    form.setFieldsValue({
      id: dataEdit[0]?.key,
      userName: dataEdit[0]?.userName,
      fullName: dataEdit[0]?.fullName,
      phoneNumber: dataEdit[0]?.phoneNumber,
      email: dataEdit[0]?.email,
      activeStatus: dataStatus[0]?.value,
      roleName: dataRole[0]?.roleName,
      role: dataRole[0]?._id,
    });
    setDrawerTitle("Sửa tài khoản");
    setIsEdit(true);
    showDrawer();
  };

  const onDelete = async (key) => {
    const dataRes = await deleteUser(key);
    dataRes.status === 1
      ? message.success(`${DeleteSuccess}! ${dataRes.message}`)
      : message.error(`${DeleteFailed}! ${dataRes.message}`);

    handleRefreshSearch();
  };

  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "userName",
    },
    {
      title: "Họ và tên",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdTime",
    },
    {
      title: "Quyền",
      dataIndex: "roleName",
    },
    {
      title: "Trạng thái",
      dataIndex: "activeStatus",
    },
    {
      title: "Thao tác",
      dataIndex: "",
      render: (_, record) =>
        listUser.length >= 1 ? (
          <Space>
            <Tooltip title="Edit">
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                size="small"
                onClick={() => onEdit(record.key)}
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                type="danger"
                shape="circle"
                icon={<DeleteOutlined />}
                size="small"
                onClick={() => onDelete(record.key)}
              />
            </Tooltip>
          </Space>
        ) : null,
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Tài khoản" pageTitle="Quản lý tài khoản" />
          <div>
            <Col>
              <Drawer
                title={drawerTitle}
                placement={"right"}
                width={"30%"}
                onClose={onClose}
                visible={visibleForm}
                bodyStyle={{
                  paddingBottom: 80,
                }}
                style={{ marginTop: "70px" }}
              >
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Row>
                    <Col hidden={true}>
                      <Form.Item name="id" label="Id">
                        <Input name="id" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        name="userName"
                        label="Tài khoản"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập tài khoản!",
                          },
                          {
                            type: "userName",
                          },
                          {
                            type: "string",
                            min: 1,
                          },
                        ]}
                      >
                        <Input
                          placeholder="Nhập tài khoản"
                          name="userName"
                          allowClear={true}
                        />
                      </Form.Item>

                      <Form.Item
                        name="phoneNumber"
                        label="Số điện thoại"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập số điện thoại!",
                          },
                          {
                            type: "phone",
                          },
                          {
                            type: "string",
                            min: 1,
                          },
                        ]}
                      >
                        <Input
                          placeholder="Nhập số điện thoại!"
                          name="phoneNumber"
                          allowClear={true}
                        />
                      </Form.Item>

                      <Form.Item
                        name="role"
                        label="Quyền"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn quyền!",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Chọn quyền!"
                          allowClear
                          showSearch
                          name="roles"
                        >
                          {listRole.length > 0 &&
                            listRole.map((item) => {
                              return (
                                <Option key={item?._id} value={item?._id}>
                                  {item?.name}
                                </Option>
                              );
                            })}
                        </Select>
                      </Form.Item>
                      {
                        isEdit ? 
                          <Form.Item
                            name="password"
                            label="Mật khẩu"
                            rules={[
                              {
                                type: "password",
                              },
                              {
                                type: "string",
                                min: 1,
                              },
                            ]}
                          >
                            <Input
                              placeholder="Nhập mật khẩu!"
                              name="password"
                              allowClear={true}
                            />
                          </Form.Item>
                        :
                          <Form.Item
                            name="password"
                            label="Mật khẩu"
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng nhập mật khẩu!",
                              },
                              {
                                type: "password",
                              },
                              {
                                type: "string",
                                min: 1,
                              },
                            ]}
                          >
                            <Input
                              placeholder="Nhập mật khẩu!"
                              name="password"
                              allowClear={true}
                            />
                          </Form.Item>
                      }
                      <Form.Item
                        name="email"
                        label="Email"
                        hidden={isEdit}
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập email!",
                          },
                          {
                            type: "email",
                          },
                          {
                            type: "string",
                            min: 1,
                          },
                        ]}
                      >
                        <Input
                          placeholder="Nhập email!"
                          name="email"
                          allowClear={true}
                        />
                      </Form.Item>

                      <Form.Item
                        name="fullName"
                        label="Họ và tên"
                        rules={[
                          {
                            type: "fullName",
                          },
                          {
                            type: "string",
                            min: 1,
                          },
                        ]}
                      >
                        <Input
                          placeholder="Nhập họ và tên!"
                          name="fullName"
                          allowClear={true}
                        />
                      </Form.Item>

                      <Form.Item
                        name="activeStatus"
                        label="Trạng thái"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn trạng thái!",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Chọn trạng thái!"
                          allowClear
                          showSearch
                          name="activeStatus"
                        >
                          {listStatus.length > 0 &&
                            listStatus.map((item) => {
                              return (
                                <Option key={item.value} value={item.value}>
                                  {item.label}
                                </Option>
                              );
                            })}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item className="mt-3">
                    <Space>
                      <Button type="primary" htmlType="submit">
                        Lưu 
                      </Button>
                      <Button
                        type="primary"
                        htmlType="button"
                        onClick={() => handleRefresh()}
                      >
                        Làm mới
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </Drawer>
            </Col>
          </div>
          <Row>
            <Col xs={12}>
              <Form
                form={formSearch}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Row>
                  <Col hidden={true}>
                    <Form.Item name="id" label="Id">
                      <Input name="id" />
                    </Form.Item>
                  </Col>
                  <Col sm={3}>
                    <Form.Item
                      name="userName"
                      label="Tìm kiếm theo tài khoản"
                      rules={[
                        {
                          required: false,
                          message: "Vui lòng nhập tài khoản!",
                        },
                        {
                          type: "userName",
                        },
                        {
                          type: "string",
                          min: 1,
                        },
                      ]}
                    >
                      <Input
                        placeholder="Nhập tài khoản"
                        name="userName"
                        allowClear={true}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item className="mt-3">
                  <Space>
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={() => handleSearch()}
                    >
                      Tìm kiếm
                    </Button>
                    <Button type="primary" onClick={handleNewUser}>
                      Tạo
                    </Button>
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={() => handleRefreshSearch()}
                    >
                      Làm mới
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <div>
            <Table columns={columns} dataSource={listUser} />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );

};

export default Users;