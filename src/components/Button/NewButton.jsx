import './Button.css'
export default function NewButton({ onClick, count }) {
	return (
		<button className="button" onClick={onClick} style={{ margin: '0.3rem' }}>
			Clicked {count} times
		</button>
	)
}
