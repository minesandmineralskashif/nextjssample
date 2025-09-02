# OG Protocol Fix Documentation

## Problem Summary
The OG (Open Graph) protocol was not working when `_app.js` was present in the `src/pages` directory. Facebook and other social media platforms could not detect the `og:image`, `og:title`, `og:description`, and `og:url` meta tags when users shared blog article links.

## Root Cause
The custom `_app.js` file was using client-side authentication gating that prevented the page components (which contain the OG meta tags) from rendering on the server. This meant that when Facebook's crawler requested the page, it would only see the splash screen or authentication wrapper instead of the actual page content with the OG meta tags.

## Solution Implemented

### 1. Modified `src/app-file/_app.js`
**Lines Changed:** Around line 98-144

**What was changed:**
- Added server-side detection: `const isServer = typeof window === 'undefined';`
- Modified the render logic to always render the page component on the server
- Only apply authentication gating on the client side

**Before:**
```javascript
<AuthConsumer>
  {auth => (!auth.isInitialized
    ? <SplashScreen />
    : getLayout(
      <Component {...pageProps} />
    ))}
</AuthConsumer>
```

**After:**
```javascript
{isServer ? (
  getLayout(
    <Component {...pageProps} />
  )
) : (
  <AuthConsumer>
    {auth => (!auth.isInitialized
      ? <SplashScreen />
      : getLayout(
        <Component {...pageProps} />
      ))}
  </AuthConsumer>
)}
```

### 2. Created `src/pages/_app.js`
**New file created**

**Content:**
```javascript
import App from '../app-file/_app';

export default App;
```

## Why This Fixes the Issue

1. **Server-Side Rendering**: On the server, the page component (with its `<Head>` containing OG meta tags) is now always rendered into the initial HTML
2. **Crawler Access**: Facebook's crawler can now see the complete page content including all meta tags
3. **Client Behavior Unchanged**: On the client side, the authentication flow remains the same
4. **Static Export Compatible**: Works with the `output: "export"` configuration for Netlify deployment

## Testing Instructions

### To Reproduce the Bug:
1. Remove `src/pages/_app.js` (or comment out the import)
2. Deploy to Netlify
3. Test URLs in Facebook Sharing Debugger:
   - `https://iridescent-cendol-52ab03.netlify.app/`
   - `https://iridescent-cendol-52ab03.netlify.app/blog/article1/`
   - `https://iridescent-cendol-52ab03.netlify.app/blog/article2/`
   - `https://iridescent-cendol-52ab03.netlify.app/blog/article3/`
   - `https://iridescent-cendol-52ab03.netlify.app/blog/article4/`
4. Notice that OG meta tags are not detected

### To Verify the Fix:
1. Ensure `src/pages/_app.js` exists with the import
2. Deploy to Netlify
3. Test the same URLs in Facebook Sharing Debugger
4. Click "Scrape Again" to avoid cache
5. Verify that `og:title`, `og:description`, `og:image`, and `og:url` are now detected

## Files Modified

1. **`src/app-file/_app.js`** - Modified render logic to support server-side rendering
2. **`src/pages/_app.js`** - Created new file to export the App component

## Production Implementation

To apply this fix to the production codebase:

1. Locate the production `_app.js` file
2. Add the server-side detection logic:
   ```javascript
   const isServer = typeof window === 'undefined';
   ```
3. Wrap the authentication/loading logic in a client-side check
4. Ensure the page component always renders on the server
5. Test with Facebook Sharing Debugger to confirm OG tags are detected

## Notes

- This fix maintains all existing functionality while ensuring OG meta tags are available to crawlers
- The solution is compatible with static export (`output: "export"`)
- No changes were needed to individual page components as they already properly set OG meta tags
- The fix addresses the core issue without requiring changes to the authentication system or other app features
