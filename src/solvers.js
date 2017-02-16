/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; 

  // create a new board
  var board = new Board({n: n});
  // create rook counter = 0

  // ADD ROOKS THROUGH RECURSION??

  // base case: counter = n

  // continue if: counter < n 

  // recursive function(counter, existing option)

    // define index = find last index of existing option where value = 1

    // for loop: start from index +1 || row = 0, col = 0 
    // then loop through row first, then col
      
      // set board[rowIndex][colIndex] = 1 to add the rook

      // if !hasAnyRowConflicts && !hasAnyColConflicts

        // increment counter and exit for loop

      // else delete rook and continue for loop

    // recusive call 

  // call recursive function









// ----

  //Create an initial empty array of length 16 [0,0,0,0],[]

  //create rook count variable
  //create next available array index placeholder
  //Add rook 1
  //while rook count < n . . .
  //(for loop i = next available array; i < 15; i++)

    //change array[i] to 1 to place a rook
    //update rook count variable
    //create a new Board with the array and ask if it passes the test
    //if the board passes the test, rook count +=1 move to next rook . . .
    //if it doesn't pass the test, move the new rook to the next available indext



  //














  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
