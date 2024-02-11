import { ITestimonialCard } from "@/constants/interfaces";
import Image from "next/image";

const TeamReviewCard = ({
  item,
  currentSlide,
}: {
  item: ITestimonialCard;
  currentSlide: number;
}) => {
  return (
    <li
      className={`relative mt-20 min-w-[100%] rounded-lg bg-neutral-lightGray p-6 ${currentSlide === item.id ? "scale-125 opacity-100" : "opacity-0"}`}
    >
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <Image
          src={item.avatar}
          alt={item.author}
          width={144}
          height={144}
          className="max-w-20 object-cover"
        />
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <h4 className="font-bold text-neutral-darkBlue/80">{item.author}</h4>
        <p className="line-clamp-4 text-primary-darkBlue/40">{item.content}</p>
      </div>
    </li>
  );
};

export default TeamReviewCard;
