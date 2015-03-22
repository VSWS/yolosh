/**
 * DEFINED SCHEMA USER
 * ------------------------------------------
 * - _id (hash)*              : Id người dùng -> Meteor.userId()
 * - username (string)*       : Tên tài khoản
 * - emails (array)*          : Danh sách email tài khoản
 * ++ address (string)        : Địa chỉ email
 * ++ verified (boolean)      : Trạng thái kích hoạt. TRUE: đã kích hoạt, FALSE: Chưa kích hoạt
 * - profile (array)          : Thông tin tài khoản
 * ++ firstName (string)      : Họ
 * ++ lastName (string)       : Tên
 * - services (array)         : Các service tài khoản
 * ++ facebook                : kết nối facebook
 *    {id, accessToken}
 * ++ resume                  : Phiên đăng nhập
 *    {loginTokens}
 * - status (int)*            : Trạng thái người dùng gồm: [Verify: Cần xác thực, OK: Đã kích hoạt, Block: Bị khóa]
 * - createdAt (date)*        : Thời gian tạo
 * - lastUpdated (date)       : Lần cập nhật cuối
 * – password (string)*       : Mật khẩu
 * ------------------------------------------
 */

var users = Meteor.users;