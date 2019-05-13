let store = {
    dataType: function (type){  // 检测数据类型
        var dataType = Object.prototype.toString;
            return dataType.call(type)
    },
    setParams: (key, value) => {
        if (store.dataType(value) !== '[object String]') {
            localStorage.setItem(key, JSON.stringify(value))
        } else {
            localStorage.setItem(key, value)
        }        
    },
    getParams: function (key) {
        return localStorage.getItem(key);     
    },
    deleteParams: function (key) {
        if (store.getParams(key)) {
            localStorage.removeItem(key)
        } else {
            console.log('storage中并没有存储' + key)
        }
    }
}

export default store;