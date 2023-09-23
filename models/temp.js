const agg = [
  {
    $match: {
      product: new ObjectId('650c1fe60e216377390cf55a'),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: '$rating',
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];
