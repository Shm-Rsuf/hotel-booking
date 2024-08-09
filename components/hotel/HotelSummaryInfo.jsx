const HotelSummaryInfo = ({ fromListPage, info }) => {
  const { thumbNailUrl, name, highRate, lowRate, city, propertyCategory } =
    info;
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {name}
        </h2>
        <p>📍 {city}</p>
        <div className='flex gap-2 items-center my-4'>
          <div className='bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold'>
            5.3
          </div>
          <span className='font-medium'>Very Good</span>
          <span>232 Reviews</span>
        </div>
        <div>
          <span className='bg-primary p-1 rounded-md'>
            {propertyCategory} star property
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-2 items-end justify-center'>
        <h2 className='text-2xl font-bold text-right'>
          ${Math.round((highRate + lowRate) / 10)}/night
        </h2>
        <p className=' text-right'>Per Night for 1 Room</p>
        {fromListPage ? (
          <button className='btn-primary '>Details</button>
        ) : (
          <button className='btn-primary '>Book</button>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;
