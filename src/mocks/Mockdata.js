import didqocn from '../assets/Food/cabbage.png';
import clwm from '../assets/Food/cheese.png';
import Eomuk from '../assets/Food/fishcake.png';
import Largegreenonion from '../assets/Food/green-onion.png';
import aotlf from '../assets/Food/plum.png';
import dhdl from '../assets/Food/cucumber.png';
import qhaehdqlqlaqkq from '../assets/Food/bomdong-bibimbap.png';
import soddlehlswkdrnr from '../assets/Food/naengi-soup.png';

export const MyIngredients = [
  { id: 1, name: '양배추', weight: '400g', day: '2', image: didqocn },
  { id: 2, name: '치즈', weight: '50g', day: '8', image: clwm },
  { id: 3, name: '파', weight: '100g', day: '20', image: Eomuk },
  { id: 4, name: '어묵', weight: '300g', day: '23', image: Largegreenonion },
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
];

export const RecipeIngredients = [
  { id: 1, name: '봄동', amount: '100g (1단)', isSubstitutable: false },
  { id: 2, name: '밥', amount: '200g (1공기)', isSubstitutable: false },
  { id: 3, name: '고추장', amount: '2 숟가락', isSubstitutable: false },
  {
    id: 4,
    name: '매실청',
    amount: '1T 스푼',
    isSubstitutable: true,
    alternatives: [
      { name: '설탕', price: '1T 스푼' },
      { name: '올리고당', price: '1T 스푼' },
    ],
  },
  { id: 5, name: '된장', amount: '1T 스푼', isSubstitutable: false },
  { id: 6, name: '고춧가루', amount: '2.5 숟가락', isSubstitutable: false },
  { id: 7, name: '멸치액젓', amount: '1.5T 스푼', isSubstitutable: false },
  { id: 8, name: '참기름', amount: '2T 스푼', isSubstitutable: false },
];
