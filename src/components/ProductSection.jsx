import { products } from '../data'
import MyButton from './Button/MyButton'
export default function ProductSection() {
	const ListItems = products.map(product => (
		<li
			key={product.id}
			style={{
				color: product.isFruit ? 'magenta' : 'darkgreen',
			}}
		>
			{product.title}
		</li>
	))
	return (
		<>
			<h3 style={{ textDecoration: 'underline' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing.
			</h3>
			<ul>{ListItems}</ul>
			<MyButton />
			<h3 style={{ textDecoration: 'underline' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing.
			</h3>
			<ul>{ListItems}</ul>
			<MyButton />
			<h3 style={{ textDecoration: 'underline' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing.
			</h3>
			<ul>{ListItems}</ul>
			<MyButton />
		</>
	)
}
