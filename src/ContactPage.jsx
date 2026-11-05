import ContactCard from "./components/cards/ContactCard";
import PageContainer from "./components/layout/PageContainer";
import PageHeader from "./components/layout/PageHeader";

export default function ContactPage() {
    return (
        <PageContainer className="py-16 sm:py-24">
            <PageHeader
                eyebrow="Contact"
                title="Get in touch"
                description="Reach out by email or connect with me on LinkedIn!"
                as="h1"
            />

            <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ContactCard
                    href="mailto:lcbowen1@crimson.ua.edu"
                    title="Email"
                    description="lcbowen1@crimson.ua.edu"
                />

                <ContactCard
                    href="https://www.linkedin.com/in/lindsey-bowen-265466296"
                    title="LinkedIn"
                    description="View LinkedIn"
                />

                <ContactCard
                    href="https://github.com/greyjediak"
                    title="GitHub"
                    description="View GitHub"
                />
            </section>
        </PageContainer>
    );
}
