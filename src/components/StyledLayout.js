import styled from 'styled-components';

/*CONTAINER LAYOUT */
export const Container = styled.div`
  background-color: #2121e673;
  /* border: 1px solid; */
  padding: 15px;
  width: 100%;
  /* border: 1px solid; */
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

/*HEADER */
export const Header = styled.header`
  background-color: #1c0d3f;
  display: grid;
  max-width: 90%;
  margin: 0 auto;
  color: #ffffff;

  /*MEDIAS SCREEN LG */
  @media (min-width: 992px) {
    grid-template-columns: 250px 3fr;
    width: 80%;
    max-width: 1000px;
  }
`;

/*HEADER CHILD*/
export const FirstChildHeader = styled.div`
  width: 100%;
  span {
    display: flex;
    justify-content: center;
    img {
      border-radius: 25%;
    }
  }
  h1 {
    font-family: 'Sedgwick Ave', cursive;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 992px) {
    span {
      padding: 15px 0 0;
      div {
        /* width: 100%; */
        padding: 5px;
        /* background-color: #1c0d3f; */
        background-color: #15a4c5;
        border-radius: 4px;
        img {
          width: 140px;
        }
      }
    }
    h1 {
      padding: 8px 0 20px;

      font-size: 1.8rem;
    }
  }
`;

export const SecondChildHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 60%; */
  padding: 0 30px 0 0px;
  p {
    text-align: justify;
    font-family: 'Ubuntu Condensed', sans-serif;
    font-size: 1.3rem;
  }
`;

/*CONTENT */
export const Main = styled.main`
  min-height: 80vh;
  background-color: #fff;
  margin: 0 auto;
  max-width: 90%;
  @media (min-width: 992px) {
    width: 80%;
    max-width: 1000px;
  }
`;


export const ContentMain = styled.div`
  display: grid;
  /* padding: 25px 10px; */
  @media (min-width: 992px) {
    grid-template-columns: 200px 1fr;
  }
`;

export const FirstChildContent = styled.div`
  min-height: 80vh;
  background: #15a4c5;
  @media (min-width: 992px) {
    padding: 7px 10px;
    h4 {
      font-family: 'Sedgwick Ave', cursive;
      color: #1c0d3f;
    }
    div {
      margin: 5px 0;
      font-family: 'Ubuntu Condensed', sans-serif;
      color: #fff;
      cursor: pointer;
      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const SecondChildContent = styled.div`
  min-height: 80vh;
  background: #ddd;
  font-family: 'Ubuntu Condensed', sans-serif;

  @media (min-width: 992px) {
    padding: 25px 18px;
  }
`;


/*FOOTER  */
export const Footer = styled.footer`
  background-color: #ffffff;
  /* margin: 0 auto 0; */
  padding: 10px;
  display: grid;
  font-family: 'Ubuntu Condensed', sans-serif;
  max-width: 90%;
  margin: 0 auto;
  min-height: 30vh;
  background-color: #1c0d3f;
  color: #fff;
  grid-template-columns: 1fr;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    width: 80%;
    max-width: 1000px;
  }
`;

export const FirstChildFooter = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-flow: column;
    padding-right: 7px;
    align-items: end;
    .linkWhats {
      width: 90px;
      border: solid 1px;
      margin-top: 15px;
      border-radius: 4px;
      font-size: 0.9rem;
      padding: 5px;
      background: #3CBA4D;
      a {
        display: flex;
        justify-content:center;

      }
    }
      
    }
  }
`;
export const SecondChildFooter = styled.div`
  @media (min-width: 992px) {
    padding-left: 7px;
    display: flex;
    flex-flow: column;
    align-items: start;
    h3 span {
      font-size: 0.7rem;
      font-family: sans-serif;
    }
    .linkGithub {
      width: 70px;
      border: solid 1px;
      margin-top: 5px;
      border-radius: 4px;
      font-size: 0.8rem;
      padding: 4px;
      background: #777;
      color: #000;
      font-family: 'Ubuntu Condensed', sans-serif;
    }
  }
`;

//export const = styled.``;
