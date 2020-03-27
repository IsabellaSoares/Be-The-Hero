import React, { Fragment, useState } from 'react';
import Header from './Header';

function App() {
  let [counter, setCounter] = useState(0);

  function increment () {
    setCounter(counter + 1);
  }

	return (
		<Fragment>
			<Header>Contador: {counter}</Header>
			<button onClick={increment}>Incrementar</button>
		</Fragment>
	);
}

export default App;
