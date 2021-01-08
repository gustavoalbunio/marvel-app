import styled, { css } from 'styled-components';

interface ContentProps {
  isMobile: boolean;
}

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 48px auto;
  display: flex;
  flex-direction: column;

  > img {
    max-width: 40%;
    align-self: center;
    margin-bottom: 48px;
  }

  @media (max-width: 1054px) {
    & {
      padding: 0 12px;
    }

    > img {
      max-width: 60%;
    }
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.div`
  background: #232129;
  border-radius: 12px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  margin-bottom: 48px;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  button {
    background: none;
    border: 0;
    color: #666360;
    height: 20px;
    margin-left: 16px;
  }
`;

export const Content = styled.div<ContentProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 48px 18px;

  button {
    background: none;
    border: 0;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 12px;
      transform: translateY(0);
      transition: transform 0.4s;

      &:hover {
        transform: translateY(-40px);
      }
    }

    div {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 12px;
      box-shadow: inset 0px -6px 12px 0px rgba(0, 0, 0, 0.75);

      h2 {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: calc(100% - 32px);
        margin-bottom: 6px;
        color: white;
      }
    }
  }

  ${props =>
    props.isMobile &&
    css`
      & {
        grid-gap: 60px 20px;
      }

      button {
        img {
          transform: translateY(-35px);
        }
      }
    `}

  @media (min-width: 1054px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
