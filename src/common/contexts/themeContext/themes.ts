export interface ThemeProps {
  background: string;
  text: string;
  primary: string;
}

export const darkTheme: ThemeProps = {
  background: 'var(--dark-background)',
  text: 'var(--dark-text)',
  primary: 'var(--theme-pink)',
};

export const lightTheme: ThemeProps = {
  background: 'var(--light-background)',
  text: 'var(--light-text)',
  primary: 'var(--theme-pink)',
};
