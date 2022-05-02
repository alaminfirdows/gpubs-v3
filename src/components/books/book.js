import Link from 'next/link';
export default function book({ book }) {
	return (
		<article className='mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group'>
			<div className='max-h-125 overflow-hidden'>
				<Link href={`books/${book.id}`}>
					<img
						className='transform duration-300 group-hover:scale-110'
						src={book.image}
						alt={book.name}
					/>
				</Link>
			</div>
			<Link href={`books/${book.id}`}>
				<h2 className='font-medium text-lg'>{book.name}</h2>
			</Link>
			<div className='flex justify-between items-center mt-3 '>
				<div className='text-base uppercase font-semibold text-gray-500'>
					15 Days Tour
				</div>
				<div className='text-base text-right'>
					<div className='flex'>
						<svg
							className='w-4 h-4 mx-px fill-current text-orange-600'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 14 14'>
							<path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
						</svg>
						<svg
							className='w-4 h-4 mx-px fill-current text-orange-600'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 14 14'>
							<path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
						</svg>
						<svg
							className='w-4 h-4 mx-px fill-current text-orange-600'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 14 14'>
							<path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
						</svg>
						<svg
							className='w-4 h-4 mx-px fill-current text-orange-600'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 14 14'>
							<path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
						</svg>
						<svg
							className='w-4 h-4 mx-px fill-current text-gray-300'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 14 14'>
							<path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
						</svg>
					</div>
				</div>
			</div>
		</article>
	);
}
