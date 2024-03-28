import { faker } from '@faker-js/faker';

import BookList from "@/components/home/BookList";
import Book from "@/models/Book";
import Tag from '@/models/Tag';
import BookCategory from '@/components/home/BookCategory';

async function getAllBook(): Promise<Book[]> {
  const books: Book[] = Array(20).fill(0).map((e) => {
    const book = new Book();
    book.id = e + 1;
    book.title = faker.commerce.productName()
    book.writer = `${faker.person.firstName()} ${faker.person.lastName()}`
    book.point = Math.floor(Math.random() * 100);
    
    const tag = new Tag()
    tag.id = 1;
    tag.name = 'Fiction';
    book.tags.push(tag)

    return book;
  });

  return books;
}

async function Home() {
  const books = await getAllBook();

  return (
    <section className="px-14 py-7">
      <aside id="default-sidebar" className="" aria-label="Sidebar">
        <BookCategory />
      </aside>

      <div className="p-4 sm:ml-64">
        <BookList books={books} />
      </div>
    </section>
  );

  {
    /* new-book best-book-list author-list */
  }
}

export default Home;