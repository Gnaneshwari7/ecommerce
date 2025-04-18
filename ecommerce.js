



          const products = [
               { id: 1, name: "Wireless Headphones", price: 49.99, image: "https://th.bing.com/th/id/R.4598d1bda3bd21f0c0c290f6d08edee7?rik=CLcM1sylVTpOlg&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fbeats_by_dr_dre_900_00108_01_studio_wireless_headphones_white_1016366.jpg&ehk=%2fBwHdKJ0eGmmpzE7oTrCNsim037FuKZAmyeWVDddWhg%3d&risl=&pid=ImgRaw&r=0" },
               { id: 2, name: "Smartwatch", price: 89.99, image: "https://th.bing.com/th/id/R.e397f788b2d3bfa17ba9a679e5dd10a7?rik=iwhniOaXIIhvww&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fapple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg&ehk=eOf8xtWwoF1fgsEnYQ7Mtu8zDfvnfn4AR8bDjh%2bevBs%3d&risl=&pid=ImgRaw&r=0" },
               { id: 3, name: "Gaming Mouse", price: 29.99, image: "https://alexnld.com/wp-content/uploads/2020/12/17a23ebd-e356-40a2-a4c4-ad7663782712.jpg" },
               { id: 4, name: "Bluetooth Speaker", price: 39.99, image: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/81g26BxrTAL.-AC-SL1500-.jpg" },
               { id: 5, name: "Laptop Stand", price: 25.99, image: "https://www.ikea.com/in/en/images/products/dubbla-laptop-stand-white__1342777_pe949115_s5.jpg?f=xl" },
               { id: 6, name: "USB-C Hub", price: 19.99, image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F2662603-01" },
               { id: 7, name: "Webcam HD", price: 59.99, image: "https://m.media-amazon.com/images/I/71c6VcE1DbL._AC_SL1500_.jpg"},
               { id: 8, name: "Portable SSD", price: 99.99, image: "https://asset.conrad.com/media10/isa/160267/c1/-/en/002376133PI03/image.jpg" }
          ];

          const cart = [];

          function renderProducts() {
               products.forEach(product => {
                    $('#product-list').append(`
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card product-card h-100">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-success mb-3">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary mt-auto add-to-cart" data-id="${product.id}">Add to Cart</button>
              </div>
            </div>
          </div>
        `);
               });
          }

          function updateCart() {
               $('#cart-items').empty();
               let total = 0;
               cart.forEach(item => {
                    total += item.price * item.quantity;
                    $('#cart-items').append(
                         `<div class="cart-item">${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</div>`
                    );
               });
               $('#cart-total').text(total.toFixed(2));
          }

          $(document).ready(function () {
               renderProducts();

               $('#product-list').on('click', '.add-to-cart', function () {
                    const productId = $(this).data('id');
                    const product = products.find(p => p.id === productId);
                    const existing = cart.find(item => item.id === productId);

                    if (existing) {
                         existing.quantity++;
                    } else {
                         cart.push({ ...product, quantity: 1 });
                    }

                    updateCart();
               });
          });