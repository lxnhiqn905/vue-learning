Lession: https://vueschool.io/lessons/what-is-nuxtjs
Reference: https://nuxtjs.org/guide

1. Giới thiệu
- Nuxt.js là framework dùng để tạo ứng dung Vue.js
- Điểm mạnh: Nhanh, dễ dùng và tổ chức code rõ ràng
- Tính năng: 
	- Server side rendering (SSR)
		- Vấn đề chung của các JS framwork là SEO, các meta tag phụ thuộc vào JS, cho đến trước khi JS thực thi thì các meta tag thường không có content data. Vấn đề cốt lõi là có nhiều crawlers(phần mềm dự động crawl data như Google, Yahoo) không hỗ trợ JS, vì vậy xem như SEO của nó là 0. 
		- Giải pháp đề ra là SSR, gọi API từ phía server, data được lấy về, set vào meta tag và trả về. Khi đó, page trả về là page hoàn chỉnh, tăng cường SEO.
		- Việc gọi API lấy data và render từ phía server làm cho page được phục vụ nhanh hơn, nhờ đó mà chính nó cũng tăng cường UX.

	- Pre-rendering
		- Khác với SSR, Pre-rendering không render khi có yêu cầu mà render tất cả các page trước đó khi thực hiện build. Khi đó, production chỉ có là HTML files. Lợi ích của việc này là có nhiều host free để deploy, phù hợp cho các application mà có không quá nhiều các page, ví dụ như personal page.

	- Code Splitting
		- Nuxt tự động splitting code để phục vụ đúng và đủ. 
		- Ví dụ, có 1 JS file được định nghĩa 100 component, tuy nhiên khi load homepage thì chỉ cần 10 trong 100 component đó, việc load toàn bộ làm cho nó trở nên dư thừa vì không sử dụng. Nuxt tự động split code cho từng page để phục vụ đúng và đủ các yêu cầu.

2. Tạo project với nuxt
	- yarn create nuxt-app <project-name>

	- Chọn mode thì: 
		- Server Rendered : Universal
		- Server Rendered : Single Page Applications (SPA)


3. Cấu trúc thư mục
	- assets: Chứa file CSS, SaSS, images - những file mà không cần compile

	- components : Chứa Vue component

	- layouts : Chứa layout của ứng dụng - layout phải có <nuxt/> - layout mặc định là default.vue. 

	- middleware : Là nơi định nghĩa các function mà sẽ thực hiện trước khi render, function có thể áp dụng cho từng page, hoặc 1 nhóm pages

	- pages : Là thư mục chứa các page view. Nuxt sẽ đọc vào đây để tạo ra các router. Trong page có thể chỉ định layout đã khai báo ở layouts, nếu chỉ định sai hoặc không chỉ định thì nhận mặc định là default.vue. Nếu không tồn tại default layout thì vẫn render bình thường, chỉ dùng pages

	- plugins : Là nơi chứa các JS plugins, mà thực hiện trước khi khởi tạo ứng dụng Vue.js , là nơi mà đăng ký các component global, inject function, constants

	- static : Nơi chứa các file map với root server. Ví dụ: Access /A.txt = /static/A.txt

	- store : Nơi chứa các Vue Store files - TODO

	- nuxt.config.js : File cấu hình

	- package.json : Nơi chứa các dependency và scripts

4. Tìm hiểu về layout-pages
	- Nuxt sẽ tự động tạo 1 router tương ứng với pages
	- Nếu không có chỉ định layout cụ thể thì pages nhận layout mặc định

5. Cấu hình CSS global với nuxt.config
	- Trường hợp có nhiều layout nhưng muốn có CSS đồng nhất cho tất cả các layout thì có thể cấu hình trong nuxt.config
	- Có thể cấu hình bằng cách inport vào 1 CSS file
	- Lưu ý: Đối với file cấu hình thì cần phải re-start lại server

6. Tạo 1 component Navi và sử dụng

7. Dynamic routers
	- Giả đinh, chúng ta muốn hiển thị post theo Id được chỉ định, với mỗi id khác nhau sẽ hiển thị post tương ứng

8. Linking pages in Nuxt
	- Sử dụng nuxt-link
	- Có 2 cách link:
		- Link bởi URL			:to="`/post/${relatedPost.id}`"
		- Link bởi name 		:to="{name: 'index'}"

9. Store với Nuxt
	- Có 2 loại: Class và Module
	- Nuxt tự động inject store vào tất cả các component nên không cần phải khai báo

10. SEO and meta tag
	- Nuxt cho phép thiết lập SEO và meta tag bằng cách khai báo trong function head()

11. Build and deploy free
	- Heroku	- SSR
	- Netlify	- Pre-rendering
	
