import React from "react";
// import { Link } from "react-router-dom";
// import { Form, FormikProvider } from "formik";
import {loginUser} from "../../../Store/Auth/actions";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import Button from "../../../Shared/Button/Button";
import Card from "../../../Shared/Card/Card";
import Text from "../../../Shared/Text/Text";
import Heading from "../../../Shared/Heading/Heading";
import InputField from "../../../Shared/InputField";
import SelectField from "../../../Shared/SelectField/SelectField";
import "./Signup.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    withRouter,
    Switch,
  } from 'react-router-dom'

export default function Signup() {

    return (

        <div className="col-sm-12 login_height">


            <div className="row">
                {/* <Button size={"sm"} variant="outline">
                helo
              </Button> */}
                {/* <Text mediumLight>hey my name is jimmy</Text> */}
                {/* <Heading subHeadingSize>Create Admin</Heading> */}

                {/* <SelectField /> */}

                <div className="col-sm-7 background_image_signup p-5">

                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="col-sm-12 py-4">
                                <img className="img-fluid " src="../images/logo.png"/>
                            </div>
                            <div className="col-sm-12">
                                <p className="heading_signup">welcome to Nami</p>
                                <p className="heading2_signup">unique access to
                                    <br/>
                                    buying and selling private companies
                                    <br/>
                                    IN THE REGION</p>
                                <p className="heading3_signup">and helps employees exercise their stock options with no out-of-pocket costs</p>
                            </div>

                        </div>
                        <div className="col-sm-1"></div>
                    </div>


                </div>
                <div className="col-sm-5 border-scss">
                    <div className="col-sm-12 text-end p-2  py-2">
                        <img className="img-fluid " src="../images/arbic.png"/>
                    </div>

                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">

                            <div className="col-sm-12 px-4">
                                <div className="col-sm-12 py-5 mob_logo">
                                    <img className="img-fluid " src="../images/logomob.png"/>
                                </div>
                                <p className="heading4_signup m-0">Welcome!</p>
                                <p className="heading5_signup ">Sign Up to Get Started</p>
                            </div>
                            <div className="col-sm-12 px-4">
                                <label className="label_signup m-0">Full Name</label>
                                <InputField placeholder="Ms. Calvin Monahan"/>
                            </div>
                            <div className="col-sm-12 px-4">
                                <label className="label_signup m-0">
                                    Email
                                </label>
                                <InputField placeholder="Maxwell.Trantow@gmail.com" type="email"/>
                            </div>
                            <div className="col-sm-12 px-4">
                                <label className="label_signup m-0">Password</label>
                                <InputField placeholder="..........." type="password"/>
                            </div>
                            <div className="col-sm-12 px-4">
                                <label className="label_signup m-0">Phone Number (Optional)</label>
                                <div className="row">
                                    <div className="col-sm-3 pt-1 ">
                                        <SelectField placeholder="+231" className="width_signup"/>
                                    </div>
                                    <div className="col-sm-9 ">
                                        <InputField placeholder="564-517-6342"/>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-12 px-4">
                             <Link to="/congrats">   <Button size={"sm"}
                                    variant="outline">
                                    Let me in!
                                </Button></Link>
                            </div>
                            <div className="col-sm-12  text-center py-2">
                                <span className="join_signup">
                                    <span className="join2_signup">
                                        <i class="fas fa-chevron-right"></i>
                                    </span>
                                    &nbsp;Already have an account?
                                    <span className="join2_signup">&nbsp;<Link to="/login" className="link_decoration">Login here</Link></span>

                                </span>
                            </div>
                            <div className="col-sm-12 mobile_padding_bottom text-center px-4">
                                <hr className="line_signup"/>
                            </div>
                            <div className="col-sm-12  px-4">
                                <span className="privacy_signup">
                                    By signing up, you agree to our
                                    <span className="term_signup">
                                        Terms of use
                                    </span>
                                    and
                                    <span className="term_signup">Privacy Policy.</span>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>


                </div>
            </div>


        </div>

    );
}
