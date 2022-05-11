// Import the data from data.js
const tableData = data;


// Reference the HTML table using d3
var tbody = d3.select("tbody");

// With this code we:
    // 1.) Declared a variable, tbody
    // 2.) Use d3.select to tell JS to look for the <tbody> tags in the HTML
// Since we want the data to be displayed in a table, we'll reference the 'tbody' HTML tag using D3
// D3 is a JavaScript library that produces dynamic graphics in an HTML webpage. It is often used for data visualizations


// Create a table and add forEach
function buildTable(data) {
    tbody.html("");
    // The following function performs three actions:
        // 1.) Loop through each object in the array
        // 2.) Append a row to the HTML table
        // 3.) Add each value from the object into a cell
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
// CLear the data using tbody.html("")
    // tbody.html references the table, pointing JS directly to the table in the HTML pages that we're going to build
    // The parentheses with empty quotes (""); is an empty string
    // This line tells JS to use an empty string when creating the table

    // data: an object that references the data being imported
    // forEach: the keywords to create a for loop in JavaScript
    // dataRow: a parameter that will be used as a value when the fun

    // This row tells JS to find the <tbody> tag within the HTML and add a table row ("tr")

    // Object.values: tells JS to reference one object from the array
    // dataRow: the values will go into the dataRow
    // forEach(val): specifies that we want one object per row
        // val: represents each item in the object
    
    // cell.text(val): extracts the text of the value


// Create a function that handles what to do after an input is given
function handleClick(){
// Grab the datetime value from the filter    
    let date =d3.select("#datetime").property("value");
    let filteredData = tableData;
// if statement
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
    buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);