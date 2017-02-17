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
  var newBoard = new Board({n: n});
  // create a function called addRook(board, rookNum, rowIndex, colIndex)
  var addRook = function (board, rookNum, rowIndex, colIndex) {
    //base case: rookNum = n
    if (rookNum === n) {

      //solution = board
      return board.rows(); 
    // continue if: rookNum < n
    } else {
      //toggle rook at location(rowIndex, colIndex)
      board.togglePiece(rowIndex, colIndex);
      // if valid rook: !hasAnyRowConflicts && !hasAnyColConflicts
      if (!board.hasAnyRooksConflicts()) {
        // increment rookNum
        rookNum += 1; 


      // else
      } else {
        //toggle rook
        board.togglePiece(rowIndex, colIndex);
      } 
      // find next available location / update row and col values  
      //if colIndex = n-1 

      var newIndices = this.incrementIndex(rowIndex, colIndex, n);
      // if (colIndex === n - 1) {
      //   //rowIndex +=1
      //   rowIndex += 1;
      //   //colIndex = 0
      //   colIndex = 0;
      // //else colIndex += 1; 
      // } else {
      //   colIndex += 1;
      // }
    }  
    return addRook(board, rookNum, newIndices[0], newIndices[1]);
    // recusive call (board, rookNum, rowIndex, colIndex)
  };
  var solution = addRook(newBoard, 0, 0, 0);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  
  return solution;
};

window.incrementIndex = function(rowIndex, colIndex, n) {
  if (colIndex === n - 1) {
    //rowIndex +=1
    rowIndex += 1;
    //colIndex = 0
    colIndex = 0;
  //else colIndex += 1; 
  } else {
    colIndex += 1;
  }
  return [rowIndex, colIndex];
};

//return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var newBoard = new Board({n: n});
  // create a function called addRook(board, rookNum, rowIndex, colIndex)
  var addRook = function (board, rookNum, rowIndex, colIndex) {
    if (rookNum === n) {
      solutionCount++;
      return;
    }
    if (rowIndex > n - 1) {
      return;
    //base case: rookNum = n
    // continue if: rookNum < n
    } else {
      //toggle rook at location(rowIndex, colIndex)
      board.togglePiece(rowIndex, colIndex);
      // if valid rook: !hasAnyRowConflicts && !hasAnyColConflicts
      if (!board.hasAnyRooksConflicts()) {
        // increment rookNum
        rookNum += 1; 
        var newIndices = this.incrementIndex(rowIndex, colIndex, n);      //
        addRook(board, rookNum, newIndices[0], newIndices[1]);
        //delete existing rook & start a new
        board.togglePiece(rowIndex, colIndex);
        rookNum--;
        addRook(board, rookNum, newIndices[0], newIndices[1]);    
      } else {
        //toggle rook
        board.togglePiece(rowIndex, colIndex);
        var newIndices = this.incrementIndex(rowIndex, colIndex, n);
        addRook(board, rookNum, newIndices[0], newIndices[1]);
      } 
    }  
    // recusive call (board, rookNum, rowIndex, colIndex)
  };
  addRook(newBoard, 0, 0, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};





// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var newBoard = new Board({n: n});
  // var addQueenCalled = 0;
  // create a function called addRook(board, rookNum, rowIndex, colIndex)
  var addQueen = function (board, queenNum, rowIndex, colIndex) {
    // addQueenCalled += 1;
    // console.log('addQueenCalled: ' + addQueenCalled);
    //base case: rookNum = n



    if (queenNum === n) {
      //solution = board
      return board.rows(); 
    }

    if (rowIndex > n - 1) {
      return;
    } else {
      //toggle rook at location(rowIndex, colIndex)
      board.togglePiece(rowIndex, colIndex);
      // if valid rook: !hasAnyRowConflicts && !hasAnyColConflicts
      if (!board.hasAnyQueensConflicts()) {
        queenNum += 1; 
        // increment rookNum
        var newIndices = this.incrementIndex(rowIndex, colIndex, n);      //
        var firstIt = addQueen(board, queenNum, newIndices[0], newIndices[1]);
        if (firstIt) {
          return firstIt;
        }
        //delete existing rook & start a new
        board.togglePiece(rowIndex, colIndex);
        queenNum--;
        return addQueen(board, queenNum, newIndices[0], newIndices[1]);    
      } else {
        //toggle rook
        board.togglePiece(rowIndex, colIndex);
        var newIndices = this.incrementIndex(rowIndex, colIndex, n);
        return addQueen(board, queenNum, newIndices[0], newIndices[1]);
      }

    //end insert

      // //toggle rook at location(rowIndex, colIndex)
      // board.togglePiece(rowIndex, colIndex);

      // //console.log(board.rows());
      // // if valid queen: 
      // if (!board.hasAnyQueensConflicts()) {
      //   // increment rookNum
      //   queenNum += 1; 
      //   console.log(rowIndex, colIndex, queenNum);
      // // else
      // } else {
      //   //toggle queen
      //   board.togglePiece(rowIndex, colIndex);
      // } 
      // find next available location / update row and col values   
      //var newIndices = this.incrementIndex(rowIndex, colIndex, n);
    }  
    return addQueen(board, queenNum, newIndices[0], newIndices[1]);
    // recusive call (board, rookNum, rowIndex, colIndex)
  };
  // if (n < 3 || n === 5 ) {
  var solution = addQueen(newBoard, 0, 0, 0);
  // } else if (n === 6) {
  //   var solution = addQueen(newBoard, 0, 0, 4);
  // } else {
  //   var solution = addQueen(newBoard, 0, 0, 1);
  // }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  
  var solutionCount = 0; 

  var newBoard = new Board({n: n});
  // create a function called addRook(board, rookNum, rowIndex, colIndex)
  var addQueen = function (board, queenNum, rowIndex, colIndex) {
    if (queenNum === n) {
      solutionCount++;
      return;
    }
    if (rowIndex > n - 1) {
      return;
    //base case: rookNum = n
    // continue if: rookNum < n
    } else {
      //toggle rook at location(rowIndex, colIndex)
      board.togglePiece(rowIndex, colIndex);
      // if valid rook: !hasAnyRowConflicts && !hasAnyColConflicts
      if (!board.hasAnyQueensConflicts()) {
        // increment rookNum
        queenNum += 1; 
        var newIndices = this.incrementIndex(rowIndex, colIndex, n);      //
        addQueen(board, queenNum, newIndices[0], newIndices[1]);
        //delete existing rook & start a new
        board.togglePiece(rowIndex, colIndex);
        queenNum--;
        addQueen(board, queenNum, newIndices[0], newIndices[1]);    
      } else {
        //toggle rook
        board.togglePiece(rowIndex, colIndex);
        var newIndices = this.incrementIndex(rowIndex, colIndex, n);
        addQueen(board, queenNum, newIndices[0], newIndices[1]);
      } 
    }  
    // recusive call (board, rookNum, rowIndex, colIndex)
  };
  addQueen(newBoard, 0, 0, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

















