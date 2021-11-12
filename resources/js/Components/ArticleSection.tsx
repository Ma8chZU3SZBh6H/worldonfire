import useNews from "../Hooks/useNews";
import { TypeArticleSection } from "../types/Types";

function ArticleSection({
    children,
    className,
    index,
    expanded = true,
}: TypeArticleSection) {
    const { news } = useNews();

    return (
        <div
            className={`col-span-2 flex justify-between flex-wrap overflow-hidden transition-all gap-3 ${
                (news.selected == index ?? 0) || expanded
                    ? "max-h-60"
                    : "max-h-0"
            } ${className} `}
        >
            {children}
        </div>
    );
}

export default ArticleSection;
