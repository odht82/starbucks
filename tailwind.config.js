function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    color: {
      skin: {
        primary: withOpacity('--color-primary'),
        'primary-1': withOpacity('--color-primary-1'),
        'primary-2': withOpacity('--color-primary-2'),

        neutral: withOpacity('--color-neutral'),
        'neutral-8': withOpacity('--color-neutral-8'),
        'neutral-9': withOpacity('--color-neutral-9'),

        white: withOpacity('--color-white'),
        'neutral-1': withOpacity('--color-neutral-1'),
        'neutral-2': withOpacity('--color-neutral-2'),
        'neutral-3': withOpacity('--color-neutral-3'),
        'neutral-4': withOpacity('--color-neutral-4'),
        'neutral-5': withOpacity('--color-neutral-5'),

        success: withOpacity('--color-success'),
        'success-1': withOpacity('--color-success-1'),
        'success-2': withOpacity('--color-success-2'),
        'success-3': withOpacity('--color-success-3'),

        warning: withOpacity('--color-warning'),
        'warning-1': withOpacity('--color-warning-1'),
        'warning-6': withOpacity('--color-warning-6'),
        'warning-7': withOpacity('--color-warning-7'),

        error: withOpacity('--color-error'),
        'error-1': withOpacity('--color-error-1'),
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    fontFamily: {
      inter: 'Inter, sans-serif',
    },
    fontSize: {
      xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      '2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
      '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
    },
    boxShadow: {
      lst: '0px 5px 4px 0px rgba(20, 40, 82, 0.08), 0px 24px 24px 0px rgba(20, 40, 82, 0.04)',
      btn: '0px 3px 1px 0px rgba(20, 40, 82, 0.08), 0px 24px 24px 0px rgba(20, 40, 82, 0.04)',
      drp: '0px 3px 5px 0px rgba(0, 0, 0, 0.07)',
    },
    extend: {
      textColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          neutral: withOpacity('--color-neutral'),
          'neutral-8': withOpacity('--color-neutral-8'),
          'neutral-9': withOpacity('--color-neutral-9'),
        }
      },
      height: {
        navHeight: '64px',
        bodyHeight: '92.5%',
      },
      width: {
        searchBarWidth: '392px',
      },
      backgroundColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          'primary-1': withOpacity('--color-primary-1'),
          'primary-2': withOpacity('--color-primary-2'),

          neutral: withOpacity('--color-neutral'),
          'neutral-8': withOpacity('--color-neutral-8'),
          'neutral-9': withOpacity('--color-neutral-9'),

          white: withOpacity('--color-white'),
          'neutral-1': withOpacity('--color-neutral-1'),
          'neutral-2': withOpacity('--color-neutral-2'),
          'neutral-3': withOpacity('--color-neutral-3'),
          'neutral-4': withOpacity('--color-neutral-4'),
          'neutral-5': withOpacity('--color-neutral-5'),

          success: withOpacity('--color-success'),
          'success-1': withOpacity('--color-success-1'),
          'success-2': withOpacity('--color-success-2'),
          'success-3': withOpacity('--color-success-3'),

          warning: withOpacity('--color-warning'),
          'warning-1': withOpacity('--color-warning-1'),
          'warning-6': withOpacity('--color-warning-6'),
          'warning-7': withOpacity('--color-warning-7'),

          error: withOpacity('--color-error'),
          'error-1': withOpacity('--color-error-1'),
        }
      },
      colors: {
        primary: withOpacity('--color-primary'),
        'primary-1': withOpacity('--color-primary-1'),
        'primary-2': withOpacity('--color-primary-2'),

        neutral: withOpacity('--color-neutral'),
        'neutral-8': withOpacity('--color-neutral-8'),
        'neutral-9': withOpacity('--color-neutral-9'),

        white: withOpacity('--color-white'),
        'neutral-1': withOpacity('--color-neutral-1'),
        'neutral-2': withOpacity('--color-neutral-2'),
        'neutral-3': withOpacity('--color-neutral-3'),
        'neutral-4': withOpacity('--color-neutral-4'),
        'neutral-5': withOpacity('--color-neutral-5'),

        success: withOpacity('--color-success'),
        'success-1': withOpacity('--color-success-1'),
        'success-2': withOpacity('--color-success-2'),
        'success-3': withOpacity('--color-success-3'),

        warning: withOpacity('--color-warning'),
        'warning-1': withOpacity('--color-warning-1'),
        'warning-6': withOpacity('--color-warning-6'),
        'warning-7': withOpacity('--color-warning-7'),

        error: withOpacity('--color-error'),
        'error-1': withOpacity('--color-error-1'),
      },
      backgroundImage: {
        'checked-box': "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}



//styleName: xs;
// font-size: 13px;
// font-weight: 500;
// line-height: 20px;
// letter-spacing: 0.02em;

//styleName: sm;
// font-size: 20px;
// font-weight: 700;
// line-height: 32px;
// letter-spacing: 0em;

//styleName: lg;
// font-size: 16px;
// font-weight: 400;
// line-height: 24px;
// letter-spacing: -0.01em;

//styleName: xl;
// font-size: 16px;
// font-weight: 700;
// line-height: 24px;
// letter-spacing: -0.01em;