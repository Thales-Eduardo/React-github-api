import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  color: white;
  max-width: 450px;
  line-height: 56px;
`;

export const Img = styled.img`
  height: 60px;
  width: 60px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 10px;
  max-width: 715px;
  display: flex;

  input {
    flex: 1;
    height: 60px;
    background: white;
    padding: 0 34px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    transition: background-color 0.2s;
    color: #3a3a3a;
    border: 2px solid white;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &:hover {
      background: ${shade(0.1, 'white')};
    }

    &::placeholder {
      color: #a8a8a8;
    }
  }

  button {
    width: 210px;
    height: 60px;
    color: white;
    border: 0;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repository = styled.div`
  margin-top: 80px;
  max-width: 715px;
  border-radius: 10px;

  a {
    border-radius: 10px;
    background: white;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    color: black;

    display: flex;
    align-items: center;

    img {
      height: 64px;
      width: 64px;
      background: white;
      border-radius: 50%;
    }

    div {
      margin-left: 25px;
      background: white;
      flex: 1;

      strong {
        background: white;
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        background: white;
        color: #3d3d4d;
      }
    }

    svg {
      background: white;
      margin-left: auto;
    }

    transition: transform(0.2s);

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;
