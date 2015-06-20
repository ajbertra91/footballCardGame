let getQuarterback = () => {
  const Quarterback = [
    {
      "abilities": {
        "offense": {
          "red_zone": 89,
          "passing": 94
        },
        "rushing": {
          "goal_line": 27,
          "rushing": 72
        },
        "blocking": {
          "pass_blocking": null,
          "run_blocking": null
        }
      },
      "type": "offense",
      "position_abbrev": "QB",
      "position": "Quarterback",
      "team": "Denver",
      "dollar_value": "$12",
      "name": {
        "last": "Carroll",
        "first": "Terri"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "eeb8b255-1324-4af3-9b64-7d201fe927b0",
      "_id": "5578804f5791eb495519b358"
    }
  ]
  return Quarterback;
}

export { getQuarterback };

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