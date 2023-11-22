# Improve UX/UI

-   Do thay đổi code trong backend nên phần user-manage đã bị lỗi => nên chuyển phần user-redux sang user-manage để tối ưu trải nghiệm.

-   Sửa phần chuyển đổi ngôn ngữ để không bị reload lại trang.

-   Chuyển đổi hết css sang dùng tailwind css.

-   Những components của boostrap sẽ thay thế bằng Ant-design và MUI => done

-   Sử dụng cả ant-design và materialUI (Không bị conflict lẫn nhau)

# Update

-   Chuyển boostrap sang tailwind css. (Xoá bỏ boostrap) => done
-   Upgrade to angular version 14.

# Fix

-   fix upload image in user-reduce => done
-   css lại login form => done

# Note:

-   với form thì nên dùng MUI vì dễ validation
-   Còn với table và các component khác thì nên dùng ant-design
-   Khi sử dụng container của tailwind css thì phải dùng thêm m-auto để content được căn giữa.

-   cách kill 1 port đang chạy với npx: command line: npx kill-port 8080
-   Để xử lí bất đồng bộ hay độ chậm trễ của API hay việc truyền dữ liệu giữa các component bị chậm (relationship component or non-relationship component) thì hãy viết logic vào onChanges
