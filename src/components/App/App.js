import FormInput from '../FormInput';
import Game from '../Game';
import Header from '../Header';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <FormInput />
      </div>
    </div>
  );
}

export default App;
