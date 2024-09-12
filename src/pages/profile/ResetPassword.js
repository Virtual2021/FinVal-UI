import React from 'react';

const ResetPassword = ({ onClose }) => {
    <div id="resetLoginPassword" class="zoom-anim-dialog p-0 contact-form-style-01 position-relative text-center col-xl-4 col-lg-6 col-md-8 col-12 mx-auto text-center">
        <div class="p-30px bg-white">
            <p class="fs-18 fw-600 mb-10">Reset Login Password</p>
            <span class="fs-14 lh-22 d-block mb-15px">Please enter the securty code sent on your email ID</span>
            <form action="" method="post">
                <div class="position-relative form-group mb-20px">
                    <span class="form-icon"><i class="bi bi-chat-square-dots"></i></span>
                    <input type="text" name="name" class="form-control" placeholder="Enter securty code*" />
                </div>
                <div class="position-relative form-group mb-20px">
                    <span class="form-icon"><i class="bi bi-lock"></i></span>
                    <input type="text" name="name" class="form-control" placeholder="Enter new password*" />
                </div>
                <div class="position-relative form-group mb-20px">
                    <span class="form-icon"><i class="bi bi-file-lock"></i></span>
                    <input type="text" name="name" class="form-control" placeholder="Re-enter new password*" />
                </div>
                <div class="position-relative form-group form-textarea">
                    <input type="hidden" name="redirect" value=""/>
                    <button class="btn btn-large btn-round-edge bg-blue submit text-white w-100 fin-btn" type="submit">
                        <span>
                            <span><i class="bi bi-repeat align-middle"></i></span>
                            <span class="btn-double-text align-middle">Reset Login Password</span>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default ResetPassword;