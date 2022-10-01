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
import "./Login.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    withRouter,
    Switch,
  } from 'react-router-dom'

export default function Login(props) {
    const dispatch = useDispatch();
    const loginUserSchema = Yup.object().shape({email: Yup.string().email("Please enter valid email address").required("Please enter email address"), password: Yup.string().required("Please enter password")});
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        enableReinitialize: true,
        validationSchema: loginUserSchema,
        onSubmit: async (values) => {
            await dispatch(loginUser({
                email: "ajmal@mail.com", password: "1234", resetForm: formik.resetForm,
                // history: history,
            }));
        }
    });
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
                                <p className="heading2_login">unique access to
                                    <br/>
                                    buying and selling private companies
                                    <br/>
                                    IN THE REGION</p>
                                <p className="heading3_login">and helps employees exercise their stock options with no out-of-pocket costs</p>
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
                                <p className="heading4_login m-0">Hello again!</p>
                                <p className="heading5_login ">Signin to you account</p>
                            </div>
                            <div className="col-sm-12 px-4">
                                <label className="label_login m-0">Username / Email</label>
                                <InputField placeholder="Samantha_Nader@hotmail.com"/>
                            </div>
                            <div className="col-sm-12 px-4">
                                <label className="label_login m-0">Password</label>
                                <InputField placeholder="..........." type="password"/>
                            </div>
                            <div className="col-sm-12 px-4">
                            <Link to="/dashboard" className="link_decoration">  <Button size={"sm"}
                                    variant="outline">
                                    Let me in!
                                </Button> </Link>
                            </div>
                            <div className="col-sm-12 mobile_padding_bottom text-center py-2">
                                <span className="join_login">
                                    <span className="join2_login">
                                        <i class="fas fa-chevron-right"></i>
                                    </span>
                                    &nbsp; Do not have’n account yet?
                                    <span className="join2_login"><Link to="/signup" className="link_decoration">Join here</Link></span>
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
