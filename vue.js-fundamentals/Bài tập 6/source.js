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
        /* Khởi tạo là một array trống, nó sẽ có dữ liệu khi khởi tạo đối tượng Vue */
        /* Tham chiếu đến created() */
        items: [],
        newItem: '',
        newItemPlaceHolder: 'Add new product'
    },
    computed: {
        characterCount() {
            return this.newItem.length;
        },
        reverseItems() {
            return this.items.slice(0).reverse();
        }
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
        doBuy: function(item) {
            item.buy = !item.buy;
        }
    },
    /* Vue cung cấp phương thức để tạo dữ liệu khi khởi tạo model */
    /* Thực hiện khởi tạo giá trị cho items */
    /* Khi development thực sự, thay vì giá trị tĩnh hãy làm sao để gọi đến API */
    created() {
        this.items = [{
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
            },
            {
                name: 'Product 6',
                buy: false,
                piority: false
            },
            {
                name: 'Product 7',
                buy: false,
                piority: false
            }
        ];
    }
})