import {Component} from "react";
import {Product} from '../../common/Product/Product';
import axios from "axios";


export class Home extends Component {
    private api: any;
    constructor(props: {}| Readonly <{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`})
        this.state={
            data:[],
        }
    }

    //React Lifecycle method
    componentDidMount() {
        this.fetchData();
            /*.then(r => console.log("Data fetch completed!" + r)); */// Callback Function
    }

    //asynchronize
    /*fetchData = async () =>{
        try {

            this.api.get('/product/all').then((res: {data: any}) => {
                const jsonData = res.data;
                console.log(jsonData)
                this.setState({data:jsonData});
            }).catch((error: any) => {
                console.error("Axios Error: ", error)
            });


        }catch (error) {
            console.log("Error fetching Data")
        }

    }*/

    fetchData= async ()=>{
        try {
            this.api.get('/products/all').then((res:{data:any}) =>{
                const jsonData=res.data;
                this.setState({data:jsonData});
            }).catch((error:any)=>{
                console.log("Axios Error");
            })

        }catch (error){
            console.log("Data Not Found")
        }
    }



    render() {

        // @ts-ignore
        const {data}=this.state;
        return (
            <>
                <div className={'flex'}>
                    <div className={'flex flex-wrap justify-center items-center mx-auto mt-5 mb-5'}>

                        {
                           data.map((product:any)=>( //loop array
                               <Product key={product.id} data={product}/>
                           ) )
                        }
                    </div>
                </div>
            </>
        );
    }
}