const express = require('express')
const app = express()

app.get('/user', (req, res) => {
  res.send({ name: '黄--', title: '测试' })
})

app.post('/home', (req,res) => {
  res.send('2222111111发22送成2222功')
})

// 获取路径携带参数

app.get('/index', (req,res) => {
  res.send(req.query)
})

app.get('/index/:id', (req,res) => {
  res.send(req.params)
})

app.use('./file', express.static('./file'))
app.listen(80, () => {
  console.log('running at http://127.0.0.1')
})