Lession: https://vueschool.io/lessons/getting-started-with-vuejs
Reference: https://vi.vuejs.org/v2/guide/

1. Tổng quan
	- Vue là JS framework, hiệu suất và cải tiến
	- Về hiệu suất, cần lưu ý 2 điểm
		- Khả năng render, so sánh với Angular và React thì Vue có tốc độ render nhanh hơn, đáp ứng request nhanh hơn.
		- Về mặt development, line of code của Vue ít hơn, nhờ đó mà năng suất development tăng lên.
	- Về cải tiến: Vue kết hợp các điểm mạnh của Angular và React để tạo nên framework với đầy đủ các tính năng và dễ development, chi tiết:
		- Angular: Bản thân nó là 1 framework rất lớn, chứa rất nhiều tính năng, xảy ra tình trạng dư thừa tính năng nếu chỉ build Front-End với Angular, Vue tận dụng khả năng template render của Angular để tách HTML và JS
		- React: Bản thân nó có nhiều cú pháp mạnh mẽ và dễ sử dụng, tuy nhiên nó lại viết code HTML trong file JS, điều này làm cho nó hạn chế các tính năng của HTML, có nhiều developer không thích điều này. Vue tận dụng cú pháp và tách HTML và JS để giải quyết vấn đề trên.

2. Khái niệm chính trong Vue cần nắm
	=> Hãy đọc tuần tự bài tập 1 - 6 để nắm các khái niệm dưới đây
	- 1. Cú pháp 						{{ }}
	- 1. Loop 							v-for
	- 1. Model - Two way binding 		v-model
	- 1. Events 						v-on / @
	- 2. Methods 						methods attribute
	- 3. Conditional  					v-if / v-else
	- 4. Attribute binding 				v-bind / :
	- 4. Dynamic classes 				Kết hợp Attribute binding và regexsion
	- 5. computed 						computed attribute
	- 6. Created  						created attribute
	- 7. Components						Create component, binding data, class attribute