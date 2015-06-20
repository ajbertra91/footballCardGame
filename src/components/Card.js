let Card = (card) => {
  let content = document.createElement('div');
  content.setAttribute('draggable', true);
  content.id = card._id;
  content.className = 'is-draggable';
  // OFFENSE && DEFENSE
  if (card.type !== 'playbook') {
    let position = document.createElement('div');
    position.className = 'position';
    position.innerHTML = card.position_abbrev !== null ? card.position_abbrev : '';
    content.appendChild(position);

    let dollarValue = document.createElement('div');
    dollarValue.className = 'dollar-value';
    dollarValue.innerHTML = '<div class="value">' + card.dollar_value !== null ? card.dollar_value : "" ; + '</div>';
    dollarValue.innerHTML += '<div class="title">Million</div>';
    content.appendChild(dollarValue);

    let playerName = document.createElement('div');
    playerName.className = 'player-name';
    playerName.innerHTML = card.name.first + ' ' + card.name.last;
    content.appendChild(playerName);
  }

  // OFFENSE
  if (card.type === 'offense') {
    content.setAttribute('data-type', 'offense');
    content.className += ' game-card card-' + (card.position_abbrev).toLowerCase();
    content.style.background = 'url(http://www2.psd100.com/ppp/2013/11/2701/Football-helmets-1127204659.png) 50% 50% no-repeat, rgb(32, 71, 194)';
    content.style.backgroundSize = '80% auto';
    content.style.zIndex = 1;


    let blocking = document.createElement('div');
    blocking.className = 'stats blocking';
    blocking.innerHTML = '<div><span class="title">Pass Blocking: </span><span class="value">' + (card.abilities.blocking.pass_blocking ? card.abilities.blocking.pass_blocking : "") + '</span></div>';
    blocking.innerHTML += '<div><span class="title">Run Blocking: </span><span class="value">' + (card.abilities.blocking.run_blocking ? card.abilities.blocking.run_blocking : "") + '</span></div>';
    content.appendChild(blocking);

    let rushing = document.createElement('div');
    rushing.className = 'stats rushing';
    rushing.innerHTML = '<div><span class="title">Rushing: </span><span class="value">' + (card.abilities.rushing.rushing ? card.abilities.rushing.rushing : "") + '</span></div>';
    rushing.innerHTML += '<div><span class="title">Goal Line: </span><span class="value">' + (card.abilities.rushing.goal_line ? card.abilities.rushing.goal_line : "") + '</span></div>';
    content.appendChild(rushing);

    if (card.abilities.receiving) {
      let receiving = document.createElement('div');
      receiving.className = 'stats receiving';
      receiving.innerHTML = '<div><span class="title">Receiving: </span><span class="value">' + (card.abilities.receiving.receiving ? card.abilities.receiving.receiving : "") + '</span></div>';
      receiving.innerHTML += '<div><span class="title">Red Zone: </span><span class="value">' + (card.abilities.receiving.red_zone ? card.abilities.receiving.red_zone : "") + '</span></div>';
      content.appendChild(receiving);
    }
    if (card.abilities.passing) {
      let passing = document.createElement('div');
      passing.className = 'stats passing';
      passing.innerHTML = '<div><span class="title">Passing: </span><span class="value">' + (card.abilities.passing.passing ? card.abilities.passing.passing : "") + '</span></div>';
      passing.innerHTML += '<div><span class="title">Red Zone: </span><span class="value">' + (card.abilities.passing.red_zone ? card.abilities.passing.red_zone : "") + '</span></div>';
      content.appendChild(passing);
    }
  };
  // DEFENSE
  if (card.type === 'defense') {
    content.setAttribute('data-type', 'defense');
    content.className += ' game-card card-' + (card.position_abbrev).toLowerCase();
    content.style.background = 'url(http://www2.psd100.com/ppp/2013/11/2701/Football-helmets-1127204659.png) 50% 50% no-repeat, rgb(234, 186, 83)';
    content.style.backgroundSize = '80% auto';
    content.style.zIndex = 4;

    let tackling = document.createElement('div');
    tackling.className = 'stats tackling';
    tackling.innerHTML = '<div><span class="title">Tackling: </span><span class="value">' + (card.abilities.tackling ? card.abilities.tackling : "") + '</span></div>';
    content.appendChild(tackling);

    let coverage = document.createElement('div');
    coverage.className = 'stats coverage';
    coverage.innerHTML = '<div><span class="title">Coverage: </span><span class="value">' + (card.abilities.coverage ? card.abilities.coverage : "") + '</span></div>';
    content.appendChild(coverage);

    let passRush = document.createElement('div');
    passRush.className = 'stats pass-rush';
    passRush.innerHTML = '<div><span class="title">Pass Rush: </span><span class="value">' + (card.abilities.pass_rush ? card.abilities.pass_rush : "") + '</span></div>';
    content.appendChild(passRush);

    let runDefense = document.createElement('div');
    runDefense.className = 'stats run-defense';
    runDefense.innerHTML = '<div><span class="title">Run Defense: </span><span class="value">' + (card.abilities.run_defense ? card.abilities.run_defense : "") + '</span></div>';
    content.appendChild(runDefense);
  };

  // PLAYBOOK
  if (card.type === 'playbook') {
    content.setAttribute('data-type', 'playbook');
    content.className += ' game-card card-' + (card.play_type).toLowerCase();
    content.style.background = 'url(https://cdn0.iconfinder.com/data/icons/elite-sports/512/football-play-512.png) 50% 50% no-repeat, rgb(76, 189, 86)';
    content.style.backgroundSize = '80% auto';
    content.style.zIndex = 7;

    let playType = document.createElement('div');
    playType.className = 'play-type';
    playType.innerHTML = card.play_type !== null ? card.play_type : '';
    content.appendChild(playType);

    let playValue = document.createElement('div');
    playValue.className = 'play-value';
    playValue.innerHTML = '<div class="value">' + (card.play_value !== null ? card.play_value : "") + '</div>';
    content.appendChild(playValue);

    let playTitle = document.createElement('div');
    playTitle.className = 'play-title';
    playTitle.innerHTML = '<div class="value">' + (card.play_title !== null ? card.play_title : "") + '</div>';
    content.appendChild(playTitle);

    let playBonus = document.createElement('div');
    playBonus.className = 'play-bonus';
    playBonus.innerHTML = '<span class="position">' + (card.play_bonus_position !== null ? card.play_bonus_position : "") + '</span>';
    playBonus.innerHTML += '<span class="value">' + (card.play_bonus_value !== null ? card.play_bonus_value  : "") + '</span>';
    content.appendChild(playBonus);

    let playOffenseType = document.createElement('div');
    playOffenseType.className = 'stats play-offense-type';
    if (card.play_offense_type && card.play_offense_type.length === 2) {
      playOffenseType.innerHTML = '<div><span class="value">' + card.play_offense_type[0] + ' or ' + card.play_offense_type[1] + '</span></div>';
    } else {
      playOffenseType.innerHTML = '<div><span class="value">' + card.play_offense_type[0] + '</span></div>';
    }
    content.appendChild(playOffenseType);

    let playDefenseType = document.createElement('div');
    playDefenseType.className = 'stats play-defense-type';
    if (card.play_defense_type && card.play_defense_type.length === 2) {
      playDefenseType.innerHTML = '<div><span class="value">' + card.play_defense_type[0] + ' or ' + card.play_defense_type[1] + '</span></div>';
    } else {
      playDefenseType.innerHTML = '<div><span class="value">' + card.play_defense_type[0] + '</span></div>';
    }
    content.appendChild(playDefenseType);

    // let playImage = document.createElement('img');
    // playImage.className = 'play-image';
    // playImage.setAttribute('src', (card.play_image !== null ? card.play_image : ""));
    // playImage.style.width = '100%';
    // content.appendChild(playImage);
  };
  
  // let actionTarget = document.createElement('div');
  // actionTarget.className = 'action-target';
  // content.appendChild

  return content;
}

export { Card };