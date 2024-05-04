export function LinkButton({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) {
    return <a href={href}>{children}</a>;
}
