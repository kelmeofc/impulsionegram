export function AdvantagesSection({ advantages }: { advantages: any[] }) {
    return (
        <section>
            <div className="container">
                <ul className="flex justify-center items-center flex-wrap gap-6 max-[400px]:gap-2">
                    {advantages.map((advantage, index) => {
                        return (
                            <li className="flex items-center gap-3 py-2 px-5 rounded-full border-[2px] border-[#E2D9EE] text-base font-bold max-[400px]:text-[10px] advantage text-nowrap max-[400px]:w-fit max-[400px]:px-3" key={index}>{advantage.icon} {advantage.text}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}