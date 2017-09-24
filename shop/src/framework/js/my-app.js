// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;
var pickerDevice = myApp.picker({
    input: '#picker-device',
    value:['郑州科技学院'],
    cols: [
        {
            textAlign: 'center',
            values: ['郑州科技学院', '黄河科技学院', '郑州大学', '财经政法大学', '上海交通大学']
        }
    ]
});
