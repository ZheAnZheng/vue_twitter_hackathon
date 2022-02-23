// 將sweetAlert2載入
import Swal from 'sweetalert2'

// 定義sweetAlert的樣式設定
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});