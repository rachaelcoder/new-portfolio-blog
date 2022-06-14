import React from "react";
import {  Box } from 'reflexbox'
import SubscribeForm from "../components/Form"
import Categories from "../components/Categories"
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from '@emotion/styled'
import Link from "next/link";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout className="layout" categories={categories}>
    <Box variant="container" width="100%">
      <HomeStyled>
        <Wrapper>
          <LeftScreen>
            <img className="world-pic" src="https://i.postimg.cc/50xhrmYd/Untitled-design-8.png" alt="world" />
          </LeftScreen>
         <RightScreen>
           <ButtonWrapper>
              <MainText>
                Explore The World Of Code 
                With Me. Learn More About Front-End Development, UX/UI Design, and Full-Stack Topics.
              </MainText>
              <Button>
                LEARN MORE
              </Button>
            </ButtonWrapper>
        </RightScreen>
        </Wrapper>
      </HomeStyled>
    </Box>

      <Seo seo={homepage.attributes.seo} />
      <div className="black-hole uk-section">
        <Categories>

        </Categories>
{/* 
      <Box>
        <a href={`/category/tech`}>
          Tech
        </a>
      </Box>
      <Box>
        <a href={`/category/design`}>
          Design
        </a>
      </Box>
      <Box>
        <a href={`/category/random`}>
          Random
        </a>
        
      </Box> */}
      </div>
      <FormBox>
        <SubscribeForm /> 
      </FormBox>
    </Layout>
  );
};

const HomeStyled = styled.div`
    display: flex;
    width: 100%;
    height: 120vh;
    margin: auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    .background {
      width: 100%;
      @media screen and (max-width: 1400px) {
        margin-left: 0px;
        margin-right: 0px;
        height: 100%;
       }
    }
`

const FormBox = styled.div`
   padding: 70px;
   height: 80vh;
   margin: auto;
   @media screen and (max-width: 1050px) {
    padding: 15px;
   }
`

const ArticleWrapper = styled.div`
   width: 87%;
   margin: auto;
`

const Wrapper = styled.div`
   display: flex; 
   justify-content: space-evenly;
   position: absolute;
   width: 80%;
   margin: auto;
   align-items: center;
   text-align: center;
   justify-content: center;
   @media screen and (max-width: 1050px) {
    flex-direction: column;
    width: 100%;
    justify-content: center
   }
`
const RightScreen = styled.div`
   width: 50%;
   color: #B0E9EE;
   font-size: 20px;
   margin: auto;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   @media screen and (max-width: 1050px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    height: auto;
   }
`
const LeftScreen = styled.div`
  width: 50%;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 1050px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    height: auto;
    margin-bottom: 90px;
   }
`

const Button = styled.button`
   width: 30%;
   margin: auto;
   padding: 15px;
   font-size: 13px;
   background-image: linear-gradient(to right, #F700AA 15%, #E293AF 85%);
   border: none;
   border-radius: 50px;
   color: white;
   @media screen and (max-width: 1050px) {
      min-width: 200px;
  }
}
`
const ButtonWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  @media screen and (max-width: 1050px) {
      position: relative;
      width: 80%;
      margin: auto;
  }
}
`
const MainText = styled.div`
    margin: auto;
    padding-bottom: 50px;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 37px;
    font-family: 'M PLUS Code Latin', sans-serif;
    @media screen and (max-width: 1050px) {
      position: relative;
  }
`

export async function getStaticProps() {
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

export default Home;