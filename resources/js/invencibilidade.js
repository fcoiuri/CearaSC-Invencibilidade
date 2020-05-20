var data = new Date()
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2019, 12, 04);
const secondDate = new Date(data.getFullYear(), data.getMonth() + 1, data.getDate());
const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)) + 1

document.write(`O Ceará está invicto há ${diffDays} dia(s)`)
document.write("<br>")

const week = Math.floor(diffDays / 7)
const dias_rw = diffDays % 7
document.write(`${week} semanas e ${dias_rw} dia(s)`)
document.write("<br>")

const ano = 0
const mes = Math.floor(diffDays / 30)
const dias_rm = (diffDays % 30) - 2
document.write(`${ano} ano(s), ${mes} mes(es) e ${dias_rm} dia(s)`)