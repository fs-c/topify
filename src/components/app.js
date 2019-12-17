import { Router } from 'preact-router';

import Home from '../routes/home';
import Authenticate from '../routes/authenticate';

const App = () => (
	<>
		<style jsx global>{`
			html, body {
				height: 100%;
				width: 100%;
				padding: 0;
				margin: 0;
				background: #FAFAFA;
				font-family: 'Helvetica Neue', arial, sans-serif;
				font-weight: 400;
				color: #444;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
			
			* {
				box-sizing: border-box;
			}
			
			#app {
				height: 100%;
			}
		`}</style>

		<div id='app'>
			<Router>
				<Home path='/' />

				<Authenticate path='/authenticate' />
			</Router>
		</div>
	</>
);

export default App;
