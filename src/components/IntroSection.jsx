import React from 'react'
// export default function IntroSection() {
// 	return (
// 		<section>
// 			<h1 className="centered">Lorem, ipsum dolor.</h1>
// 			<h3 className="centered" style={{ color: '#666' }}>
// 				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
// 				tenetur voluptatibus nobis in veritatis omnis error quam similique
// 				laborum labore, repudiandae mollitia deserunt neque molestias a ratione.
// 				Ex, voluptatibus corrupti?
// 			</h3>
// 		</section>
// 	)
// }
const e = React.createElement
export default function IntroSection() {
	return e('section', null, [
		e('h1', { className: 'centered', key: 1 }, 'Lorem ipsum dol'),
		e(
			'h3',
			{ className: 'centered', style: { color: '#666' }, key: 2 },
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium iste possimus repellat? Corrupti porro totam architecto accusantium nam quas veritatis, voluptatibus fuga eveniet incidunt excepturi velit quasi fugit maiores eligendi dolore illo laboriosam officiis dolores ut magni inventore repellat.'
		),
	])
}
