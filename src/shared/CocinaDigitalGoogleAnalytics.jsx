'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { pageview } from '../../lib/gtagHelper';

export default function CocinaDigitalHeadGoogleAnalytics(props) {
  const {
    googleAnalyticsMeasurementId
  } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID, url);
  }, [pathname, searchParams, process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${googleAnalyticsMeasurementId}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}

/*

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WLN62XS2');</script>
<!-- End Google Tag Manager -->
*/

CocinaDigitalHeadGoogleAnalytics.propTypes = {
  googleAnalyticsMeasurementId: PropTypes.string.isRequired,
};
