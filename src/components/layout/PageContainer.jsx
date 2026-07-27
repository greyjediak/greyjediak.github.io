// The page content stays inside each page component and provides consistent
// and horizontal spacing

export default function PageContainer({
    children,
    className = "",
    as: Element = "main",
}) {
    return (
        <Element className = {`mx-auto w-full max-w-6xl px-6 ${className}`}>
            {children}
        </Element>
    );
}