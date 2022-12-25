var $overLay = document.querySelector('#overlay');
var $survey = document.querySelector('#survey');
var $openButton = document.querySelector('.button-open-modal');
var $buttonNo = document.querySelector('.button-no');
$openButton.addEventListener('click', modal);
$buttonNo.addEventListener('click', hello);

function modal(event) {
  $overLay.className = 'overlay';
  $survey.className = 'survey';
}

function hello(event) {
  $overLay.className = 'no-overlay';
  $survey.className = 'survey none';
}
