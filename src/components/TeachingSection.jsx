import { ways } from '../data'
import List from './List'
export default function TeachingSection() {
	return (
		<section>
			<ul>
				{ways.map(way => (
					<List key={way.title} {...way} />
				))}
			</ul>
		</section>
	)
}
