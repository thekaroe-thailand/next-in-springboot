export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <nav>Next website</nav>
            {children}
        </section>
    );
}
