/*
  Задача
  Реализовать добавление в список select options (#select), который содержит уникальные название и как id value в option
  Также возможность редкатирования выбраного элимента из списка
  Выбраный элимент записывается в input (#edit_input), и там его можно изменить и сохранить в списке
  по кнопке (#edit_save). Данные в select должны обновиться, но выбранныей элимент не должен измениться.
  Так же реализовать добавление в список (добавление в конец списка).
  Через input (#add_input) и по кнопке (#add_save).
  После добавления, input (#add_input), должен быть отчещен и новый элимент стать выбраным
  Правила валидации input ов:
  1) Не разрешать пустые значение (пустая строка, или строка из пробелов)
  2) Не допускать повторных значений (каждый элимент в списке должен быть уникальным)
  3) При добавлении в список убирать пробелы в начаде и в конце
  4) Если значение не валидно, то в нужый input добавлять класс error, который удалиться любом изменении значения (keydown event), так же не должен изменять уже имеющизся классов (как в прошлом задании)
  Так же задан начальный список (который должен добавиться в select при загрузке скрипта)
  Прмечание
  Для привязки функций к событиям использовать addEventListener
 */

import initList from './initList.js'; // Начальный список

// код сюда




