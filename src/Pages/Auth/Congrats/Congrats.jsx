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
import "./Congrats.scss";

export default function Congrats() {
    return (
        <div className="col-sm-12 login_height">
            <div className="row">
                {/* <Button size={"sm"} variant="outline">
                helo
              </Button> */}
                {/* <Text mediumLight>hey my name is jimmy</Text> */}
                {/* <Heading subHeadingSize>Create Admin</Heading> */}

                {/* <SelectField /> */}

                <div className="col-sm-7 background_image_login p-5">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="col-sm-12 py-4">
                                <img className="img-fluid " src="../images/logo.png"/>
                            </div>
                            <div className="col-sm-12">
                                <p className="heading_login">welcome to Nami</p>
                                <p className="heading2_login">
                                    unique access to
                                    <br/>
                                    buying and selling private companies
                                    <br/>
                                    IN THE REGION
                                </p>
                                <p className="heading3_login">
                                    and helps employees exercise their stock options with no
                                                      out-of-pocket costs
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>

                <div className="col-sm-5 border-scss">
                    <div className="col-sm-12 text-end p-2  py-4">
                        <img className="img-fluid " src="../images/arbic.png"/>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="col-sm-12 px-4">
                                <div className="col-sm-12 py-5 mob_logo">
                                    <img className="img-fluid " src="../images/logomob.png"/>
                                </div>
                                <p className="heading4_cong m-0">Congrats Ms. Calvin!</p>
                                <p className="heading5_cong ">You just signed up!</p>
                                <p className="heading5_cong ">Please check your Email with message <br/> to confirm your account</p>
                                <p className="heading6_cong ">Not Recieved? <span className="heading7_cong"> Resend again </span></p>
                            </div>
                            <div className="col-sm-12 mobile_padding_bottom text-center px-4">
                                <hr className="line_cong"/>
                            </div>
                            <div className="col-sm-12  px-4">
                                <span className="privacy_signup">
                                    By signing up, you agree to our
                                    <span className="term_signup">
                                    &nbsp;  Terms of use
                                    </span>
                                   &nbsp; and &nbsp;
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
