// 將sweetAlert2載入
import Swal from "sweetalert2";
import axios from "axois";

export const apiHelper = axios.create({
  baseURL: "http://localhost:3000/api",
});
apiHelper.interceptors.request.use(
  (config) => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem("token");

    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// 定義sweetAlert的樣式設定
//將toast封裝
//api
//Toast.fireError(message)//發出錯誤訊息
//Toast.fireSuccess(message)//發送成功訊息
//Toast.fireWarning(message)//發出警告訊息
function Toast() {
  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
  });
  this.fireError = function (message) {
    toast.fire({
      icon: "error",
      title: message,
    });
  };
  this.fireSuccess = function (message) {
    toast.fire({
      icon: "success",
      title: message,
    });
  };
  this.fireWarning = function (message) {
    toast.fire({
      icon: "warning",
      title: message,
    });
  };
}

export const Toast = new Toast();
