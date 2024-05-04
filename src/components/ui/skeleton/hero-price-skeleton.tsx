export function HeroPriceSkeleton({ className }: { className?: string }) {
    return (
        <div className="flex items-start gap-[5px]">
            <div className={`bg-gray-300 motion-safe:animate-pulse rounded flex w-[50px] h-[40px] ${className}`}></div>
            <div className={`bg-gray-300 motion-safe:animate-pulse rounded flex w-[50px] h-[30px] ${className}`}></div>
        </div>
    );
}