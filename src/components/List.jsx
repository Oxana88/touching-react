export default function List({ title, description }) {
	return (
		<li>
			<p>
				<strong>{title}</strong> {description}
			</p>
		</li>
	)
}
