import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Workouts from './pages/Workouts' 
import Navbar from './components/Navbar' 

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar /> 
				<div className="bg-slate-200 py-10 px-20">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/workout' element={<Workouts />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
