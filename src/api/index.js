const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

export default Mock.mock({
    "code":code,
    "data":{
        "banner|5":[{
            "url":"#",
            "imgUrl":Random.image('750x750',Random.color())
        }],
        "seckillData|10":{
            time:"2019-11-11 00:00:00",
            "list|10":[{
                "url":"#",
                "newPrice":Random.float(60, 100, 2, 2),
                "oldPrice":Random.float(30, 60, 2, 2),
                "imgUrl":Random.image('750x750',Random.color())
            }]
        },
        "recommendData|10":[{
            "url":"#",
            "imgUrl":Random.image('750x750',Random.color()),
            "title":Random.csentence(20),
            "price":Random.float(30, 2000, 2, 2),
            "buyCount":Random.integer(100, 2000)
        }],
        "cartTotal":Random.integer(0, 30),
        "mineTip":Random.integer(0, 30)
    }
})