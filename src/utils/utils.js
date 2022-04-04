function checkMail(mail) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(mail);
}

export {
    checkMail
}