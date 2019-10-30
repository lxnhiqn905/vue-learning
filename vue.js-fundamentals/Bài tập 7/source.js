/* Component là khái niệm quan trọng trong Vue, nó cho phép xây dựng ứng dụng lớn từ các thành phần nhỏ*/
/* Nó cho phép tách ứng dụng ra nhiều phần nhỏ, chỉ giao tiếp qua props */
/* Khi cần maintain phần nào đó, chỉ càn chỉ sửa component tương ứng mà không ảnh hưởng đến cả ứng dụng */
/* Bản chất component cũng là một đối tượng trong Vue với key và properties, cho phép có các tùy chọn */
/* Cách khai báo như bên dưới, bao gôm component id và DOM sẽ được render */
/* Khi component được gọi, Vue sẽ thực hiện render DOM đã được khai báo trong component vào DOM element chứa component
    Vì vậy DOM element chứa component cần phải được được khai báo với Vue trước đó
    Nếu không, Vue sẽ không biết render vào đâu và sẽ bỏ qua */

/* Component để hiển thị 1 static text: This is page header */
Vue.component('page-header-component', {
    template: '<h1>SHOPPING LIST APPLICATION</h1>'
});
/* Khai báo DOM element chứa component để Vue quản lý */
/* Component khai báo được gọi trong DOM của đối tượng này */
new Vue({
    el: '#page-header-el'
})


/* Component hiển thị 1 text với tham số truyền vào và thực hiện uppercase */
/* Tham số truyền vào được khai báo trong props */
Vue.component('shopping-list-header', {
    props: ['text'],
    template: '<p>{{ text.toLocaleUpperCase() }}</p>'
})


/* Component hiển thị 1 text với tham số truyền vào là object và hiển thị name */
Vue.component('product-item-detail', {
    props: ['item'],
    template: '<li>{{ item.name }}</li>'
})


new Vue({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'Product list',
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