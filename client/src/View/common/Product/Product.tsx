import {Component} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
}


export class Product extends Component<ProductProps, ProductState> {

    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }
    render() {

        const {data}=this.props;
        console.log(data.image)
        const image = require('../../../images/product/' + data.image)
      //  const  image=require(`../../../images/product/${data.image}`);

        return (
            <>
              { <div className={'relative px-4 py-2 justify-center items-center  bg-white mr-2 mb-2 border-gray-500 border-[0.5px] '}>
                    <div>
                        <img src={image} alt=""/>
                    </div>

                    <div className={'flex'}>

                        <div>
                            <h3 className={'text-red-700 text-[#000000] text-[18px] pl-2 pr-4 hover:bg-green-200 '}>{data.name}</h3>
                        </div>

                        <div className={'bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2 '}>
                            <h3 className={'text-[15px]  justify-center pl-2 pt-0.5'}>{data.price}<small className={'text-[12px] '}>{data.currency}</small></h3>
                        </div>

                    </div>

                    <div className={'flex justify-center'}>
                        {
                            this.state.isActive ?
                                <ModifyCart data={{ product: data, isAdded: this.state.isActive }}/>
                                : <button className='w-full mt-1.5 p-[2px] font-bold bg-green-500 hover:bg-green-200'
                                          onClick={this.addToCartOnClick}>
                                    Add to Cart
                                </button>
                        }
                    </div>

                </div>}

                {/*<div id="home" className="flex flex-wrap px-3 py-3 gap-3 ml-10 justify-center items-center mx-auto ">*/}
                {/*    <div className="w-72 h-auto   mt-5 mb-5rounded overflow-hidden shadow-lg shadow-black card">*/}
                {/*        <img className="w-96" src={image}*/}
                {/*             alt="Sunset in the mountains"/>*/}
                {/*        <div className="px-6 py-4">*/}
                {/*            <div className="font-bold text-xl mb-2">{data.name}</div>*/}
                {/*            <p className="text-gray-700 text-base text-[15px]">*/}
                {/*                {data.text}*/}
                {/*            </p>*/}

                {/*            <h1 className="text-[18px] text-cyan-500 font-bold mt-5 ml-36">{data.price} <small*/}
                {/*                className="text-[15px] text-black">{data.currentPrice}</small></h1>*/}
                {/*        </div>*/}

                {/*        <div className="px-6 py-4">*/}
                {/*            {*/}
                {/*                this.state.isActive ?*/}

                {/*                    <ModifyCart data={{product:data,isAdded:this.state.isActive}}/>*/}
                {/*                    :*/}
                {/*                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"*/}
                {/*                            onClick={this.addToCartOnClick}>*/}
                {/*                        Add to Cart*/}
                {/*                    </button>*/}


                {/*            }*/}

                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}

            </>
        );

    }

    private addToCartOnClick = () => {
        this.setState({isActive:  !this.state.isActive}, ()=>{
        })
    }
}