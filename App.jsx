import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ColoringBooks from './pages/ColoringBooks';
import Suppliers from './pages/Suppliers';
// CityMap component removed for l00ty ecommerce focus
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import FeaturedProductsCarousel from './components/FeaturedProductsCarousel';
import NewsletterCTA from './components/NewsletterCTA';
import Testimonials from './components/Testimonials';
import ProductFilters from './components/ProductFilters';

function ProductCard({ title, description, price, image, imageAlt, category }) {
	const [filter, setFilter] = useState('all');
	const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean)));

	const visibleProducts = products.filter(p => {
		if(filter === 'all') return true;
		return p.category === filter;
	});

	return (
		<div className="card card-pink mb-3 text-center" style={{ width: 260 }}>
			<div style={{ width: 100, height: 100, margin: '1rem auto', background: '#f8bbd0', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
				<img src={image} alt={imageAlt || title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
			</div>
			<div className="card-body">
				<h5 className="card-title" style={{ color: 'var(--primary)', fontWeight: 700 }}>{title} {category && <span className="badge bg-secondary ms-2" style={{ background: 'var(--primary)' }}>{category}</span>}</h5>
				<p className="card-text" style={{ color: 'var(--secondary)' }}>{description}</p>
				<div className="d-flex justify-content-between align-items-center mt-3">
					<strong style={{ color: '#ad1457' }}>{price}</strong>
					<button className="btn btn-sm btn-pink">Buy</button>
				</div>
			</div>
		</div>
	);
}

function About() {
	return (
		<section style={{ background: '#fff0fa', borderRadius: '1rem', padding: '2rem', margin: '2rem 0', boxShadow: '0 2px 12px rgba(200, 100, 180, 0.08)' }}>
			<h2 style={{ color: '#c2185b', fontWeight: 700 }}>About Bandella Looty</h2>
			<p style={{ color: '#7b1fa2', fontSize: '1.1rem', marginBottom: '1rem' }}>
				Welcome to Bandella Looty! This is a demo homepage for a dropshipping and content creation site. All products and images are placeholders. Explore the sections below for examples.
			</p>
			<ul style={{ color: '#ad1457', fontSize: '1rem', marginLeft: '1.5rem' }}>
				<li>Example products</li>
				<li>Coloring books</li>
				<li>Creator content</li>
				<li>Modern branding</li>
			</ul>
		</section>
	);
}

export default function App() {
	const [page, setPage] = useState('home');
	const backgroundUrl = '/background.jpg';
	const products = [
						// Example products
						{
							title: 'Example Product 1',
							description: 'This is a placeholder product description.',
							price: '$19.99',
							image: 'https://images.unsplash.com/photo-1516594918316-4f1c8a0b6e23?q=80&w=400&auto=format&fit=crop',
							imageAlt: 'Example product 1 on soft pink background'
						},
						{
							title: 'Example Product 2',
							description: 'Another example product for display.',
							price: '$24.99',
							image: 'https://images.unsplash.com/photo-1520975910241-5f63b8b6d7b8?q=80&w=400&auto=format&fit=crop',
							imageAlt: 'Example product 2 styled product shot'
						},
						{
							title: 'Example Product 3',
							description: 'Sample product with placeholder image.',
							price: '$14.99',
							image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop',
							imageAlt: 'Stylish sample product on a white backdrop'
						},
						// Full-length, funny & cool coloring books for adult women
						{
							title: 'Velvet Vixen Lace Set',
							description: 'Luxurious velvet and lace bralette + panty set — classic romantic vibes with a sultry edge. A playful twist with comic-strip-inspired trims for everyday confidence.',
							price: '$49.99',
							category: 'lingerie',
							image: 'https://images.unsplash.com/photo-1520975910241-5f63b8b6d7b8?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Velvet vixen lace bralette set on display'
						},
						{
							title: 'Silk Slip Nightdress',
							description: 'Silky, flowing slip for bedtime lounging and romantic evenings. Features a whimsical, comic-strip-inspired trim to make nights fun and bold.',
							price: '$39.99',
							category: 'nightwear',
							image: 'https://images.unsplash.com/photo-1503342452485-86f7b8a9f3a7?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Silk slip nightdress hanging by a window'
						},
						{
							title: 'Classic Lace Corset',
							description: 'Structured corset with delicate lace for timeless silhouettes and dramatic curves.',
							price: '$79.99',
							category: 'lingerie',
							image: 'https://images.unsplash.com/photo-1520975910241-5f63b8b6d7b8?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Classic lace corset on mannequin'
						},
						{
							title: 'Sheer Stockings Set',
							description: 'Four-pack sheer stockings in nude and black — a must-have wardrobe staple.',
							price: '$19.99',
							category: 'accessories',
							image: 'https://images.unsplash.com/photo-1520975910241-5f63b8b6d7b8?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Sheer stockings set in nude and black'
						},
						{
							title: 'Playful Ruffle Babydoll',
							description: 'Lightweight babydoll with playful ruffles — sweet, flirty, and fun.',
							price: '$29.99',
							category: 'lingerie',
							image: 'https://images.unsplash.com/photo-1516594918316-4f1c8a0b6e23?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Playful ruffle babydoll in pastel colors'
						},
						{
							title: 'Satin Robe with Pockets',
							description: 'Comfortable satin robe that feels like a hug — ideal for mornings and relaxed evenings.',
							price: '$34.99',
							category: 'loungewear',
							image: 'https://images.unsplash.com/photo-1503342452485-86f7b8a9f3a7?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Satin robe with pockets displayed'
						},
						{
							title: 'Boudoir Teddy',
							description: 'One-piece teddy with a daring neckline for special nights.',
							price: '$54.99',
							category: 'lingerie',
							image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Boudoir teddy with lace detail'
						},
						{
							title: 'Signature Bodysuit',
							description: 'Seamless bodysuit with supportive structure and modern design.',
							price: '$44.99',
							category: 'bodysuit',
							image: 'https://images.unsplash.com/photo-1520975910241-5f63b8b6d7b8?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Signature seamless bodysuit modern design'
						},
						{
							title: 'Poolside Swim Cover-Up',
							description: 'Chic swim cover-up that transitions to a brunch outfit with ease.',
							price: '$34.99',
							category: 'swimwear',
							image: 'https://images.unsplash.com/photo-1503342452485-86f7b8a9f3a7?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Poolside swim cover-up casual chic'
						},
						{
							title: 'Luxe Bralette Trio',
							description: 'Bralette bundle with three colors for everyday confidence and comfort.',
							price: '$59.99',
							category: 'lingerie',
							image: 'https://images.unsplash.com/photo-1516594918316-4f1c8a0b6e23?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Luxe bralette trio neatly folded'
						},
						{
							title: 'Courtsey Satin Camisole',
							description: 'Simple and elegant camisole for layering or sleep.',
							price: '$24.99',
							category: 'casual',
							image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
							imageAlt: 'Courtsey satin camisole closeup'
						},
						{
							title: 'Super Silly Selfies',
							description: `A 24-page coloring book packed with quirky girls making the silliest faces!\n\nJokes inside:\n- Why did the girl bring a ladder to the bar? To reach the high spirits!\n- What do you call a selfie with a cat? A purr-trait!\n- Why did she color outside the lines? Because she’s a rebel with a cause!`,
							pages: 24,
							mood: 'playful',
							jokes: [
								'Why did the girl bring a ladder to the bar? To reach the high spirits!',
								'What do you call a selfie with a cat? A purr-trait!',
								'Why did she color outside the lines? Because she’s a rebel with a cause!'
							],
							samplePages: [
								'Page 1: Girl with silly sunglasses',
								'Page 7: Over-exaggerated pout with sparkling stars',
								'Page 18: Puppy photobomb selfie' 
							],
							price: '$12.99',
							image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=FunnyFace1'
						},
						{
							title: 'Cool Girls on Wheels',
							description: `20 pages of skateboards, rollerblades, and wild hair!\n\nJokes inside:\n- What do you call a girl who skates on ice cream? A sundae driver!\n- Why did the rollerblader bring a pencil? To draw attention!\n- How do you know she’s cool? She’s got wheels and deals!`,
							pages: 20,
							mood: 'rebellious',
							jokes: [
								'What do you call a girl who skates on ice cream? A sundae driver!',
								'Why did the rollerblader bring a pencil? To draw attention!',
								'How do you know she’s cool? She’s got wheels and deals!'
							],
							samplePages: [
								'Page 2: Skater girl mid-grind',
								'Page 10: Roller derby poster',
								'Page 18: Neon-lit night skate' 
							],
							price: '$12.99',
							image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=CoolSkaterGirl'
						},
						{
							title: 'Joke Queens',
							description: `A 22-page laugh-fest with the queens of comedy!\n\nJokes inside:\n- Why did the girl sit on the clock? She wanted to be on time!\n- What’s a queen’s favorite color? Royal blue!\n- Why did she bring a ladder to the comedy club? For the stand-up!`,
							pages: 22,
							mood: 'comedian',
							jokes: [
								'Why did the girl sit on the clock? She wanted to be on time!',
								'What’s a queen’s favorite color? Royal blue!',
								'Why did she bring a ladder to the comedy club? For the stand-up!'
							],
							samplePages: [
								'Page 3: Microphone and glitter',
								'Page 12: Crowd laughing with speech balloons',
								'Page 20: Queen on stage with oversized crown' 
							],
							price: '$12.99',
							image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=JokeQueen'
						},
						{
							title: 'Unicorn Hair, Don’t Care',
							description: `A magical 25-page adventure of girls with wild, rainbow hair and their unicorn pals.\n\nJokes inside:\n- What do you call a girl with a unicorn? Lucky!\n- Why did the unicorn cross the road? To show off her highlights!\n- What’s a unicorn’s favorite party game? Pin the tail on the human!`,
							pages: 25,
							mood: 'magical',
							jokes: [
								'What do you call a girl with a unicorn? Lucky!',
								'Why did the unicorn cross the road? To show off her highlights!',
								'What’s a unicorn’s favorite party game? Pin the tail on the human!'
							],
							samplePages: [
								'Page 2: Girl with unicorn highlights',
								'Page 10: Hair salon for unicorn manes',
								'Page 24: Rainbow finale with confetti'
							],
							price: '$12.99',
							image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=UnicornGirl'
						},
						{
							title: 'Dance Party Divas',
							description: `A 21-page coloring book of groovy girls with the best dance moves.\n\nJokes inside:\n- Why did the girl dance with a pencil? To draw attention!\n- What’s a diva’s favorite exercise? The boogie-down!\n- Why did she bring a broom to the party? To sweep the dance floor!`,
							pages: 21,
							mood: 'groovy',
							jokes: [
								'Why did the girl dance with a pencil? To draw attention!',
								'What’s a diva’s favorite exercise? The boogie-down!',
								'Why did she bring a broom to the party? To sweep the dance floor!'
							],
							samplePages: [
								'Page 1: Disco lights and glitter',
								'Page 11: The solo with confetti cannon',
								'Page 20: The finale – group pose'
							],
							price: '$12.99',
							image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=DanceParty'
						},
						{
							title: 'Space Explorers',
							description: `A cosmic 23-page journey with funny girls in space suits, exploring new worlds.\n\nJokes inside:\n- Why did the girl go to space? To see the stars up close!\n- What do you call a space explorer with style? A starlet!\n- Why did she pack a crayon for Mars? To draw a new world!`,
							pages: 23,
							mood: 'adventurous',
							jokes: [
								'Why did the girl go to space? To see the stars up close!',
								'What do you call a space explorer with style? A starlet!',
								'Why did she pack a crayon for Mars? To draw a new world!'
							],
							samplePages: [
								'Page 1: Launch pad glam',
								'Page 9: Zero-gravity hair-day',
								'Page 22: Aliens joining for a dance'
							],
							price: '$12.99',
							image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=SpaceGirl'
						},
						{
							title: 'Coloring Book Example',
							description: 'Placeholder coloring book product.',
							price: '$9.99',
							image: 'https://via.placeholder.com/120?text=Coloring+Book'
						}
					];

					return (
						<Router>
							<div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
								{/* Background image layer */}
								<div style={{
									position: 'fixed',
									top: 0,
									left: 0,
									width: '100vw',
									height: '100vh',
									zIndex: 0,
									backgroundImage: `url(${backgroundUrl})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									opacity: 1
								}} />
								{/* Content layer */}
								<div style={{ position: 'relative', zIndex: 1 }}>
									<Navbar />
									<main style={{ padding: '2rem' }}>
										<Routes>
											<Route path="/" element={
												<>
													{/* Hero/Banner Section */}
													<HeroBanner />
																										{/* Featured products carousel */}
													<FeaturedProductsCarousel items={products.slice(0,6)} />

													{/* Newsletter CTA */}
													<NewsletterCTA />
																										{/* Testimonials */}
																										<Testimonials />
													<div className="container mt-4">
																											<h2 className="mb-3" style={{ color: 'var(--primary)' }}>Curated Picks</h2>
																											<ProductFilters categories={categories} active={filter} onChange={setFilter} />
																											<div className="d-flex flex-wrap gap-3">
																												{visibleProducts.filter(p => !p.title.toLowerCase().includes('coloring book')).map((p, i) => (
																														<ProductCard key={i} {...p} />
																												))}
																											</div>
													</div>
													<section>
														<h2>Creator Content</h2>
														<p>Exclusive creator content, paywall/subscription features, and profiles will appear here as examples.</p>
													</section>
												</>
											} />
											<Route path="/suppliers" element={<Suppliers />} />
											<Route path="/about" element={<About />} />
											<Route path="/coloring-books" element={<ColoringBooks books={products.filter(p => p.description && p.description.includes('page'))} />} />
											{/* Placeholder for Products page */}
											<Route path="/products" element={<div><h2>Products</h2><p>Product catalogue coming soon.</p></div>} />
										</Routes>
									</main>
									<footer className="footer-dark py-3 mt-4">
										<div className="container text-center">
											<div className="mb-2">
												<a href="#" className="text-decoration-none text-pink me-3"><i className="bi bi-instagram"></i> Instagram</a>
												<a href="#" className="text-decoration-none text-pink me-3"><i className="bi bi-music-note-beamed"></i> TikTok</a>
												<a href="#" className="text-decoration-none text-pink"><i className="bi bi-envelope"></i> Contact</a>
											</div>
											<div style={{ color: '#fff', opacity: 0.85 }}>
												&copy; {new Date().getFullYear()} Bandella Looty Demo. All rights reserved.
											</div>
										</div>
									</footer>
								</div>
							</div>
						</Router>
					);
				}