import {paramOptions} from './interface';

export const BOLD: string = 'Poppins-Bold';
export const REGULAR: string = 'Poppins-Regular';
export const SEMIBOLD: string = 'Poppins-SemiBold';
export const EXTRABOLD: string = 'Poppins-ExtraBold';
export const MEDIUM: string = 'Poppins-Medium';

export const THEMES = {
  default: 'default',
  dark: 'dark',
};

export const tabNavOptions = {
  gestureEnabled: false,
  // transitionSpecs: {
  //   open: {
  //     animation: 'timing',
  //     config: {duration: 1000},
  //   },
  //   close: {
  //     animation: 'timing',
  //     config: {duration: 1000},
  //   },
  // },
  cardStyleInterpolation: (param: paramOptions) => {
    const {current} = param;
    return {
      cardStyle: {
        opacity: current?.progress,
      },
    };
  },
};
