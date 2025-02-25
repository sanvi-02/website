import React from 'react';

const Testimonials = () => {
    return (
       <section className="testimonials">
    <h2>TESTIMONIALS</h2>
    <p>What our Customers say About Us</p>
    <div className="testimonial-container">
        <div className="testimonial-box"> 
            <div className="stars">★★★★★</div>
            <p>“Many thanks for the great COLORS! Great service guys & wish you all the best.”</p>
            <div className="name">Vishal</div>
        </div>
        
        <div className="testimonial-box">
            <div className="stars">★★★★☆</div>
            <p>“The bulk colors worked perfectly. We loved Tota color and the snow spray a lot!”</p>
            <div className="name">Manjeet</div>
        </div>
        
        <div className="testimonial-box">
            <div className="stars">★★★★★</div>
            <p>“The Color Run was a huge success. No troubles cleaning. Next year again!”</p>
            <div className="name">Rajesh</div>
        </div>
    </div>
</section>

    );
};

export default Testimonials;
