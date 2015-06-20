// import Rx from 'rx/dist/rx.all';
import Rx from 'rx-dom/dist/rx.dom';
import { Card } from '../components/Card';

// variables
let Observable = Rx.Observable;
let count;
let currentPlay = new Map();

let app = document.getElementById("app");
let hand = document.getElementById('current-hand');
let currentPlayElem = document.getElementById('current-play');
let emptyCardOff = document.getElementById('target-1');
let emptyCardDef = document.getElementById('target-2');
let emptyCardPB = document.getElementById('target-3');

let renderContentToHand = (elem) => {
  hand.appendChild(elem);
}
let renderContentToCurrentPlay = (elem) => {
  currentPlayElem.appendChild(elem);
}

// Observable as render loop
let render = Observable.interval(200).take(9);

let renderSubscription = render.subscribe(
  (count) => {
    console.debug('count: ', count);
    if (count < 3) { renderContentToHand(Card(1,count)) }
    if (count >= 3 && count < 6) { renderContentToHand(Card(2,count)) }
    if (count >= 6) { renderContentToHand(Card(3,count)) }
    count++;
  },
  (err) => { console.error('err: ', err) },
  () => {
    console.debug('completed');
    setBindings();
  });


let setBindings = () => {
  // let card1 = document.getElementById('card-1');
  let cards = document.querySelectorAll('.game-card');
  let cardClicks = Observable.fromEvent(cards, 'click');
  let cardSub = cardClicks.subscribe(
    (e) => {
      if ( (/offense/g.exec(e.target.className)) && (!currentPlay.has('offense')) ) {
        currentPlay.set('offense', e.target);
        currentPlayElem.removeChild(emptyCardOff);

      } else if ( (/defense/g.exec(e.target.className)) && (!currentPlay.has('defense')) ) {
        currentPlay.set('defense', e.target);
        currentPlayElem.removeChild(emptyCardDef);

      } else if ( (/playbook/g.exec(e.target.className)) && (!currentPlay.has('playbook')) ) {
        currentPlay.set('playbook', e.target);
        currentPlayElem.removeChild(emptyCardPB);

      } else {
        alert('pick a different card')
      }
      console.debug('currentPlay: ', currentPlay);
      renderContentToCurrentPlay(e.target);
    },
    (err) => { console.debug('err: ', err) },
    () => {}
  );
}