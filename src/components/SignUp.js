import { Component } from 'react';
import './CardStyle.css';

function Sign(){
    return(<div>
        <div class="Page">
            
                <span><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" /></span>
                <br/>
            <span id="toptext">
            Sign up to see photos and videos<br/>from your friends.
            </span>
            <span>
            <button id="fb">Log in with Facebook</button>
            </span>
            <span>
                <hr style={{ width : '250px', height: '1px', backgroundColor : 'rgb(200,200,200)', marginBlock : '1rem', border : 'none' }} />
            </span>
            <span><input class="field" placeholder='Mobile Number or Email Address' /></span>
            <span><input class="field" placeholder='Full Name' /></span>
            <span><input class="field" placeholder='Username' /></span>
            <span><input class="field" placeholder='Password' /></span>
            <span id="learn">People who use our service may have uploaded<br/>your contact information to Instagram. <l style={{color:'darkblue'}} >Learn more</l></span>
            <span id="policy">By signing up, you agree to our <l style={{color:'darkblue'}} >Terms, Privacy<br/>Policy and Cookies Policy</l>.</span>
            <span>
            <button id="signup">Sign Up</button>
            </span>
            

        </div>
        <div class="login">
            Have an Account?<l style={{color:'white'}} >..</l><l style={{color:'#4dbbff'}} >Log in</l>
        </div>
        </div>
    )
    
}


export default Sign