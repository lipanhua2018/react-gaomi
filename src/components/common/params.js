
// const params = new Map();

// function getPatams (key) {
//     return params.get(key)
// }

function Params () {
    let mapData = new Map();

    this.getParams = function (key) {
        if (mapData.has(key)) {
            mapData.get(key)
        }
    }

    this.setParams = function (key, value) {
        try {
            if (key === '') {
                throw 'key值不可以为空字符串';
            }
            mapData.set(key, value);          
        } catch (e) {
            console.log(e)
        }
    }

    this.deleteParams = function (key) {
        if (mapData.has(key)) {
            mapData.delete(key)
        }       
    }

}

export default Params