let getWideReceivers = () => {
  const WideReceivers = [
    {
      "abilities": {
        "offense": {
          "red_zone": 74,
          "receiving": 88
        },
        "rushing": {
          "goal_line": 30,
          "rushing": 45
        },
        "blocking": {
          "pass_blocking": 64,
          "run_blocking": 46
        }
      },
      "type": "offense",
      "position_abbrev": "WR",
      "position": "Wide Receiver",
      "team": "Denver",
      "dollar_value": "$12",
      "name": {
        "last": "Mcleod",
        "first": "Felicia"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "1d7f9337-15b6-4ef6-a75f-450666a885ce",
      "_id": "556de4c931b4bf3bb855db50"
    },
    {
      "abilities": {
        "offense": {
          "red_zone": 94,
          "receiving": 64
        },
        "rushing": {
          "goal_line": 66,
          "rushing": 57
        },
        "blocking": {
          "pass_blocking": 64,
          "run_blocking": 44
        }
      },
      "type": "offense",
      "position_abbrev": "WR",
      "position": "Wide Receiver",
      "team": "Denver",
      "dollar_value": "$14",
      "name": {
        "last": "Christensen",
        "first": "Baird"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "bbddace4-68cc-4939-a35f-8b8d8ae251a7",
      "_id": "556de4c928b1039664ce4f51"
    },
    {
      "abilities": {
        "offense": {
          "red_zone": 95,
          "receiving": 56
        },
        "rushing": {
          "goal_line": 65,
          "rushing": 53
        },
        "blocking": {
          "pass_blocking": 60,
          "run_blocking": 60
        }
      },
      "type": "offense",
      "position_abbrev": "WR",
      "position": "Wide Receiver",
      "team": "Denver",
      "dollar_value": "$7",
      "name": {
        "last": "Shelton",
        "first": "Georgina"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "40a5ce01-61bb-42e9-bcf9-ae6f4c4ffdf0",
      "_id": "556de4c9b3dcb4322654bcce"
    },
    {
      "abilities": {
        "offense": {
          "red_zone": 70,
          "receiving": 62
        },
        "rushing": {
          "goal_line": 73,
          "rushing": 51
        },
        "blocking": {
          "pass_blocking": 49,
          "run_blocking": 37
        }
      },
      "type": "offense",
      "position_abbrev": "WR",
      "position": "Wide Receiver",
      "team": "Denver",
      "dollar_value": "$5",
      "name": {
        "last": "Justice",
        "first": "Janice"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "8f4e1249-b1a0-4af1-888a-21d5ba41ab55",
      "_id": "556de4c9b76db2aff3a9acfd"
    }
  ]
  return WideReceivers;
}

export { getWideReceivers };

// http://beta.json-generator.com/ENJf6OC
// [
//   '{{repeat(1, 5)}}',
//   {
//     _id: '{{objectId()}}',
//     guid: '{{guid()}}',
//     picture: 'http://placehold.it/64x64',
//     name: {
//       first: '{{firstName()}}',
//       last: '{{surname()}}'
//     },
//     dollar_value: '${{integer(0, 20)}}',
//     team: '{{company()}}',
//     position: 'Tight End',
//     position_abbrev: 'TE',
//   abilities: {
//       blocking: {
//           run_blocking: '{{integer(37, 61)}}',
//           pass_blocking: '{{integer(47, 71)}}'
//       },
//       rushing: {
//           rushing: '{{integer(24, 75)}}',
//           goal_line: '{{integer(24, 75)}}'
//       },
//       receiving: {
//           receiving: '{{integer(50, 100)}}',
//           red_zone: '{{integer(50, 100)}}'
//       }
//     }
//   }
// ]