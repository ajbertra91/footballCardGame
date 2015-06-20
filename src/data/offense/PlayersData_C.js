let getCenter = () => {
  const Center = [
    {
      "abilities": {
        "offense": {
          "red_zone": null,
          "receiving": null
        },
        "rushing": {
          "goal_line": null,
          "rushing": null
        },
        "blocking": {
          "pass_blocking": 68,
          "run_blocking": 51
        }
      },
      "type": "offense",
      "position_abbrev": "C",
      "position": "Center",
      "team": "Denver",
      "dollar_value": "$13",
      "name": {
        "last": "Wiggins",
        "first": "Mccray"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "963f0f43-aff2-4228-ab43-c617fe6bd4ea",
      "_id": "55788211e10bcaab2703a1d0"
    }
  ]
  return Center;
}
export { getCenter };
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