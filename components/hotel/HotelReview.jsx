import { getReviewsFromHotel } from "@/database/queries";
import Link from "next/link";

const HotelReview = async ({ id }) => {
  const reviews = await getReviewsFromHotel(id);

  let content = null;
  if (reviews.length === 0) {
    content = (
      <Link href='#' className='underline'>
        Be the first one of review
      </Link>
    );
  } else {
    content = (
      <Link href={`/hotel/${id}/reviews`} className='underline'>
        {reviews.length} reviews
      </Link>
    );
  }
  return content;
};

export default HotelReview;
