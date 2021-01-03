const btn = $('.btn');
const btn2 = $('.btn2');
let str = $('.countarea').text()
const semeArr=[...`；、-～！＠＃＄％＾＆＊（）』『”：？。，｜○…—~!@#$%^&*(){}|":?><,./'[]\「」'*;`]
const numArr=[]
for(let i=0;i<10;i++){ numArr.push(`${i}`);}
let strArr = []

//=============when input words============//
$('.typearea').on('input',function(){
$('.countarea').text($('.typearea').val());
$('.typearea').html($('.typearea').val());
renewStr();

})
//=============animation, basic functions============//
$('.showtext.arrow').click(()=>{
    $('.countsec').toggleClass('open')
    $('.countarea').toggleClass('open')
    $('.showtext.arrow').toggleClass('open')
}
)

function renewStr(){
    str = $('.countarea').text()
    strArr = [...str]
    $('.countarea').text(strArr.join(""))
    }

function showText(){
    $('.countarea').text(strArr.join(""))
    console.log(strArr)
    }

function removeFunc(el){
    while (strArr.indexOf(el)>-1){strArr.splice(strArr.indexOf(el),1);}
    }
//======clear word======//
$('.word-clear').click(()=>{
    str='';
    strArr.length=0;
    $('.typearea').val("");
    $('.countarea').text("");
    $('span','.wordcount').text("")
})
//=========remove space===========//
$('.remove-space').on('click',()=>{
    renewStr();
    removeFunc(" ");
    showText();
})

//=========remove semetics=========//
$('.remove-seme').on('click',()=>{
    renewStr();
    $(semeArr).each((idx,el)=>removeFunc(el))
    showText();
})
//=========remove numbers==========//

$('.remove-num').on('click',()=>{
    renewStr()
    $(numArr).each((idx,el)=>removeFunc(el))
    showText();
})
  
//===========remove url============//
$('.remove-link').on('click',()=>{
   renewStr();
   let pattern = /(http:|https:|www)([a-zA-Z0-9\.\/\=\?\#\&])+(\s)/g;
   str=str.replace(pattern,'')
   strArr=[...str]
   showText();
})
//===============count-cubic============//
$('.count').on('click',()=>{
    renewStr()
    $('span','.wordcount').text(strArr.length)
})
//===============count-letter============//
$('.count-letter').on('click',()=>{
    strArr=str.split(' ')
    $('.countarea').text(strArr.join(" "))
    $('span','.wordcount').text(strArr.length)
})
//=======one click clear=======//
$('.one-click.cubicLang').on('click',()=>{
    renewStr();
    var pattern = /(http:|https:|www)([a-zA-Z0-9\.\/\=\?\#\&])+(\s)/g;
   str=str.replace(pattern,'')
   strArr=[...str]
   removeFunc(" ");
   $(semeArr).each((idx,el)=>removeFunc(el));
   $(numArr).each((idx,el)=>removeFunc(el));
   showText();
   $('span','.wordcount').text(strArr.length)
})

$('.one-click.letterLang').on('click',()=>{
    str = $('.typearea').text()
    $('.countarea').text(str)
    const patternUrl = /(http:|https:|www)([a-zA-Z0-9\.\/\=\?\#\&])+(\s)/g;
    const patternSeme = /[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+/g;
    const patternNum = /[0-9]+/g;
   str=str.replace(patternUrl,'')
   str=str.replace(patternSeme,'')
   str=str.replace(patternNum,'')
   strArr=str.split(' ')
   $('.countarea').text(strArr.join(" "))
   console.log(strArr)
   
   $('span','.wordcount').text(strArr.length)
})


//Regex Resource:
//Regulex   Regexr
