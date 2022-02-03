const headerContacts = $('.header-contacts')[0]; 
const phoneCode = $(headerContacts).find('.phone-code')[0]; 
const fontSize = $(phoneCode).css('fontSize'); 
const smallFontSize = `${+(fontSize.replace(/px/g, '')) / 2}px`; 
const sides = $(headerContacts).html().split(/\([a-zA-Z]+\)/g); 
const phoneMask = '###-##-##'; 

const operatorCode = $(phoneCode).html().match(/\(\d+\)/g)[0]; 
const newOperatorCode = $('<span />').html(operatorCode).css({'fontSize': smallFontSize, 'fontWeight':'800'})[0].outerHTML;
let temp = sides[0].replace(/\(\d+\)/g, newOperatorCode); 
temp = $('<div />').html(temp).css({'margin': '10px', 'display': 'inline-block'})[0].outerHTML; 
const phoneNumber = temp.match(/\d+-\d+-\d+/g)[0].split('-').join(''); 
const newPhoneFormat = format(phoneNumber, phoneMask); 
temp = temp.replace(/\d+-\d+-\d+/g, newPhoneFormat); 
$(headerContacts).html(temp + sides[1]);

function format(value, pattern) {
    let i = 0; 
    let v = value.toString(); 
    return pattern.replace(/#/g, _ => v[i++]); 
}