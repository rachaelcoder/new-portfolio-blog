import styled from '@emotion/styled'

function SubscribeForm() {
    return(
        <FormContainer>
                <FormTextContainer>
                   Contact me if you are looking to hire a Web UX/UI Designer. I am always open to learning about new opportunities. 
                </FormTextContainer>
                <Form action="/send-data-here" method="post">
                    <Label htmlFor="first">First name</Label>
                    <Input type="text" id="first" name="first" />
                    <Label htmlFor="last">Last name</Label>
                    <Input type="text" id="last" name="last" />
                    <Label htmlFor="last">Email</Label>
                    <Input type="text" id="last" name="last" />
                    <SubmitButton>Send</SubmitButton>
                </Form>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 57%;
    padding: 15px
    margin: 20px;
    position: relative;
    margin: auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #071315;
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius: 8px;
    margin-bottom: 70px;
    @media screen and (max-width: 1050px) {
        flex-direction: column;
        width: 100%;
        justify-content: center
       }
    }
`
const Form = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 35px;
    @media screen and (max-width: 1050px) {
        flex-direction: column;
        width: 70%;
        margin: 5px;
        justify-content: center
       }
    }
`
const Label = styled.label`
    color: white;
    text-align: left;
    padding-top: 10px;
    font-family: 'Encode Sans SC', sans-serif;
    font-size: 13px;
    letter-spacing: 2px;
    }
`
const Input = styled.input`
    color: white;
    border: none;
    padding: 10px;
    text-align: left;
    margin: 5px;
    background: transparent;
    border-bottom: 1px solid white;
    outline: none;
    
    }
`

const SubmitButton = styled.button`
   width: 40%;
   margin: auto;
   margin-top: 40px;
   padding: 15px;
   font-size: 13px;
   text-transform: uppercase;
   background-image: linear-gradient(to right, #F700AA 15%, #E293AF 85%);
   border: none;
   border-radius: 50px;
   color: white;
   @media screen and (max-width: 1050px) {
      width: 70%;
      margin-bottom: 20px;
  }
}
`

const FormTextContainer = styled.h2`
    font-family: 'M PLUS Code Latin', sans-serif;
    color: white;
    width: 80%;
    padding: 10px;
    margin-bottom: 70px;
    font-weight: 200;
    margin: 35px;
    }
`


export default SubscribeForm