import Reviews from './Reviews';

const ReviewsPage = ({ productDet }) => {
  return (
    <div className="mx-8 my-8 px-8">
      {productDet.productDetail.reviews.map((review) => (
        <Reviews
          name={review.name}
          review={review.comment}
          date={review.createdAt}
          rating={review.rating}
        />
      ))}
    </div>
  );
};

export default ReviewsPage;