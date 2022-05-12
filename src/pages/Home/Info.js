import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div class="grid grid-cols-3 gap-3 mx-12">
            <div class="card  bg-gradient-to-r from-secondary to-primary  mx-auto">
        <div class="card-body">
            <div class="flex items-center my-auto text-white gap-x-3">
            <img width="86px" src={clock} alt="" />
            <div>
                <h2 class="text-3xl font-semibold">Opening Hours</h2>
                <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
            </div>
            <div class="card-actions justify-end">
            
        </div>
    </div>
    </div>
        <div class="card w-96 bg-accent text-primary-content mx-auto">
            <div class="card-body">
            <div class="flex items-center my-auto text-white gap-x-3">
            <img width="86px" src={marker} alt="" />
            <div>
                <h2 class="text-3xl font-semibold">Opening Hours</h2>
                <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
            </div>
            <div class="card-actions justify-end">
            
        </div>
    </div>
    </div>
            <div class="card  bg-gradient-to-r from-secondary to-primary  mx-auto">
        <div class="card-body">
        <div class="flex items-center my-auto text-white gap-x-3">
        <img width="86px" src={phone} alt="" />
        <div>
                <h2 class="text-3xl font-semibold">Opening Hours</h2>
                <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
        </div>
        <div class="card-actions justify-end">
            
        </div>
    </div>
    </div>
        </div>
    );
};

export default Info;