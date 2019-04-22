const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
module.exports = Mock.mock({
    "code":200,
    "data":{
        "recommendData|10":[{
            "url":"#",
            "imgUrl":Random.image('750x750',Random.color()),
            "title":Random.csentence(20),
            "price":Random.float(30, 2000, 2, 2),
            "buyCount":Random.integer(100, 2000)
        }]
    }
})