import ReactGA from 'react-ga4';

const initializeAnalytics = () => {
  ReactGA.initialize('G-WG17M5H6RT'); // Replace with your GA4 Measurement ID
};

const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
};

export { initializeAnalytics, trackPageView };
