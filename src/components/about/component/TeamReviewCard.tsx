import { ITestimonialCard } from "@/constants/interfaces";
import Image from "next/image";

const TeamReviewCard = ({
  item,
  currentSlide,
}: {
  item: ITestimonialCard | undefined;
  currentSlide: number;
}) => {
  if (!item) return null;

  return (
    <div
      className={`relative mt-20 min-w-full rounded-lg bg-neutral-lightGray p-6 ${currentSlide === item.id ? "opacity-100" : "opacity-0"}`}
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
      <div className="mt-10 flex text-lg flex-col items-center gap-4 text-center">
        <h4 className="font-bold text-neutral-darkBlue/80">{item.author}</h4>
        <p className="line-clamp-4 text-primary-darkBlue/40">{item.content}</p>
      </div>
    </div>
  );
};

export default TeamReviewCard;
