var baseBet = 100;
var base = 100;
var lossCombo = 0;
var latestResult = '';
var isRunning = false;

var interval = setInterval(()=>{
  if(document.querySelector('.game-control-panel')) {
    var Btn = document.createElement('button');
    Btn.id = '3xBtn';
    Btn.innerHTML = 'x3';

    var resetBtn = document.createElement('button');
    resetBtn.innerHTML = '/3';

    document.querySelector('.game-control-panel .m1xasar5 .game-coininput .input-control .button-group .t11i7rl9').before(resetBtn);
    document.querySelector('.game-control-panel .m1xasar5 .game-coininput .input-control .button-group .t11i7rl9').before(Btn);
    
    Btn.onclick = Increase;
    resetBtn.onclick = Reset;

    // var baseBet = document.createElement('div');
    // baseBet.classList.add('ui-input');
    // baseBet.classList.add('small');
    // baseBet.classList.add('cu6byd0'); 
    // var labelDiv = document.createElement('div');
    // labelDiv.classList.add('input-label'); labelDiv.innerHTML = 'Base Bet';
    // var inputDiv = document.createElement('div');
    // inputDiv.classList.add('input-control');
    // var baseInput = document.createElement('input');
    // baseInput.value = '100'; baseInput.type = 'text';
    // inputDiv.appendChild(baseInput);
    // baseBet.appendChild(labelDiv);
    // baseBet.appendChild(inputDiv);
    // document.querySelector('.game-control-panel .m1xasar5 .is-disabled').after(baseBet);

    var doubleBet = document.createElement('button');
    doubleBet.classList.add('ui-button');
    doubleBet.classList.add('button-big');
    doubleBet.classList.add('s-conic');
    doubleBet.classList.add('bet-button');
    var textDiv = document.createElement('div');
    textDiv.innerHTML = 'Double Bet';
    textDiv.classList.add('button-inner');
    doubleBet.appendChild(textDiv);
    document.querySelector('.game-control-panel .m1xasar5').appendChild(doubleBet);
    doubleBet.onclick = Double;

    var returnBase = document.createElement('button');
    returnBase.classList.add('ui-button');
    returnBase.classList.add('button-big');
    returnBase.classList.add('s-conic');
    returnBase.classList.add('bet-button');
    var text = document.createElement('div');
    text.innerHTML = 'Return Base';
    text.classList.add('button-inner');
    returnBase.appendChild(text);
    document.querySelector('.game-control-panel .m1xasar5').appendChild(returnBase);
    returnBase.onclick = baseReturn;

    clearInterval(interval);
  }
}, 2000)


function Increase() {
  var inputBox = document.querySelector('.game-coininput').lastChild.firstChild;
  inputBox.select();
  var current_value = inputBox.value;
  baseBet = current_value * 3;
  inputBox.value = baseBet;
  var event = new Event('change', { bubbles: true });
  inputBox.dispatchEvent(event);
  inputBox.blur();
}

function Reset() {
  var inputBox = document.querySelector('.game-coininput').lastChild.firstChild;
  inputBox.select();
  var current_value = inputBox.value;
  baseBet = current_value / 3;
  inputBox.value = baseBet;
  var event = new Event('change', { bubbles: true });
  inputBox.dispatchEvent(event);
  inputBox.blur();
}

function Double() {
  var inputBox = document.querySelector('.game-coininput').lastChild.firstChild;
  inputBox.select();
  var current_value = inputBox.value;
  baseBet = current_value * 2;
  inputBox.value = baseBet;
  var event = new Event('change', { bubbles: true });
  inputBox.dispatchEvent(event);
  inputBox.blur();
  var evnt = new Event('click', { bubbles: true });
  document.querySelector('.game-control-panel .m1xasar5 .bet-button').dispatchEvent(evnt);
}

function baseReturn() {
  var inputBox = document.querySelector('.game-coininput').lastChild.firstChild;
  inputBox.select();
  inputBox.value = base;
  var event = new Event('change', { bubbles: true });
  inputBox.dispatchEvent(event);
  inputBox.blur();
  var evnt = new Event('click', { bubbles: true });
  document.querySelector('.game-control-panel .m1xasar5 .bet-button').dispatchEvent(evnt);
}