const p = console.log
const a = alert
const po = prompt

// function getDivisors(num) {
//   temp = []
//   key = 0
//   while (key!=num+1){
//     key++
//     if (num%key == 0){
//       temp.push(key)
//     }
//   }
//   return temp
//
// }
//
//
//
// while (true) {
//   inp = Number(po("Введите число"))
//   ret = getDivisors(inp)
//   a(`Число ${inp} делится на: ${ret.join(", ")}`)
// }

var hrf = location.href
var q = hrf.substring(hrf.indexOf("?")+1)




if (q == "new") {
  name = po("Введите ваше имя")
  login = po("Придумайте ваш логин")
  pswd = po("Придумайте пароль")
  data = `${name}|${pswd}`
  if (data == "null|null"){""}
  else{
    localStorage.setItem(login, data)

  }

}


if (q == "auth"){
  login = po("Введите логин")
  auth = localStorage.getItem(login);
  if (auth == null){
    a("Аккаунт не найден")
  } else {
    auth = auth.split("|")
    pass = po("Введите ваш пароль")
    if (pass == auth[1]){
      a("Добро пожаловать, "+auth[0])
    } else {
      a("Пароль неверный")
    }
  }



}
