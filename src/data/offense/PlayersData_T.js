let getTackles = () => {
  const Tackles = [
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
          "pass_blocking": 64,
          "run_blocking": 43
        }
      },
      "type": "offense",
      "position_abbrev": "T",
      "position": "Tackle",
      "team": "Denver",
      "dollar_value": "$20",
      "name": {
        "last": "Schmidt",
        "first": "Celia"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "25912a49-612d-4fa1-9f1f-61bc5bb6a435",
      "_id": "55788165538b6d52f3dec14e"
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
          "pass_blocking": 71,
          "run_blocking": 49
        }
      },
      "type": "offense",
      "position_abbrev": "T",
      "position": "Tackle",
      "team": "Denver",
      "dollar_value": "$20",
      "name": {
        "last": "Sweeney",
        "first": "Good"
      },
      "picture": "http://placehold.it/64x64",
      "guid": "b92c5fec-9f09-4037-92ff-8e8028c0856e",
      "_id": "55788165d6a28c825b0abc70"
    }
  ]
  return Tackles;
}

export { getTackles };

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