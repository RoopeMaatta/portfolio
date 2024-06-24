export const getTheme = (isDarkMode: boolean) => {
  const D = isDarkMode

  return {
    // Color palette
    colors: {
      primary: D ? '#002d59' : '#ADD8E6', // Dark blue for dark mode, Light blue for light mode
      primaryDark: '#1A78D0',
      secondary: D ? '#4682B4' : '#B0E0E6', // Medium blue for dark mode, Lighter blue for light mode
      text: D ? '#FFFFFF' : '#000000', // White for dark mode, Black for light mode
    },

    // Font families
    fonts: {
      primary: 'Arial, sans-serif',
      secondary: 'Georgia, serif',
    },

    // Font sizes
    fontSize: {
      small: '12px',
      medium: '16px',
      large: '32px',
    },

    // Spacing values
    spacing: {
      xs: '8px',
      m: '16px',
      l: '32px',
    },
  }
}
