const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
module.exports = Mock.mock({
    "code":200,
    "data":{
        "seckillData|10":{
            time:"2019-11-11 00:00:00",
            "list|10":[{
                "url":"#",
                "newPrice":Random.float(60, 100, 2, 2),
                "oldPrice":Random.float(30, 60, 2, 2),
                "imgUrl":Random.image('750x750',Random.color())
            }]
        }
    }
})