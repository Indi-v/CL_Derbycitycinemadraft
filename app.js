
//Definitions 
var BoxOfficeDraft = draftData.BoxOfficeDraft;
var BodCount= Object.keys('draftData.BoxOfficeDraft').length;
var $movieTable = $('#movieTable');


function buildMovieTable () {

    var row= "<tr><td>" + BoxOfficeDraft[idVal].Movie + "</td><td>" + BoxOfficeDraft[idVal].Owner + "</td><td>" + BoxOfficeDraft[idVal].DomesticGross; + '</td></tr>'
    $movieTable.append(row)
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
            .each('draftdata.Score', function(key , value){
                    $scoreTable.append('<tr><td>' + key + "</td><td>" + key.Gross + '</td></tr>') 
                });