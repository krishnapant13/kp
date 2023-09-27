const projects = [
  {
    name: " Multi-Vendor E-Shop",
    title: "The Oe Store",
    description:
      "The Multi-Vendor E-Commerce Platform is a comprehensive web application designed to facilitate online shopping and sales between multiple vendors and customers. This platform allows users to browse, search for, purchase, and review products from various sellers. It includes user authentication, real-time communication using Socket.io, order tracking, online payment processing, and more.",
    Features: [
      {
        header: "User Authentication:",
        points: [
          "Users can register, log in, and manage their profiles.",
          "Secure authentication mechanisms ensure data privacy.",
        ],
      },
      {
        header: "User Profile Management:",
        points: [
          "Users can update their personal information, including name, contact details, and profile picture.",
          "Change passwords and manage notification preferences.",
        ],
      },
      {
        header: "Shopping Cart:",
        points: [
          "Users can add products to their shopping carts and view the cart contents.",
          "Edit cart items, update quantities, or remove products.",
          "Calculate the total price of items in the cart.",
        ],
      },
      {
        header: "Wishlist:",
        points: [
          "Users can add products to their wish list and add them directly to cart.",
          "Edit wish list items, update quantities, or remove products.",
        ],
      },
      {
        header: "Online Payment Processing:",
        points: [
          "Integration with a secure payment gateway for processing payments.",
          "Users can make payments using credit/debit cards, digital wallets, or other payment methods.",
        ],
      },
      {
        header: "Order Management:",
        points: [
          "Users can place orders, view order history, and track the status of their orders.",
          "Vendors can manage orders, change order status.",
        ],
      },
      {
        header: "Item Discounts:",
        points: ["Vendors can create product discount coupons."],
      },
      {
        header: "Product Reviews and Ratings:",
        points: [
          "Users can leave reviews and ratings for products they have purchased.",
          "Ratings and reviews help other users make informed buying decisions.",
        ],
      },
      {
        header: "Real-Time Chat (Socket.io):",
        points: [
          "Real-time chat functionality allows users to communicate with vendors with live active status.",
          "Instant messaging for order inquiries, support, and questions.",
        ],
      },
      {
        header: "Seller Dashboard:",
        points: [
          "Sellers have access to a dashboard to manage their products, orders, discount coupons and customer interactions.",
        ],
      },
      {
        header: "Search and Filters:",
        points: [
          "Users can search for products using keywords and select products.",
          "Advanced search capabilities for a seamless shopping experience.",
        ],
      },
      {
        header: "Responsive Design:",
        points: [
          "The platform is responsive and accessible from various devices, including desktops, tablets, and mobile phones.",
        ],
      },
    ],
    TechStack: {
      FrontEnd:
        "React.js, Redux (for state management), HTML, TailwindCss, JavaScript",
      Backend: " Node.js, Express.js, MongoDB (for data storage)",
      RealTimeCommunication: "Socket.io",
      PaymentGatewayIntegration: "Stripe or G-Pay",
      UserAuthentication: "JWT (JSON Web Tokens)",
      UIDesign:
        "Used modern design principles and frameworks like Material UI, TailwindCSS,  React icons or react_packages.",
    },
    imgUrl:
      "https://i.pinimg.com/564x/97/62/4e/97624e5f54a0ad5a2715351effc17ec0.jpg",
    duration: "3 Months",
    deployed: false,
    url: "#",
    githubFE: "https://github.com/krishnapant13/OEFE",
    githubBE: "https://github.com/krishnapant13/OEBE",
  },
  {
    name: "Weather App",
    title: "Check different weather worldwide",
    description:
      "The Multi-Vendor E-Commerce Platform is a comprehensive web application designed to facilitate online shopping and sales between multiple vendors and customers. This platform allows users to browse, search for, purchase, and review products from various sellers. It includes user authentication, real-time communication using Socket.io, order tracking, online payment processing, and more.",
    Features: [
      {
        header: "Keyword Search",
        points: [
          "Users can search city name to get the temprature in celsius.",
        ],
      },
      {
        header: "Additional checks",
        points: [
          "User gets live data of Temperature, Humidity, Visibility in kilometers and wind speed.",
        ],
      },
      {
        header: "Animations",
        points: [
          "App shows various gifs and icons according to current weather conditions of searched city.",
        ],
      },
    ],
    TechStack: {
      FrontEnd:
        "React.js, Redux (for state management), HTML, TailwindCss, JavaScript",
      API: "Weather API",
      UIDesign:
        "Used modern design principles and frameworks like Material UI, TailwindCSS,  React icons or react_packages.",
    },
    imgUrl:
      "https://i.pinimg.com/564x/2d/21/ad/2d21ad475d580b1cde1075bc43c3b9f4.jpg",
    duration: "3 Days",
    deployed: true,
    url: "https://krishnapant13.github.io/weather-app",
    githubFE: "https://github.com/krishnapant13/weather-app",
  },
];

export default projects;
