import { Player, Board } from './GameEngine';

class GameManager
{
  constructor()
  {
    this.player1 = new Player('O', 'Player 1');
    this.player2 = new Player('X', 'Player 2');
    this.currentPlayer = this.player1;
    this.gameBoard = new Board(3, 3);
  }

  togglePlayer()
  {
    this.currentPlayer = this.currentPlayer.name == this.player2.name ? this.player1 : this.player2;
  }

  writeMove(input)
  {
    return this.gameBoard.writeTurn(this.currentPlayer, input);
  }
}

export default GameManager;
