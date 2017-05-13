document.addEventListener('DOMContentLoaded', function() {
  const vid = document.getElementById("theVideo");
  const span1 = document.querySelector('span#span1');
  const span2 = document.querySelector('span#span2');
  const span3 = document.querySelector('span#span3');
  const span4 = document.querySelector('span#span4');
  const span5 = document.querySelector('span#span5');
  const span6 = document.querySelector('span#span6');
  const span7 = document.querySelector('span#span7');
  const span8 = document.querySelector('span#span8');
  const span9 = document.querySelector('span#span9');
  const span10 = document.querySelector('span#span10');
  const span11 = document.querySelector('span#span11');
  const span12 = document.querySelector('span#span12');
  const span13 = document.querySelector('span#span13');
  const span14 = document.querySelector('span#span14');
  const span15 = document.querySelector('span#span15');
  const span16 = document.querySelector('span#span16');

  function blacken() {
    span1.style.color = 'black';
    span2.style.color = 'black';
    span3.style.color = 'black';
    span4.style.color = 'black';
    span5.style.color = 'black';
    span6.style.color = 'black';
    span7.style.color = 'black';
    span8.style.color = 'black';
    span9.style.color = 'black';
    span10.style.color = 'black';
    span11.style.color = 'black';
    span12.style.color = 'black';
    span13.style.color = 'black';
    span14.style.color = 'black';
    span15.style.color = 'black';
    span16.style.color = 'black';
  }

  vid.addEventListener('timeupdate', function(){
    const curTime = vid.currentTime;
    if (curTime > 0 && curTime < 4.12 ) {
      span1.style.color = '#ffba0a';
    }
    else if (curTime > 4.12 && curTime < 7.53) {
      blacken();
      span2.style.color = '#ffba0a';
    }
    else if (curTime > 7.53 && curTime < 11.27) {
      blacken();
      span3.style.color = '#ffba0a';
    }
    else if (curTime > 11.27 && curTime < 13.96) {
      blacken();
      span4.style.color = '#ffba0a';
    }
    else if (curTime > 13.96 && curTime < 17.94) {
      blacken();
      span5.style.color = '#ffba0a';
    }
    else if (curTime > 17.94 && curTime < 22.37) {
      blacken();
      span6.style.color = '#ffba0a';
    }
    else if (curTime > 22.37 && curTime < 26.88) {
      blacken();
      span7.style.color = '#ffba0a';
    }
    else if (curTime > 26.88 && curTime < 30.92) {
      blacken();
      span8.style.color = '#ffba0a';
    }
    else if (curTime > 32.10 && curTime < 34.73) {
      blacken();
      span9.style.color = '#ffba0a';
    }
    else if (curTime > 34.73 && curTime < 39.43) {
      blacken();
      span10.style.color = '#ffba0a';
    }
    else if (curTime > 39.43 && curTime < 41.19) {
      blacken();
      span11.style.color = '#ffba0a';
    }
    else if (curTime > 42.35 && curTime < 46.3) {
      blacken();
      span12.style.color = '#ffba0a';
    }
    else if (curTime > 46.3 && curTime < 49.27) {
      blacken();
      span13.style.color = '#ffba0a';
    }
    else if (curTime > 49.27 && curTime < 53.76) {
      blacken();
      span14.style.color = '#ffba0a';
    }
    else if (curTime > 53.76 && curTime < 57.78) {
      blacken();
      span15.style.color = '#ffba0a';
    }
    else if (curTime > 57.78 && curTime < 100.15) {
      blacken();
      span16.style.color = '#ffba0a';
    }
  });

  span1.addEventListener('click', function(){
    vid.currentTime = 0.24;
    blacken();
  });
  span2.addEventListener('click', function(){
    vid.currentTime = 4.13;
    blacken();
  });
  span3.addEventListener('click', function(){
    vid.currentTime = 7.53;
    blacken();
  });
  span4.addEventListener('click', function(){
    vid.currentTime = 11.27;
    blacken();
  });
  span5.addEventListener('click', function(){
    vid.currentTime = 13.96;
    blacken();
  });
  span6.addEventListener('click', function(){
    vid.currentTime = 17.94;
    blacken();
  });
  span7.addEventListener('click', function(){
    vid.currentTime = 22.37;
    blacken();
  });
  span8.addEventListener('click', function(){
    vid.currentTime = 26.88;
    blacken();
  });
  span9.addEventListener('click', function(){
    vid.currentTime = 32.1;
    blacken();
  });
  span10.addEventListener('click', function(){
    vid.currentTime = 34.73;
    blacken();
  });
  span11.addEventListener('click', function(){
    vid.currentTime = 39.43;
    blacken();
  });
  span12.addEventListener('click', function(){
    vid.currentTime = 42.35;
    blacken();
  });
  span13.addEventListener('click', function(){
    vid.currentTime = 46.3;
    blacken();
  });
  span14.addEventListener('click', function(){
    vid.currentTime = 49.27;
    blacken();
  });
  span15.addEventListener('click', function(){
    vid.currentTime = 53.76;
    blacken();
  });
  span16.addEventListener('click', function(){
    vid.currentTime = 57.78;
    blacken();
  });
});
