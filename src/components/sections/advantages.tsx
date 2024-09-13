export function AdvantagesSection({ advantages }: { advantages: any[] }) {
    return (
        <section>
            <div className="container">
                <ul className="flex justify-center items-center flex-wrap gap-6 max-[600px]:gap-1">
                    {advantages.map((advantage, index) => {
                        return (
                            <li className="flex items-center align-middle lg:gap-3 gap-2 py-2 px-3 lg:py-2 lg:px-5 rounded-full border-[2px] border-[rgba(79,0,142,0.09)] text-[14px] font-bold max-[600px]:text-[12px] max-[420px]:text-[12px] advantage text-nowrap max-[600px]:w-fit max-[600px]:px-2 max-[600px]:gap-1 max-[600px]:py-1" key={index}><i className="max-[600px]:w-[10px] i-full  ">{advantage.icon}</i> {advantage.text}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}