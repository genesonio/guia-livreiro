import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { book } from "../../../types/book";
import Header from "../../components/header";
import { useRouter } from "next/router";

const Search: NextPage = () => {
  const [books, setBooks] = useState<book[]>();
  const router = useRouter();
  const [search, setSearch] = useState(router.asPath.slice(8));

  useEffect((): void => {
    const fetchData = async () => {
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&langRestrict=pt&printType=books&projection=lite`
      )
        .then((response: Response) => response.json())
        .then(({ items }: { items: book[] }): void => setBooks(items));
    };
    fetchData().catch((err) => console.error(err));
    void router.push("/search/" + search);
  }, [search]);

  return (
    <div className="mx-auto flex w-[78.125vw] flex-col">
      <Header search={search} onSearch={setSearch} />
      {!books && (
        <h1 className="mt-32 text-center text-3xl max-sm:mt-10 max-sm:text-center max-sm:text-xl">
          Desculpe, não foi possível encontrar o livro.
          <div className="my-4" />
          Talvez ele não exista em nosso banco de dados
        </h1>
      )}
      <div className="grid grid-cols-6 justify-between gap-2 max-[1575px]:grid-cols-5 max-[1345px]:grid-cols-4 max-[1024px]:grid-cols-3 max-[790px]:grid-cols-2 max-[505px]:grid-cols-1">
        {books &&
          books.map((book, index) => {
            if (!book.volumeInfo.authors) return;
            return (
              <Link
                href="/book/[book]"
                as={`/book/${book.id}`}
                key={index}
                className="flex cursor-pointer flex-col gap-1 rounded-3xl border-2 border-[#666] p-2 text-center"
              >
                <>
                  {book.volumeInfo.imageLinks ? (
                    <div className="relative h-[14rem]">
                      <Image
                        fill
                        className="object-contain"
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={"Capa do Livro " + book.volumeInfo.title}
                        sizes="(min-width: 320px) 100%"
                      />
                    </div>
                  ) : (
                    <div className="relative h-[14rem]">
                      <Image
                        fill
                        className="object-contain"
                        src="/bookimage.png"
                        alt={"Capa do Livro " + book.volumeInfo.title}
                        sizes="(min-width: 320px) 100%"
                      />
                    </div>
                  )}
                  <h1>{book.volumeInfo.title}</h1>
                  {book.volumeInfo.authors.map((author, index) => {
                    return <h2 key={index}>{author}</h2>;
                  })}
                  <h3>{book.volumeInfo.publishedDate}</h3>
                </>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
