import Book from "@/models/Book";
import Link from "next/link";

export default function BookCard({ book }: { book: Book}) {
  return (
    <Link href={`book/${book.id}`}>
      <li className="max-w-max space-y-2 border bg-white  hover:shadow-lg">
        <img src={book.coverImage} className="md:h-72 mx-auto" alt="" />

        <div className="flex flex-col justify-between space-y-2 p-3">
          <p className="text-sm font-semibold text-slate-800 pb-0">{book.title}</p>
          <p className="text-xs font-light capitalize text-slate-500 pb-2">
            {book.writer}
          </p>
          <span className="text-red-600"><b>{book.point}</b> Point</span>
          <span className="text-xs text-slate-300 text-wrap">
            {book.tags.map((e) => e.name).join(', ')}
          </span>
        </div>
      </li>
    </Link>
  );
}