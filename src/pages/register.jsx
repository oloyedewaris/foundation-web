import {
  Box,
  Button,
  Heading,
  VStack,
  AbsoluteCenter,
  useToast,
  Center,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { registerApi } from "../api/auth";
import { useFormik } from "formik";
import FormInput from "../components/formInput";
import * as Yup from "yup";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const toast = useToast();
  const navigate = useNavigate();

  const registerSchema = Yup.object().shape({
    username: Yup.string().required("Please enter a Username"),
    first_name: Yup.string().required("Please enter your First Name"),
    last_name: Yup.string().required("Please enter your Last Name"),
    password: Yup.string()
      .min(6, "Password should be a minimum of 6 characters")
      .required("Please enter a Password"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      registerMitation.mutate(values);
    },
  });

  const registerMitation = useMutation(registerApi, {
    onSuccess: (res) => {
      toast({
        title: "Register success",
        description: "User registered successfully",
        status: "success",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
      formik.resetForm();
      navigate("/login");
    },
    onError: (err) => {
      toast({
        title: "Registration failed",
        description: `${err?.response?.data?.message}`,
        status: "error",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return (
    <Layout>
      <div
        className="hero-wrap"
        style={{ backgroundImage: "url('images/bg_7.jpg')" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div
              className="col-md-9 ftco-animate text-center"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                className="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                ADMIN REGISTRATION
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Center
        flexDirection={"column"}
        my="40px"
        p={"18px 24px"}
        borderRadius="lg"
        w={{ base: "90%", sm: "85%", md: "450px", xl: "480px" }}
        mx="auto"
      >
        <Heading textAlign="center" as="h1" size="md" mb="10px">
          Register
        </Heading>

        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4} w="full">
            <FormInput
              id="first_name"
              type="text"
              value={formik.values.first_name}
              onBlur={formik.handleBlur}
              error={formik.touched.first_name && formik.errors.first_name}
              onChange={(e) =>
                formik.handleChange("first_name")(e.target.value)
              }
              placeholder="Your First Name"
              label="First name"
            />
            <FormInput
              id="last_name"
              type="text"
              value={formik.values.last_name}
              onBlur={formik.handleBlur}
              error={formik.touched.last_name && formik.errors.last_name}
              onChange={(e) => formik.handleChange("last_name")(e.target.value)}
              placeholder="Your Last Name"
              label="Last name"
            />
            <FormInput
              id="username"
              type="text"
              value={formik.values.username}
              onBlur={formik.handleBlur}
              error={formik.touched.username && formik.errors.username}
              onChange={(e) => formik.handleChange("username")(e.target.value)}
              placeholder="Your Username"
              label="Username"
            />
            <FormInput
              id="password"
              type="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
              onChange={(e) => formik.handleChange("password")(e.target.value)}
              placeholder="Choose a password"
              label="Password"
            />
            <Button
              isLoading={registerMitation.isLoading}
              type="submit"
              _hover={{ opacity: 1 }}
              _active={{ opacity: 1 }}
              _focus={{ opacity: 1 }}
              bg={"#f86f2d"}
              color="#fff"
              w="full"
            >
              Register
            </Button>
          </VStack>
        </form>
      </Center>
    </Layout>
  );
}
