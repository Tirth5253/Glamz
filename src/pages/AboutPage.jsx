import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-3 py-3">
        <h1 className="text-center text-4xl font-bold">About Us</h1>
        <hr className="my-4" />
        <p className="text-center text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>

        <h2 className="text-center text-3xl py-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mens's Clothing</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Women's Clothing</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Jewelery</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Electronics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
