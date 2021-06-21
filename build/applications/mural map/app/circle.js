
let circle = document.getElementById("circle");
let togglecircle = document.getElementById("circleswitch")
togglecircle.addEventListener("click", e => {
    
    if (togglecircle.hasAttribute("switched")) {
        circle.setAttribute("class","");
        circle.setAttribute("value","on") 
    }
    else return circle.setAttribute("class", "box stack-top")
});



// code for adding attribute field in a list dropdown menu

// let params = new Query({
//     returnGeometry: true,
//     outFields:["Region", "Tour_Number"],
//     // where: "Tour_Number > 0"//EXPRESSION FOR THE QUERY
// });
// let date = '01/02/2021'
// params.where = "CreationDate > date '" + date + "'";

// facilitiesFeatureLayer.queryFeatures(params) //RETURNS A PROMISE
//     .then(getLatestDate)
//     .then(addToSelector)

// function getLatestDate(result) {
//     var features = result.features; //stores result features into a variable features
//     console.log("getting latest mural")
//     var values = features.map((features)=>{return features.attributes.CreationDate})
//     var dates = values.map((value)=>{return new Date(value)})
//     // console.log(dates)
//     var latestDate = dates[dates.length-1]
//     console.log(latestDate)
//     return latestDate
// }
// function getToResult(result) {
//     var features = result.features; //stores result features into a variable features
//     console.log("going to result")
//     var values = features.map((features)=>{return features.attributes.CreationDate})
//     var dates = values.map((value)=>{return new Date(value)})
//     mapView.goTo({
//         target:features, zoom:16
//     })
// }
// let selector = document.getElementById("latestmural")
// function addToSelector(latestDate){
//     var option = document.createElement("option");
//     dateforoption = new Date(latestDate)
//     date = new Date(latestDate)
    
//     option.text= date
//     selector.add(option);
//     console.log(selector.value)

//     let lessdate = dateforoption.setDate(dateforoption.getDate()-1)
//     console.log(lessdate)

//     let latestmuralparams = new Query({
//         returnGeometry: true,
//         outFields:["CreationDate", "Tour_Number"],
//         // where: "Tour_Number=4"//EXPRESSION FOR THE QUERY
//     });
//     let dateX = '05/03/2021';
//     latestmuralparams.where = "CreationDate >= date '" + dateX + "'";
// }