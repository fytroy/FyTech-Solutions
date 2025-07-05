# FyTech Solutions Website

A responsive multi-page static website for FyTech Solutions, a technology solutions provider. Built with HTML, CSS, and JavaScript, showcasing services, company information, and contact details. The site features animations, a testimonial slider, and a contact form integrated with Netlify Forms.

## Features

*   **Responsive Design:** Adapts to various screen sizes (desktops, tablets, and mobile phones).
*   **Multi-Page Structure:**
    *   `index.html`: Homepage with hero section, service overview, case studies, and testimonials.
    *   `about.html`: Information about the company, its mission, vision, values, and team.
    *   `services.html`: Detailed descriptions of the services offered (Cloud Solutions, Cybersecurity, Software Development, Data & AI, IT Consulting).
    *   `contact.html`: Contact information, contact form, and location map.
    *   `success.html`: A page displayed after successful form submission.
*   **Interactive Hero Section:** Features a dynamic typed text animation to engage users.
*   **Animated Elements on Scroll:** Utilizes the AOS (Animate On Scroll) library for subtle animations as users scroll through pages.
*   **Testimonial Slider:** Implements Swiper.js for a touch-friendly, auto-playing testimonial carousel.
*   **Contact Form with Netlify Integration:** The contact form on `contact.html` is set up to submit data directly to Netlify Forms.
*   **Smooth Scrolling:** Navigation links and buttons provide smooth scrolling to relevant sections.
*   **Scroll-to-Top Button:** Appears on longer pages for easy navigation back to the top.

## Technologies Used

*   **HTML5:** For the structure and content of the web pages.
*   **CSS3:** For styling, layout, custom properties (variables), and responsive design.
*   **JavaScript (ES6+):** For dynamic functionalities, interactivity, and DOM manipulation.
*   **AOS (Animate On Scroll) library:** For scroll animations.
*   **Typed.js library:** For the hero section text animation.
*   **Swiper.js library:** For the testimonial slider.
*   **Font Awesome:** For scalable vector icons.
*   **Google Fonts:** For custom typography (`Montserrat` and `Nunito`).
*   **Netlify:** For hosting the static site and handling form submissions.

## Setup and Local Development

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <project-directory-name>
    ```
3.  **View the website:**
    Open the `index.html` file (or any other HTML file) in your preferred web browser.

No complex build steps or local server setup are required to view the website locally, as it is a static site.

## Deployment

This website is configured for easy deployment on [Netlify](https://www.netlify.com/).

*   The `netlify.toml` file in the root directory contains basic configuration for Netlify, including redirect rules for form submissions.
*   When connected to a Git repository (e.g., GitHub, GitLab, Bitbucket), any push to the main branch (or specified production branch) will automatically trigger a new build and deployment on Netlify.
*   The `publish` directory is set to `/` (root), as it's a static site with HTML files directly in the root and subdirectories like `css/` and `js/`.

## File Structure

```
.
├── css/
│   └── style.css        # Main stylesheet for all pages
├── img/                   # Placeholder for image assets (logo, icons, background images)
├── js/
│   └── script.js        # Main JavaScript file for site-wide interactions
├── .idea/                 # IDE specific folder (usually JetBrains)
├── about.html             # About Us page
├── contact.html           # Contact Us page
├── index.html             # Homepage
├── netlify.toml           # Netlify deployment and form configuration
├── README.md              # This file
├── services.html          # Services page
└── success.html           # Form submission success page
```

## Contact Form

*   The contact form located on `contact.html` uses Netlify Forms for submission handling.
*   The form is identified by the `data-netlify="true"` attribute in the `<form>` tag.
*   Upon successful submission, Netlify's servers process the data, and the user is redirected to `success.html` as specified in the `netlify.toml` file:
    ```toml
    [[redirects]]
    from = "/contact.html"
    to = "/success.html"
    status = 302 # Found (Temporary Redirect)
    query = { _success = ":true" } # Netlify's way to detect successful form submission for redirect
    ```
*   Form data can be viewed and managed through the Netlify dashboard for the connected site.
---

This README provides a comprehensive overview of the FyTech Solutions website project.
