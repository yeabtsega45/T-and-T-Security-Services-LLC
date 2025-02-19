import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate/animate.min.css";
import "@/vendors/animate/custom-animate.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/oslim-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/the-sayinistic-font/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "jarallax/dist/jarallax.css";
import "tiny-slider/dist/tiny-slider.css";

// extra css
import "@/styles/style.css";
import "@/styles/responsive.css";

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


import {ReactQueryDevtools} from '@tanstack/react-query-devtools'


// Create a client
const queryClient = new QueryClient()

const MyApp = ({Component, pageProps}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};

export default MyApp;
