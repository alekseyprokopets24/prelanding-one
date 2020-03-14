var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1;
var curr_year = d.getFullYear();
 

const date = document.querySelector('.date');
date.innerHTML = curr_date + '.' + curr_month + '.' + curr_year;
