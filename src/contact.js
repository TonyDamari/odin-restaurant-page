export const contactPage = () =>{
    return `
    <div id="content">
        <header>
            <h1>Contact Us</h1>
        </header>

    <nav class="side-bar">
        <ul>
            <li><a href="#" id="home" class="link">Home</a></li>
            <li><a href="#" id="menu" class="link">Menu</a></li>
            <li><a href="#" id="contact" class="link">Contact</a></li>
        </ul>
    </nav>
        <div class="contact-content">
            <p><i class="fa-solid fa-phone"></i> 011 123 4567</p>
            <p><i class="fa-solid fa-location-pin"></i> 3 Main Road Johannesburg </p>
            <p><i class="fa-solid fa-at"></i> sandwichsanctuary@conceptuallife.co.za</p>
        </div>
        <img src="../src/assets/sandwich-svgrepo-com.svg" alt="" class="sandwich-icon">
    </div>
    `
}