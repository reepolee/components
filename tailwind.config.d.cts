export let content: string[];
export namespace theme {
    namespace container {
        namespace padding {
            let DEFAULT: string;
            let sm: string;
        }
    }
    namespace extend {
        namespace transitionProperty {
            let height: string;
        }
        let width: {
            '5ch': string;
            '10ch': string;
            '12ch': string;
            '15ch': string;
            '17ch': string;
            '20ch': string;
            '25ch': string;
            '30ch': string;
            '40ch': string;
            '50ch': string;
            '60ch': string;
            date: string;
        };
        namespace fontFamily {
            let sans: string[];
        }
        namespace colors {
            let reepolee: {
                50: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            };
        }
    }
}
export let plugins: any[];
