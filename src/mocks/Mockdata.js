import didqocn from '../assets/양배추.png';
import clwm from '../assets/치즈.png';
import aotlf from '../assets/매실.png';
import dhdl from '../assets/오이.png';
import qhaehdqlqlaqkq from '../assets/봄동비빔밥.png';
import soddlehlswkdrnr from '../assets/냉이된장국.png';

export const MyIngredients = [
  { id: 1, name: '양배추', weight: '400g', day: '2', image: didqocn },
  { id: 2, name: '치즈', weight: '50g', day: '8', image: clwm },
  { id: 3, name: '파', weight: '100g', day: '20', image: null },
  { id: 4, name: '어묵', weight: '300g', day: '23', image: null },
];

export const Seasonal = [
  {
    id: 1,
    name: '매실',
    weight: '1kg',
    site: '사이트',
    price: '11900',
    image: aotlf,
  },
  {
    id: 2,
    name: '오이',
    weight: '1개',
    site: '사이트',
    price: '1000',
    image: dhdl,
  },
  {
    id: 3,
    name: '주꾸미',
    weight: '500g',
    site: '사이트',
    price: '12100',
    image: null,
  },
  {
    id: 4,
    name: '멍게',
    weight: '500g',
    site: '사이트',
    price: '1030',
    image: null,
  },
];

export const Recipes = [
  {
    id: 1,
    title: '봄동 비빔밥',
    level: '초급',
    time: '10분',
    image: qhaehdqlqlaqkq,
  },
  {
    id: 2,
    title: '냉이 된장국',
    level: '중급',
    time: '20분',
    image: soddlehlswkdrnr,
  },
  { id: 3, title: '주꾸미볶음', level: '중급', time: '30분', image: null },
  { id: 4, title: '멍게무침', level: '초급', time: '215분', image: null },
];
