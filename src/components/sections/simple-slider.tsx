import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";

export function SimpleSlider({
    title,
    description,
    children,
}: {
    title: string,
    description: string,
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <p className="text section-text-center mt-8 max-w-[870px]">{description}</p>

                <Carousel className="mt-9">
                    <div className="flex justify-end gap-3">
                        <CarouselPrevious className="static bg-transparent border-[#B352FF] text-[#B352FF]" />
                        <CarouselNext className="static bg-transparent border-[#B352FF] text-[#B352FF]" />
                    </div>

                    <CarouselContent className="px-5 gap-6">
                        {children}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}