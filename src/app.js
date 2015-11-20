/*
 * // ALGORYTHM
 * [✓] get card data
 * [✓] use card data to make three decks (offense, defense, playbook)
 * [✓] create dataModel
 *
 * // GAME LOOP
 * [✓] add cards to hand
 * [✓] render
 * [✓] play only one card from each type
 * [-] score cards in currentPlay
 * [ ] clear cards from currentPlay
 * [ ] draw more cards into hand
 *
 * [ ] player A, play playbook card  --> remove card from hand && add it to currentPlay
 * [ ] render
 * [ ] player A, play matching offense card  --> remove card from hand && add it to currentPlay
 * [ ] render
 * [ ] player B, play qualifying defense card  --> remove card from hand && add it to currentPlay
 * [ ] render
 * [ ] resolve success/failure of currentPlay cards
 * [ ] update score
 * [ ] render
 * [ ] change turns
 */

/*
 * import library dependencies
 */
import Rx from 'rx/dist/rx.all';
import RxD from 'rx-dom/dist/rx.dom';
import Immutable from 'immutable/dist/immutable';
import EventEmitter from 'event-emitter';
import jQuery from 'jquery/jquery';
import { getRandomInt } from '../helpers/getRandomInt';
let Observable = Rx.Observable;
let events = EventEmitter({}), listener;
// const deckEvents = EventEmitter({}), listener;
/*
 * import card data for one deck
 */
// OFFENSE
import { getCenter } from '../data/offense/PlayersData_C';
import { getGuards } from '../data/offense/PlayersData_G';
import { getTackles } from '../data/offense/PlayersData_T';
import { getQuarterback } from '../data/offense/PlayersData_QB';
import { getRunningBacks } from '../data/offense/PlayersData_RB';
import { getTightEnds } from '../data/offense/PlayersData_TE';
import { getWideReceivers } from '../data/offense/PlayersData_WR';
// DEFENSE
import { getCornerbacks } from '../data/defense/PlayersData_CB';
import { getDefensiveEnds } from '../data/defense/PlayersData_DE';
import { getDefensiveTackles } from '../data/defense/PlayersData_DT';
import { getLinebackers } from '../data/defense/PlayersData_LB';
import { getSafeties } from '../data/defense/PlayersData_S';
// PLAYBOOK
import { getTouchDowns } from '../data/playbook/PlaybookData_TD';
import { getFieldGoals } from '../data/playbook/PlaybookData_FG';
import { Card } from '../components/Card';
/*
 * set variables for that card data
 */
// OFFENSE
const C  = getCenter();
const G  = getGuards(); 
const T  = getTackles();
const QB = getQuarterback();
const RB = getRunningBacks();
const TE = getTightEnds();
const WR = getWideReceivers();
// DEFENSE
const CB = getCornerbacks();
const DE = getDefensiveEnds();
const DT = getDefensiveTackles();
const LB = getLinebackers();
const S  = getSafeties();
// PLAYBOOK
const TD = getTouchDowns();
const FG = getFieldGoals();
/*
 * helpers: HTML 
 */
let appElem = document.getElementById("app");
// let draggable = document.querySelectorAll("is-draggable");
let handElem = document.getElementById("user-hand");
let actionConfirm = document.getElementById("action-confirm");
let currentPlayElem = document.getElementById('current-play');
let playoffenseCardElem = document.getElementById('offense-target');
let playdefenseCardElem = document.getElementById('defense-target');
let playplaybookCardElem = document.getElementById('playbook-target');
let offenseCardPlayedElem = document.getElementById('offense-card-played');
let defenseCardPlayedElem = document.getElementById('defense-card-played');
let playbookCardPlayedElem = document.getElementById('playbook-card-played');
/*
 * helpers: JS, objects
 */
let count = 0;
let offenseDeck = [];
let defenseDeck = [];
let playbookDeck = [];
let offHandModel = [];
let defHandModel = [];
let plbHandModel = [];

let Hand = () => {
  const emitter = EventEmitter();
  const cards = {
    offense: []
    ,defense: []
    ,playbook: []
  };
  return {
    count: type => cards[type].length,
    add: card => {
      cards[card.type].push(card)
      emitter.emit('card-added', card);
    },
    remove: card => cards[card.type].splice(cards[card.type].indexOf(card), 1),
    emitter,
    cards
  };
}
let hand = Hand();
window.hand = hand;

let CurrentPlay = () => {
  const emitter = EventEmitter();
  const cards = {
    offense: []
    ,defense: []
    ,playbook: []
  };
  return {
    count: type => cards[type].length,
    add: card => {
      cards[card.type].push(card)
      emitter.emit('card-added', card);
    },
    remove: card => cards[card.type].splice(cards[card.type].indexOf(card), 1),
    emitter,
    cards
  };
}
let currentPlay = CurrentPlay();
window.currentPlay = currentPlay;
/*
 * helpers: JS, functions
 */
function print(x) { console.log(x) };

function shuffle(array) {
  let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let zip = (a, b) => a.map((_, i) => [a[i], b[i] || null]);
/*
 * make observables of the card data
 */
// OFFENSE
let cO  = Observable.from(C);
let gO  = Observable.from(G);
let tO  = Observable.from(T);
let qbO = Observable.from(QB);
let rbO = Observable.from(RB);
let teO = Observable.from(TE);
let wrO = Observable.from(WR);
// DEFENSE
let cbO = Observable.from(CB);
let deO = Observable.from(DE);
let dtO = Observable.from(DT);
let lbO = Observable.from(LB);
let sO  = Observable.from(S);
// PLAYBOOK
let tdO = Observable.from(TD);
let fgO = Observable.from(FG);
/*
 * make Deck from Observables
 */
let offenseCards = Observable.concat(cO,gO,tO,qbO,teO,rbO,wrO)
  .subscribe(x => offenseDeck.push(x));
let defenseCards = Observable.concat(cbO,deO,dtO,lbO,sO)
  .subscribe(x => defenseDeck.push(x));
let playbookCards = Observable.concat(tdO,fgO)
  .subscribe(x => playbookDeck.push(x));
shuffle(offenseDeck);
shuffle(defenseDeck);
shuffle(playbookDeck);
console.debug('offenseDeck: ', offenseDeck);
console.debug('defenseDeck: ', defenseDeck);
console.debug('playbookDeck: ', playbookDeck);


function* deckGenerator(deckCollection) {
  while(deckCollection.length) {
    let card = deckCollection.pop();
    events.emit('card', card);
    yield card;
  }
  events.emit('empty');
}

let offDeck = deckGenerator(offenseDeck);
let defDeck = deckGenerator(defenseDeck);
let plbDeck = deckGenerator(playbookDeck);

events.on('card', (card) => { hand.add(card); });
//events.on('empty', alert('Game Over!'));

function drawCards(hand) {
  while (hand.count('offense') < 3) { offDeck.next(); }
  while (hand.count('defense') < 3) { defDeck.next(); }
  while (hand.count('playbook') < 4) { plbDeck.next(); }
}

let hand$ = Observable.fromEvent(hand.emitter, 'card-added');
let offHand$ = hand$.filter(card => card.type === 'offense');
let defHand$ = hand$.filter(card => card.type === 'defense');
let plbHand$ = hand$.filter(card => card.type === 'playbook');
offHand$.subscribe( card => addCard(Card(card)) );
defHand$.subscribe( card => addCard(Card(card)) );
plbHand$.subscribe( card => addCard(Card(card)) );

function addCard(cardElem) { 
  handElem.appendChild(cardElem);
}

function removeCardStyles(cardElem) {
  cardElem.style.left = -5 + 'px';
  cardElem.style.top = -5 + 'px';
  cardElem.style.webkitTransform = 'rotate(0deg)';
}

// possibly a brittle function...
function playCard(card) {
  let cardElem = document.getElementById(card._id);
  let type = card.type;
  let target = document.getElementById(type + '-target');
  removeCardStyles(cardElem);
  target.appendChild(cardElem);
  currentPlay.add(card);
}

function removePlayOffCard(cardElem) { playoffenseCardElem.removeChild(cardElem); }
function removePlayDefCard(cardElem) { playdefenseCardElem.removeChild(cardElem); }
function removePlayPlbCard(cardElem) { playplaybookCardElem.removeChild(cardElem); }

// ==============================================================================
// SCORING TODO --- FINISH!!!
// ==============================================================================
function runScoring() {
  print('...running scoring');
  let offenseCard = currentPlay.cards.offense[0];
  let defenseCard = currentPlay.cards.defense[0];
  let playbookCard = currentPlay.cards.playbook[0];
  // playbook values
  let playbookOffenseType = playbookCard.play_offense_type; // array
  let playbookDefenseType = playbookCard.play_defense_type; // array
  let playbookBonusPosition = playbookCard.play_bonus_position; // string
  let playbookBonusValue = playbookCard.play_bonus_value; // string
  playbookBonusValue = parseInt(playbookBonusValue.replace(/'+'/g,'')); // integer

  console.debug('playbookOffenseType: ', playbookOffenseType);
  // offense values
  
  let offenseValue;
  
  // check to see if the playbookOffenseType array has two values
  if (playbookOffenseType.length === 2) {
    let value1 = playbookOffenseType[0].toLowerCase().replace(/ /g,'_');
    let value2 = playbookOffenseType[1].toLowerCase().replace(/ /g,'_');
    offenseValue = offenseCard.abilities.offense[value1];
    offenseValue = offenseCard.abilities.offense[value2];
  } else {
    let value1 = playbookOffenseType[0].toLowerCase().replace(/ /g,'_');
    offenseValue = offenseCard.abilities.offense[value1];
  }
  if (!offenseValue) {
    if (playbookOffenseType.length === 2) {
      let value1 = playbookOffenseType[0].toLowerCase().replace(/ /g,'_');
      let value2 = playbookOffenseType[1].toLowerCase().replace(/ /g,'_');
      offenseValue = offenseCard.abilities.rushing[value1];
      offenseValue = offenseCard.abilities.rushing[value2];
    } else {
      let value1 = playbookOffenseType[0].toLowerCase().replace(/ /g,'_');
      offenseValue = offenseCard.abilities.rushing[value1];
    }
  }
  if (!offenseValue) offenseValue = 'Punting';

  
  console.debug('offenseValue: ', offenseValue);
  // defense values
  let defDefenseType = '';


  setTimeout(() => {
    print('scoring complete');
  }, 1000);
}

let clicks$ = Rx.Observable.fromEvent(appElem, 'click');

let playCards$ = clicks$
  .filter(e => e.target.classList.contains('is-draggable'))
  .flatMap(e => {
    let type = e.target.getAttribute('data-type');
    let cardId = e.target.id;
    let card = hand.cards[type].filter(card => card._id === cardId ? card : null)
    return card;
  })
  .do(card => currentPlay.count(card.type) === 0 ? playCard(card) : null)
  .subscribe(card => print(card));

let confirmPlay$ = clicks$
  .filter(e => e.target.id === 'action-confirm')
  .do(() => {
    currentPlay.count('offense') === 1 &&
    currentPlay.count('defense') === 1 &&
    currentPlay.count('playbook') === 1 ?
      runScoring() : print('Please play a card');
  })
  .subscribe(
    cards => {
      print(currentPlay.cards.offense);
      print(currentPlay.cards.defense);
      print(currentPlay.cards.playbook);
    }
  );









/*
 * start the game moving...
 */
drawCards(hand);























