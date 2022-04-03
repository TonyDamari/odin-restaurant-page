export const menuPage = () =>{
    return `
    <header>
        <h1>Menu</h1>
    </header>

    <nav class="side-bar">
        <ul>
            <li><a href="#" id="home" class="link">Home</a></li>
            <li><a href="#" id="menu" class="link">Menu</a></li>
            <li><a href="#" id="contact" class="link">Contact</a></li>
        </ul>
    </nav>
    <div class="menu-content">
        <div class="food-menu">
            <div class="breakfast food-img">
                <h2>Breakfast</h2>
            </div>
            <div class="food-text">
                <p class="menu-item">Bacon and Egg.......... <span class="price">R49.90</span></p>
                <p class="menu-item">Omlette.......... <span class="price">R49.90</span></p>
                <p class="menu-item">Pancakes.......... <span class="price">R49.90</span></p>
            </div>
        </div>
        <div class="food-menu">
            <div class="sandwich food-img">
                <h2>Sandwich</h2>
            </div>
            <div class="food-text">
                <p class="menu-item">Sweet Chilli Chicken..........<span class="price">R49.90</span></p>
                <p class="menu-item">Peri Peri Chicken..........<span class="price">R49.90</span></p>
                <p class="menu-item">Chicken Mayo..........<span class="price">R49.90</span></p>
                <p class="menu-item">Roasted Chicken..........<span class="price">R49.90</span></p>
                <p class="menu-item">Steak & Cheese..........<span class="price">R49.90</span></p>
                <p class="menu-item">Roast Beef..........<span class="price">R49.90</span></p>
                <p class="menu-item">Tuna..........<span class="price">R49.90</span></p>
            </div>
        </div>
        <div class="food-menu">
            <div class="vegetarian food-img">
                <h2>Vegetarian</h2>
            </div>
            <div class="food-text">
                <p class="menu-item">Veg Sandwich..........<span class="price">R49.90</span></p>
                <p class="menu-item">Veg Sandwich with Cheese..........<span class="price">R49.90</span></p>
            </div>
        </div>
        <div class="food-menu">
            <div class="beverage food-img">
                    <h2>Beverage</h2>
            </div>
            <div class="food-text">
                <p class="menu-item">Fresh Juice...........<span class="price"> R17.00</span></p>
                <p class="menu-item">Coffee...........<span class="price"> R17.00</span></p>
                <p class="menu-item">Tea...........<span class="price"> R17.00</span></p>
                <p class="menu-item">Soft Drink...........<span class="price"> R17.00</span></p>
            </div>
        </div>
    </div>
    `
}