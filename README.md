Learning plan
	1. Vue 					DONE
	2. Vuex 				Doing
	3. Nuxt 				DONE
	4. Firebase Google		NYS
	5. Amplify AWS			NYS
	6. Lambda AWS			NYS

Mục tiêu:
	- Với Vue
		- Nắm được các khái niệm cơ bản nhất của Vue: Đối tượng Vue, component, cách mà Vue xử lý DOM

	- Với Vuex
		- Nắm được cách mà Vuex quản lý trạng thái data
		- Nắm các khái niệm cơ bản của Vuex: state, getters, mutations, actions, Modules


	- Với Nuxt
		- Nắm được các đặc trung và điểm mạnh của Nuxt, hiểu vì sao dự án này dùng Nuxt thay vì các framework khác
		- Hiểu được cấu trúc project của Nuxt, cách Nuxt sẽ build và deploy với RSS và Pre-rendering
		- Thao tác được với việc chỉnh sửa 1 phần, tạo mới trang, tương tác giữa các thành phần layout-pages-component-store
		- Cấu hình Nuxt - nuxt.config
		- Nâng cao: Hiểu về pluggins, middleware

	- Với Firebase
		- Hiểu Firebase là gì, đặc trưng và điểm mạnh của Firebase
		- Sử dụng API, kết hợp với Nuxt để build một application sample

	- Với Amplify AWS
		- Hiểu về Serveless
		- Hiểu Amplify là gì, đặc trưng và điểm mạnh của Amplify
		- Xây dựng được application sample sử dụng Amplify và Nuxt
		- Cài đặt được GraphQL API
		- Tương tác với Google Firebase sử dụng GraphQL API
		- Xây dựng ứng dụng 4 thành phần 
			- DB: 					Google Firebase
			- Request handler: 		Amplify
			- DB layer: 			GraphQL API
			- View: 				Nuxt

	- Với Lambda AWS
		- Hiểu Lambda là gì, đặc trưng và điểm mạnh của Lambda
		- Cấu hình Lambda để crawl data từ 1 website
		- Extract data, sử dụng GraphQL API và Amplify để import vào Google Firebase

Vấn đề:
	- Tài khoản AWS hiện tại đang inactive, không tạo được stack dùng cho Amplify

Làm sao để Realtime ứng dụng
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
