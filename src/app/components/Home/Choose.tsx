"use client";
import React from "react";
import engImg from "@/assets/engineer.jpeg";
import CustomCard from "@/app/components/CustomCard";

const data = [
  {
    title: "Experienced Engineers",
    img: engImg,
    description:
      "Our certified professionals have years of experience installing all types of air conditioning systems, including split, window, and central AC units.",
  },
  {
    title: "Customized Solutions",
    img: engImg,
    description:
      "We understand that every space is unique. Our team assesses your space to recommend and install the perfect air conditioning solution tailored to your needs.",
  },
  {
    title: "Affordable Pricing",
    img: engImg,
    description:
      "We offer competitive rates without compromising on quality. Transparency in pricing ensures you get value for every rupee spent.",
  },
  {
    title: "Energy-Efficient Installation",
    img: engImg,
    description:
      "Proper installation is key to reducing energy consumption. Our experts ensure your system is set up for optimal performance, saving you money on electricity bills.",
  },
  {
    title: "Quick and Hassle-Free Service",
    img: engImg,
    description:
      "From consultation to installation, we handle every step with precision and care, ensuring minimal disruption to your daily routine.",
  },
  {
    title: "Customer-Centric Approach",
    img: engImg,
    description:
      "We prioritize your needs and are committed to delivering personalized solutions and exceptional service."
  },
];

const Choose = () => {
  return (
    <section className="my-20 py-10 px-4 text-center">
      <h1 className="pt-4 pb-2 text-4xl font-bold animate-slideIn md:text-5xl">
        Why Choose Us?
      </h1>
      <p className="py-2 pb-8 text-sm md:text-base">
        At <span className="font-bold">Services Wallah</span>, we specialize in
        providing seamless and efficient air conditioning installation services
        for homes, offices, and commercial spaces.
        <br /> Our expert team ensures every installation meets the highest
        standards of <span className="font-bold">quality, reliability,</span>
        and <span className="font-bold">energy</span> efficiency.
      </p>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
        {data?.map((element, index) => (
          <CustomCard
            key={index}
            title={element.title}
            description={element.description}
            img={element.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Choose;


{/* <Card className="shadow-2xl cursor-pointer transition-transform hover:scale-105">
<CardHeader className="text-center">
  <CardTitle className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold animate-fadeIn">
    {title}
  </CardTitle>
</CardHeader>
<CardContent>
  {img && (
    <div className="overflow-hidden rounded-t-lg">
      <Image
        src={img}
        alt={title || "Card image"}
        width={500}
        height={300}
        className="w-full h-auto object-cover animate-zoomIn"
      />
    </div>
  )}
</CardContent>
<CardFooter className="text-center">
  <CardDescription className="text-sm sm:text-base md:text-sm lg:text-lg animate-fadeIn">
    {description}
  </CardDescription>
</CardFooter>
</Card> */}