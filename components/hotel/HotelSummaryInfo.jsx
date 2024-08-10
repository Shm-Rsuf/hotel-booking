import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReview from "./HotelReview";

const HotelSummaryInfo = ({ fromListPage, info }) => {
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {info?.name}
        </h2>
        <p>📍 {info?.city}</p>
        <div className='flex gap-2 items-center my-4'>
          <HotelRating id={info?.id} />
          <HotelReview id={info?.id} />
        </div>
        <div>
          <span className='bg-primary p-1 rounded-md'>
            {info?.propertyCategory} star property
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-2 items-end justify-center'>
        <h2 className='text-2xl font-bold text-right'>
          ${Math.round((info?.highRate + info?.lowRate) / 10)}/night
        </h2>
        <p className=' text-right'>Per Night for 1 Room</p>
        {fromListPage ? (
          <Link href={`/hotels/${info?.id}`} className='btn-primary'>
            Details
          </Link>
        ) : (
          <button className='btn-primary'>Book</button>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;
