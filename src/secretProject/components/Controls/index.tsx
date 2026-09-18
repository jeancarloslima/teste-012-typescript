import ChoiceCard from "../../assets/ChoiceCard";
import RollCard from "../../assets/RollCard";

export default function Controls() {
    return (
        <div className="w-full lg:w-[34%] lg:border-l lg:border-r lg:inset-shadow-2xs lg:inset-shadow-black h-screen flex flex-col items-center justify-center gap-4">
            <RollCard />
            <ChoiceCard />
        </div>
    )
}