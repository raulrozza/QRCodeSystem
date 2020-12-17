import styled, { css } from 'styled-components'

export const gradient = degs => css`
  background:
    linear-gradient(
      ${degs || 130}deg,
      #00dbde 0%,
      #fc00ff 100%
    );
`

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 3rem 0 2rem;
  border-radius: 0.5rem;
  color: white;
  ${gradient()};
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
      0 9px 46px 8px rgba(0, 0, 0, 0.025),
      0 11px 15px -7px rgba(0, 0, 0, 0.025);
`

export const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.div`
  font-size: 5.25rem;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`

export const FeaturesListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.325rem;
`
