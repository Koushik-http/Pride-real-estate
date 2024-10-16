import React from "react";
import { useParams } from "react-router-dom";

// Import images
import image1 from "../../images2/image1.png";
import image2 from "../../images2/image2.png";
import image3 from "../../images2/image3.png";
import image4 from "../../images2/image4.png";
import image5 from "../../images2/image5.png";
import image6 from "../../images2/image6.png";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL parameters

  // Sample data with real estate information
  const properties = [
    {
      id: 1,
      title: "Luxurious 3-Bedroom Apartment in Hyderabad",
      image: image1,
      description:
        "A stunning 3-bedroom apartment located in Hyderabad. The apartment features modern amenities, high ceilings, and large windows with a view of the lake.",
      location: "Aparna Sarovar Zenith, Hyderabad, Telangana",
      price: "20,000 Rs",
      size: "1,200 sqft",
      bedrooms: 3,
      bathrooms: 2,
      features: [
        "Gym Access",
        "Swimming Pool",
        "24/7 Security",
        "Underground Parking",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30443.149222948716!2d78.3120888!3d17.4660387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92df17d7857f%3A0xb2ece2980e72a9cb!2sAparna%20Sarovar%20Zenith!5e0!3m2!1sen!2sin!4v1697374932294!5m2!1sen!2sin",
    },
    {
      id: 2,
      title: "Spacious Family Home with Garden in Chennai",
      image: image2,
      description:
        "A beautiful family home with a large garden, perfect for children and pets. This property features spacious living areas and a modern kitchen.",
      location: "NGB Luxabay, Chennai, Tamil Nadu",
      price: "18,000 Rs",
      size: "1,400 sqft",
      bedrooms: 3,
      bathrooms: 2,
      features: [
        "Garden",
        "Gym Access",
        "Swimming Pool",
        "24/7 Security",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244100.61305864878!2d80.2277639!3d13.0428477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dd54933c409%3A0xb24ff4a95020eff8!2sNGB%20Luxabay!5e0!3m2!1sen!2sin!4v1697375335595!5m2!1sen!2sin",
    },
    {
      id: 3,
      title: "Modern Studio Apartment in Bangalore",
      image: image4,
      description:
        "A modern and cozy studio apartment perfect for singles or couples, featuring an open-plan layout, a fully equipped kitchen, and a balcony with a great view.",
      location: "Folium by Sumadhura, Bangalore, Karnataka",
      price: "25,000 Rs",
      size: "600 sqft",
      bedrooms: 1,
      bathrooms: 1,
      features: [
        "Balcony",
        "Gym Access",
        "24/7 Security",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77604.91146236004!2d77.5792708!3d12.9706323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1200d13bc5b7%3A0x84c71e19f65e9ba2!2sFolium%20by%20Sumadhura!5e0!3m2!1sen!2sin!4v1697375370487!5m2!1sen!2sin",
    },
    {
      id: 4,
      title: "Luxurious 4-Bedroom House in Pune",
      image: image5,
      description:
        "A spacious 4-bedroom house located in Pune. The house includes a large backyard, perfect for family gatherings.",
      location: "Panchshil Towers, Pune, Maharashtra",
      price: "45,000 Rs",
      size: "2,500 sqft",
      bedrooms: 4,
      bathrooms: 3,
      features: [
        "Garden",
        "Swimming Pool",
        "Gym Access",
        "24/7 Security",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78894.78008116719!2d73.8865304!3d18.5292702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b69c54b5d5%3A0xada26f52d9061b20!2sPanchshil%20Towers!5e0!3m2!1sen!2sin!4v1697375394898!5m2!1sen!2sin",
    },
    {
      id: 5,
      title: "Cozy Beach House in Goa",
      image: image6,
      description:
        "A charming beach house with stunning ocean views, located just steps from the beach. Ideal for a relaxing getaway.",
      location: "Susegad Suites Goa, Goa",
      price: "30,000 Rs",
      size: "1,000 sqft",
      bedrooms: 2,
      bathrooms: 2,
      features: [
        "Beachfront",
        "Swimming Pool",
        "Garden",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153406.22508219703!2d73.7365625!3d15.5753524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfebe536ce184d%3A0xcd107dc6a0a06faa!2sSusegad%20Suites%20Goa!5e0!3m2!1sen!2sin!4v1697375411394!5m2!1sen!2sin",
    },
    {
      id: 6,
      title: "Modern Apartment with City Views in Hyderabad",
      image: image3,
      description:
        "A stylish apartment located in the heart of Hyderabad, featuring a contemporary design and panoramic city views.",
      location: "Aditya Lagoon, Hyderabad, Telangana",
      price: "22,000 Rs",
      size: "1,000 sqft",
      bedrooms: 2,
      bathrooms: 2,
      features: [
        "City View",
        "Gym Access",
        "24/7 Security",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30443.149222948716!2d78.3834816!3d17.5117162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91fe5c01194f%3A0x73be4eb38a21cf22!2sAditya%20Lagoon!5e0!3m2!1sen!2sin!4v1697375437115!5m2!1sen!2sin",
    },
  ];

  // Find the property by ID (make sure to parse the id from params)
  const property = properties.find((p) => p.id === parseInt(id, 10));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="blog-detail">
      <h1>{property.title}</h1>
      <img src={property.image} alt={property.title} />

      <div className="details">
        <p><strong>Description:</strong> {property.description}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Size:</strong> {property.size}</p>
        <ul>
          <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
          <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
          <li>
            <strong>Features:</strong>
            <ul>
              {property.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <div className="map">
        <h2>Location Map</h2>
        <iframe
  src={property.mapUrl}
  width="800"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="Location Map"
></iframe>

      </div>
    </div>
  );
};

export default BlogDetail;
