export const baseThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920
    }
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        sizeSmall: {
          padding: '6px 16px'
        },
        sizeMedium: {
          padding: '8px 20px'
        },
        sizeLarge: {
          padding: '11px 24px'
        },
        textSizeSmall: {
          padding: '7px 12px'
        },
        textSizeMedium: {
          padding: '9px 16px'
        },
        textSizeLarge: {
          padding: '12px 16px'
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '16px 24px'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px'
          }
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          variant: 'body2'
        }
      },
      styleOverrides: {
        root: {
          padding: '32px 24px'
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        },
        '#nprogress': {
          pointerEvents: 'none'
        },
        '#nprogress .bar': {
          backgroundColor: '#5048E5',
          height: 3,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8
        },
        sizeSmall: {
          padding: 4
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: '16px',
          '&.MuiListItemIcon-root': {
            minWidth: 'unset'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontWeight: 500
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiPopover: {
      defaultProps: {
        elevation: 16
      }
    },
    MuiRadio: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: 'auto',
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: 'none',
          '& + &': {
            marginLeft: 24
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '15px 16px'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          '& .MuiTableCell-root': {
            borderBottom: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase'
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4
          }
        }
      }
    }
  },
  direction: 'ltr',
  shape: {
    borderRadius: 8
  },
  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.375
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.375
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.375
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.375
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.375
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.375
    }
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  loading: {
    opacity: 0,
    transition: 'all 0.2s ease-in'
  },
  loaded: {
    opacity: 1,
    transition: 'all 0.2s ease-in'
  },

  // rules for react-dropdown styling (features/AA-65)
  reactDropzonePreview: {
    thumbsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16
    },
    thumb: {
      display: 'inline-flex',
      borderRadius: 2,
      border: '1px solid #eaeaea',
      marginBottom: 8,
      marginRight: 8,
      width: 100,
      height: 100,
      padding: 4,
      boxSizing: 'border-box'
    },

    thumbInner: {
      display: 'flex',
      minWidth: 0,
      overflow: 'hidden'
    },

    imgUpload: {
      display: 'block',
      width: 'auto',
      height: '100%'
    }
  },

  ingredientRowCheckmark: {
    isValid: {
      color: 'green'
    },
    isInvalid: {
      color: 'gray'
    }
  },

  // rules for react-photo-gallery drag 'n drop (AA-121):
  reactPhotoGallery: {

    photoFrame: {
      display: 'block',
      boxSizing: 'content-box',
      position: 'relative',
      background: '#ffffff',
      cursor: 'grab',
      borderRadius: '4px',
      boxShadow: 'rgb(0 0 0 / 20%) 0 3px 3px -2px, rgb(0 0 0 / 14%) 0 3px 4px 0, rgb(0 0 0 / 12%) 0 1px 8px 0',
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      outline: 'none',
      touchAction: 'none',
      userSelect: 'none',
      webkitTouchCallout: 'none',
      overlay: {
        cursor: 'grabbing',
      },
      active: {
        opacity: '0.3',
        img: {
          opacity: '0.3'
        }
      },
      img: {
        outline: 'none',
        touchAction: 'none',
        userSelect: 'none',
        webkitTouchCallout: 'none',
      },
      insertBefore: {
        '&::before': {
          content: '',
          position: 'absolute',
          backgroundColor: '#2196f3',
          borderRadius: '4px'
        }
      },
      insertAfter: {
        '&::after': {
          content: '',
          position: 'absolute',
          backgroundColor: '#2196f3',
          borderRadius: '4px'
        }
      }
    },

    reactPhotoAlbumRow: {
      photoFrame: {
        insertBefore: {
          '&::before': {
            top: '0',
            bottom: '0',
            width: '4px',
            left: '-17px'
          }
        },
        insertAfter: {
          '&::after': {
            top: '0',
            bottom: '0',
            width: '4px',
            right: '-17px'
          }
        }
      }
    },

    reactPhotoAlbumColumn: {
      photoFrame: {
        insertBefore: {
          '&::before': {
            left: '0',
            right: '0',
            height: '4px',
            top: '-17px'
          }
        },
        insertAfter: {
          '&::after': {
            left: '0',
            right: '0',
            height: '4px',
            bottom: '-17px'
          }
        }
      }
    },

  }, // close reactPhotoGallery

  menuItem: {
    ingredientRow: {
      container: {
        display: 'flex',
      },
      item: {
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'inline-flex',
      },
      errorIcon: {
        cursor: 'pointer',
      }
    }
  },

  approximateWeight: {
    header: {
      padding: '5px',
      backgroundColor: '#f5f5f5',
      maxWidth: '100%',
    },
    suggestedEstimatedWeights: {
      padding: '5px',

      suggestions: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'column',

        suggestion: {
          marginBottom: '3px',
          flex: '1 1 auto',

          firstItem: {
            marginRight: 'auto',
          }

        }
      }
    }
  },

  keywords: {
    container: {
      display: 'flex',
      // overflow: 'scroll',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: '100%',
      paddingLeft: '2px',
      border: 'inherit',
      borderRadius: '5px',
      color: 'black',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      margin: '7px 0',
      marginRight: '10px',
      padding: '0 10px',
      paddingRight: '5px',
      border: '1px solid #FFA500',
      borderRadius: '5px',
      backgroundColor: '#FFA500',
      whiteSpace: 'nowrap',
      color: 'white',

      deleteIcon: {
        display: 'flex',
        padding: '6px',
        border: 'none',
        backgroundColor: 'unset',
        cursor: 'pointer',
        color: 'white',
      }
    }
  },

  // rules used for buttons that are used to get user to subscribe or register (on the home page)
  callToAction: {
    subscribeOrRegisterPrimary: {
      backgroundColor: '#E50914', // the red used by the Netflix logo, more or less
      color: '#ffffff',

      errorMessageAndHelpText: {
        color: '#FFA500',
        fontWeight: 'bold',
        fontSize: '1rem',
      },
    },
    widthForContainingElements: {
      minWidth: '70%',
    },

    signInLink: {
      color: '#FFA500',
      fontWeight: 'bold',
      fontSize: '1rem',
    },
  },

  // customizations for links to avoid Google complaining about weak contrast
  linkStyling: {
    color: '#0000FF',
    textDecoration: 'underline',
    // fontWeight: 'bold',
    // fontSize: '1rem',
  },
  linkTextDecoration: {
    textDecorationColor: '#0000FF',
  },

  // styling for the boxes that are used for the "Tip" sections
  importantInfoBox: {
    border: '1px solid #e0e0e0',
    backgroundColor: '#f1f4f8',
  }

};
