import { useState } from 'react'
import './Button.css'
export default function MyButton(handleClick, isActive) {
	const [county, setCounty] = useState(0)
	function handleClick() {
		setCounty(county + 1)
	}
	return (
		<button
			className={isActive ? 'button active' : 'button'}
			onClick={handleClick}
		>
			Add {county} to Cart
		</button>
	)
}
