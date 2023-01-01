import React from 'react';
import signimg from './sign.svg';

const SignImg = () => {
    return (
        <>
            <div className="right_data" style={{ width: "100%", marginBottom:'50px' }}>
                <div className="sign_img mt-5">
                    <img src={signimg} style={{ maxWidth: 450 }} alt="" />
                </div>
            </div>
        </>
    )
}

export default SignImg