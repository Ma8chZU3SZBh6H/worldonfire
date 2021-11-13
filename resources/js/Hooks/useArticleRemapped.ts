import { Article } from "../types/Article";

function useArticleRemapped(article: Article) {
    return {
        source_id: article.source.id,
        source_name: article.source.name,
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        url_img: article.urlToImage,
        published_at: article.publishedAt,
        content: article.content,
    };
}

export default useArticleRemapped;
