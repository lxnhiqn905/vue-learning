/* 
Khai báo đối tượng Vue, apply cho element có id là header, đến đây, DOM và dữ liệu đã được liên kết với nhau thông qua VUE
Data item thì khai báo trong data section, cấu trúc JSON
*/

/* Tạo một đối tượng Vue */
new Vue({
    /* HTML element id */
    el: '#header',
    /* data của đối tượng Vue*/
    data: {
        /* data item*/
        text: 'Shopping List Application'
    }
})


/* Tạo một đối tượng Vue */
new Vue({
    /* HTML element id */
    el: '#shopping-list',
    data: {
        /* data item*/
        header: 'Product list',
        /* data item kiểu aray*/
        items: [
            'Product 1',
            'Product 2'
        ],
        /* data item dùng cho event click */
        newItem: '',
        /* data item dùng bind vào HTML placeholder attribute */
        newItemPlaceHolder: 'Add new product'
    }
})