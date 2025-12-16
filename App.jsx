import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ColoringBooks from './ColoringBooks';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import FeaturedProductsCarousel from './FeaturedProductsCarousel';
import NewsletterCTA from './NewsletterCTA';
import Testimonials from './Testimonials';
import Products from './Products';
import Cart from './Cart';
import products from './productsData';
import Clothing from './Clothing';
import Checkout from './Checkout';
import Admin from './Admin';
import { useAuth } from './AuthContext';
import Login from './Login';

function About(){
	return (
		<section style={{ background: '#fff0fa', borderRadius: '1rem', padding: '2rem', margin: '2rem 0', boxShadow: '0 2px 12px rgba(200, 100, 180, 0.08)' }}>
			<h2 style={{ color: '#c2185b', fontWeight: 700 }}>About Bandella Looty</h2>
			<p style={{ color: '#7b1fa2', fontSize: '1.1rem', marginBottom: '1rem' }}>
				Welcome to Bandella Looty! This is a demo homepage for a dropshipping and content creation site. All products and images are placeholders. Explore the sections below for examples.
			</p>
		</section>
	);
}

export default function App(){
	const backgroundUrl = '/background.jpg';
	const { user } = useAuth();

	if (!user) {
		return <Login onLoginSuccess={() => window.location.reload()} />;
	}

	return (
		<Router>
			<div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
				<div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 1 }} />
				<div style={{ position: 'relative', zIndex: 1 }}>
					<Navbar />
					<main style={{ padding: '2rem' }}>
						<Routes>
							<Route path="/" element={
								<>
									<HeroBanner />
									<FeaturedProductsCarousel items={products.slice(0, 6)} />
									<NewsletterCTA />
									<Testimonials />
								</>
							} />
							<Route path="/about" element={<About />} />
							<Route path="/coloring-books" element={<ColoringBooks books={products.filter(p => p.pages)} />} />
							<Route path="/products" element={<Products products={products} />} />
							<Route path="/clothing" element={<Clothing />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route path="/admin" element={<Admin />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/order-success" element={<div className="container"><h2>Thanks — order placed</h2><p>Your order has been recorded.</p></div>} />
						</Routes>
					</main>
					<footer className="footer-dark py-3 mt-4">
						<div className="container text-center">
							<div className="mb-2">
								<a href="#" className="text-decoration-none text-pink me-3"><i className="bi bi-instagram"></i> Instagram</a>
								<a href="#" className="text-decoration-none text-pink me-3"><i className="bi bi-music-note-beamed"></i> TikTok</a>
								<a href="#" className="text-decoration-none text-pink"><i className="bi bi-envelope"></i> Contact</a>
							</div>
							<div style={{ color: '#fff', opacity: 0.85 }}>&copy; {new Date().getFullYear()} Bandella Looty Demo. All rights reserved.</div>
						</div>
					</footer>
				</div>
			</div>
		</Router>
	);
}
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
											{/* Product and category routes */}
											<Route path="/products" element={<Products products={products} />} />
											<Route path="/clothing" element={<Clothing />} />
											<Route path="/events" element={<Events />} />
											<Route path="/posters" element={<Posters />} />
											<Route path="/images" element={<Images />} />
											<Route path="/print-on-demand" element={<PrintOnDemand />} />
											<Route path="/shipping" element={<Shipping />} />
											<Route path="/checkout" element={<Checkout />} />
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