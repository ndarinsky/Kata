const query = `{"sorting": {}, "columnSettings": 
[{"isVisible": true, "columnName": "trialTitle"}, {"isVisible": true, "columnName": "trialOtherDrugsTested"},
 {"isVisible": false, "columnName": "trialPhase"}`

// const result = query.replace(/"{"isVisible": true, "columnName": "trialOtherDrugsTested"}"/g, ' ')
const result = query.replace(/{"isVisible": true, "columnName": "trialOtherDrugsTested"},/g, '')

console.log(result)
// console.log(query)