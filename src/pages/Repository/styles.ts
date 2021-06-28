import styled from 'styled-components';

export const Img = styled.img`
  height: 60px;
  width: 60px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    transition: color 0.2s;

    &:hover {
      color: lightblue;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    color: white;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 25px;

      strong {
        font-size: 36px;
      }

      p {
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    margin-left: 20px;
    text-align: center;
    color: white;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
      }

      span {
        display: block;
        margin-top: 4px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
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
