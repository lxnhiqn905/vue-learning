Lession: https://vueschool.io/courses/vuex-for-everyone
Reference: https://vuex.vuejs.org/guide/

1. Tổng quan
	- Nhìn lại Vue, ta thấy rằng khi trạng thái dữ liệu được quản lý và thay đổi thông qua events và props của component. Khi xây dựng ứng dụng với quy mô nhỏ, không có nhiều compenent thì việc quản lý trạng thái dữ liệu xem là có thể làm được. Nhưng sẽ thế nào khi xây dựng một ứng dụng lớn, có rất nhiều component, lúc này việc sử dụng events và props để quản lý trạng thái trở nên khó khăn - bản chất của việc này là get/set dữ liệu. Vuex sinh ra để giải quyết vấn đề này.
	
	- Vuex là state management library, bản chất nó như là một container/data center/store chứa các data mà cần quản lý trạng thái(state). Lúc này, các component sẽ không set/get dữ liệu thông qua events và props nữa mà sẽ cập nhật vào state được quản lý ở Vuex. Điều này sẽ giảm thiểu được những lỗi phát sinh do việc quản lý bằng tay thông qua component tạo ra.
	
	- Vậy nó có khác gì so vơi Global variable. Có 2 điểm khác biệt lớn:
		1. Reactive: Vuex là reactive, các component sử dụng data mà nó quản lý trạng thái sẽ dược cập nhật ngay lập tức khi data đó có sự thay đổi.
		2. Tracking: Vuex không cho thay đổi trực tiếp giá trị của data được quản lý, mà thông quan sự kiện committing(). Điều này làm cho mọi sự kiện đến data được quản lý đều được tranked - ghi log, sử dụng thêm các tool phân tích được điều gì đang xảy ra với ứng dụng của chúng ta.

	- Vậy khi nào dùng Vuex:
		- Điều này phụ thuộc vào việc đánh giá trạng thái data có thể quản lý bằng component hay không, nếu có thì không cần dùng, nếu không có thì cần dùng.
		- Nên hay không còn phụ thuộc nhiều các yếu tố: An toàn ứng dụng, performance ?

2. Khái niệm chính trong Vuex cần nắm
	1. state 					
		- Chứa dữ liệu như data properties của Vue object
		- Vuex sử dung một đối tượng để quản lý tất cả các state trong ứng dụng

	2. getters					
		- Cho phép tính toán như computed properties của Vue object

	3. mutations				
		- Nơi chứa các method mà thông qua nó có thể thay đổi state.

	4. actions					
		- Cho phép thực hiện event như method properties của Vue object
		- actions và mutations đều là method, vậy khác nhau chỗ nào ?
			1. mutations có thể thay đổi state, actions thì không, actions commit mutations để thay đổi state
			2. actions có thể là một function không đồng bộ, mutations thì không

	5. Modules
		- Để quản lý trạng thái đồng nhất của data trong ứng dụng, Vuex sử dụng một object duy nhất để quản lý, tuy nhiên, việc có quá nhiêu state phải quản lý trong ứng dụng lớn làm cho object trở nên rất lớn, và rất khó mở rộng. Để giải quyết vấn đề này, Vuex sử dụng modules.
		
		- Hành động cơ bản là state được quản lý thành nhiều module, sử dụng cấu trúc TREE để liên kết module với object quản lý. Nhờ đó mà các state được tách biệt, dễ dàng quản lý.

		- Để sử dụng module cần nắm các khái niệm:
			- Nested modules
				- Khi khai báo một module, có thể khai báo một module bên trong nó.
				- Nhờ vậy mà modules có tính sử dụng lại. Và cấu trúc dữ liệu cũng được phân tách để dễ quản lý.

			- Module Local State
				- Đối với state, nếu được dùng trong getters, actions của chính module đó thì nó là local state
				- Để lấy state global thì dùng rootState

			- Namespacing
				- Mặc định, actions, mutations và getters sẽ được đăng ký dưới dạng global, để ứng dụng có thể sử dụng. Tuy nhiên, nếu có quá nhiều actions, mutations và getters được khai báo global sẽ rất dễ xảy ra xung đột và khó quản lý. Để giải quyết, Vuex cho phép khai báo actions, mutations và getters ở trạng thái local bằng cách dùng Namespacing.

				- Khi sử dụng namespaced: true, khi module được regist vào store, thì actions, mutations và getters sẽ được gán với module chứa nó. Khi đó, mọi thứ được bao bọc vởi module, làm cho nó dễ quản lý và tái sử dụng.

	6. Cấu trúc ứng dụng với Vuex
			├── api
			│   └── ... # abstractions for making API requests
			├── components
			│   ├── App.vue
			│   └── ...
			└── store
    			├── index.js          # where we assemble modules and export the store
    			├── actions.js        # root actions
    			├── mutations.js      # root mutations
    			└── modules
        			├── cart.js       # cart module
        			└── products.js   # products module

3. Thực hành
	Chúng ta sẽ thử làm một ứng dụng nhỏ (shopping-cart) để thực hành với Vuex
	Làm tuần tự các bước bên dưới để xây dựng ứng ụng Vue và sử dụng các tính năng của Vuex

	1. Tạo ứng dụng ban đầu
		vue init vueschool/webpack-template shopping-cart
		
		- Sử dụng vue-cli để tạo ứng dụng, sử dụng webpack template để đảm bảo mọi người đều view được 1 trang như nhau (realtime) 

		- Creat mock API: 
			src\api\shop.js

		- Create component ProductList và hiển thị toàn bộ product đã định nghĩa ở mock API
			src\components\ProductList.vue

		- Sử dụng ProductList component trên App.vue
			src\App.vue

	2. Sử dụng Vuex 
		yarn add vuex

		- Tạo file store, đây là file mà được khai báo để quản lý trạng thái cho ứng dụng, về rule thì tham khảo mục Khái niệm chính trong Vuex
		src\store\index.js

	3. Ở ProductList component, thay vì quản lý dữ liệu bằng data, hãy chuyển sang dùng state ở store
		- Khai báo data cần quản lý ở state
		- Khai báo phương thức setProducts ở mutations để thay đổi dữ liệu
			src\store\index.js

		- Chỉnh sửa ProductList component, khai báo một thuộc tính trong computed để lấy data từ store về
		- Chỉnh sửa created để commit mutations để gán dữ liệu vào store
			src\components\ProductList.vue

	4. TODO

