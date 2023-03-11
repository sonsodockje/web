const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// http 메소드 , 라우팅 , 콜백함수
// get 요청 : 주소창
// post 요청 : 주소창X



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// port 란? 선착상의 개념
// 들어가야 하는 자리 , 들어갈 수 있는 입구
// 서버의 주소, 포트 등이 들어오는 입구
// 특정 포트로 들어감

// 로컬 호스트 > 내컴퓨터 아이피



