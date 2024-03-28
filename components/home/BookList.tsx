import Book from '@/models/Book';
import BookCard from './BookCard';

export default function BookList({ books }: { books: Book[]}) {
  return (
    <ul className="grid-cols-4 sm:grid sm:grid-cols-3 sm:gap-9 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
      {books.map((book) => (
        <>
          <BookCard key={book.id} book={book} />
        </>
      ))}
    </ul>
  );
}