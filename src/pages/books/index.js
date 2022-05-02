import Link from 'next/link';
import Head from 'next/head';
import Book from '../../components/books/book';
export default function Books({ books }) {
	return (
		<div>
			<Head>
				<link
					href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
					rel='stylesheet'
				/>
			</Head>

			<h2>Books</h2>
			<section className='container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased'>
				<section className='grid lg:grid-cols-2 2xl:grid-cols-6 grid-cols-1 gap-16'>
					{books &&
						books?.map((book) => {
							return <Book key={book.slug} book={book}></Book>;
						})}
				</section>
			</section>
		</div>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(
		'https://api.guardianpubs.com/v2/books?limit=999&sort=desc'
	);

	const books = await response.json();

	return {
		props: {
			books: books.data,
		},
	};
};
