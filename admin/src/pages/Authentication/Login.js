import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  Alert,
} from "reactstrap";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { loginUser, resetLoginFlag } from "../../store/actions";

// import logoLight from "../../assets/images/logo-light.png";

const Login = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    user: state.Account.user,
  }));

  const [userLogin, setUserLogin] = useState([]);
  const [isShowPass, setShowPass] = useState(false);

  useEffect(() => {
    if (user && user) {
      setUserLogin({
        username: user.user.username,
        password: user.user.password,
      });
    }
  }, [user]);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: userLogin.username,
      password: userLogin.password,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Vui Lòng Nhập Tên Đăng!"),
      password: Yup.string().required("Vui Lòng Nhập Mật Khẩu!"),
    }),
    onSubmit: (values) => {
      console.log("testtesttesttest")
      dispatch(loginUser(values, props.history));
    },
  });

  const { error } = useSelector((state) => ({
    error: state.Login.error,
  }));

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetLoginFlag());
    }, 3000);
  }, [dispatch, error]);

  document.title = "Đăng Nhập CSKH";
  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container className="login-container">
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      {/* <img src={logoLight} alt="" height="100" /> */}
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4 card-mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary"> CSKH</h5>
                    </div>
                    {error && error ? (
                      <Alert color="danger"> {error} </Alert>
                    ) : null}
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                        action="#"
                      >
                        <div className="mb-3">
                          <Label htmlFor="username" className="form-label">
                            Tài khoản
                          </Label>
                          <Input
                            name="username"
                            className="form-control"
                            placeholder="Nhập tài khoản"
                            type="text"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.username || ""}
                            invalid={
                              validation.touched.username &&
                              validation.errors.username
                                ? true
                                : false
                            }
                          />
                          {validation.touched.username &&
                          validation.errors.username ? (
                            <FormFeedback type="invalid">
                              {validation.errors.username}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="password-input"
                          >
                            Mật khẩu
                          </Label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Input
                              name="password"
                              value={validation.values.password || ""}
                              type={!isShowPass ? "password" : "text"}
                              className="form-control pe-5"
                              placeholder="Nhập Mật Khẩu"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.password &&
                                validation.errors.password
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.password &&
                            validation.errors.password ? (
                              <FormFeedback type="invalid">
                                {validation.errors.password}
                              </FormFeedback>
                            ) : null}
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                              type="button"
                              id="password-addon"
                              onClick={() => setShowPass(!isShowPass)}
                            >
                              {!validation.errors.password && (
                                <i className="ri-eye-fill align-middle"></i>
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button
                            color="secondary"
                            className="btn btn-secondary w-100"
                            type="submit"
                          >
                            Đăng Nhập
                          </Button>
                        </div>

                        <div className="mt-4"></div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};


export default withRouter(Login);
