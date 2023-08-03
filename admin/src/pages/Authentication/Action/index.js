/* eslint-disable no-debugger */
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import {
  message,
  Input,
  Button,
  Form,
  Space,
  Tooltip,
  Table,
  Drawer,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import {
  deleteAction,
  getPagingAction,
  insertAction,
  updateAction,
} from "../../../helpers/helper";
import moment from "moment";
import BreadCrumb from "../../../common/BreadCrumb";
import { DeleteFailed, DeleteSuccess, SaveFailed, SaveSuccess, UpdateFailed, UpdateSuccess } from "../../../common/notification";


const Actions = () => {
  document.title = "Management Actions";

  const [form] = Form.useForm();
  const [formSearch] = Form.useForm();
  const [listAction, setListAction] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const dataRes = await getAllData();
      setListAction(dataRes);
    }
    fetchData();
  }, []);

  const getAllData = async (_prams) => {
    const params = _prams
      ? _prams
      : {
          pageIndex: 1,
          pageSize: 100000,
          search: "",
        };
    const dataRes = await getPagingAction(params);

    const data =
      dataRes?.data &&
      dataRes?.data.length > 0 &&
      dataRes?.data.map((item) => {
        return {
          key: item?._id,
          actionName: item?.actionName,
          createdTime: moment(new Date(item?.createdTime)).format("DD/MM/YYYY"),
        };
      });
    return dataRes?.data ? data : [];
  };

  const onFinish = async (data) => {
    const dataReq = {
      actionName: data.actionName,
    };

    if (!data.id) {
      //Save
      const dataRes = await insertAction(dataReq);
      dataRes.status === 1
        ? message.success(`${SaveSuccess}! ${dataRes.message}`)
        : message.error(`${SaveFailed}! ${dataRes.message}`);
    } else {
      //Update
      const dataRes = await updateAction(data.id, dataReq);
      dataRes.status === 1
        ? message.success(`${UpdateSuccess}! ${dataRes.message}`)
        : message.error(`${UpdateFailed}! ${dataRes.message}`);
    }
    formSearch.resetFields();
    form.resetFields();
    handleCloseDrawer();
    handleRefresh();
  };

  const handleRefreshCreate = () => {
    form.resetFields();
  };

  const handleRefresh = async () => {
    form.resetFields();
    formSearch.resetFields();
    const dataRes = await getAllData();
    setListAction(dataRes);
  };

  const handleSearch = async () => {
    const dataForm = formSearch.getFieldsValue();
    const params = {
      pageIndex: 1,
      pageSize: 1000,
      search: dataForm.actionName ? dataForm.actionName : "",
    };
    const dataRes = await getAllData(params);
    setListAction(dataRes);
  };

  const onEdit = (key) => {
    const dataEdit = listAction.filter((item) => item.key === key);

    form.setFieldsValue({
      actionName: dataEdit[0]?.actionName,
      id: dataEdit[0]?.key,
    });
    setDrawerTitle("Sửa thao tác");
    showDrawer();
  };

  const onDelete = async (key) => {
    const dataRes = await deleteAction(key);
    dataRes.status === 1
      ? message.success(`${DeleteSuccess}! ${dataRes.message}`)
      : message.error(`${DeleteFailed}! ${dataRes.message}`);

    handleRefresh();
  };

  const columns = [
    {
      title: "Tên thao tác",
      dataIndex: "actionName",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdTime",
    },
    {
      title: "Thao tác",
      dataIndex: "",
      render: (_, record) =>
        listAction.length >= 1 ? (
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

  const onClose = () => {
    setVisibleForm(false);
  };

  const showDrawer = () => {
    setVisibleForm(true);
  };

  const handleNewAction = () => {
    setDrawerTitle("Tạo thao tác");
    showDrawer();
    form.resetFields();
  };
  
  const handleCloseDrawer = () => {
    setDrawerTitle("");
    setVisibleForm(false);
    form.resetFields();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Thao tác" pageTitle="Quản lý thao tác" />

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
                      name="actionName"
                      label="Tìm kiếm theo tên thao tác:"
                      rules={[
                        {
                          required: false,
                          message: "Vui lòng nhập tên thao tác!",
                        },
                        {
                          type: "actionName",
                        },
                        {
                          type: "string",
                          min: 1,
                        },
                      ]}
                    >
                      <Input
                        placeholder="Nhập tên thao tác"
                        name="actionName"
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
                    <Button type="primary" onClick={handleNewAction}>
                      Tạo
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
            </Col>
          </Row>
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
                    <Form.Item
                      name="actionName"
                      label="Tên thao tác"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập tên thao tác!",
                        },
                        {
                          type: "actionName",
                        },
                        {
                          type: "string",
                          min: 1,
                        },
                      ]}
                    >
                      <Input
                        placeholder="Nhập tên thao tác"
                        name="actionName"
                        allowClear={true}
                      />
                    </Form.Item>
                  </Row>
                  <Form.Item className="mt-3">
                    <Space>
                      <Button type="primary" htmlType="submit">
                        Lưu
                      </Button>
                      <Button
                        type="primary"
                        htmlType="button"
                        onClick={() => handleRefreshCreate()}
                      >
                        Làm mới
                      </Button>
                      <Button type="danger" onClick={handleCloseDrawer}>
                        Đóng
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </Drawer>
            </Col>
          </div>
          <div>
            <Table columns={columns} dataSource={listAction} />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Actions;