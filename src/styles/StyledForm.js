import styled from 'styled-components';

export const Form = styled.form`
  font-family: 'Ubuntu Condensed', sans-serif;

  background-color: #eee;
  padding: 55px 10px;
  margin: 0 auto;

  ul {
    max-width: 440px;
    background-color: ${({ theme }) => theme.colors.perfil};
    margin: 0 auto;
    padding: 15px 30px;
  }
  li:first-child {
    padding-top: 17px;
  }

  .not-account {
    color: #eee;
    padding: 16px 9px 3px;
    strong {
      text-decoration: underline;
      color: #000;
    }
  }
`;

export const FieldSetText = styled.fieldset`
  font-family: 'Ubuntu Condensed', sans-serif;

  border: unset;
  display: grid;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 2.8fr;

    label {
      font-size: 1.15rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: 0;
    }

    input {
      height: 35px;
      font-family: 'Ubuntu Condensed', sans-serif;

      width: 245px;
      border-radius: 4px;
      outline: none;
      border: 0;
      padding-left: 8px;
      font-size: 1.03rem;
    }
    textarea {
      min-height: 80px;
      width: 245px;
      border-radius: 4px;
      font-family: 'Ubuntu Condensed', sans-serif;

      outline: none;
      border: 0;
      padding-left: 8px;
      font-size: 1.03rem;
    }
  }
`;

export const ButtonForm = styled.div`
  margin: 0 auto;

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    button {
      font-family: 'Ubuntu Condensed', sans-serif;
      height: 40px;
      border-radius: 5px;
      background-color:${({theme})=> theme.colors.background};
      color: #fff;
      width: 150px;
      font-size: 1rem;
    }
  }
`;
