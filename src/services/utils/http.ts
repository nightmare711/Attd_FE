import axios, { AxiosError } from "axios";
import { ENVS } from "src/configs/Configs.env";
import { camelCaseKeys } from "./camelcase";

const TIMEOUT = 20000;
const instance = axios.create({
  timeout: TIMEOUT,
});

const HEADERS = { "Content-Type": "application/json" };
let accessToken = window.token;

instance.interceptors.request.use(
  (req) => {
    req.baseURL = `${ENVS.REACT_APP_BASE_API}/api/`;
    let authen = {};
    if (accessToken) {
      authen = { Authorization: `Bearer ${accessToken}` };
    }
    req.headers = {
      ...HEADERS,
      ...req.headers,
      ...authen,
    };
    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    const result = res?.data?.data;
    const error = !res?.data?.success;
    if (error) {
      return Promise.reject(camelCaseKeys(result.message));
    }
    return Promise.resolve(result);
  },
  (axiosError: AxiosError) => {
    if (axiosError && !axiosError?.response) {
      throw new Error("Send request API failed");
    }
    const { response: { data } = {} } = axiosError;
    const { message } = data || {};
    return Promise.reject(camelCaseKeys(message || axiosError));
  }
);

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export default instance;
