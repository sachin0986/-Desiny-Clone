import React from 'react';
import styled from 'styled-components';

const Login = (props) => {
    return(
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="Disney Plus" />
                <SignUp>Get All There</SignUp>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee
                with a Disney+ subscription. As of 03/26/21, the price of Disney+
                and The Disney Bundle will increase by $1.
                </Description>
                <CTAlogTow src="/images/cta-logo-two.png" alt='image-2'/>
            </CTA>
            <Content><BgImage /></Content>
        </Container>
    )
}


const Container = styled.section`
    overflow: hidden;
    display: flex;    
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`


const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
`


const CTA = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   max-width: 650px;
   flex-wrap: wrap;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   align-items: center;
   width: 100%;
   margin-top: 0;
   margin-right: auto;
   align-items: center;
`

const CTALogoOne = styled.img`
   margin-bottom: 12px;
   max-width: 600px;
   min-height: 1px;
   display: block;
   width: 100%;
`


const SignUp = styled.a`
   font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;


const CTAlogTow = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    width: 100%;
    display: inline-block;
    vertical-align: bottom;
`;
export default Login;