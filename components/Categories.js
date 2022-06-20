import styled from '@emotion/styled'
import {  Box } from 'reflexbox'

function Categories() {
    return(
        <CategoryContainer>
            <CategoryBox>
                <CatLink href={`/category/tech`}>
                    <CatImage src="https://i.postimg.cc/xTWVtkDS/Untitled-design-1.png" alt="tech"/>
                    <CatTitle>
                        Tech
                    </CatTitle>
                </CatLink>
            </CategoryBox>
            <CategoryBox>
                <CatLink href={`/category/design`}>
                    <CatImage src="https://i.postimg.cc/fyDp6XWV/Untitled-design-2.png" alt="design" />
                    <CatTitle>
                        Design
                    </CatTitle>
                    
                </CatLink>
            </CategoryBox>
            <CategoryBox>
                <CatLink href={`/category/random`}>
                    <CatImage src="https://i.postimg.cc/YCzzgSTt/Untitled-design-3.png" alt="random" />
                    <CatTitle>
                        Random  
                    </CatTitle>
                </CatLink>
            </CategoryBox>  
        </CategoryContainer>
    )
}

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 87%;
    text-decoration: none;
    margin: 20px;
    position: relative;
    margin: auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius: 18px;
    @media screen and (max-width: 1050px) {
        flex-direction: column;
        justify-content: center
        position: absolute;
        padding-top: 50px;
       }
    }
`

const CategoryBox = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #211B26;
    width: 30%;
    text-decoration: none;
    margin: 20px;
    position: relative;
    margin: auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
    font-size: 20px;
    font-family: 'Encode Sans SC', sans-serif;
    @media screen and (max-width: 1050px) {
        flex-direction: column;
        width: 90%;
        background: none;
        justify-content: center;
        margin-bottom: 70px;
       }
       @media screen and (max-width: 550px) {
        flex-direction: column;
        width: 100%;
        justify-content: center
       }
    }
`
const CatTitle = styled.div`
    display: flex;
    background-color: #211B26;
    flex-direction: row;
    text-decoration: none;
    color: white;
    padding: 10px;
    margin: 20px;
    line-spacing: 15px;
    justify-content: center;
    text-transform: uppercase;
    transition: all .5s ease-out;
    :hover{
        font-size: 25px;
        transition: width 2s, height 2s, font-size 2s, transform 2s
    }
`
const CatLink = styled.a`
    text-decoration: none !important; 
    background-color: #211B26;
    border-radius: 8px;
`

const CatImage = styled.img`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    text-decoration: none;
    @media screen and (max-width: 1050px) {
        justify-content: center
       }
`


export default Categories