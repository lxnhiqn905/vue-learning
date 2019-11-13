# Nuxt
	1. Nuxt là gì ?
		- Nuxt là framework cho phép xây dựng ứng dụng Vue ở phía server. Giải quyết bài toán SEO bằng giải pháp Rendering Server Side.
		- Với ứng dụng Vue, client nhận về là 1 HTML template và JS code, các Crawler không thể nhận diện thông tin bên trong website, vì vậy vấn để SEO chưa được giải quyết cho đến khi có Nuxt.
		- Ngoài RSS thì Nuxt vẫn support SPA của Vue như cũ, và cung cấp thêm cơ chế Generate để build Statis site. Với cơ chế Generate, ứng dụng được đáp ứng nhanh hơn với statis file.
		- Tổ chức code rõ ràng, làm cho việc develop dễ dàng hơn.
		- Cơ chế code spliting, chỉ cung cấp resouce đủ để render page

	2. Thành phần cấu tạo:
		- Vue
		- Vuex
		- Vue Router


	3. Life cycle of Nuxt
		- Nuxt framework có Life cycle mở rộng từ Vue, khởi động khi có request tới. Có thể tách thành 2 Life cycle con nối tiếp nhau 1 -> 2
			1. Nuxt Life cycle: Comming request -> Render
			2. Vue Life cycle: Render request -> Complete

		- Đối với Nuxt Life cycle thì sử dụng context như là tham số để truy cập ứng dụng Nuxt
		- Đối với Vue Life cycle thì sử dụng this như trước đây


	4. Điểm khác biệt giữa Vue và Nuxt
		- Layout: Vue dùng App.vue, Nuxt dùng [layout].vue ở thư mục layouts
		- Page: Vue implement ở views, Nuxt implement ở pages
		- Component thì như nhau
		- Router: Vue thì tự implement, Nuxt tự động generate theo cấu trúc thư mục pages
		- Store: Vue thì tự khai báo, Nuxt thì khai báo sẵn, khi muốn khai báo thêm thì định nghĩa các const tương ứng
	

	5. Use case
		- validate: Nuxt cung cấp validate method, sử dụng cho pages, để validate giá trị được truyền tới thông qua param/query, giá trị trả về là true hoặc false. Với false thì Nuxt sẽ tự động redirect tới error page,

		- fetch data:
			- data sử dụng trong page: Dùng data() hoặc asyncData(), với asyncData() thì có thể truy cập 1 để lấy data, giá trị trả về được append vùa Vue object, nên có thể dùng trực tiếp ở pages.
			- data dùng chung, gán vào store thì có 2 cách, một là implement trực tiếp trong initNextServer() ở store, Nuxt sẽ tự động gọi đến, hai là sử dụng fetch() để lấy data và gán vào store, fetch không có trả về, asyncData() cũng có thể gán vào store và có trả về.

		- common layout: 
			- Common layout: Khai báo layout và page sử dụng thông qua layout properties
			- Common page: Sử dụng nuxt-child để import child-page vào cho parrent-page, điều này cho phép nhóm xử lý của các page giống nhau lại với nhau - tránh lặp code.

		- plugins:
			- Plugins là dùng để khai báo cho Vue để sử dụng khi render, cái gì mà dùng Vue.use() để khai báo thì định nghĩa ở pluggin và config ở nuxt.config.js. Để tránh load nhiều lân thì thuộc tính vender để chỉ thị.

		- middle ware:
			- Là xử lý là Nuxt cung cấp để cho phép xử lý logic chạy trước khi thực hiện render, định nghĩa VM và có thể sử dụng ở page, hoặc config ở nuxt.config.js để sử dụng ở mức global

		- nuxt.config.js
			- Dùng để khai báo và sử dụng ở mức global: pluggins, VM, css, SEO

		- css-scope: Mặc định layout sẽ được Nuxt load, không biết có dùng hay không, nên css khai báo trong layout sẽ được load hết, để tránh việc đó thì dùng thuộc tính scope để chỉ thị chỉ load layout mong muốn

		- store:
			- Ở Nuxt Life cycle: truy cập store qua context: context.$store, cũng có thể truy cập router, request: context.$router, context.$request
			- Ở Vue Life cycle: truy cập store qua this: this.$store

		- router:
			- router được generate theo cấu trúc pages, index page trong thư mục được xem là default page, không generate thành router
			- nest-router được generate theo thư mục con trong cấu trúc pages
			- dynamic-router:  sử dụng _ để thông báo cho Nuxt là dynamic-router


		- Nuxt tự động:
			- Nuxt tự động generate router
			- asyncData, fetch, initNuxtServer, validate nên khi implement cần phải đúng cấu trúc input param, nếu không thì Nuxt sẽ không tự động gọi được.

	6. API reference: https://nuxt.org/api


# Amplify
	1. Amplify là gì:
		- Amplify là framework cho phép xây dựng backend cho ứng dụng sử dụng các dịch vụ của AWS như: S3, Lambda, AppAsync, DynamoDB, Cognito, ...

	2. Thành phần cấu tạo:
		- CLI: Cung cấp interface để tạo, cấu hình, deploy và pushlish dịch vụ ở AWS
		- Thư viện: Cung cấp thư việc để dễ dàng làm việc với các dịch vụ AWS => Tìm hiểu thêm
		- UI Component: Cho phép attach các UI component cho ứng dụng thông qua CLI => Tìm hiểu thêm

	3. Với Amplify, thì làm được gì:
		- Hosting: Sẽ có ứng dụng trên cloud sử dụng S3
		- API: Xây dựng GraphQL API ở AWS với AppAsync
		- Function: Có các function tự động ở AWS với Lambda
		- Authencation: Authen ứng dụng vơi AWS Cognito 
		- No SQL DB: Với AWS DynamoDB

	4. Kiến trúc ứng dụng với Vue và Amplify:
		Locally
			1. FrontEnd: Vue
			2. Backend: Amplify
							- API
							- Function
							- Storage
							- Authen
		||||||||||||||| Amplify CLI ||||||||||||||||||||
		AWS:
			1. FrontEnd - S3
			2. Backend: - AppAsync
						- Lambda
						- DynamoDB
						- Cognito

	
	5. Cách mà Amplify khai báo service với AWS:
		- Tương ứng mỗi service được tạo, thì có:
			1. Service tương ứng được tạo
			2. CloudFormation stack sẽ được tạo để quản lý service đã tạo
			3. IAM role sẽ được tạo và được gán với CloudFormation stack để phân quyền sử dụng dịch vụ


	6. Use case:
		1. Create Amplify backend:
			amplify init

		2. Add Service
			amplify add function                   	=> Lambda function
			amplify add api 						=> AppAsync API
			amplify add auth 						=> Cognito servuce
			amplify add storage 					=> DynamoDB database

		3. Remove service
			amplify add [service]					=> Sẽ tự động xóa service và stack, role tương ứng với service cần xóa cũng được xóa.

		4. Delete Amplify backend
			amplify delete  						=> Các stack và role đã được Amplify tạo cho ứng dụng sẽ được xóa, nhưng S3 sẽ không tự động xóa.

		5. Deploy backend
			- Amplify hoạt động tương tự GIT để theo dõi sự thay đổi trong ứng dụng, sử dụng command dưới đây để deploy

			amplify status 							=> Kiểm tra trạng thái các service
			amplify push  							=> Deploy thay đổi service ở local lên service tương ứng ỏ AWS, mấy một thời gian ngắn để deploy
			amplify publish							=> Chưa tìm hiểu kỹ	

	Lưu ý: 
		1. Quyền hạn: Để đăng ký dịch vụ gì thì account được setting cho Amplify sử dụng phải có quyền tương ứng không bị lỗi
		2. Quyền hạn liên kết: Khi 1 service đăng ký sẽ có role tương ứng, service này sử dụng service kia thì phải có quyền hạn được cấu hình trong role của service đó.

	Q&A:
		1. Với S3, thì không code Node engine để chạy ứng dụng Nuxt, nên đang nghĩ dùng Nuxt để code ứng dụng nhưng khi trển khai có thể triển khai dạng SPA
		2. Với DynamoDB, thì theo kiến trúc hiện tại của dự án thì có thể thay thế bằng Firebase của Google, GraphQL sẽ là API để làm việc với Google Firebase


Next plan:
	- Với Nuxt, về cơ bản là kết hợp Vue, Vuex, Vue router nên ngoài việc nắm được cấu trúc framework thì cần phải học kỹ Vue, Vuex, Vue router thì mới sử dụng thuần thục
	- Với Amplify, là chuối công cụ cho phép khai báo và sử dụng dịch vụ AWS, nên ngoài việc biết cách sử dụng framework thì cần phải dọc để biết cách sử dụng các service S3, Lambda, AppAsync, Cognito, DynamoDB thì mới có thể sử dụng thuần thục












