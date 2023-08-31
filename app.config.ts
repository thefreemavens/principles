// eslint-disable-next-line no-undef
export default defineAppConfig({
  version: '0.1.0',
  // logomark: '',
  //
  // Leave for syntex options example:
  //
  ui: {
  //   // primary: 'green',
    primary: 'brand',
    gray: 'grey',
  //   avatar: {
  //     background: 'bg-gray-200 dark:bg-gray-800',
  //     placeholder: 'font-semibold'
  //   },
    badge: {
      variant: {
        solid: 'dark:bg-{color}-950 dark:bg-opacity-50 bg-{color}-50 text-{color}-400 dark:text-{color}-500 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-10 dark:ring-opacity-20',
        theme: 'dark:bg-grey-950 bg-grey-50 text-grey-500 dark:text-grey-500 ring-1 ring-inset ring-grey-500 dark:ring-grey-500 ring-opacity-10 dark:ring-opacity-10',
      },
      default: {
        size: 'sm',
        variant: 'theme',
        color: 'grey',
      }
    },
    button: {
//     font: 'font-semibold',
      icon: {
        // base: 'flex-shrink-0',
        size: {
          '2xl': 'h-7 w-7',
          '3xl': 'h-8 w-8'
        }
      },
      color: {
        gray: {
          ghost: 'text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-950 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
        }
      },
      variant: {
        // solid: 'shadow-sm text-white bg-brand-500 hover:bg-brand-600 disabled:bg-{color}-500 dark:disabled:bg-{color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 dark:focus-visible:outline-brand-700          ',
        // ghost: 'text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900 disabled:bg-transparent dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400'
        // outline: 'ring-2 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        // custom: 'shadow-sm text-gray-900 dark:text-gray-700 hover:text-gray-800 dark:hover:text-gray-800 bg-{color}-600 hover:bg-{color}-500 disabled:bg-{color}-500 dark:bg-{color}-600 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-500',
        "flat": "text-grey-975 hover:text-grey-975 dark:hover:text-white disabled:text-grey-500 dark:text-white dark:disabled:text-grey-500 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-grey-975 dark:focus-visible:ring-white"
      },
      padding: {
        '2xl': 'px-3.5 py-2.5',
        '3xl': 'px-4.5 py-3.5'
      },
      square: {
        '2xl': 'p-2.5',
        '3xl': 'p-3'
      },
      default: {
        size: 'lg',
        variant: 'ghost',
        loadingIcon: 'i-heroicons-arrow-path-20-solid',
        color: 'gray',
      }
    },
    modal: {
      // width: 'sm:w-auto',
      background: 'bg-white dark:bg-grey-975',
      overlay: {
        background: 'bg-grey-50/75 dark:bg-black/75'
      }
    },
    notifications: {
      position: 'top-0 left-0'
    },
    tooltip: {
      // background: 'bg-primary-500 dark:bg-primary-500',
      // color: 'text-gray-900 dark:gray-900'
    }
  }
})

// "variant": {
//   "solid": "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
//   "outline": "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
//   "soft": "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
//   "link": "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"

// appConfig.ui.button.default.size

// {
//   "base": "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",
//   "font": "font-medium",
//   "rounded": "rounded-md",

//   "color": {
//     "white": {
//       "solid": "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
//       "ghost": "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
//     },
//     "gray": {
//       "solid": "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
//       "ghost": "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
//       "link": "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
//     },
//     "black": {
//       "solid": "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
//       "link": "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
//     }
//   },
