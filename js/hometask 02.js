
/^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,5}$/ // проверка электронной почты

function checkValidMail (mail) {
    const regExp = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,5}$/
    return regExp.test (mail)
}
    console.log(checkValidMail('anastrand18@gmail.com'))
    console.log(checkValidMail('anastrand+18@gmail.com'))
    console.log(checkValidMail('anastrand_27@gmail.com'))
    console.log(checkValidMail('anastrand27@yandex,ru'))

/^(((0[1-9]|[12][0-9]|3[01])\.(0[13578]|1[02]))|((0[1-9]|[12][0-9]|30)\.(0[469]|11))|((0[1-9]|1[0-9]|2[0-8])\.02))\.[0-9]{4}$/ // проверка даты

function checkValidDate (date) {
    const regExp = /^(((0[1-9]|[12][0-9]|3[01])\.(0[13578]|1[02]))|((0[1-9]|[12][0-9]|30)\.(0[469]|11))|((0[1-9]|1[0-9]|2[0-8])\.02))\.[0-9]{4}$/
    return regExp.test (date)
}
    console.log(checkValidDate('12.12.2012'))
    console.log(checkValidDate('30.02.1998'))
    console.log(checkValidDate('31.04.2000'))
    console.log(checkValidDate('25.04.19455'))
    console.log(checkValidDate('30.30.2025'))