import React from 'react';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import './Profile.css';
function Profile() {

  function setVisibility() {
    
  }
  return (
    <>
      <Navbar />
      <div class="main-content">
        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
          <span class="mask bg-gradient-default opacity-8"></span>
          <div class="container-fluid d-flex align-items-center">
            <div class="row">
              <div class="col-lg-7 col-md-10">
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid mt--7">
          <div class="userProfile">
            <div class="row">
              <div class="col-xl-10 mb-5 mb-xl-0">
                <div class="card card-profile shadow">
                  <div class="row justify-content-center">
                    <div class="col-lg-3 order-lg-2">
                      <div class="card-profile-image">
                        <a href="#">
                          <img src="images/profile.png" class="rounded-circle" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="card-body pt-0 pt-md-4">
                    <div class="text-center">
                      <h3>
                        Tandeep Pujari
                        <span class="font-weight-light age" >, 30 </span>
                        <img src="images/edit.png" class="edit" onClick={setVisibility} />

                      </h3>
                      <div class="h5 font-weight-300">
                        <i class="ni location_pin mr-2"></i>+91-9756506071
                      </div>
                      <div class="h5 mt-4">
                        <i class="ni business_briefcase-24 mr-2"></i>Chiliyanaula, Ranikhet - 263645
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row user-information">
              <div class="col-xl-10 mb-5 mb-xl-0 userAccount">
                <div class="card bg-secondary shadow">
                  <div class="card-body">
                    <form>
                      <h6 class="heading-small text-muted mb-4">User information</h6>
                      <div class="pl-lg-4">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-username">Username</label>
                              <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value="tandeeppujari" />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label class="form-control-label" for="input-email">Email address</label>
                              <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="tandeeppujari@example.com" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-first-name">First name</label>
                              <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="First name" value="Tandeep" />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-last-name">Last name</label>
                              <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Last name" value="Pujari" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr class="my-4" />
                      <h6 class="heading-small text-muted mb-4">Contact information</h6>
                      <div class="pl-lg-4">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-address">Address</label>
                              <input id="input-address" class="form-control form-control-alternative" placeholder="Home Address" value="Chiliyanaula , Ranikhet" type="text" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-city">City</label>
                              <input type="text" id="input-city" class="form-control form-control-alternative" placeholder="City" value="Chiliyanaula" />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-country">Country</label>
                              <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="Country" value="Ranikhet" />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group">
                              <label class="form-control-label" for="input-country">Postal code</label>
                              <input type="number" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code" value="263645" />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group">
                            <a href="#!" class="btn btn-info">Save</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="PetProfile">
            <div calss="row">
              <div class="col-xl-12 mb-5 mb-xl-0">
                <div class="card card-profile shadow">
                  <div class="row">
                    <h3 class="pet-profile-header">
                      Pet profile information
                    </h3>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-3">
                      <div class="card-profile-image">
                        <a href="#">
                          <img src="images/profile.png" class="rounded-circle pet-image" />
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-3  ">
                      <div class="card-body pt-0 pt-md-4">
                        <div class="text-center pet-details">
                          <h3>
                            Dobby
                            <span class="font-weight-light age" >, 2 months </span>
                            <img src="images/edit.png" class="edit" />
                          </h3>
                          <div class="h5 font-weight-300">
                            <i class="ni location_pin mr-2"></i>Owner : Tandeep Pujari
                          </div>
                          <div class="h5 mt-4">
                            <i class="ni business_briefcase-24 mr-2"></i>Chiliyanaula, Ranikhet - 263645
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <form>
                        <h6 class="heading-small text-muted mb-4 pet-header">Pet information</h6>
                        <div class="pl-lg-4">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="form-group focused">
                                <label class="form-control-label" for="input-username">Name</label>
                                <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value="Dobby" />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="form-group">
                                <label class="form-control-label" for="input-email">Gender</label>
                                <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="Male" />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="form-group focused">
                                <label class="form-control-label" for="input-first-name">Type</label>
                                <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="First name" value="DOG" />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="form-group focused">
                                <label class="form-control-label" for="input-last-name">Agressive</label>
                                <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Last name" value="YES" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr class="my-4" />
                        <h6 class="heading-small text-muted mb-4">Pet detailed description</h6>
                        <div class="pl-lg-4">
                          <div class="form-group focused">
                            <label>Pet detailed description</label>
                            <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ...">Well obiedient , non agressive and fully vaccinated dog</textarea>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
