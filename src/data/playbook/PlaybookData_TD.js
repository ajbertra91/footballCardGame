let getTouchDowns = () => {
  const TouchDowns = [
    {
      "type": "playbook",
      "_id": "eea33a79-23f9-4013-9ca7-20ebe1993d41",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "inside run",
      "play_bonus_position": "TE",
      "play_bonus_value": "+8",
      "play_offense_type": ["Goal Line", "Rushing"],
      "play_defense_type": ["Run Defense", "Tackling"]
    },
    {
      "type": "playbook",
      "_id": "c5df22ab-2545-4302-b576-08e013ac4b3a",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "short pass",
      "play_bonus_position": "TE",
      "play_bonus_value": "+8",
      "play_offense_type": ["Goal Line", "Rushing"],
      "play_defense_type": ["Pass Rush"]
    },
    {
      "type": "playbook",
      "_id": "fcd3888b-55d9-4498-a637-1d19cbd6179c",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "outside run",
      "play_bonus_position": "RB",
      "play_bonus_value": "",
      "play_offense_type": ["Goal Line"],
      "play_defense_type": ["Tackling", "Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "490eb36d-0beb-4b15-9a17-f8b38c8bbbf9",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "inside run",
      "play_bonus_position": "WR",
      "play_bonus_value": "+5",
      "play_offense_type": ["Receiving", "Pasing"],
      "play_defense_type": ["Tackling", "Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "790c3798-0823-4b16-8579-fec91e2566c3",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "long pass",
      "play_bonus_position": "RB",
      "play_bonus_value": "+5",
      "play_offense_type": ["Passing", "Receiving"],
      "play_defense_type": ["Coverage"]
    },
    {
      "type": "playbook",
      "_id": "136a057a-abcf-4300-8e44-1a997a75158f",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "outside run",
      "play_bonus_position": "TE",
      "play_bonus_value": "+3",
      "play_offense_type": ["Red Zone"],
      "play_defense_type": ["Coverage"]
    },
    {
      "type": "playbook",
      "_id": "6008b360-2a11-498b-9338-c22f126788cd",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "long pass",
      "play_bonus_position": "FB",
      "play_bonus_value": "+3",
      "play_offense_type": ["Goal Line", "Rushing"],
      "play_defense_type": ["Tackling", "Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "38041ed3-e538-4046-8ccc-6014beb0ef87",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "outside run",
      "play_bonus_position": "FB",
      "play_bonus_value": "+3",
      "play_offense_type": ["Goal Line", "Rushing"],
      "play_defense_type": ["Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "e040fb30-e307-4466-98dc-b6fb11f7d9a6",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "long pass",
      "play_bonus_position": "",
      "play_bonus_value": "+11",
      "play_offense_type": ["Goal Line"],
      "play_defense_type": ["Coverage", "Tackling"]
    },
    {
      "type": "playbook",
      "_id": "4a98f26e-e3fb-41b4-b6cf-d39ec72b1b90",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "inside run",
      "play_bonus_position": "",
      "play_bonus_value": "",
      "play_offense_type": ["Goal Line", "Rushing"],
      "play_defense_type": ["Run Defense", "Tackling"]
    },
    {
      "type": "playbook",
      "_id": "e440489a-724e-46aa-b689-b0c30fabf746",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "long pass",
      "play_bonus_position": "FB",
      "play_bonus_value": "+3",
      "play_offense_type": ["Passing", "Receiving"],
      "play_defense_type": ["Tackling", "Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "8df6ad7a-e925-470e-b48d-f6994ba2b21a",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "long pass",
      "play_bonus_position": "FB",
      "play_bonus_value": "",
      "play_offense_type": ["Goal Line", "Rushing"],
      "play_defense_type": ["Tackling", "Run Defense"]
    },
    {
      "type": "playbook",
      "_id": "90b1396d-b5e4-433d-8bd7-a8785236abe1",
      "play_type": "touchdown",
      "play_value": 7,
      "play_image": "http://placehold.it/140x50",
      "play_title": "short pass",
      "play_bonus_position": "FB",
      "play_bonus_value": "+8",
      "play_offense_type": ["Goal Line", "Rushing"],
      "play_defense_type": ["Tackling", "Run Defense"]
    }
  ]
  return TouchDowns;
}

export { getTouchDowns };