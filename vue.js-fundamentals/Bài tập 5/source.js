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
    /* 
    computed là thuộc tính thể hiện sự mạnh mẽ của Vue
    Cách khai báo nó như một function và có trả về cái gì đó
     */
    computed: {
        /* Xửu lý count số ký tự đã được nhập vào item newItem */
        characterCount() {
            return this.newItem.length;
        },
        /* 
        Một computed khác,
        Đảo ngược array chứa danh sách product để cái mới nhất sẽ hiển thị lên đầu tiên
        */
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
    }
})