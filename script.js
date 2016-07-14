/**
 * Created by ад on 05.07.2016.
 */
/*
 1 задание
 Запросите у пользователя на сколько пикселей
 он бы хотел прокрутить данное окно по X и Y!
 После получения данных от пользователя прокрутите окно на заданные значения!
 */

var x=prompt('Enter x');
var y=prompt('Enter y');

window.scrollBy(x,y);


/*
2 задание

Создайте документ в котором будет 4 ifame элемента.
Выведите все iframe документа в консоль через методы
доступа у window! (через цыкл можно например)*/

for (i=0; i<frames.length;i++)
{
    console.log(frames[i]);
}
console.log(frames.length);


/*
3 задание

 Создайте iframe в документе и еще пару элементов в body, 
 в переменной сохраните ссылку на iframe, 
 и через iframe удалите все элементы которые есть в DOM body кроме iframe
 */
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    </head>
    <body>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    <div class="five"></div>
    <iframe src="http://habrahabr.ru/" frameborder="0" id="ifr"></iframe>

    <script>
var l=document.body.children.length;
for (i=0; i<l; i++)
{

    var ifrm = document.getElementById('ifr').previousElementSibling;
    ifrm.remove()

}

</script>
</body>
</html>
/*
4 задание

На события загрузки контента в iframe создайте новый div элемент
через JS и добавьте его в конец документа, в нем должен быть текст: "Iframe загрузился!"
 */

<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    </head>
    <body>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    <div class="five"></div>
    <iframe src="http://habrahabr.ru/" frameborder="0" id="ifram"></iframe>

    <script>
var iframe=document.getElementById('ifram')
iframe.onload = function() {

        var div = document.createElement('div');
        document.body.appendChild(div);
        div.className = "six";
        div.innerHTML = "Iframe загрузился!";
    }

    </script>
    </body>
    </html>


/*
 5 задание

 Создайте новый документ (через window.open) который будет шириной в 400,
 высота 500, без строки url адреса, с видимым статусом, окно должно иметь возможность
 растягиватся по ширине и высоте и в нем должны присутствовать полосы прокурутки!
 */
var newWin = window.open("http://bbc.com","JSSite",

    "width=400,height=500,resizable=yes,location=no, scrollbars=yes,status=yes")

newWin()



/*6 задание

 Откройте новое окно (через window.open) в котором откройте google поиск 
 и через 5 секунд закройте вкладку и выдайте сообщение пользователю 
 что у вас было 5 секунд но вы не успели ничего найти и окно закрылось!)*/



var newWin = window.open("http://google.com","Google");

setTimeout(function (){


    newWin.close();
    alert ('У вас было 5 секунд но вы не успели ничего найти и окно закрылось!')
}, 5000)


/*
 7 задание

 В документе создайте блок в котором вы будете заполнять информацию о браузере
 и платформе пользователя! Выведите пользователю информацию о его браузере и о платформе на которой он работает!
*/


var infoBlock=document.createElement('div');
document.body.appendChild(infoBlock);

var plt=navigator.platform;
var brws=navigator.userAgent;
infoBlock.innerHTML='Платформа '+plt +' и браузер ' + brws;

/*8 задание

 Создайте в документе 5 блоков div в которых будет записано
 названия браузеров (Chrome, Safari, FireFox, Opera, IE)
 И в зависимости от того каким браузером пользуется клиент
 вы должны показывать только тот блок который соответствует
 браузер пользователя. Все остальные блоки должны быть скрыты!*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <title>Title</title>
</head>
<body>

<div id="Opera">Opera</div>
<div id="Firefox">Firefox</div>
<div id="Safari">Safari</div>
<div id="IE">Firefox</div>
<div id="Edge">Edge</div>
<div id="Chrome">Chrome</div>


<style>
    div{
    display: none;
    height:100px;
    width: 500px;
    background-color: #ff5190;
    margin: 20px;
}
</style>

<script>
    /*8 задание

     Создайте в документе 5 блоков div в которых будет записано названия браузеров (Chrome, Safari, FireFox, Opera, IE)
     И в зависимости от того каким браузером пользуется клиент вы должны показывать только тот блок который соответствует
     браузер пользователя. Все остальные блоки должны быть скрыты!*/

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;




    if (isOpera)
    {document.getElementById('Opera').style.display = 'block'}
    else if (isFirefox)
    {document.getElementById('Firefox').style.display = 'block'}
    else  if  (isSafari)
    {document.getElementById('Safari').style.display = 'block'}
    else if (isIE)
    {document.getElementById('IE').style.display = 'block'}
    else if (isEdge)
    {document.getElementById('Edge').style.display = 'block'}
    else if (isChrome)
    {document.getElementById('Chrome').style.display = 'block'}
    //alert( document.cookie );
    console.log(isChrome)

    document.addEventListener("DOMContentLoaded", ready);
</script>

</body>
</html>

/*9 задание

 Проверьте подключены ли у пользователя Coockie? 
 Если да то выведите: "Вы используете coockie, вы молодец", 
 а если нет выведите: "Для посещения страницы сайта подключите coockie"*/
if(window.navigator.cookieEnabled)
    {alert('Молодец!!')}
    else
    {alert("Для посещения страницы сайта подключите coockie!")}


/*10 задание

 Проверьте версию браузера пользователя,
 если версия последняя ничего не делайте если версия не последняя
 выведите окно с ссылкой на скачивание новой версии браузера!*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <title>Title</title>
</head>
<body>


<script>
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName  = navigator.appName;
    var fullVersion  = ''+parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion,10);
    var nameOffset,verOffset,ix;

    // In Opera 15+, the true version is after "OPR/"
    if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset+4);
}
    // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset+6);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
    fullVersion = nAgt.substring(verOffset+8);
}
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset+5);
}
    // In Chrome, the true version is after "Chrome"
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset+7);
}
    // In Safari, the true version is after "Safari" or after "Version"
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset+7);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
    fullVersion = nAgt.substring(verOffset+8);
}
    // In Firefox, the true version is after "Firefox"
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset+8);
}
    // In most other browsers, "name/version" is at the end of userAgent
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
    (verOffset=nAgt.lastIndexOf('/')) )
    {
        browserName = nAgt.substring(nameOffset,verOffset);
        fullVersion = nAgt.substring(verOffset+1);
        if (browserName.toLowerCase()==browserName.toUpperCase()) {
        browserName = navigator.appName;
    }
    }
    // trim the fullVersion string at semicolon/space if present
               if ((ix=fullVersion.indexOf(";"))!=-1)
    fullVersion=fullVersion.substring(0,ix);
    if ((ix=fullVersion.indexOf(" "))!=-1)
    fullVersion=fullVersion.substring(0,ix);

    majorVersion = parseInt(''+fullVersion,10);
    if (isNaN(majorVersion)) {
    fullVersion  = ''+parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion,10);
}


                    if
                    (browserName=='Opera')
                    {
                        if (+majorVersion <38) {alert('Обновите свой браузер на http://www.opera.com/ru')}
                    }

                    else if

                    (browserName=='Chrome')
                    {
                        if (+majorVersion <50) {alert('Обновите свой браузер на https://www.google.ru/chrome/browser/desktop/index.html')}
                    }

                    else if

                    (browserName=='Firefox')
                    {
                        if (+majorVersion <47) {alert('Обновите свой браузер на https://www.mozilla.org/ru/firefox/new/')}
                    }


                    else if

                    (browserName=='Microsoft Internet Explorer')
                    {
                        if (+majorVersion <11) {alert('Обновите свой браузер на https://support.microsoft.com/en-us/help/17621/internet-explorer-downloads')}
                    }

                    else if

                    (browserName=='Safari')
                    {
                        if (+majorVersion <5) {alert('Обновите свой браузер на http://safari.ru.softonic.com/')}
                    }





</script>

</body>
</html>


/*
 11 задание

 Проверьте высоту и ширину экрана пользователя!
  Если она меньше чем 1366х800 то подставьте в body класс "little-screen",
  в другом случае добавьте класс "big-screen"! */

if (window.screen.height <1366 && window.screen.width<800)
{
    document.body.className="little-screen";
}
else    {
    document.body.className="big-screen";
}


/*
 12 задание

 Создайте отдлельный проект в котором будет 4 страницы
 и меню со ссылками на эти 4 страницы!

 Создайте 2 кнопки которые будут делать переходы по истории!
 Будeт 2 кнопки: 1 - "Назад", 2 - "Вперед"!

 При клике на кнопку вперед вы будете направлять пользователя
 по истории на 1 вперед, при клике назад будете направлять пользователя назад!

 Клик на кнопке можно прописать таки образом:

 <button onclick=whenGoBack>Назад</button>
 <button onclick=whenGoForward>Вперед</button>
 теперь можно написать

 funtion whenGoBack () {
 // тут делаем что то когда будем кликать на кнопку Назад
 }

 funtion whenGoForward () {
 // тут делаем что то когда будем кликать на кнопку Вперед
 }
 */

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <title>Title</title>
</head>
<body>

<p>INDEX 1</p>

<button onclick=whenGoBack()>Назад</button>
<button onclick=whenGoForward()>Вперед</button>


<ul>
    <li><a href="index1.html">INDEX 1</a></li>
    <li><a href="index2.html">INDEX 2</a></li>
    <li><a href="index3.html">INDEX 3</a></li>
    <li><a href="index4.html">INDEX 4</a></li>
</ul>


<style>
    p{
    font-size:48px;
    font-weight:bold;
}
</style>

<script>

    function whenGoForward() {
    window.history.forward();
}


    function whenGoBack() {
    window.history.back();
}

    document.addEventListener("DOMContentLoaded", ready);

</script>


</body>
</html>


/*
13 задание

Выведите в документе информацию пользователю:
"Page hostname is " + hostname ( вы тут должны вывести номер порта )*/

prt = location.port;
if (location.port==''){prt=80};

document.write(''+'Page hostname is ' +prt);