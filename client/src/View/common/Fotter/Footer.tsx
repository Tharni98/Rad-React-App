import {Component} from "react";
import logo from '../../../images/img_1.png'
export class Footer extends Component {
    render() {
        return (
            <>
                <div className={"p-2 bg-[#000000] flex justify-center text"}> {/* Apply to Opacity*/}
                    <p className={"text-[11px] text-[#C1F2B0] m-1 pt-0.5"}>Copyright @ 2023</p>
                    <h1 className={"text-1xl text-center text-[#FFFFFF] pl-2 " }> This is Footer </h1>
                    <img className={"h-7 w-7 m-0.2 pt-0.1  "} src={logo} alt={''}></img>
                </div>
            </>
        );
    }
}

// #C1F2B0