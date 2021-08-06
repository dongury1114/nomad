var gugu = prompt("구구단 몇 단을 원하세요");
  if(!isNaN(gugu)){
    for(var i = 1; i<10; i++){
      document.write(gugu+"x"+i+"="+(i*gugu)+"</br>");
    }
  }