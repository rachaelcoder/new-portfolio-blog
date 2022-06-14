import React from "react";
import { Box } from 'reflexbox'
import styled from '@emotion/styled'
import Articles from "../components/articles";
import { fetchAPI } from "../lib/api";
import Nav from "../components/Nav";

const Blog = ({ articles, categories, homepage }) => {
    return (
       <div className="blog-page">
           <Nav></Nav>
        <Box>
            <div className="uk-container uk-container-large">
                <ArticleWrapper>
                    <Articles articles={articles} />
                </ArticleWrapper>
            </div>
        </Box>
    </div> 
    )
}

const ArticleWrapper = styled.div`
   width: 87%;
   margin: auto;
`

export async function getStaticProps() {
    // Run API calls in parallel
    const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
      fetchAPI("/articles", { populate: ["image", "category"] }),
      fetchAPI("/categories", { populate: "*" }),
      fetchAPI("/homepage", {
        populate: {
          hero: "*",
          seo: { populate: "*" },
        },
      }),
    ]);
  
    return {
      props: {
        articles: articlesRes.data,
        categories: categoriesRes.data,
        homepage: homepageRes.data,
      },
      revalidate: 1,
    };
  }

export default Blog