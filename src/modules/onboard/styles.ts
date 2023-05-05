import { styled } from 'styles';

export const Container = styled('div', {
  maxWidth: '928px',
  width: '85vw',
  backgroundColor: '$background-base',
  borderRadius: '5px',
  overflow: 'hidden'
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 $8',

  transform: 'translateY(-110px)',

  '@mobile': {
    padding: '0 $12'
  }
});

export const Title = styled('h1', {
  fontSize: '$4xl',
  color: '$white',
  lineHeight: '49px',
  margin: '$5 auto 0'
});

export const Subtitle = styled('p', {
  fontSize: '$2xl',
  fontWeight: '$bold',
  color: '$grey-200',
  lineHeight: '22px',
  margin: '0 auto'
});

export const UserInfos = styled('div', {
  marginTop: '$12',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6'
});

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column'
});

export const Label = styled('span', {
  fontSize: '$md',
  lineHeight: '22px',
  color: '$white'
});

export const Text = styled('p', {
  fontSize: '$sm',
  lineHeight: '22px',
  color: '$grey-200'
});

export const Socials = styled('div', {
  display: 'flex',
  gap: '$2',
  marginTop: '$3'
});

export const SocialItem = styled('a', {
  width: '52px',
  height: '52px',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$background-light',
  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.95)'
  }
});

export const InstitutionCard = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$5',
  padding: '$7 $8',
  borderRadius: '$2',
  backgroundColor: '$background-light',
  marginTop: '$3',

  div: {
    display: 'flex',
    gap: '$2',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  },

  p: {
    fontSize: '$2xl',
    fontWeight: 'bold',
    color: '$white'
  },

  span: {
    fontSize: '$md',
    color: '$grey-200'
  }
});
