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
        /* Setting list default product */
        items: [{
                name: 'Product 1',
                /* Sử dụng để thực hiện dynamic class */
                buy: false,
                piority: true
            },
            {
                name: 'Product 2',
                buy: true,
                piority: false
            },
            {
                name: 'Product 3',
                buy: false,
                piority: false
            },
            {
                name: 'Product 4',
                buy: false,
                piority: false
            },
            {
                name: 'Product 5',
                buy: true,
                piority: false
            }
        ],
        newItem: '',
        newItemPlaceHolder: 'Add new product'
    },
    methods: {
        /* Push vào 1 object  */
        addItem: function() {
            this.items.push({
                name: this.newItem,
                buy: false,
                piority: false
            });
            this.newItem = '';
        },
        clearItem: function() {
            this.newItem = '';
        },
        changeState: function(state) {
            this.state = state;
        },
        /* Tạo method thay đổi giá trị của buy, kiếm chứng class */
        doBuy: function(item) {
            item.buy = !item.buy;
        }
    }
})