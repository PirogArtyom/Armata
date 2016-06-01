var kefir = "нет", ryazenka = "нет", yogurt = "да";
if (kefir == "да") {
	 document.write("Мы покупаем кефир");
}
else if (ryazenka == "да") {
	 document.write("Покупаем ряженку");
}
else if (yogurt == "да") {
	 document.write("Покупаем йогурт");
}
else {
	 document.write("Уходим из магазина");
}

var allowedreferrer = "http://htmlweb.ru/java/example.php";
if (document.referrer.indexOf(allowedreferrer) != -1) {
} else {
	 alert("Доступ на эту страницу возможен только с " + allowedreferrer);

	 function getSelText() {
		  var txt = '';
		  if (window.getSelection) {
				txt = window.getSelection();
		  } else if (document.getSelection) {
				txt = document.getSelection();
		  } else if (document.selection) {
				txt = document.selection.createRange().text;
		  }
		  return txt;
	 }

	 document.onkeypress = function () {
		  var e = arguments[0] || window.event;
		  var code = e.keyCode ? e.keyCode : (e.which ? e.which : e.charCode);
		  if (e.ctrlKey && code == 13) {
				var text = getSelText();
				alert(text);
		  }
	 }


	 message = "WEB-технологии"
	 ns6switch = 1
	 var ns6 = document.getElementById && !document.all
	 mes = new Array();
	 mes[0] = -1;
	 mes[1] = -4;
	 mes[2] = -7;
	 mes[3] = -10;
	 mes[4] = -7;
	 mes[5] = -4;
	 mes[6] = -1;
	 num = 0;
	 num2 = 0;
	 txt = "";
	 function jump0() {
		  if (ns6 && !ns6switch) {
				jump.innerHTML = message
				return
		  }
		  if (message.length > 6) {
				for (i = 0; i != message.length; i++) {
					 txt = txt + "<span style='position:relative;' id='n" + i + "'>" + message.charAt(i) + "</span>"
				}
				;
				jump.innerHTML = txt;
				txt = "";
				jump1a()
		  }
		  else alert("Очень короткое сообщение!")
	 }

	 function jump1a() {
		  nfinal = (document.getElementById) ? document.getElementById("n0") : document.all.n0
		  nfinal.style.left = -num2;
		  if (num2 != 9) {
				num2 = num2 + 3;
				setTimeout("jump1a()", 50)
		  }
		  else jump1b()
	 }

	 function jump1b() {
		  nfinal.style.left = -num2;
		  if (num2 != 0) {
				num2 = num2 - 3;
				setTimeout("jump1b()", 50)
		  }
		  else jump2()
	 }

	 function jump2() {
		  txt = "";
		  for (i = 0; i != message.length; i++) {
				if (i + num > -1 && i + num < 7)
					 txt = txt + "<span style='position:relative;top:" + mes[i + num] + "'>" + message.charAt(i) + "</span>"
				else txt = txt + "<span>" + message.charAt(i) + "</span>"
		  }
		  jump.innerHTML = txt;
		  txt = "";
		  if (num != (-message.length)) {
				num--;
				setTimeout("jump2()", 50)
		  }
		  else {
				num = 0;
				setTimeout("jump0()", 50)
		  }
	 }

</