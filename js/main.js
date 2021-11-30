function addToHTML(person) {
  var name = person["name"];
  var next = person["next"];
  var day = person["day"];
  var table = document.getElementById("tbody");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(0);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = name;
  var dayhtml = ""
  let part1HTML = '<td class="grn" style="width: '+(day*10)+'px"><div class="tooltip">PET<span class="tooltiptext">Day '+String(day)+'</span></div></td>'
  let part2HTML = part1HTML + '<td class="red" style="width: '+(day*10)+'px"><div class="tooltip">MDT<span class="tooltiptext">Day '+String(day)+'</span></div></td>'
  let part3HTML = part2HTML + '<td class="blu" style="width: '+(day*10)+'px"><div class="tooltip">Consultation<span class="tooltiptext">Day '+String(day)+'</span></div></td>'

  if (day > 20) {
    dayhtml += part3HTML
  } else if (day > 10) {
    dayhtml += part2HTML
  } else if (day > 1) {
    dayhtml += part1HTML
  }

    
  cell2.innerHTML = '<table border="0" summary=""> <tr align= "right"> <td CT</td> <td>PET</td> <td>MDT</td> </tr> <tr id="tr"> <th>-</th>'+dayhtml+'</tr></table>';
  cell3.innerHTML = next;
}

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker 
              .register('./sw.js');
  }
  var people = [
    {
      "name" : "Joe",
        "stage" : 3,
        "day" : 23,
        "next" : "MDT"
    },
    {
        "name" : "Eric",
        "stage" : 4,
        "day" : 35,
        "next" : "Consultation"
    },
    {
        "name" : "Sarah",
        "stage" : 1,
        "day" : 0,
        "next" : "Consultation"
    },
    {
        "name" : "John",
        "stage" : 2,
        "day" : 16,
        "next" : "test"
    }
  ]
  
  people.forEach(element => addToHTML(element));
}

