
do{


let age = +prompt('Yoshingizni kiriting!')

if (isNaN(age)){
    alert('Siz son kiritmadingiz!')
}else if(age <= 18){
    alert('Oqishingiz kerak!')
}else if(age <= 30){
    alert('Ishga kirishingiz kerak!')
}else if(age <= 50){
    alert('Tez orada nafaqaga chiqasiz!')
}else if(age <= 70){
    alert('Siz nafraqaga chiqdingiz!')
}else if(age <= 100){
    alert('Siz dam olishingiz kerak!')
}


}while(age = 100){
    alert('Siz dam olishingiz kerak!')
}