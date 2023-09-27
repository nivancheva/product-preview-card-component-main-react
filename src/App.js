import './App.css';

function App() {
  return (
    <main>
      <article className='product'>
        <picture className='product_img'>
          <source srcset="images/image-product-desktop.jpg" media="(min-width: 600px)" />
          <img src="images/image-product-mobile.jpg"/>
        </picture>
        <div className='product_content'>
          <p className='product_category'>Perfume</p>
          <h1 className='product_title'>Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className='flex-group'>
            <p class="product_price">$149.99</p>
            <p class="product_original-price"><s>$169.99</s></p>
          </div>
          <button className='btn'>Add to Cart</button>
        </div>
      </article>
    </main>
  );
}

export default App;
