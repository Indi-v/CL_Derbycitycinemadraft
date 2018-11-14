
//Definitions 
var BoxOfficeDraft = draftData.BoxOfficeDraft;
var BodCount= Object.keys('draftData.BoxOfficeDraft').length;
var $movieTable = $('#movieTable');


function buildMovieTable () {
    // Build a table row  
    var row= "<tr><td>" + BoxOfficeDraft[idVal].Movie + "</td><td>" + BoxOfficeDraft[idVal].Owner + "</td><td> $" + (BoxOfficeDraft[idVal].DomesticGross/1000000).toFixed(2) + " Mil</td></tr>"
    $movieTable.append(row)
    // Add the hiddenRow class to hide the column when on mobile
    var $hiddenRow = $('#movieTable td:nth-child(2n)')
    $hiddenRow.addClass('hiddenRow')
}
for (i=1; i<BodCount; i++) {
    var idVal = i + 1000;
    buildMovieTable()
    

};

var Score = draftData.Score;
var $scoreTable= $('#scoreTable');



$scoreTable.append('<tr><th>Player</th><th>Current Total</th></tr>')
$.each(Score, function(key , value){
                console.log("test ", "$" +  (value.Gross/1000000).toFixed(2) + " Mil" )
                console.log("val", value.Gross)
                    $scoreTable.append('<tr><td>' + key + "</td><td>" + "$" +  (value.Gross/1000000).toFixed(2) + " Mil"+ '</td></tr>') 
                });