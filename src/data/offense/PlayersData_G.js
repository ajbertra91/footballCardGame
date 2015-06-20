let getGuards = () => {
  const Guards = [
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
          "pass_blocking": 56,
          "run_blocking": 56
        }
      },
      "type": "offense",
      "position_abbrev": "G",
      "position": "Guards",
      "team": "Denver",
      "dollar_value": "$11",
      "name": {
        "last": "Pratt",
        "first": "Tonia"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "64b8a1f7-c631-4f3c-ad3e-b7a66981e0a1",
      "_id": "557881d716e16131d23342ce"
    },
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
          "pass_blocking": 60,
          "run_blocking": 48
        }
      },
      "type": "offense",
      "position_abbrev": "G",
      "position": "Guards",
      "team": "Denver",
      "dollar_value": "$11",
      "name": {
        "last": "Espinoza",
        "first": "Nettie"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "93825cfd-2d10-4df1-a132-6a999c42f17c",
      "_id": "557881d72717bbe646076e97"
    }
  ]
  return Guards;
}
export { getGuards };

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