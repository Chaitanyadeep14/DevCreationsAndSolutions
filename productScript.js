// Product data for dynamic rendering
const products = {
  "t-shirts": {
    title: "Dev Customizable White Round T-Shirt",
    fabric: "Fabric: 100% Cotton",
    description:
      "Our customizable white round neck T-shirts are made from high-quality, breathable cotton fabric. These T-shirts are perfect for casual outings, corporate branding, promotional events, and more. Customize with your unique logos, text, or designs for a personalized touch.",
    features: [
      "Min Order: 50 pieces",
      "Sizes: S, M, L, XL, XXL",
      "Material: 100% Cotton",
      "Delivery: 3 Business Days",
    ],
    mainImage: "./images/t-shirts/full-view.png",
    thumbnails: [
      "./images/t-shirts/front-view.png",
      "./images/t-shirts/back-view.png",
      "./images/t-shirts/blueprint.png",
    ],
    formLink: "https://forms.gle/t-shirts-form-link",
  },
  "banners": {
    title: "Customizable Banners",
    fabric: "Material: Vinyl, Flex",
    description:
      "Promote your business, events, or campaigns with our premium customizable banners. Available in a variety of sizes and materials, these banners are durable and suitable for both indoor and outdoor use. High-quality printing ensures vibrant colors and sharp designs that grab attention.",
    features: [
      "Min Order: 10 banners",
      "Sizes: Custom Sizes Available",
      "Material: Vinyl, Flex",
      "Delivery: 5 Business Days",
    ],
    mainImage: "https://th.bing.com/th/id/OIP.VuS1YDkT9i-NvwiS1_Ah5AHaFY?rs=1&pid=ImgDetMain",
    thumbnails: [
      // "./images/banner/front-view.png",
      // "./images/banner/back-view.png",
      "./images/banner/blueprint.png",
    ],
    formLink: "https://forms.gle/banners-form-link",
  },

    "badges": {
      title: "Customizable Badges",
      fabric: "Material: Metal or Plastic",
      description:
        "Create high-quality, customizable badges to showcase your brand, event, or personal style. Our badges come in various shapes and sizes, crafted from durable metal or plastic materials. They are perfect for corporate events, schools, conventions, and promotional campaigns.",
      features: [
        "Min Order: 100 pieces",
        "Sizes: Custom Sizes Available",
        "Materials: Metal, Plastic",
        "Delivery: 5 Business Days",
      ],
      mainImage: "./images/badges/full-view.webp",
      thumbnails: [
        // "./images/badges/front-view.png",
        // "./images/badges/back-view.png",
        "./images/badges/blueprint.png",
      ],
      formLink: "https://forms.gle/badges-form-link",
    },
    "certificates": {
      title: "Customizable Certificates",
      fabric: "Material: High-Quality Paper",
      description:
        "Design and print professional certificates for achievements, awards, or events. Our certificates are printed on premium-quality paper with a range of customization options. Choose from various layouts and designs to suit your needs. Perfect for schools, universities, corporate events, or personal milestones.",
      features: [
        "Min Order: 50 pieces",
        "Sizes: A4, A5, Custom Sizes",
        "Material: Premium Paper",
        "Delivery: 7 Business Days",
      ],
      mainImage: "./images/certificates/full-view.webp",
      thumbnails: [
        // "./images/certificates/front-view.png",
        // "./images/certificates/back-view.png",
        "./images/certificates/blueprint.png",
      ],
      formLink: "https://forms.gle/certificates-form-link",
    },
    "letter-heads": {
      title: "Customizable Letterheads",
      fabric: "Material: Premium Paper",
      description:
        "Elevate your business communication with customizable letterheads. Printed on premium-quality paper, these letterheads are ideal for professional correspondence. Add your company logo, contact details, and branding elements to leave a lasting impression on clients and partners.",
      features: [
        "Min Order: 200 pieces",
        "Sizes: A4, Letter Size",
        "Material: High-Quality Paper",
        "Delivery: 5 Business Days",
      ],
      mainImage: "./images/letter-heads/full-view.png",
      thumbnails: [
        "./images/letter-heads/front-view.png",
        "./images/letter-heads/back-view.png",
        "./images/letter-heads/blueprint.png",
      ],
      formLink: "https://forms.gle/letterheads-form-link",
    },
    "visiting-cards": {
      title: "Customizable Visiting Cards",
      fabric: "Material: Glossy or Matte Finish",
      description:
        "Make a lasting impression with professionally designed visiting cards. Choose from glossy or matte finishes for a premium look and feel. Customize your cards with your business details, logo, and unique designs to create an impactful first impression during networking events and meetings.",
      features: [
        "Min Order: 500 pieces",
        "Sizes: Standard or Custom Sizes",
        "Material: Glossy, Matte",
        "Delivery: 3 Business Days",
      ],
      mainImage: "./images/cards/full-view.png",
      thumbnails: [
        "./images/cards/front-view.png",
        "./images/cards/back-view.png",
        "https://th.bing.com/th/id/OIP.v0RtDU_v0GTd6pnIIXaO0wHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
      formLink: "https://forms.gle/visitingcards-form-link",
    },
    "posters": {
      title: "Customizable Posters",
      fabric: "Material: Glossy or Matte Paper",
      description:
        "Create eye-catching posters to promote your events, campaigns, or ideas. Our customizable posters are available in various sizes and are printed on high-quality glossy or matte paper. Whether for indoor or outdoor use, these posters are designed to grab attention and convey your message effectively.",
      features: [
        "Min Order: 20 posters",
        "Sizes: A3, A2, A1, Custom Sizes",
        "Material: Glossy, Matte Paper",
        "Delivery: 4 Business Days",
      ],
      mainImage: "https://i.etsystatic.com/11690943/r/il/b53601/2895851175/il_794xN.2895851175_ivug.jpg",
      thumbnails: [
        "https://i.etsystatic.com/22246167/r/il/d1e85e/2520029170/il_fullxfull.2520029170_ndvl.jpg",
        "https://cdn.shopify.com/s/files/1/0008/9666/3611/products/custom-1d_1024x1024.png?v=1571717052",
        "https://graphink.com/wp-content/uploads/2019/07/postermiamisizes.jpg",
      ],
      formLink: "https://forms.gle/posters-form-link",
    },
    "brochures": {
        title: "Customizable Brochures",
        fabric: "Material: Premium Paper",
        description:
          "Engage your audience with professionally designed brochures. Available in bi-fold, tri-fold, or custom formats, these brochures are perfect for showcasing your products, services, or event details. Customize the design, layout, and content to suit your marketing needs.",
        features: [
          "Min Order: 100 brochures",
          "Sizes: Bi-Fold, Tri-Fold, Custom",
          "Material: Glossy, Matte",
          "Delivery: 5 Business Days",
        ],
        mainImage: "./images/brochures/full-view.jpg",
        thumbnails: [
          "./images/brochures/front-view.jpg",
          // "./images/brochures/back-view.png",
          "./images/brochures/blueprint.png",
        ],
        formLink: "https://forms.gle/brochures-form-link",
      },
      "stickers": {
        title: "Customizable Stickers",
        fabric: "Material: Vinyl",
        description:
          "Create custom vinyl stickers that are weather-resistant and durable. Perfect for branding, events, or personal use. Customize the shape, size, and design to create unique and vibrant stickers that stand out.",
        features: [
          "Min Order: 200 stickers",
          "Sizes: Custom Sizes Available",
          "Material: Durable Vinyl",
          "Delivery: 6 Business Days",
        ],
        mainImage: "https://img.avery.com/image/upload/v1624662203/web/weprint/labels/weprint-seo-stickers-family",
        thumbnails: [
          "https://i.etsystatic.com/28943486/r/il/b272f6/3018188910/il_fullxfull.3018188910_cyxo.jpg",
          "https://th.bing.com/th/id/OIP.zyLYEuhu0h6V_uKV2nTHOQHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://d39eo07iavn1vt.cloudfront.net/Live/InstantPrint/Blog/Entry%20Images/CKEditorUploads/1059903d-8a54-4e2e-8407-0a7f854b156fsticker%20sizes.PNG",
        ],
        formLink: "https://forms.gle/stickers-form-link",
      },
      "danglers": {
        title: "Customizable Danglers",
        fabric: "Material: Paper or Plastic",
        description:
          "Customizable danglers are a great way to attract attention for promotions, events, or decorative purposes. Available in various sizes and materials, these danglers are lightweight, durable, and designed to leave a lasting impression.",
        features: [
          "Min Order: 50 pieces",
          "Sizes: Custom Sizes Available",
          "Material: Paper, Plastic",
          "Delivery: 4 Business Days",
        ],
        mainImage: "https://th.bing.com/th/id/OIP.3kouEjmBrN2hHiu3ple43gHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        thumbnails: [
          "https://th.bing.com/th/id/OIP.ps2u-UdDCJKd_mIUmDYo9AHaFj?w=279&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://th.bing.com/th/id/OIP.9Z9ruXLRgctjFQVf-gFsBgHaFj?w=204&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "https://printo-s3.mobimedia.ai/cloudinary/res/dxivtqnri/image/upload/Danglers/Infographic/shape-chart/1664042756.jpg?quality=70&format=webp&w=320",
        ],
        formLink: "https://forms.gle/danglers-form-link",
      },
      "id-cards": {
        title: "Customizable ID Cards",
        fabric: "Material: Plastic",
        description:
          "Personalized ID cards for schools, businesses, and events. Crafted from durable plastic, these cards can be customized with your logo, design, and necessary information. Available with additional features like lanyards or clips.",
        features: [
          "Min Order: 50 pieces",
          "Sizes: Standard ID Size",
          "Material: Durable Plastic",
          "Delivery: 5 Business Days",
        ],
        mainImage: "./images/id-cards/full-view.jpg",
        thumbnails: [
          "./images/id-cards/front-view.png",
          "./images/id-cards/back-view.png",
          "./images/id-cards/blueprint.png",
        ],
        formLink: "https://forms.gle/idcards-form-link",
      },
      "calendars": {
        title: "Customizable Calendars",
        fabric: "Material: Premium Paper",
        description:
          "Create personalized calendars for gifting, branding, or promotional purposes. Available in wall or desktop formats, these calendars are customizable with your designs, images, and branding elements.",
        features: [
          "Min Order: 50 pieces",
          "Formats: Wall, Desktop",
          "Material: Premium Paper",
          "Delivery: 6 Business Days",
        ],
        mainImage: "./images/calendars/full-view.png",
        thumbnails: [
          // "./images/calendars/front-view.png",
          // "./images/calendars/back-view.png",
          "./images/calendars/blueprint.png",
        ],
        formLink: "https://forms.gle/calendars-form-link",
      },
    };

  
  
// Function to update the product section dynamically
function updateProduct(productKey) {
  const product = products[productKey];

  if (!product) {
    console.error(`Product "${productKey}" not found.`);
    document.querySelector(".product-container").innerHTML =
      "<h1>Product not found</h1><p>Please select a valid product from the menu.</p>";
    return;
  }

  // Update main image
  const mainImage = document.getElementById("mainImage");
  mainImage.src = product.mainImage;
  mainImage.alt = product.title;

  // Update thumbnails
  const thumbnails = document.getElementById("thumbnailContainer");
  thumbnails.innerHTML = ""; // Clear previous thumbnails
  product.thumbnails.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Thumbnail";
    img.classList.add("thumbnail");
    thumbnails.appendChild(img);

    // Add event listener for thumbnail click to swap with the main image
    img.addEventListener("click", () => {
      // Swap positions
      const tempSrc = mainImage.src;
      mainImage.src = img.src;
      img.src = tempSrc;

      const tempAlt = mainImage.alt;
      mainImage.alt = img.alt;
      img.alt = tempAlt;

      // Ensure the main image's dimensions are preserved
      img.style.maxHeight = window.getComputedStyle(mainImage).maxHeight;
    });
  });

  // Update product title, fabric, and description
  document.getElementById("productTitle").textContent = product.title;
  document.getElementById("productFabric").textContent = product.fabric;
  document.getElementById("productDescription").textContent = product.description;

  // Update product features
  const featureList = document.getElementById("productFeatures");
  featureList.innerHTML = ""; // Clear previous features
  product.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });

  // Update "Customize Now" button link
  document.getElementById("customizeBtn").href = product.formLink;
}

// Event listener for dropdown product links and URL query parameter
document.addEventListener("DOMContentLoaded", () => {
  // Get query parameters from the URL
  const params = new URLSearchParams(window.location.search);
  const productKey = params.get("product");

  if (productKey) {
    updateProduct(productKey); // Update product section dynamically based on URL
  } else {
    updateProduct("t-shirts"); // Default to T-Shirts if no product specified
  }

  // Toggle dropdown visibility on button click
  const productsButton = document.getElementById("productsButton");
  const dropdownMenu = document.getElementById("productDropdownMenu");

  productsButton.addEventListener("click", () => {
    const isVisible = dropdownMenu.style.display === "block";
    dropdownMenu.style.display = isVisible ? "none" : "block";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!productsButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
  });

  // Event listener for product selection from dropdown
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      const productKey = event.target.getAttribute("href").split("=")[1];
      updateProduct(productKey); // Update product section dynamically
      dropdownMenu.style.display = "none"; // Hide dropdown
      window.history.pushState({}, "", `?product=${productKey}`); // Update URL without reload
    });
  });
});



// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.getElementById("hamburger");
//   const mobileLinks = document.getElementById("mobile-navbar-links");

//   // Toggle visibility of mobile links
//   hamburger.addEventListener("click", () => {
//     mobileLinks.classList.toggle("show");
//   });

//   // Close the menu when clicking outside
//   document.addEventListener("click", (event) => {
//     if (!hamburger.contains(event.target) && !mobileLinks.contains(event.target)) {
//       mobileLinks.classList.remove("show");
//     }
//   });
// });
