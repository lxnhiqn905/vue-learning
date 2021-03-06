# Một vài khái niệm cần lưu ý:

1. Phân biệt các kiểu render: client/server/Pre-render
	* Cơ chế:
	- Render phía client
		- Resource sẽ được load về phía client 1 lần ngay khi có request
		- HTML và JS sẽ được load về đồng thời, HTML chứa layout, data thì brower sẽ thực thi JS để render
		
	- Render phía server (RRS)
		- Server sẽ render HTML và trả về cho brower, brower chỉ cần hiển thị, không cần làm gì thêm
		- Việc render sẽ thực hiện khi có request đến
		
	- Pre-render phía server
		- Server sẽ thực hiện reden toàn bộ HTML ngay từ lúc build source code, ngay từ lúc build trạng thái DB dùng để truy vấn data sẽ được sử dụng, các trạng thái update sau đó không được phản ánh vào HTML, nếu muốn thì phải build lại
		- Request đến sẽ mapping đến HTML file đã được render và trả về HTML

	* Ưu điểm/Nhược điểm
		- Render phía server
			- Server sẽ đối ứng nhanh request, trả về HTML và JS xử lý cho brower, việc còn lại là brower sẽ xử lý
		
		- Render phía server (RRS)
			- HTML được render phía server, các SEO và meta tag đã được tạo nên tăng cường khả năng SEO của trang.
			- Việc render đã được phía server xử lý, nên brower chỉ cần sử dụng HTML trả về để hiển thị, không làm gì thêm, vì vậy tốc độ xử lý không bị ảnh hưởng bởi phía brower
		
		- Pre-render phía server
			- Vì sẽ render ngay tại thời điểm build source, nên phù hợp cho các chức năng mà không cần phản ánh dữ liệu realtime, ví dụ như profile cá nhân chẳng hạn
			- Tính về tốc độ xử lý thì nhanh hơn vì server chỉ xử lý mapping và trả về statis resource

2. Nếu so sánh các framework với nhau thì cần lưu ý:
	- Hiệu suất: Để so sánh được hiệu suất thì dựa vào 2 quan điểm chính
		- Khả năng phục vụ: Tốc độ xử lý request, render HTML bao nhiêu page trong cùng thời điểm (Điểm này cần phải có thống kê - Benmarch)
		- Khả năng development: Line of code, cấu trúc có dễ để development không
	
	- Cải tiến: Khi nói về điểm này, nghĩa là dựa nó đã khắc phục được khuyết điểm nào đó.
		- Xem xét về cú pháp - có dễ dùng hay không
		- Chức năng mà nó cung cấp, có đầy đủ hay không

3. Về cơ bản, Vue cung cấp cấu trúc để xử lý lấy-update giá trị, thuộc tính của HTML, chi tiết xử lý thì vẫn áp dụng Javascript như uppercase, push, reverse aray, object
	
4. Khái niệm reactive - phản ứng
	- Khái niệm: Nếu có tương tác thì trạng thái ứng dụng thay đổi ngay lập tức
	- Được hiểu là nếu object có thay đổi về mặt dữ liệu thì DOM sử dụng object đó sẽ cũng được thay đổi ngay lập tức, với VUE việc này được xử lý hoàn toàn tự động

5. Vue thực hiện render data lên DOM theo hướng khai báo(declarative), không phải hướng mệnh lệnh(imperative)
	- hướng khai báo(declarative) => TODO
	- hướng mệnh lệnh(imperative) => TODO

6. Lưu ý về component trong Vue
	- Bản chất cấu trúc: component la object, chứa DOM cần render
	- Bản chất hành động là lấy ra DOM đã khai báo, add vào DOM mà đang sử dụng component. Vì vậy, DOM mà đang sử dụng component phải được khai báo với Vue, để Vue quản lý và thực hiện hành động. Trường hợp dùng component mà không nằm trong DOM mà Vue quản lý thì sẽ không có hành động gì được thực hiện.

7. Làm sao để Realtime ứng dụng
	- Muốn ứng dụng Realtime thì phải có connection để lắng nghe sự kiện giữa các thành phần của ứng dụng
	
	- Connection thì có 2 loại:
		- Socket: Tương tác 2 chiều
		- Polling: Tương tác 1 chiều - TODO
	
	- Để Realtime ứng dụng, có thể dùng các plugins hoặc tự xây dựng connection. Tuy nhiên, bản chất nó chỉ 
	là công cụ hỗ trợ, developer phải tự xử lý kết quả trả về của các connection.
		- Webpack
		- SDK của Firebase
	
	- Bản chất của plugins là lắng nghe dự trên sự kiên nào đó, ví dụ như browser thì lắng nghe sự thay đổi resource file (HTML, CSS, JS) phía server, vì vậy tùy loại file  mà có thể realtime, các file như config thì không thể vì nó dùng để khởi động ứng dụng, nên khi chỉnh sửa thì phải re-start server.
	
	- Ví dụ:
		- Browser <=> Nuxt <=> Firebase
			- Browser sẽ tạo socket để lắng nghe thay đổi của Nuxt - Có thể sử dụng webpack để hỗ trợ tạo Socket, khi server pages có update, thì browser sẽ nhận biết và thay đổi
			- Nuxt sẽ tạo connection để lắng nghe thay đổi của Firebase - Firebase cung cấp SDK để hỗ trợ việc này, việc của Nuxt là nhận kết quả từ SDK và xử lý update pages server

		- Browser <=> Nuxt <=> Amplify <=> Firebase
			- Browser thì tương tự như trên
			- Lúc này SDK sẽ không dùng ở Nuxt mà sẽ dùng ở Amplify
			- Giữ Nuxt và Amplify cần 1 connection, có thể là plugins nào đó -  TODO
