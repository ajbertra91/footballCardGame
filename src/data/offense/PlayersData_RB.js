let getRunningBacks = () => {
  const RunningBacks = [
    {
      "abilities": {
        "offense": {
          "red_zone": 60,
          "receiving": 63
        },
        "rushing": {
          "goal_line": 26,
          "rushing": 39
        },
        "blocking": {
          "pass_blocking": 53,
          "run_blocking": 48
        }
      },
      "type": "offense",
      "position_abbrev": "RB",
      "position": "Running Back",
      "team": "Denver",
      "dollar_value": "$8",
      "name": {
        "last": "Sutton",
        "first": "Verna"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "31657280-bc28-49a7-9f8a-11d96d577a6d",
      "_id": "55788114237561a39099ecab"
    },
    {
      "abilities": {
        "offense": {
          "red_zone": 90,
          "receiving": 81
        },
        "rushing": {
          "goal_line": 35,
          "rushing": 75
        },
        "blocking": {
          "pass_blocking": 59,
          "run_blocking": 51
        }
      },
      "type": "offense",
      "position_abbrev": "RB",
      "position": "Running Back",
      "team": "Denver",
      "dollar_value": "$0",
      "name": {
        "last": "Underwood",
        "first": "Mara"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "016c9236-8dd2-480c-a728-a3ddbd837e3a",
      "_id": "5578811462f770686b84c0b9"
    }
  ]
  return RunningBacks;
}

export { getRunningBacks };

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
//       offense: {
//           receiving: '{{integer(50, 100)}}',
//           red_zone: '{{integer(50, 100)}}'
//       }
//     }
//   }
// ]