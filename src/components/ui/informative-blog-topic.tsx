import Image from "next/image";

export interface ITopic {
    id: string,
    title: string,
    content: any,
    banner?: {
        path: string,
        alt: string,
    },
    sub_topics?: ITopic[],
    after?: any,
}

export function InformativeBlogTopic({ topic }: { topic: ITopic }) {
    return (
        <div id={topic.id} data-informative-blog-topics>
            <h2 className="primary-title mt-5">{topic.title}</h2>

            {topic.banner ? (<img
                className="block mt-10 rounded-3xl"
                src={topic.banner?.path}
                alt={topic.banner?.alt}
            />) : null}

            <div className="informative-content-blog text mt-8">
                {topic.content}
            </div>

            {topic.sub_topics &&
                <ul className="mt-8">
                    {topic.sub_topics?.map((topic, index) => {
                        return (
                            <li id={topic.id} data-informative-blog-topics className="informative-content-blog" key={`${topic.id}-${index}`}>
                                <h2 className="text-[22px] font-bold text-[#19002C]">{topic.title}</h2>
                                {topic.content}
                                {topic.after}
                            </li>
                        );
                    })}
                </ul>
            }

            {topic.after}
        </div>
    );
}