
import BookList from "@/components/home/BookList";
import BookCategory from '@/components/home/BookCategory';

function Home() {
  return (
    <section className="flex">
      <aside id="" className="flex-none w-14 p-10" aria-label="Sidebar">
        <BookCategory category={0}/>
      </aside>

      <div className="flex-auto p-4 sm:ml-64">
        <BookList category={0}/>
      </div>
    </section>
  );
}

export default Home;