# Customer Login Screen

A standalone customer login page with email/password form, validation, and responsive layout.

## How to run

Open `index.html` in a browser, or serve the folder locally:

```bash
cd customer-login
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Features

- **Responsive**: Full layout on desktop (brand panel + form); form-only on small screens
- **Validation**: Required fields, email format, minimum password length (6 chars)
- **Accessible**: Labels, ARIA, and focus styles
- **Dark theme**: Neutral dark palette with blue accent

## Customization

- **Backend**: Replace the `setTimeout` in `script.js` with your login API call and redirect/success handling.
- **Links**: Update the "Forgot password?" and "Create account" `href` values in `index.html`.
- **Styling**: Edit CSS variables at the top of `styles.css` for colors, radius, and font.
