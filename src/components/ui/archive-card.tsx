import Link from "next/link"

export interface IArchiveCard {
    banner: {
        alt: string,
        src: string
    },
    title: string,
    category: string,
    link: {
        href: string
    },
    author: {
        photo: {
            alt: string,
            src: string
        },
        name: string
    }
    row?: boolean
}

export function ArchiveCard({ banner, title, category, link, author, row = false }: IArchiveCard) {
    return (
        <Link href={link.href} className={`flex w-full p-8 rounded-[30px] bg-white`} style={{
            flexDirection: row ? 'row' : 'column',
            gap: row ? '20px' : '0',
        }}>
            <img
                className={`block rounded-[30px] w-full ${row && 'max-[700px]:max-w-[200px] max-[580px]:!min-w-[100px] max-[580px]:!min-h-[100px]'}`}
                style={{
                    maxWidth: row ? '240px' : '100%',
                    maxHeight: row ? '240px' : '100%',
                }}
                src={banner.src}
                alt={banner.alt}
            />

            <div className="flex flex-col justify-around h-full">
                <div>
                    <span className={`px-5 py-2 bg-[#F9BF10] font-bold text-lg text-[#1A002D] rounded-full block w-fit ${row && 'text-[10px] px-2 py-1'}`} style={{
                        marginTop: row ? '0px' : '20px',
                    }}>{category}</span>

                    <h2 className={`text-3xl max-[1300px]:text-lg max-[1200px]:text-sm max-[1064px]:text-2xl font-bold text-[#1A002D] mt-4  ${row && 'max-[580px]:text-[14px]  max-[580px]:leading-[1.3]'}`}>{title}</h2>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex">
                        <img
                            className={`w-14 mr-5 max-[1200px]:w-10 ${row && 'max-[580px]:w-7 max-[580px]:h-7'}`}
                            src={author.photo.src}
                            alt={author.photo.alt}
                        />

                        <p className={`text-base text-[#8C8096] ${row && 'max-[580px]:text-xs'}`}>Escrito Por <span className={`block font-bold text-xl max-[1200px]:text-sm text-[#1A002D] ${row && 'max-[580px]:text-xs'}`}>{author.name}</span></p>
                    </div>

                    <Link
                        href={link.href}
                        className="text-[#877A93] flex gap-2 items-center justify-center font-semibold"
                        style={{
                            display: row ? 'none' : 'flex',
                        }}
                    >
                        Ler mais
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0777 2.5884C10.9757 2.49332 10.8939 2.37866 10.8371 2.25127C10.7803 2.12387 10.7498 1.98635 10.7473 1.84691C10.7449 1.70746 10.7705 1.56895 10.8228 1.43963C10.875 1.31031 10.9528 1.19284 11.0514 1.09422C11.15 0.995603 11.2675 0.917858 11.3968 0.865625C11.5261 0.813391 11.6646 0.78774 11.8041 0.7902C11.9435 0.792661 12.081 0.823182 12.2084 0.879945C12.3358 0.936708 12.4505 1.01855 12.5455 1.12058L18.0845 6.6595C18.2789 6.85422 18.3882 7.11819 18.3882 7.3934C18.3882 7.66862 18.2789 7.93258 18.0845 8.12731L12.5455 13.6662C12.4505 13.7683 12.3358 13.8501 12.2084 13.9069C12.081 13.9636 11.9435 13.9941 11.8041 13.9966C11.6646 13.9991 11.5261 13.9734 11.3968 13.9212C11.2675 13.8689 11.15 13.7912 11.0514 13.6926C10.9528 13.594 10.875 13.4765 10.8228 13.3472C10.7705 13.2179 10.7449 13.0793 10.7473 12.9399C10.7498 12.8005 10.7803 12.6629 10.8371 12.5355C10.8939 12.4081 10.9757 12.2935 11.0777 12.1984L14.8442 8.43195L1.42618 8.43195C1.15074 8.43195 0.886583 8.32253 0.691818 8.12776C0.497053 7.933 0.387636 7.66884 0.387636 7.3934C0.387636 7.11796 0.497053 6.8538 0.691818 6.65904C0.886583 6.46427 1.15074 6.35485 1.42618 6.35485L14.8442 6.35486L11.0777 2.5884Z" fill="#877A93" />
                        </svg>
                    </Link>
                </div>
            </div>
        </Link>
    );
}