// import { Fragment } from 'react'
import React from 'react'
import Counter from './components/Counter'
// import NewButton from './components/Button/NewButton'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import WithStateHook from './components/WithStateHook'
export default function App() {
	// const [count, setCount] = useState(0)

	// function handleClick() {
	// 	setCount(count + 1)
	// }
	return (
		<>
			{/* // <Fragment> */}
			<Header />
			<main>
				<IntroSection />
				{/* <h3>Here is some counter</h3>
				<NewButton count={count} onClick={handleClick} />
				<NewButton count={count} onClick={handleClick} />
				<NewButton count={count} onClick={handleClick} /> */}
				<WithStateHook />

				<Counter />
			</main>
			{/* </Fragment> */}
		</>
	)
}
