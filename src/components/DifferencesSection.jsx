import { useState } from 'react'
import { differences } from '../data'
import Button from './Button/Button'
export default function DifferencesSection() {
	const [contentType, setContentType] = useState(null)
	console.log('App Component Render')
	function handleClick(type) {
		setContentType(type)
		//content = type не сработает
	}
	let tabContent = null
	if (contentType) {
		tabContent = <p>{differences[contentType]}</p>
	} else {
		tabContent = <p>Press the button above</p>
	}
	return (
		<section>
			<h3>Lorem ipsum dolor sit.</h3>
			{/* <Button text="ghghg" />
		<Button text="555g" />
		<Button text="g46g" /> */}
			{/* <Button buttonClicked={handleClick}>loren2</Button>
		<Button buttonClicked={handleClick}>lore33</Button>
		<Button buttonClicked={handleClick}>lore22</Button> */}
			<Button
				isActive={contentType === 'way'}
				buttonClicked={() => handleClick('way')}
			>
				Lorem787
			</Button>
			<Button
				isActive={contentType === 'easy'}
				buttonClicked={() => handleClick('easy')}
			>
				Lorem7
			</Button>
			<Button
				isActive={contentType === 'program'}
				buttonClicked={() => handleClick('program')}
			>
				Lorem
			</Button>
			{/* {contentType ? (
			<p>{differences[contentType]}</p>
		) : (
			<div>Нажми на кнопку</div>
		)} */}
			{/* {!contentType ? <p>Нажми на кнопку</p> : null}
		{contentType ? <p>{differences[contentType]}</p> : null} */}
			{/* {!contentType && <p>Нажми на кнопку</p>}
		{contentType && <p>{differences[contentType]}</p>} */}
			{tabContent}
		</section>
	)
}
