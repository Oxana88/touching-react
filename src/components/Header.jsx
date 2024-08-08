import { useState } from 'react'
import logo from '/logo-name.svg'

// const now = new Date()
export default function Header() {
	const [now, setNow] = useState(new Date())
	setInterval(() => setNow(new Date()), 1000)
	return (
		<header>
			<img src={logo} alt="" />
			{/* <h3>Something</h3> */}
			<span>Actual time: {now.toLocaleTimeString()}</span>
		</header>
	)
}
