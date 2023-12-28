import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  const ProductData = [
    {
      image: "../../public/images/compass-wb.jpg",
      image2: "../../public/images/compass-wb2.jpg",
      title: "GAZELLE HI WHITE BLUE",
      description:
        "Inspired bythe 1950s, the Gazelle Hi took an iconic silhouette and gave it a Compass twist. The Hi-cut adds attitude to the classic Gazelle style, making it both timeless and fresh.",
      realPrice: "30",
      price: "27",
      discount: "10",
    },
    {
      image: "../../public/images/compass-wb.jpg",
      image2: "../../public/images/compass-wb2.jpg",
      title: "GAZELLE ",
      description:
        " the Gazelle Hi took an iconic silhouette and gave it a Compass twist. The Hi-cut adds attitude to the classic Gazelle style, making it both timeless and fresh.",
      realPrice: "30",
      price: "12",
      discount: "10",
    },
    {
      image: "../../public/images/compass-wb.jpg",
      image2: "../../public/images/compass-wb2.jpg",
      title: "GAZELLE HI WHITE BLUE",
      description:
        "Inspired bythe 1950s, the Gazelle Hi took an iconic silhouette and gave it a Compass twist. The Hi-cut adds attitude to the classic Gazelle style, making it both timeless and fresh.",
      realPrice: "30",
      price: "27",
      discount: "10",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center py-5 w-full gap-5">
        {ProductData.map((product, index) => (
          <CardProduct key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
