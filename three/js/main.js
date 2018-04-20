var grid_size,
    num_players,
    game_array,
    size,
    activePlayer,
    available_pos

function createGrid(event){
  activePlayer = 1
  available_pos = []
  document.getElementById("playArea").innerHTML = ""
  event.preventDefault();
  grid_size = parseInt(document.getElementById("grid").value)
  game_array = {}
  num_players = document.getElementById("players").value
  size = Math.pow(grid_size,2)
  var i=0
  while(i < size) {
    game_array[i] = undefined
    available_pos.push(i)
    var grid = document.createElement('label');
    grid.id = i
    grid.addEventListener("click", clickCell,  true)
    grid.className = "grid"
    i++
    document.getElementById("playArea").appendChild(grid)
    document.getElementById("playArea").style.width = grid_size * 50 + 'px'
  }
}

function generateRand(){

  var rand = Math.floor(Math.random() * (available_pos.length -1)) + 0
  var index = available_pos[rand]

  return index

}
function computersTurn(){

  var rand = generateRand()
  console.log(rand);
  setTimeout(function(){
    document.getElementsByClassName('grid')[rand].click()
  }, 1000)

}

function clickCell(){

  this.innerHTML = activePlayer
  game_array[this.id] = activePlayer
  var pos = available_pos.indexOf(parseInt(this.id))
  available_pos.splice(pos, 1);
  activePlayer++;
  if(activePlayer > num_players){ activePlayer = 1 }

  var winner = checkWinner()
  if(activePlayer == num_players && !winner){
    computersTurn()
  }

  this.removeEventListener("click", clickCell, true)
}

function checkWinner(){
  var complete = false
  var rowWinner = checkRows()
  var colWinner = checkColumns()
  var forwardDiagonalWinner = checkDiagonals()
  if(rowWinner){
    alert(rowWinner + " is the winner")
    return true
  }
  else if(colWinner){
    alert(colWinner + " is the winner")
    return true
  }
  else if(forwardDiagonalWinner){
    alert(forwardDiagonalWinner + " is the winner")
    return true
  }
  else{
    var totalVals = []

    for(var i in game_array){
      if(game_array[i]){
        totalVals.push(game_array[i])
      }
    }
    if(totalVals.length == size){
      alert("draw")
    }
  }
}

function checkDiagonals(){
  var n1 = grid_size - 1,
      n2 = grid_size + 1,
      key = 0
  //Detect Forward diagonal
  while(key < grid_size - 1){
    var pointer1 = n2 * key,
        pointer2 = n2 * (key+1),
        pos1 = game_array[pointer1],
        pos2 = game_array[pointer2]
        if(pos1 && pos2 && (pos1 == pos2)){
          if(key == grid_size - 2){
            console.log(pos2, " is the winner");
            return pos2
          }
          else{
            key++
            continue
          }
        }
        else{

          break
        }
  }

  key = 1
  //Detect Backward diagonal
  while(key <= grid_size){
    var pointer1 = n1 * key,
        pointer2 = n1 * (key+1),
        pos1 = game_array[pointer1],
        pos2 = game_array[pointer2]
        if(pos1 && pos2 && (pos1 == pos2)){
          if(key == grid_size - 1){
            console.log(pos2, " is the winner");
            return pos2
          }
          else{
            key++
            continue
          }
        }
        else{

          break
        }
  }

}

function checkColumns(){
  var colPointer = 0
  //check winner in columns
  var key = 0

  var maxColLimit = ((colPointer+1) * grid_size)
  while(key < maxColLimit && (colPointer < grid_size)){
    maxColLimit = ((colPointer+1) * grid_size)
    var pointer1 = (grid_size * key) + colPointer,
        pointer2 = (grid_size * (key + 1)) + colPointer,
        pos1 = game_array[pointer1],
        pos2 = game_array[pointer2]

    if(pos1 && pos2 && (pos1 == pos2)){

      // console.l  og((key + 2) % ((colPointer+1) * parseInt(grid_size)), key != 0);
      if(((colPointer+1) * (key + 2)) % ((colPointer+1) * grid_size) == 0 && key != 0){
        console.log(pos2, " is the winner");
        return pos2
      }
      key++
    }
    else {
      key = 0
      colPointer++
      continue
    }
  }
}

function checkRows(){
  var rowPointer = 1
  //check winner in rows
  var key = 0
  while(key < size){
    var pos1 = game_array[key]
    var pos2 = game_array[key + 1]
    if(pos1 && pos2 && (pos1 == pos2)){
      if((key + 2) % grid_size == 0 && key != 0){
        console.log(pos2, " is the winner");
        return pos2
      }
      key++
    }
    else {
      key = rowPointer * grid_size
      rowPointer++
      continue
    }
  }
}
