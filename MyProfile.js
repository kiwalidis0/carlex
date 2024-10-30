import React from "react";
import './myprofile.css'; 

const MyProfile = () => {
    return (
        <div className="text-center mb-3">
            <div className="header-container">
                <h1 className="large-header">Welcome to your Profile Page</h1>
                <p>This is your profile page. You can edit your information here.</p>
            </div>

            <section>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-12 col-xl-4">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body text-center">
                                    <div className="mt-3 mb-4">
                                        <img src="https://avatars.githubusercontent.com/u/177641552?v=4"
                                            className="rounded-circle img-fluid" style={{ width: '100px' }} />
                                    </div>
                                    <h4 className="mb-2">Andreas N. Luy</h4>
                                    <p className="text-muted mb-4">@Student <span className="mx-2">|</span> 
                                        <a href="#!">github.com/kiwalidis0</a></p>
                                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                        <div>
                                            <p className="text-muted mb-0">Facebook</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="text-muted mb-0">Instagram</p>
                                        </div>
                                        <div>
                                            <p className="text-muted mb-0">Youtube</p>
                                        </div>
                                    </div>
                                    <div  className="mb-4 pb-2">
                                        <button type="button" className="btn btn-primary btn-rounded btn-lg">
                                            Edit
                                        </button>      
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyProfile;
