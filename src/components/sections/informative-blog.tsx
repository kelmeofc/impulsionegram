import { InformativeBlogButton } from "../ui/informative-blog-button";
import { ITopic, InformativeBlogTopic } from "../ui/informative-blog-topic";
import { NavigationPanel } from "../ui/navigation-panel";

export interface ITopics {
    id: string,
    title: string,
    sub_topics?: ITopics[]
}

export interface IBlogTopics {
    id: string,
    title: string,
    content: any,
    banner?: {
        path: string,
        alt: string
    },
    sub_topics?: IBlogTopics[]
}

export function InformativeBlogSection({
    navigationPanelItems,
    informativeBlogTopicsItems
}: {
    navigationPanelItems: ITopics[],
    informativeBlogTopicsItems: IBlogTopics[]
}) {
    return (
        <main id="blog">
            <div className="min-[1100px]:container">
                <h2 className="section-title max-w-[1000px] mx-auto">Seu perfil mais bombado a partir de hoje!</h2>
                <p className="text section-text-center mt-8 max-w-[870px]">Acompanhe as melhores dicas para impulsionar o seu perfil no Instagram.</p>

                <div className="grid grid-cols-[360px_1fr] max-[1100px]:grid-cols-1 gap-10 mt-24">
                    <NavigationPanel
                        topics={navigationPanelItems}
                    />

                    <div data-informative-blog className="max-[1100px]:container">
                        {informativeBlogTopicsItems.map((topic, index) => {
                            return (<InformativeBlogTopic
                                key={`${topic.id}-${index}`}
                                topic={topic}
                            />)
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}