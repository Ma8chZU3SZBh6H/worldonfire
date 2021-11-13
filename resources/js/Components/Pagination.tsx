import { Page } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import { TypePageProps, TypePagination } from "../types/Types";

function Pagination({ page }: TypePagination) {
    return (
        <div className="flex gap-1 justify-center">
            {Array(page.page_count)
                .fill(0)
                .map((value, index) => (
                    <Link
                        href={`/${index}`}
                        className={
                            page.page == index
                                ? "btn-page-selected"
                                : "btn-page"
                        }
                        key={index}
                    >
                        {index + 1}
                    </Link>
                ))}
        </div>
    );
}

export default Pagination;
