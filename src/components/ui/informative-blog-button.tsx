import Link from "next/link";

export function InformativeBlogButton({ text, link }: { text: React.ReactNode, link: string }) {
    return (
        <Link
            href={link}
        >{text}</Link>
    );
}