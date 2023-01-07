const dotenv = require("dotenv");
dotenv.config({path:".env"})
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = 5050;

// Login curd operation
const{userRoutes} = require('./Routes/admin/Login/login_routes');
app.use('/', userRoutes);

// Admin all crud operation

const {offer_routes} =require("./Routes/admin/offer/offer.routes");
const {PC_routes} = require("./Routes/admin/product.category/product.category");
const {PSC_routes} = require("./Routes/admin/product.subcategory/product.subcategory");
const {ShopReg_routes} = require("./Routes/admin/shop.registration/shop.registration");


app.use("/offer", offer_routes);
app.use("/product_category", PC_routes);
app.use("/product_subcategory", PSC_routes);
app.use("/shop_registration", ShopReg_routes)


// Customer all curd operation 

const {AddToList_routes} = require("./Routes/Customer/Addtowishlist/addtowishlist.routes");
const {cart_routes} =require("./Routes/Customer/Cart/cart.routs");
const {CustomerReg_routes} = require("./Routes/Customer/customerRegistration/customerRegistration.routes");
const {makepayment_routes} = require("./Routes/Customer/makepayment/makepayment.routes");
const {Review_routes} = require("./Routes/Customer/Review/review.routes");

app.use("/Add_to_list" ,AddToList_routes);
app.use("/cart", cart_routes);
app.use("/customer_registration", CustomerReg_routes);
app.use("/make_payment", makepayment_routes);
app.use("/Review", Review_routes);

// shipping curd operation

const{Ship_routes}=require('./Routes/shipping/shipping.routes');
app.use('/shipping',Ship_routes);

// shop all crud operation

const {product_routes} = require("./Routes/shops/product.inventory/product.inventory.routs");
const {productSpecification_routes} = require("./Routes/shops/product.specification/product.specification.routs");

app.use("/product_Inventory", product_routes);
app.use("/product_specification", productSpecification_routes);

// show product_specification for every product Id
const {productspecification1_routes} = require("./Routes/shops/product.specification/productspecification.routs1");

app.use("/productspecification", productspecification1_routes) 



// user management crud operation
const{user_router} = require("./Routes/admin/user/user.routes");

app.use("/user", user_router);

// Employee crud operation 
const{employee_route} = require("./Routes/shops/Employee/Employee");
app.use("/employee", employee_route);

// Banking crud operation

const {banking_route} = require("./Routes/shops/Banking/Baniking");
app.use("/banking", banking_route);


app.listen(port, (err) => {
  if(err){
    console.log(err)
  }else{
    console.log(`server is connected port http://localhost:${port}`);
  }
  })