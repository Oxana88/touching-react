import { useState } from 'react'
import NewButton from './Button/NewButton'
export default function Counter() {
	const [count, setCount] = useState(0)

	function handleClick() {
		setCount(count + 1)
	}
	return (
		<>
			<hr />
			<h3
				style={{
					fontSize: '20pt',
					textAlign: 'center',
					color: '#3e6ae1',
					textDecoration: 'overline',
					marginTop: '120px',
				}}
			>
				Here is some counter, working together
			</h3>
			<div style={{ margin: '0 40%' }}>
				<NewButton count={count} onClick={handleClick} />
				<NewButton count={count} onClick={handleClick} />
				<NewButton count={count} onClick={handleClick} />
			</div>
		</>
	)
}
