import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';

export default function Menu() {
    const handleOrder = (id) => {
        console.log(id, 'id is clicked...');
        Swal.fire({
            title: "Do you want to order this?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes order it",
            denyButtonText: `Cancel`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Ordered!", "Your order has been processing", "success");
            } else if (result.isDenied) {
              Swal.fire("Ordered Cancel", "", "info");
            }
          });
    }
  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>This Week Specials!!!</h2>
            <button>Order Menu</button>
        </div>

        <div className='cards'>
            {
                recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                    <img src={recipe.image} alt='' />
                    <div className='menu-content'>
                        <div className='heading'>
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}
