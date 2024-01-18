import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <>
                {/*<h1 className={'text-center text-3xl text-[#0E8388] '}>This is a About Component</h1>*/}
                <div className={' flex '}>
                    <div className={'h-auto pt-5 pl-10 pr-10 mx-auto'}>
                        <h1 className={'mb-2 pd-8px text-3xl text-green-900 underline decoration-2'}> About Us</h1>
                        <p className={'pb-3 text-9px'}> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Deleniti ea earum enim ex excepturi explicabo laborum libero optio repudiandae tenetur.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A cumque delectus, ea expedita magnam nisi possimus quaerat quibusdam.
                            Facere, molestias.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ad animi atque commodi, consectetur corporis cumque dolores doloribus ea eius excepturi, exercitationem explicabo hic illo illum labore magni mollitia non officiis provident quae quam quia quisquam reprehenderit rerum sapiente sit,
                            vel velit vero voluptatem voluptatibus?
                            Alias aspernatur assumenda autem consectetur consequuntur eaque eius eligendi fuga, fugiat iste iure minima nesciunt officia quae quam qui quia suscipit ut.
                            Ad, asperiores beatae blanditiis excepturi id libero molestias nesciunt, nobis placeat quaerat recusandae sapiente, voluptas.
                            Aliquam amet aperiam consectetur distinctio illum iste, iure sequi.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab atque beatae, corporis dicta doloremque earum fugiat hic magnam nam, nisi nobis non quam qui repellendus rerum sequi sit tempore, vel.80

                        </p>
                    </div>
                </div>
            </>
        );
    }
}