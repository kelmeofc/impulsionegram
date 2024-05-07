import Link from "next/link";

export function InformativeBlogButton({ text, link }: { text: React.ReactNode, link: string }) {
    return (
        <Link
            href={link}
            className="button text-lg px-3 w-full my-6 block max-w-[600px] mx-auto rounded-full"
        >{text}</Link>
    );
}