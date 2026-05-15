/* ============================================
   ONDO STATE MINISTRY OF TOURISM
   Main Stylesheet — "The Sunshine State"
   ============================================ */

/* ----- CSS Variables ----- */
:root {
    --green-dark: #0B5E3C;
    --green-mid: #168A4B;
    --green-light: #E8F5E9;
    --green-bg: #F0FAF4;
    --gold: #C8960C;
    --gold-dark: #A67C00;
    --gold-light: #FDF6E3;
    --white: #FFFFFF;
    --gray-50: #F9FAFB;
    --gray-100: #F3F4F6;
    --gray-200: #E5E7EB;
    --gray-300: #D1D5DB;
    --gray-400: #9CA3AF;
    --gray-500: #6B7280;
    --gray-600: #4B5563;
    --gray-700: #374151;
    --gray-800: #1F2937;
    --gray-900: #111827;
    --red: #DC2626;
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
    --shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
    --shadow-md: 0 6px 12px -2px rgba(0,0,0,0.1), 0 3px 6px -3px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 25px -3px rgba(0,0,0,0.1), 0 4px 10px -4px rgba(0,0,0,0.1);
    --radius-sm: 6px;
    --radius: 10px;
    --radius-lg: 16px;
    --max-width: 1200px;
    --transition: 0.3s ease;
}

/* ----- Reset & Base ----- */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    line-height: 1.7;
    color: var(--gray-800);
    background-color: var(--white);
    -webkit-font-smoothing: antialiased;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
    transition: color var(--transition);
}

ul {
    list-style: none;
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
}

/* ----- Typography ----- */
h1, h2, h3, h4 {
    line-height: 1.3;
    font-weight: 700;
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); }
h3 { font-size: 1.3rem; }

.section-title {
    text-align: center;
    margin-bottom: 12px;
    color: var(--gray-900);
}

.section-subtitle {
    text-align: center;
    color: var(--gray-500);
    max-width: 600px;
    margin: 0 auto 48px;
    font-size: 1.05rem;
}

/* ----- Buttons ----- */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all var(--transition);
    white-space: nowrap;
}

.btn-primary {
    background: var(--green-mid);
    color: var(--white);
}
.btn-primary:hover {
    background: var(--green-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn-secondary {
    background: transparent;
    color: var(--white);
    border-color: var(--white);
}
.btn-secondary:hover {
    background: var(--white);
    color: var(--green-dark);
    transform: translateY(-2px);
}

.btn-outline {
    background: transparent;
    color: var(--green-mid);
    border-color: var(--green-mid);
}
.btn-outline:hover {
    background: var(--green-mid);
    color: var(--white);
}

.btn-gold {
    background: var(--gold);
    color: var(--white);
}
.btn-gold:hover {
    background: var(--gold-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

/* ----- TOP BAR ----- */
.top-bar {
    background: var(--green-dark);
    color: var(--white);
    font-size: 0.85rem;
    padding: 8px 0;
}
.top-bar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
}
.top-bar span {
    display: flex;
    align-items: center;
    gap: 6px;
}
.top-bar a {
    color: var(--gold-light);
}
.top-bar a:hover {
    color: var(--gold);
}

/* ----- NAVIGATION ----- */
.navbar {
    background: var(--white);
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: var(--shadow-sm);
    border-bottom: 3px solid var(--green-light);
}
.navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    font-size: 1.15rem;
    color: var(--green-dark);
}
.logo-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, var(--green-mid), var(--green-dark));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 1.4rem;
    flex-shrink: 0;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
}
.nav-links a {
    padding: 8px 16px;
    border-radius: var(--radius-sm);
    font-weight: 500;
    color: var(--gray-700);
    position: relative;
}
.nav-links a:hover,
.nav-links a.active {
    color: var(--green-mid);
    background: var(--green-light);
}
.nav-links a.active {
    font-weight: 700;
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 8px;
    background: none;
    border: none;
}
.hamburger span {
    width: 26px;
    height: 3px;
    background: var(--green-dark);
    border-radius: 3px;
    transition: var(--transition);
}

/* ----- HERO SECTION ----- */
.hero {
    background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.6)),
                url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1400') center/cover no-repeat;
    color: var(--white);
    text-align: center;
    padding: 120px 24px;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.hero-content {
    max-width: 750px;
}
.hero-badge {
    display: inline-block;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 0.9rem;
    margin-bottom: 20px;
    border: 1px solid rgba(255,255,255,0.3);
}
.hero h1 {
    margin-bottom: 16px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.4);
}
.hero h1 .highlight {
    color: var(--gold);
}
.hero p {
    font-size: 1.15rem;
    margin-bottom: 32px;
    opacity: 0.9;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
}
.hero-buttons {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
}

/* ----- PAGE HERO (inner pages) ----- */
.page-hero {
    background: linear-gradient(rgba(11,94,60,0.85), rgba(11,94,60,0.9)),
                url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1400') center/cover no-repeat;
    color: var(--white);
    text-align: center;
    padding: 80px 24px;
}
.page-hero h1 {
    margin-bottom: 10px;
}
.page-hero .breadcrumb {
    font-size: 0.9rem;
    opacity: 0.85;
}
.page-hero .breadcrumb a {
    color: var(--gold-light);
    text-decoration: underline;
}

/* ----- SECTION PADDING ----- */
.section {
    padding: 80px 0;
}
.section-light {
    background: var(--gray-50);
}
.section-green {
    background: var(--green-bg);
}

/* ----- ABOUT SECTION ----- */
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}
.about-image {
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    position: relative;
}
.about-image::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 3px solid var(--gold);
    border-radius: var(--radius-lg);
    transform: translate(12px, 12px);
    z-index: -1;
    opacity: 0.5;
}
.about-text h2 {
    margin-bottom: 16px;
    text-align: left;
}
.about-text .lead {
    font-size: 1.1rem;
    color: var(--green-mid);
    font-weight: 600;
    margin-bottom: 16px;
}
.about-text p {
    margin-bottom: 14px;
    color: var(--gray-600);
}
.stats-row {
    display: flex;
    gap: 32px;
    margin-top: 24px;
    flex-wrap: wrap;
}
.stat-item {
    text-align: center;
}
.stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: var(--green-mid);
}
.stat-label {
    font-size: 0.85rem;
    color: var(--gray-500);
}

/* ----- CARDS GRID ----- */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 28px;
}

.card {
    background: var(--white);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all var(--transition);
    border: 1px solid var(--gray-200);
}
.card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
}
.card-image {
    height: 220px;
    overflow: hidden;
}
.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
.card:hover .card-image img {
    transform: scale(1.08);
}
.card-body {
    padding: 24px;
}
.card-body h3 {
    margin-bottom: 8px;
    color: var(--gray-900);
}
.card-body p {
    color: var(--gray-500);
    margin-bottom: 16px;
    font-size: 0.95rem;
}
.card-meta {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--green-mid);
    font-weight: 600;
    font-size: 0.9rem;
}

/* ----- CULTURE SECTION ----- */
.culture-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 28px;
}
.culture-card {
    background: var(--white);
    padding: 32px 24px;
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--shadow);
    transition: all var(--transition);
    border-top: 4px solid var(--gold);
}
.culture-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}
.culture-icon {
    font-size: 3rem;
    margin-bottom: 16px;
}
.culture-card h3 {
    margin-bottom: 8px;
}

/* ----- GALLERY ----- */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}
.gallery-item {
    border-radius: var(--radius);
    overflow: hidden;
    position: relative;
    cursor: pointer;
    aspect-ratio: 4/3;
}
.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
.gallery-item:hover img {
    transform: scale(1.1);
}
.gallery-overlay {
    position: absolute;
    inset: 0;
    background: rgba(11,94,60,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--transition);
    color: var(--white);
    font-weight: 600;
    font-size: 1.1rem;
}
.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

/* ----- TESTIMONIALS ----- */
.testimonial-card {
    background: var(--white);
    padding: 32px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}
.testimonial-card .quote {
    font-size: 1.1rem;
    font-style: italic;
    color: var(--gray-600);
    margin-bottom: 16px;
}
.testimonial-card .author {
    font-weight: 700;
    color: var(--green-dark);
}

/* ----- CONTACT PAGE ----- */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 48px;
}
.contact-info h2 {
    margin-bottom: 20px;
    text-align: left;
}
.contact-detail {
    display: flex;
    gap: 14px;
    margin-bottom: 20px;
    align-items: flex-start;
}
.contact-icon {
    width: 48px;
    height: 48px;
    background: var(--green-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    flex-shrink: 0;
}
.contact-detail h4 {
    margin-bottom: 4px;
}
.contact-detail p {
    color: var(--gray-500);
    font-size: 0.95rem;
}
.contact-form {
    background: var(--white);
    padding: 36px;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--gray-200);
}
.form-group {
    margin-bottom: 20px;
}
.form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--gray-700);
}
.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-sm);
    font-size: 1rem;
    font-family: inherit;
    transition: border-color var(--transition);
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--green-mid);
}
.form-group textarea {
    resize: vertical;
    min-height: 140px;
}

/* ----- MAP ----- */
.map-container {
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    margin-top: 32px;
}
.map-container iframe {
    width: 100%;
    height: 350px;
    border: none;
}

/* ----- CTA BANNER ----- */
.cta-banner {
    background: linear-gradient(135deg, var(--green-dark), var(--green-mid));
    color: var(--white);
    text-align: center;
    padding: 60px 24px;
    border-radius: var(--radius-lg);
    margin-top: 40px;
}
.cta-banner h2 {
    margin-bottom: 12px;
}
.cta-banner p {
    margin-bottom: 24px;
    opacity: 0.9;
}

/* ----- FOOTER ----- */
.footer {
    background: var(--gray-900);
    color: var(--gray-300);
    padding: 60px 0 0;
}
.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}
.footer h4 {
    color: var(--white);
    margin-bottom: 16px;
    font-size: 1.05rem;
}
.footer p, .footer a {
    font-size: 0.9rem;
    color: var(--gray-400);
}
.footer a:hover {
    color: var(--gold);
}
.footer-links li {
    margin-bottom: 8px;
}
.footer-bottom {
    border-top: 1px solid var(--gray-700);
    padding: 20px 0;
    text-align: center;
    font-size: 0.85rem;
}
.footer-bottom .gold {
    color: var(--gold);
}

/* ----- BACK TO TOP ----- */
.back-to-top {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    background: var(--green-mid);
    color: var(--white);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.3rem;
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}
.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}
.back-to-top:hover {
    background: var(--green-dark);
    transform: translateY(-3px);
}

/* ----- ALERT MESSAGE ----- */
.alert {
    padding: 14px 20px;
    border-radius: var(--radius-sm);
    margin-bottom: 20px;
    font-weight: 500;
    display: none;
}
.alert-success {
    background: #D1FAE5;
    color: #065F46;
    border: 1px solid #A7F3D0;
    display: block;
}
.alert-error {
    background: #FEE2E2;
    color: #991B1B;
    border: 1px solid #FECACA;
    display: block;
}

/* ----- RESPONSIVE ----- */
@media (max-width: 1024px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }
    .contact-grid {
        grid-template-columns: 1fr;
    }
    .footer-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    .nav-links {
        position: fixed;
        top: 72px;
        left: 0;
        right: 0;
        background: var(--white);
        flex-direction: column;
        padding: 16px;
        box-shadow: var(--shadow-lg);
        transform: translateY(-120%);
        transition: transform var(--transition);
        z-index: 999;
    }
    .nav-links.active {
        transform: translateY(0);
    }
    .nav-links a {
        width: 100%;
        padding: 12px 16px;
    }
    .hero {
        padding: 60px 20px;
        min-height: 60vh;
    }
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    .stats-row {
        gap: 20px;
    }
    .section {
        padding: 48px 0;
    }
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }
}