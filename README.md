# Update and Maintain

-   Do thay đổi code trong backend nên phần user-manage đã bị lỗi => nên chuyển phần user-redux sang user-manage để tối ưu trải nghiệm.
-   Resposive
-   Upgrade to angular version 14.
-   Fixbug 1 bệnh nhân chỉ đặt được 1 lịch hẹn (backend)
-   Optimize Code (chia component để dễ maintain), tối ưu lại cấu trúc code

# Fix

-   fix upload image in user-reduce => done
-   css lại login form => done

# Note:

-   với form thì nên dùng MUI vì dễ validation
-   Còn với table và các component khác thì nên dùng ant-design
-   Khi sử dụng container của tailwind css thì phải dùng thêm m-auto để content được căn giữa.
-   Dùng :host ::ng-deep để có thể css các tag bị hidden

-   cách kill 1 port đang chạy với npx: command line: npx kill-port 8080
-   Để xử lí bất đồng bộ hay độ chậm trễ của API hay việc truyền dữ liệu giữa các component bị chậm (relationship component or non-relationship component) thì hãy viết logic vào onChanges
