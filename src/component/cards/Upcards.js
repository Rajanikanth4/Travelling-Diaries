import React from 'react'

function Upcards() {
    return (
    <div class="conatiner">
            <center>
                <h1>About Travel</h1>
                </center>
     <div class='row'>         
     <div class='col-md-3' >
                        <div class="card">
                            <img src="image/price.jpg"  height='150'  class="card-img-top" alt="price" />
                            <div class="card-body">
                                <h5 class="card-title">Best Price</h5>
                                <p class="card-text">Your savings are here</p>
                            </div>
                         </div>
                </div>
                     <div class='col-md-3'>
                           <div class="card">
                            <img src="image/tands.jpg"  height='150' class="card-img-top" alt="trust and safety" />
                            <div class="card-body">
                                <h5 class="card-title">Trust and safety</h5>
                                <p class="card-text">Your trust our business</p>
                            </div>
                          </div>
                          </div>
                          <div class='col-md-3'>
                            <div class="card">
                            <img src="image/travelinsurance.jpg"  height='150' class="card-img-top" alt="insurance" />
                            <div class="card-body">
                                <h5 class="card-title">Travel insurance</h5>
                                <p class="card-text">Gurantee</p>
                            </div>
                             </div>
                             </div>
                             <div class='col-md-3'>
                           <div class="card" >
                            <img src="image/bta.jpg"  height='150' class="card-img-top" alt="best ravel" />
                            <div class="card-body">
                                <h5 class="card-title">Best travel agent</h5>
                                <p class="card-text">Travel Agent</p>
                            </div>
                            </div>
                  </div>
        </div>
    </div>            
    )
}

export default Upcards
