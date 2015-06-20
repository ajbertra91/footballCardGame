let getTightEnds = () => {
  const TightEnds = [
    {
      "abilities": {
        "offense": {
          "red_zone": 50,
          "receiving": 60
        },
        "rushing": {
          "goal_line": 65,
          "rushing": 43
        },
        "blocking": {
          "pass_blocking": 54,
          "run_blocking": 52
        }
      },
      "type": "offense",
      "position_abbrev": "TE",
      "position": "Tight End",
      "team": "Denver",
      "dollar_value": "$0",
      "name": {
        "last": "Odom",
        "first": "Brooks"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "afd84ee9-e017-440c-b583-d5c5035c26a1",
      "_id": "556dca93fedbbb5052aa7ca2"
    }
  ]
  return TightEnds;
}

export { getTightEnds };

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