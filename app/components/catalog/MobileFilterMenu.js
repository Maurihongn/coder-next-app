"use client";
import { categoriesMockData } from "@/data/mocks";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const MobileFilterMenu = () => {
  const [open, setOpen] = useState(false);
  const { category } = useParams();

  const handleFilterMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest("#filterMobileMenu")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const selectedCategory = categoriesMockData.find((c) => c.slug === category);

  return (
    <section className="lg:hidden bg-white rounded-sm shadow-sm">
      <button
        type="button"
        onClick={handleFilterMenu}
        className="flex w-full p-4 "
      >
        <span>{selectedCategory ? selectedCategory.name : "Categorias"}</span>
        <div className={`${open ? "rotate-180" : ""} ml-auto`}>
          <ArrowDropDownRoundedIcon />
        </div>
      </button>

      <div
        className={`${open ? "block" : "hidden"} bg-white px-4 pb-4`}
        id="filterMobileMenu"
      >
        <nav className="flex flex-col">
          <Link
            href={`/catalog/all`}
            className={`${
              category == `all` ? "bg-neutral-100" : "bg-transparent"
            } px-4 py-2 text-neutral-800 rounded-sm hover:bg-neutral-100 whitespace-nowrap text-ellipsis`}
          >
            Todas las categorias
          </Link>
          {categoriesMockData.map((c) => (
            <Link
              href={`/catalog/${c.slug}`}
              key={c.slug}
              className={`${
                category == c.slug ? "bg-neutral-100" : "bg-transparent"
              } px-4 py-2 text-neutral-800 rounded-sm hover:bg-neutral-100 whitespace-nowrap text-ellipsis`}
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};
export default MobileFilterMenu;
