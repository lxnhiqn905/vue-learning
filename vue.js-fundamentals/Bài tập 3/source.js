new Vue({
    el: '#header',
    data: {
        text: 'Shopping List Application'
    }
})


new Vue({
    el: '#shopping-list',
    data: {
        /* Thêm một biến để điều khiển */
        /* Mặc định là default, thành edit khi có sự kiện */
        state: 'default',
        header: 'Product list',
        /* Setting default list is empty */
        items: [],
        newItem: '',
        newItemPlaceHolder: 'Add new product'
    },
    methods: {
        addItem: function() {
            this.items.push(this.newItem);
            this.newItem = '';
        },
        clearItem: function() {
            this.newItem = '';
        },
        /* Tạo method có tham số để thay đổi trang thái */
        changeState: function(state) {
            this.state = state;
        }
    }
})