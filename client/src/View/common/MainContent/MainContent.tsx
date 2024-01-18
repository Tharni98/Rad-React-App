import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home";
import {About} from "../../pages/about/About";
import {Contact} from "../../pages/contact/Contact";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart";
import {ModifyCart} from "../ModifyCart/ModifyCart";

export class MainContent extends Component {
    render() {
        return (
            <>
            <div className={" mx-auto "}>
                {/*<h1 className={"text-center text-3xl text-center text-black"}>This is Main Content</h1>*/}

                {/*<div className={"h-60 w-20 bg-yellow-600 text-center p-5 text-1xl text-black rotate-12 shadow-gray-900 shadow-xl hover:shadow-red-600 !cursor-pointer min-h-screen max-h-40px mx-auto"}> Height  &  Width  </div>*/}
                <Routes>
                    <Route path='/'  Component={Home}></Route>
                    <Route path='/about' Component={About}></Route>
                    <Route path='/contact' Component={Contact}></Route>
                    <Route path="/shopping-cart"
                           element={<ShoppingCart
                               itemsList={ModifyCart.itemsList}/>
                           }>
                    </Route>
                </Routes>
            </div>
            </>
        );
    }
}