'use strict';

var modalMap = document.querySelector('.modal-map');
var modalWrite = document.querySelector('.modal-write');

var linkMap = document.querySelector('.contacts-map');
var linkWrite = document.querySelector('.button-write');

var closeMapBtn = modalMap.querySelector('.close-button');
var closeWriteBtn = modalWrite.querySelector('.close-button');

var form = modalWrite.querySelector('form');
var userName = form.querySelector('.user-name');
var email = form.querySelector('.user-email');
var feedbackText = form.querySelector('.feedback-text');

linkMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

linkWrite.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrite.classList.add('modal-show');
  userName.focus();
});

closeMapBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

closeWriteBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrite.classList.remove('modal-show');
});

form.addEventListener('submit', function (evt) {
  if (!userName.value || !email.value || !feedbackText.value) {
    evt.preventDefault();
  }
});
