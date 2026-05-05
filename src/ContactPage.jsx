function ContactPage() {
    return (
        <main className="container contact-page">
            <section className="section-heading">
                <p className="eyebrow">Contact</p>
            </section>

            <section className="contact-links">
                <a
                    href="mailto:lcbowen1@crimson.ua.edu"
                    className="contact-card"
                >
                    <h3>Email</h3>
                    <p>lcbowen1@crimson.ua.edu</p>
                </a>
                <a href="https://www.linkedin.com/in/lindsey-bowen-265466296"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                >
                    <h3>LinkedIn</h3>
                    <p>View Profile</p>
                </a>
            </section>
        </main>
    );
}

export default ContactPage;