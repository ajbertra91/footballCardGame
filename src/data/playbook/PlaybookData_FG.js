let getFieldGoals = () => {
  const FieldGoals = [
    {
      "type": "playbook",
      "_id": "504d9c5d-a9cd-4664-9a91-c78054eb043f",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "outside run",
      "play_bonus_position": "T",
      "play_bonus_value": "+10",
      "play_offense_type": ["Rushing"],
      "play_defense_type": ["Run Defense", "Tackling"]
    },
    {
      "type": "playbook",
      "_id": "eb0778a6-34ea-4878-85cd-a8706c26c7b9",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "short pass",
      "play_bonus_position": "RB",
      "play_bonus_value": "+10",
      "play_offense_type": ["Passing", "Pass Blocking"],
      "play_defense_type": ["Run Defense", "Tackling"]
    },
    {
      "type": "playbook",
      "_id": "bbf835b6-b5cd-4414-936a-810731aba088",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "outside run",
      "play_bonus_position": "TE",
      "play_bonus_value": "+4",
      "play_offense_type": ["Receiving", "Pasing"],
      "play_defense_type": ["Pass Rush"]
    },
    {
      "type": "playbook",
      "_id": "25601286-a243-4522-b88a-dd70695171c9",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "long pass",
      "play_bonus_position": "T",
      "play_bonus_value": "+6",
      "play_offense_type": ["Run Block"],
      "play_defense_type": ["Coverage", "Tackling"]
    },
    {
      "type": "playbook",
      "_id": "061bbef4-3149-4dce-8bdc-c807b4d69677",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "outside run",
      "play_bonus_position": "TE",
      "play_bonus_value": "+10",
      "play_offense_type": ["Pass Blocking", "Receiving"],
      "play_defense_type": ["Tackling", "Pass Rush"]
    },
    {
      "type": "playbook",
      "_id": "51378a4f-f924-4f02-bf1a-1862b000fef9",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "inside run",
      "play_bonus_position": "TE",
      "play_bonus_value": "+4",
      "play_offense_type": ["Passing", "Receiving"],
      "play_defense_type": ["Tackling", "Pass Rush"]
    },
    {
      "type": "playbook",
      "_id": "988d9a51-72bf-40cd-81a1-0601d68637c4",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "outside run",
      "play_bonus_position": "T",
      "play_bonus_value": "+10",
      "play_offense_type": ["Pass Blocking", "Receiving"],
      "play_defense_type": ["Tackling", "Pass Rush"]
    },
    {
      "type": "playbook",
      "_id": "4916f54f-45d6-4749-93e9-5d1f5e46d5c2",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "short pass",
      "play_bonus_position": "QB",
      "play_bonus_value": "+6",
      "play_offense_type": ["Receiving", "Pasing"],
      "play_defense_type": ["Tackling", "Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "a0a57f47-ed7e-4aef-b875-43504676d560",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "inside run",
      "play_bonus_position": "RB",
      "play_bonus_value": "+8",
      "play_offense_type": ["Run Block"],
      "play_defense_type": ["Tackling", "Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "6b3e505d-e404-4fea-b162-80fd2e9352fd",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "outside run",
      "play_bonus_position": "T",
      "play_bonus_value": "+3",
      "play_offense_type": ["Pass Blocking", "Receiving"],
      "play_defense_type": ["Run Defense", "Tackling"]
    },
    {
      "type": "playbook",
      "_id": "1a86813a-5a61-49b0-be22-1dbafe864a5c",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "inside run",
      "play_bonus_position": "WR",
      "play_bonus_value": "+5",
      "play_offense_type": ["Run Blocking", "Rushing"],
      "play_defense_type": ["Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "66594407-1aa8-4e73-8ac9-27238cbd4584",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "short pass",
      "play_bonus_position": "QB",
      "play_bonus_value": "+8",
      "play_offense_type": ["Run Block"],
      "play_defense_type": ["Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "37f3a869-5070-4567-963d-3e484be850c6",
      "play_type": "field goal",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "long pass",
      "play_bonus_position": "TE",
      "play_bonus_value": "+8",
      "play_offense_type": ["Run Block"],
      "play_defense_type": ["Run Defense"]
    }
  ]
  return FieldGoals;
}

export { getFieldGoals };