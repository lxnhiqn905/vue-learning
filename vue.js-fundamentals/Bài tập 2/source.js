new Vue({
    el: '#header',
    data: {
        text: 'Shopping List Application'
    }
})


new Vue({
    el: '#shopping-list',
    data: {
        header: 'Product list',
        items: [
            'Product 1',
            'Product 2'
        ],
        newItem: '',
        newItemPlaceHolder: 'Add new product'
    },
    /* Khai báo các method bằng methods */
    /* Mỗi method sẽ định danh bằng một tên */
    /* Xử lý của method sẽ được khai báo trong 1 function, 1 function bao gồm nhiều xử lý, làm cho việc xủ lý logic phức tạp trở nên dễ dàng hơn */
    methods: {
        /* Method addItem với 2 xử lý là add vào list và reset giá trị của newItem */
        addItem: function() {
            this.items.push(this.newItem);
            this.newItem = '';
        },
        /* Method reset giá trị của newItem */
        clearItem: function() {
            this.newItem = '';
        }
    }
})