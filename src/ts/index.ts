// @ts-expect-error
import $ from './cash.js';

// @ts-expect-error
import Vue from './vue.js';

var app = new Vue({
    el: '#app',
    data: {
        counter: 0
    }
});
