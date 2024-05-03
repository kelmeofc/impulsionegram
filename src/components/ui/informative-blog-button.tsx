import Link from "next/link";

export function InformativeBlogButton({ text, link }: { text: React.ReactNode, link: string }) {
    return (
        <Link
            href={link}
            className="text-2xl my-5 font-bold text-center py-6 block bg-[#4F008E] text-white max-w-[600px] mx-auto rounded-full"
        >{text}</Link>
    );
}