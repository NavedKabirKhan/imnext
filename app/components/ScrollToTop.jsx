import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollToTop = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            if (!shallow)
                window.scrollTo(0, 0);
        };


        router.events.on('routeChangeComplete', handleRouteChange);
        // router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            // router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router]);

    return null;
};

export default ScrollToTop;
