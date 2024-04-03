
import BookList from "@/components/home/BookList";
import BookCategory from '@/components/home/BookCategory';

export default function Category({params}: {params: {slug: number}}) {
    
    return (
        <section className="flex">
          <aside id="" className="flex-none w-14 p-10" aria-label="Sidebar">
            <BookCategory category={params.slug} />
          </aside>
    
          <div className="flex-auto p-4 sm:ml-64">
            <BookList category={params.slug}/>
          </div>
        </section>
      );
}
