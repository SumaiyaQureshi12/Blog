import React from "react";
import BlogCard from "../Components/BlogCard";

const Mega = () => {
  const post = [
    {
      id: "1",
      title: " Karachi's Jodia Bazar",
      description: "Jodia Bazar is one of Karachi's oldest and most famous commercial hubs, offering everything from textiles and spices to dry fruits and more. Known for its vibrant atmosphere and bustling crowds, the market is a lively blend of tradition and modern trade. A visit to Jodia Bazar is a journey through Karachi's rich heritage and dynamic culture.",
      date: "2024-12-31",
      imageurl: "/bazar.jpeg",
    },
    {
      id: "2",
      title: "Burns Road Food Street",
      description: "Burns Road Food Street is Karachi's iconic culinary destination, renowned for its rich flavors and historic eateries. From spicy nihari and crispy kebabs to sweet rabri and kulfi, the street offers a diverse range of traditional Pakistani delicacies. A haven for food lovers, Burns Road perfectly captures the essence of Karachi’s vibrant food culture.",
      date: "2024-12-31",
      imageurl: "/burns.jpeg",
    },
    {
      id: "3",
      title: "Sarafa Bazar",
      description: "Sarafa Bazar, Karachi’s bustling gold and jewelry market, is a treasure trove for those seeking exquisite ornaments and intricate designs. Known for its dazzling displays of gold, silver, and precious stones, this market is a hub for jewelry enthusiasts and traders alike. Sarafa Bazar embodies the charm of traditional craftsmanship and modern artistry",
      date: "2024-12-31",
      imageurl: "/sarafa.webp",
    },
    {
      id: "4",
      title: "Clifton Beach (Sea View)",
      description: "Clifton Beach, commonly known as Sea View, is one of Karachi’s most popular and serene spots, offering breathtaking views of the Arabian Sea. A favorite destination for families and tourists, the beach is known for its golden sands, cool sea breeze, and various activities such as horse riding and camel rides. The vibrant atmosphere and peaceful sunsets make it an ideal place to relax and enjoy nature’s beauty, away from the hustle and bustle of the city.",
      date: "2024-12-31",
      imageurl: "/sea.jpg",
    },
    {
      id: "5",
      title: "Port Grand",
      description: "Port Grand is a unique waterfront complex in Karachi that combines dining, shopping, and entertainment all in one place. Situated along the Karachi Harbour, it offers stunning views of the sea and a variety of food options, from traditional Pakistani dishes to international cuisines. The vibrant atmosphere, alongside its shopping outlets and cultural events, makes it a popular spot for both locals and tourists. Whether you're looking to indulge in gourmet meals, shop for unique items, or simply relax by the water, Port Grand is the perfect destination for a memorable experience.",
      date: "2024-12-31",
      imageurl: "/port.webp",
    },
    {
      id: "6",
      title: "Dolmen Mall",
      description: "Dolmen Mall is one of Karachi's premier shopping destinations, offering a luxurious retail experience. With its modern architecture and a wide range of international and local brands, it has become a favorite spot for shopping, dining, and entertainment. Located in Clifton, Dolmen Mall boasts a variety of options for food, fashion, electronics, and more, making it a go-to destination for both locals and visitors. Whether you're indulging in a shopping spree, enjoying a meal with family and friends, or catching the latest movie, Dolmen Mall provides a vibrant and enjoyable atmosphere.",
      date: "2024-12-31",
      imageurl: "/mall.jpeg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-green-950 animate-color-change">
        Famous Places in Karachi
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {post.map((post, index) => ( 
    <div className="fade-in" key={post.id}>
      <div className="blog-card">
        <BlogCard post={post} isDarkBackground={index % 2 === 0} />
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Mega;
