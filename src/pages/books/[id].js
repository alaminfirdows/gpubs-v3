import Head from 'next/head';
import BookComponent from '../../components/books/book';
export default function Book({ book }) {
	return (
		<div>
			<Head>
				<link
					href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
					rel='stylesheet'
				/>
			</Head>

			<h2>Books</h2>
			{book && <BookComponent key={book.id} book={book} />}
		</div>
	);
}

export const getStaticProps = async (context) => {
	const res = await fetch(
		`https://api.guardianpubs.com/v2/books/${context.params.id}`
	);

	const book = await res.json();

	return {
		props: {
			book: book.data,
		},
	};
};

export const getStaticPaths = async () => {
	const response = await fetch(
		'https://api.guardianpubs.com/v2/books?limit=999&sort=desc'
	);

	const books = await response.json();

	const ids = books.data.map((book) => book.id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};
