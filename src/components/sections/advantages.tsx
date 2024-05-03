export function AdvantagesSection({ advantages }: { advantages: any[] }) {
    return (
        <section>
            <div className="container">
                <ul className="flex justify-center items-center flex-wrap gap-6">
                    {advantages.map((advantage, index) => {
                        return (
                            <li className="flex items-center gap-3 py-3 px-6 rounded-full border-[2px] border-[#E2D9EE] text-lg font-bold" key={index}>{advantage.icon} {advantage.text}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}