// Get URL's with data

const props = window.ycs_properties;
const promises = props.data_urls
  .map((url) => fetch(url)
    .then((r) => r.json()));


let dataByDate = [];
let dataByCat = [];
let total = 0;

Promise.all(promises)
  .then((responsesJson) => {
    console.log("RESPONSES JSON: ", responsesJson)

    responsesJson.forEach((callResponse) => {
      // console.log("CALLRESPONSE: ", callResponse)

      callResponse.forEach((dataItem) => {
        if("d" in dataItem){
           // First case structure
          console.log(dataItem.d);
          let date = new Date(dataItem.d);
          let cat = dataItem.cat.toUpperCase();
          let value = dataItem.value;
          insertDataByDate(date, cat, value);
          insertDatabyCat(cat,value);

        }else if ("myDate" in dataItem){
          // Second case structure
            console.log(dataItem.myDate);
          let date = new Date(dataItem.myDate);
          let cat = dataItem.categ.toUpperCase();
          let value = dataItem.val;
          insertDataByDate(date, cat, value);
          insertDatabyCat(cat,value);

        }else if ("raw" in dataItem){
          // Third case structure
            console.log(dataItem.raw);
          // console.log(dataItem.raw.match(/\d{4}-\d{2}-\d{2}/))
          let date = new Date(dataItem.raw.match(/\d{4}-\d{2}-\d{2}/));
          const splitted = dataItem.raw.split("#");
          let cat = (splitted[1] + " " +  splitted[2]).toUpperCase().trim();
          let value = dataItem.val;
          insertDataByDate(date, cat, value);
          insertDatabyCat(cat,value);
        }
      })
    });

    // Sort array to represent it
    dataByDate.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });
    // console.log("DATABYDATE: ",dataByDate);
    // console.log("DATABYCAT: ",dataByCat);

    prepareAndCreateLinesData();
    prepareAndCreatePieData();

}).catch((err) => {
     console.log(err);
});

function insertDataByDate(date, cat, value){
  // console.log("INSERT: ",date,cat,value)

  // Find same day and category
  let filtered = dataByDate.filter(function(e) { 
    return e.date.getFullYear() === date.getFullYear() &&
    e.date.getMonth() === date.getMonth() &&
    e.date.getDate() === date.getDate() &&
    e.cat.toUpperCase() === cat.toUpperCase() });

  // console.log("filtered",filtered)

  if(filtered.length > 0){
    // Add to day and category
    // console.log(filtered[0].value, value)
    filtered[0].value = filtered[0].value + value;
    // console.log(filtered[0].value)
    // console.log("filtered after",filtered)
  } else {
    // Create new data structure
    dataByDate.push({
      date: date,
      cat: cat,
      value: value
    })
  
  }
}

function insertDatabyCat(cat, y){
  // console.log("INSERT CAT: ",cat,y)

  let filtered = dataByCat.filter(function(e) { 
    return e.name.toUpperCase() === cat.toUpperCase() });

  // console.log("filtered",filtered)

  if(filtered.length > 0){
    // Add to category sum
    // console.log(filtered[0].y, y)
    filtered[0].y = filtered[0].y + y;
    // console.log(filtered[0].y)
    // console.log("filtered after",filtered)
  } else {
    // Create category entry
    dataByCat.push({
      name: cat,
      y: y
    })
  }
  total = total + y;
}

function prepareAndCreatePieData(){
  // Normalize to see %
  dataByCat.forEach((dataItem) => {
    dataItem.y = dataItem.y*100 / total;
  });
  
  createPieChart(dataByCat);
}

function prepareAndCreateLinesData(){
  let categories = [];
  let series = [];

  dataByDate.forEach((dataItem) => {
    // Format date 
    categories.push(dataItem.date.getDate() + " " + dataItem.date.toLocaleString('default', { month: 'short' }));
    
    let filtered = series.filter(function(e) { 
      return e.name.toUpperCase() === dataItem.cat.toUpperCase() });
  
    // console.log("filtered",filtered)
  
    if(filtered.length > 0){
      // Add to values array
      // console.log(filtered[0].data, dataItem.value)
      filtered[0].data.push(dataItem.value);
      // console.log(filtered[0].data)
      // console.log("filtered after",filtered)
    } else {
      // Create category entry
      series.push({
        name: dataItem.cat,
        data: [dataItem.value]
      })
    }
  });

  createLinesChart(categories, series);
}