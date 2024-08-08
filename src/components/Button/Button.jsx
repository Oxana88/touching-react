import './Button.css'
export default function Button({ children, buttonClicked, isActive }) {
	// function handleClick() {
	// 	console.log('button clicked')
	// }
	// const handleMouseEnter = () => console.log('Mouse Enter')
	// let classes = 'button'
	// if (isActive) {
	// 	classes += ' active'
	// }
	return (
		// <button
		// 	className="button"
		// 	onClick={handleClick}
		// 	onMouseEnter={handleMouseEnter}
		// 	onDoubleClick={() => console.log('dbl')}
		// >
		// 	{children}
		// </button>
		// <button className={classes} onClick={buttonClicked}>
		// 	{children}
		// </button>
		<button
			className={isActive ? 'button active' : 'button'}
			onClick={buttonClicked}
		>
			{children}
		</button>
	)
}
