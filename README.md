# Blended Whiskey band website

Static website built for **blendedwhiskeyband.com**, hosted free on GitHub Pages. No build tools, subscriptions, or backend are required.

## Upload to GitHub
1. Create a **public** repository named `blended-whiskey` on the existing `taddmb-art` GitHub account.
2. Unzip the download **on your computer**.
3. Upload the **contents** of the `blended-whiskey-site` folder to the **root** of the repository (the `index.html` file should be visible at the top level).
4. Commit the files.
5. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, and save.
6. Preview at `https://taddmb-art.github.io/blended-whiskey/` (after publication).
7. In **Settings → Pages → Custom domain**, enter `blendedwhiskeyband.com` and save.
8. At Squarespace Domains, replace conflicting website DNS defaults with GitHub Pages' four A records for `@` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and one `www` CNAME to `taddmb-art.github.io`. Preserve unrelated mail, verification, and domain-connect records. Check GitHub's current documentation before saving DNS.
9. Once the certificate is available, enable **Enforce HTTPS** in GitHub Pages.

## Edit the show schedule
Open `shows.js` in GitHub, click the pencil icon to edit, and add real confirmed gigs to `window.BLENDED_WHISKEY_SHOWS` (an example is provided as a comment). Commit changes. Past gigs disappear automatically. If no future shows are listed, visitors are directed to Facebook.

## Edit words, images, or links
- Main content: `index.html`
- Styles/colors: `style.css`
- Logo: `assets/blended-whiskey-logo.jpg`
- Band-member poster: `assets/band-members.jpg`
- Facebook: all Facebook links use the Blended Whiskey band-page share link provided by the user; if a verified permanent/vanity band-page URL is available, replace every instance of `https://www.facebook.com/share/18dgxqQFx3/` in `index.html` and `script.js`.

## Notes
- Band roles and names are presented as currently understood; adjust anything that's incorrect.
- No show dates, booking email address, or venue booking details were invented.
- The site loads Google Fonts; if offline, it falls back to system fonts.
