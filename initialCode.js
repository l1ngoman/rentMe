//load initial dataset
//part number, name, description, status (on_rent/on_hand)
function makeItems(partNum,desc,status){
  var newItem = {
    partNum: partNum,
    desc: desc,
    status: status,
    getInfo: function(){console.log(`Part No: ${partNum}\nDesc: ${desc}\nStatus: ${status}`)}
  }
}

var item1 = makeItems
