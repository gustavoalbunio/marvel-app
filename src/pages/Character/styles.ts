import styled from 'styled-components';

interface BannerProps {
  img: string;
}

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

export const Banner = styled.div<BannerProps>`
  width: 100%;
  height: 450px;

  background: ${props => (props.img ? `url(${props.img})` : '#fff')} no-repeat
    center;
  background-size: cover;
`;

export const Content = styled.div`
  h1 {
    margin: 24px 0 24px;
    text-transform: uppercase;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      background: #fff;
      padding: 8px 18px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 18px;
      color: #191920;
      border: 1px solid #fff;
      transition: all 0.6s;

      &:hover {
        background: #191920;
        color: #fff;
      }
    }
  }

  > span {
    display: inline-block;
    margin-bottom: 24px;
    opacity: 0.4;
    text-align: justify;
    font-size: 1rem;
  }

  @media (max-width: 1054px) {
    & {
      margin: 24px 18px 12px;
    }

    a {
      align-self: flex-end;
    }
  }

  h2 {
    margin-bottom: 12px;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Comics = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    img {
      width: 100%;
      border-radius: 12px;
    }

    span {
      font-size: 1rem;
      flex: 1;
      align-self: flex-start;
      opacity: 0.4;
      margin-bottom: 8px;
    }
  }

  @media (min-width: 1054px) {
    & {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 32px;
      margin: 8px 0 32px;
    }
  }
`;
