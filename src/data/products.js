import heroBottleImg from '../assets/images/hero-bottle.png';
import pickleBowlImg from '../assets/images/pickle-bowl.png';
import prawnPickleImg from '../assets/images/pickle-prawn.png';
import mangoPickleImg from '../assets/images/pickle-mango.png';
import chickenPickleImg from '../assets/images/pickle-chicken.png';

export const PRODUCTS = [
  {
    id: 'prawn-pickle',
    name: 'Spicy Kerala Prawns Pickle',
    category: 'Non-Veg',
    subCategory: 'Seafood Special',
    price: 499,
    originalPrice: 599,
    weight: '350g',
    rating: 4.9,
    reviewsCount: 142,
    spicyLevel: 3, // 1 to 3
    isBestseller: true,
    isNew: false,
    image: prawnPickleImg,
    tagline: 'Juicy ocean prawns steeped in fiery Malabar spice oil.',
    description: 'Hand-picked fresh marine prawns slow-cooked with fresh ginger, garlic, Kashmiri red chilies, mustard seeds, and fried curry leaves. A true coastal delicacy of Kerala prepared in small artisanal batches.',
    ingredients: ['Fresh Prawns', 'Gingelly Oil', 'Garlic', 'Ginger', 'Kashmiri Chili Powder', 'Fenugreek', 'Mustard Seeds', 'Curry Leaves', 'Asafoetida', 'Salt', 'Vinegar'],
    nutrition: {
      calories: '280 kcal per 100g',
      protein: '18.5g',
      fat: '16.2g',
      carbs: '4.8g',
      shelfLife: '6 Months'
    }
  },
  {
    id: 'chicken-pickle',
    name: 'Malabar Roasted Chicken Pickle',
    category: 'Non-Veg',
    subCategory: 'Meat Special',
    price: 449,
    originalPrice: 549,
    weight: '350g',
    rating: 4.8,
    reviewsCount: 118,
    spicyLevel: 3,
    isBestseller: true,
    isNew: false,
    image: chickenPickleImg,
    tagline: 'Succulent boneless chicken chunk pickle with authentic Malabar spice roast.',
    description: 'Tender boneless chicken marinated in traditional spices, deep-fried to perfection, and simmered in an aromatic dark red chili oil infused with crushed garlic and green peppers.',
    ingredients: ['Boneless Chicken', 'Cold Pressed Sesame Oil', 'Garlic', 'Green Chilies', 'Crushed Pepper', 'Garam Masala', 'Chili Powder', 'Salt', 'Vinegar'],
    nutrition: {
      calories: '310 kcal per 100g',
      protein: '22.0g',
      fat: '18.4g',
      carbs: '3.2g',
      shelfLife: '6 Months'
    }
  },
  {
    id: 'cut-mango-pickle',
    name: 'Authentic Cut Mango Pickle',
    category: 'Veg',
    subCategory: 'Traditional',
    price: 249,
    originalPrice: 299,
    weight: '400g',
    rating: 4.9,
    reviewsCount: 230,
    spicyLevel: 2,
    isBestseller: true,
    isNew: false,
    image: mangoPickleImg,
    tagline: 'Crisp raw mango cubes bursting with fiery mustard oil and asafoetida.',
    description: 'Selected sour raw mangoes diced into crunch-worthy pieces, cured with sea salt, and tossed with stone-ground mustard, roasted fenugreek, and pure cold-pressed gingelly oil.',
    ingredients: ['Raw Mango', 'Gingelly Oil', 'Red Chili Powder', 'Mustard Powder', 'Fenugreek', 'Asafoetida', 'Sea Salt'],
    nutrition: {
      calories: '190 kcal per 100g',
      protein: '2.1g',
      fat: '12.5g',
      carbs: '14.0g',
      shelfLife: '12 Months'
    }
  },
  {
    id: 'garlic-pickle',
    name: 'Spicy Whole Garlic Pickle',
    category: 'Veg',
    subCategory: 'Health & Spice',
    price: 279,
    originalPrice: 329,
    weight: '350g',
    rating: 4.7,
    reviewsCount: 95,
    spicyLevel: 2,
    isBestseller: false,
    isNew: true,
    image: heroBottleImg,
    tagline: 'Whole peeled garlic cloves slow-marinated in fiery vinegar and chili oil.',
    description: 'Rich in immunity-boosting whole garlic cloves, braised gently and submerged in a bold, savory gravy that pairs perfectly with warm rice, parathas, and biryani.',
    ingredients: ['Peeled Garlic', 'Sesame Oil', 'Red Chili Flakes', 'Mustard', 'Curry Leaves', 'Vinegar', 'Rock Salt'],
    nutrition: {
      calories: '210 kcal per 100g',
      protein: '4.5g',
      fat: '13.0g',
      carbs: '18.2g',
      shelfLife: '12 Months'
    }
  },
  {
    id: 'king-fish-pickle',
    name: 'Kerala King Fish Pickle',
    category: 'Non-Veg',
    subCategory: 'Seafood Special',
    price: 529,
    originalPrice: 629,
    weight: '350g',
    rating: 4.9,
    reviewsCount: 88,
    spicyLevel: 3,
    isBestseller: false,
    isNew: true,
    image: pickleBowlImg,
    tagline: 'Firm king fish steaks shallow fried and seasoned in red Malabar gravy.',
    description: 'Premium Sear / King fish fillets cut into bite-sized cubes, crisp-fried and preserved in a tantalizing garlic-ginger spice blend with traditional vinegar.',
    ingredients: ['King Fish (Surmai)', 'Pure Sesame Oil', 'Ginger', 'Garlic', 'Chili Powder', 'Black Pepper', 'Salt', 'Vinegar'],
    nutrition: {
      calories: '295 kcal per 100g',
      protein: '20.2g',
      fat: '17.8g',
      carbs: '3.9g',
      shelfLife: '6 Months'
    }
  },
  {
    id: 'spicy-lime-pickle',
    name: 'Traditional Kerala Lime Pickle',
    category: 'Veg',
    subCategory: 'Traditional',
    price: 229,
    originalPrice: 269,
    weight: '400g',
    rating: 4.6,
    reviewsCount: 74,
    spicyLevel: 2,
    isBestseller: false,
    isNew: false,
    image: mangoPickleImg,
    tagline: 'Sun-cured juicy yellow limes with pungent fenugreek & red chili.',
    description: 'Fresh farm limes steamed and sun-ripened, cured until soft, then blended with aromatic spices and sesame oil for that classic grandmother taste.',
    ingredients: ['Fresh Limes', 'Gingelly Oil', 'Chili Powder', 'Fenugreek', 'Asafoetida', 'Salt'],
    nutrition: {
      calories: '165 kcal per 100g',
      protein: '1.8g',
      fat: '10.2g',
      carbs: '12.4g',
      shelfLife: '12 Months'
    }
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Anand Nair',
    location: 'Kochi, Kerala',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'The Prawn Pickle is unbelievable! Tastes exactly like my grandmother’s recipe in Kottayam. Perfect balance of spice and garlic.',
    productName: 'Spicy Kerala Prawns Pickle'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Bangalore, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'Ordering from ABC Pickles has become a monthly ritual. The Cut Mango has that authentic gingelly oil crunch without any chemical taste!',
    productName: 'Authentic Cut Mango Pickle'
  },
  {
    id: 3,
    name: 'Rahul Varma',
    location: 'Chennai, Tamil Nadu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'Malabar Chicken Pickle is a game changer for hostel students and travelers! Huge chicken pieces, zero artificial colors. Highly recommended!',
    productName: 'Malabar Roasted Chicken Pickle'
  },
  {
    id: 4,
    name: 'Dr. Smitha Mathew',
    location: 'Mumbai, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'Clean glass jar packaging, hygienic seal, and lightning-fast delivery. The Whole Garlic pickle goes so well with Curd Rice!',
    productName: 'Spicy Whole Garlic Pickle'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'FaLeaf',
    title: 'Premium Ingredients',
    description: 'Sourced directly from organic spices gardens in Wayanad and Idukki.'
  },
  {
    icon: 'FaUtensils',
    title: 'Traditional Recipe',
    description: 'Heritage Kerala family recipes passed down over three generations.'
  },
  {
    icon: 'FaBan',
    title: 'No Artificial Colors',
    description: 'Zero synthetic preservatives, MSG, or artificial food colorings.'
  },
  {
    icon: 'FaShippingFast',
    title: 'Fast Delivery',
    description: 'Pan-India express shipping in tamper-proof glass bottle packaging.'
  },
  {
    icon: 'FaHeart',
    title: 'Homemade Taste',
    description: 'Small batch artisanal cooking for that nostalgic taste of home.'
  },
  {
    icon: 'FaAward',
    title: 'Quality Guaranteed',
    description: 'FSSAI certified facility with rigorous multi-step hygiene standards.'
  }
];
