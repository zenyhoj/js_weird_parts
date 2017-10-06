
// 12 column grid calculation

//function to accept no. of grids
function getColumns(nCol) {
    var colPercentage;
    var myArr = [];
    for (var i = 1; i <= nCol; i++) {
        colPercentage = 100 / nCol;
        myArr.push(colPercentage);
    }

    var total = 0;
    for (var x in myArr) {
        total += myArr[x];
        console.log(total);
    }



}

getColumns(10);//function to accept no. of grids