const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
module.exports = Mock.mock({
    "code":200,
    "data":{
        "banner|5":[{
            "url":"#",
            "imgUrl":Random.image('750x750',Random.color())
        }]
    }
})