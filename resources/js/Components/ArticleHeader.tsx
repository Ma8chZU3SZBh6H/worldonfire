import { TypeArticleHeader } from "../types/Types";

function ArticleHeader({ children, url }: TypeArticleHeader) {
    return (
        <div className={`${url && "grid grid-cols-1fr-auto"} gap-y-4 gap-x-2`}>
            {children}
        </div>
    );
}

export default ArticleHeader;
