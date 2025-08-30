import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fallbackPosts } from "../utils/data";


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, dots: true, arrows: false },
    },
  ],
};

const BlogCard = ({ post }) => (
    <div className="slaid">
      <div className="slaid-wrapper">
        <figure>
          <img src={post.imageSrc} alt={post.title || "Blog"} />
        </figure>
        <span className="slaid-title">{post.title}</span>
        <span className="slaid-date">{post.date}</span>
        <p className="slaid-text">{post.excerpt}</p>
        <a href={post.href} className="slaid-link">
          Continue Reading
        </a>
      </div>
    </div>
  );

const BlogSection = ({ posts = fallbackPosts, title = "Personal Blog" }) => {
    return (
        <section className="blog">
          <span className="iner-subtitle blog-subtitle">MY ARTICLES</span>
          <h2 className="iner-title blog-title">{title}</h2>
    
          <div className="container blog-slaiders">
            <Slider {...settings}>
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </Slider>
          </div>
        </section>
      );
};

export default BlogSection;
