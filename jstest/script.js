const p = console.log
const a = alert
const po = prompt


var hrf = location.href
var q = hrf.substring(hrf.indexOf("?")+1)




if (q == "new") {
  name = po("Введите ваше имя")
  login = po("Придумайте ваш логин")
  pswd = po("Придумайте пароль")
  data = `${name}|${pswd}`
  if (data == "null|null"){a("Ошибка создания аккаунта"); p(data)}
  else{
    localStorage.setItem(login, data)
    a("Аккаунт создан")

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
