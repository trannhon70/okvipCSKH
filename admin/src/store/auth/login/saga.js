import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";

import { postLogin } from "../../../helpers/helper";
import { userLogin } from "./../../../helpers/helperNew";

const fireBaseBackend = getFirebaseBackend();

function* loginUser({ payload: { user, history } }) {
  try {
    console.log("hihihihi")
    if (process.env.REACT_APP_API_URL) {
      const response = yield call(postLogin, {
        userName: user.username,
        password: user.password,
      });
      console.log(response, "response");
      if (response?.status === 1) {
        sessionStorage.setItem("authUser", JSON.stringify(response.data));
        yield put(loginSuccess(response));
        history.push("/users");
      } else if (response.status === -1) {
        history.push("/maintenance");
      } else {
        yield put(apiError(response));
      }
    }
  } catch (error) {
    yield put(apiError("Đăng nhập thất bại, sai tên đăng nhập hoặc mật khẩu"));
  }
}

function* logoutUser() {
  try {
    sessionStorage.removeItem("authUser");
    localStorage.removeItem("token");
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(LOGOUT_USER, response));
    } else {
      yield put(logoutUserSuccess(LOGOUT_USER, true));
    }
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response = yield call(fireBaseBackend.socialLoginUser, data, type);
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else {
      const response = yield call(postSocialLogin, data);
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeLatest(SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
