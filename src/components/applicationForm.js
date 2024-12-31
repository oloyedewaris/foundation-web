import {
  Button,
  VStack,
  Center,
  useToast,
  HStack,
  Flex,
  Image,
  Spinner,
  Text,
  RadioGroup,
  Stack,
  Radio,
  Box,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import FormInput from "../components/formInput.js";
import * as Yup from "yup";
import { addLeadershipBookingApi } from "../api/leadershipBooking.js";
import tempImage from "../assets/images/image.jpg";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import uploadImage from "../utils/uploadImage.js";
import FormTextarea from "./formTextarea.js";
import FormSelect from "./formSelect.js";
import { formatToCurrency } from "../utils/formatAmount.js";
import { useNavigate } from "react-router-dom";

const totalSteps = 7;

const ApplicationForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [loadingImage, setLoadingImage] = useState(false);
  const [step, setStep] = useState(1);
  const [isOther, setIsOther] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [declaration1, setDeclaration1] = useState(false);
  const [declaration2, setDeclaration2] = useState(false);

  const [globalError, setGlobalError] = useState("");

  const leadershipSchema = Yup.object().shape({
    image: Yup.string().required("required"),
    full_name: Yup.string().required("required"),
    gender: Yup.string().required("required"),
    age: Yup.string().required("required"),
    phone_number: Yup.string().required("required"),
    email: Yup.string().required("required"),
    residential_address: Yup.string().required("required"),
    // social_handles: Yup.string().required("required"),
    is_indigene: Yup.string().required("required"),
    run_business: Yup.string().required("required"),
    business_address: Yup.string().required("required"),
    business_document: Yup.string().required("required"),
    business_type: Yup.string().required("required"),
    business_name: Yup.string().required("required"),
    business_description: Yup.string().required("required"),
    business_duration: Yup.string().required("required"),
    business_stage: Yup.string().required("required"),
    business_challenges: Yup.string().required("required"),
    business_proposal: Yup.string().required("required"),
    // business_proposal_doc: Yup.string().required("required"),
    fund_request: Yup.string().required("required"),
    fund_uses: Yup.string().required("required"),
    fund_impact: Yup.string().required("required"),
    ever_receiver: Yup.string().required("required"),
    recommendation_name: Yup.string().required("required"),
    recommendation_contact: Yup.string().required("required"),
  });

  const leadershipMutation = useMutation(addLeadershipBookingApi, {
    onSuccess: (res) => {
      toast({
        title: "Application submitted",
        description: "Your application has been submitted succesfully",
        status: "success",
        position: "top-right",
        duration: 8000,
        isClosable: true,
      });
      navigate("/");
    },
    onError: (err) => {
      toast({
        title: "Operation failed",
        description: `${err?.response?.data?.message}`,
        status: "error",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      image: "",
      full_name: "",
      gender: "",
      age: "",
      phone_number: "",
      email: "",
      residential_address: "",
      social_handles: "",
      is_indigene: "",
      run_business: "",
      business_address: "",
      business_document: "",
      business_type: "",
      business_name: "",
      business_description: "",
      business_duration: "",
      business_stage: "",
      business_challenges: "",
      business_proposal: "",
      business_proposal_doc: "",
      fund_request: "",
      fund_uses: "",
      fund_impact: "",
      ever_receiver: "",
      recommendation_name: "",
      recommendation_contact: "",
    },
    validationSchema: leadershipSchema,
    onSubmit: (values, formikHelpers) => {
      console.log("declaration1 && declaration2", declaration1 && declaration2);
      if (declaration1 && declaration2) leadershipMutation.mutate(values);
    },
    validate: (values) => {
      console.log("formik.errors", Object.keys(formik.errors).length);
      if (step === 7 && Object.keys(formik.errors).length) {
        setGlobalError("Please go back and enter all fields correctly");
      } else {
        setGlobalError("");
      }
    },
  });

  const imageDropZone = useDropzone({
    accept: { "image/*": [] },
    // maxSize: 2 * 1024 * 1024,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setLoadingImage(true);
      uploadImage(acceptedFiles)
        .then((res) => {
          const url = res.data.url;
          formik.setFieldValue("image", url);
        })
        .catch((err) => {
          toast({
            description: "An error occurred while uploading image",
            status: "error",
            endDate: 3000,
            isClosable: true,
            position: "top-right",
          });
        })
        .finally(() => setLoadingImage(false));
    },
  });

  const businessDocDropZone = useDropzone({
    accept: { "*/*": [] },
    // maxSize: 2 * 1024 * 1024,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setLoadingFile(true);
      uploadImage(acceptedFiles)
        .then((res) => {
          const url = res.data.url;
          formik.setFieldValue("business_document", url);
        })
        .catch((err) => {
          toast({
            description: "An error occurred while uploading image",
            status: "error",
            endDate: 3000,
            isClosable: true,
            position: "top-right",
          });
        })
        .finally(() => setLoadingFile(false));
    },
  });
  const proposalDocDropZone = useDropzone({
    accept: { "*/*": [] },
    // maxSize: 2 * 1024 * 1024,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setLoadingFile(true);
      uploadImage(acceptedFiles)
        .then((res) => {
          const url = res.data.url;
          formik.setFieldValue("business_proposal_doc", url);
        })
        .catch((err) => {
          toast({
            description: "An error occurred while uploading image",
            status: "error",
            endDate: 3000,
            isClosable: true,
            position: "top-right",
          });
        })
        .finally(() => setLoadingFile(false));
    },
  });

  const handleNextNavigate = () => {
    if (step < totalSteps) {
      formik.setErrors({});
      setStep((step) => step + 1);
    } else {
      formik.handleSubmit();
    }
  };
  const handlePrev = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  };
  const handleNext = () => {
    if (step === 1) {
      if (
        !formik.values.image ||
        !formik.values.full_name ||
        !formik.values.gender ||
        !formik.values.age ||
        !formik.values.phone_number ||
        !formik.values.email ||
        !formik.values.residential_address
      ) {
        formik.handleSubmit();
      } else {
        handleNextNavigate();
      }
    } else if (step === 2) {
      if (
        !formik.values.is_indigene ||
        !formik.values.run_business ||
        !formik.values.business_address ||
        !formik.values.business_document
      ) {
        formik.handleSubmit();
      } else {
        handleNextNavigate();
      }
    } else if (step === 3) {
      if (
        !formik.values.business_name ||
        !formik.values.business_type ||
        !formik.values.business_description ||
        !formik.values.business_duration ||
        !formik.values.business_stage ||
        !formik.values.business_challenges
      ) {
        formik.handleSubmit();
      } else {
        handleNextNavigate();
      }
    } else if (step === 4) {
      if (!formik.values.business_proposal) {
        formik.handleSubmit();
      } else {
        handleNextNavigate();
      }
    } else if (step === 5) {
      if (
        !formik.values.fund_request ||
        !formik.values.fund_uses ||
        !formik.values.fund_impact ||
        !formik.values.ever_receiver
      ) {
        formik.handleSubmit();
      } else {
        handleNextNavigate();
      }
    } else if (step === 6) {
      if (
        !formik.values.recommendation_name ||
        !formik.values.recommendation_contact
      ) {
        formik.handleSubmit();
      } else {
        handleNextNavigate();
      }
    } else if (step === 7) {
      formik.handleSubmit();
    }
  };

  const handleFieldChange = (field, value) => {
    formik.setFieldValue(field, value); // Update field value
    if (formik.errors[field]) {
      // Clear error for the field being changed
      const updatedErrors = { ...formik.errors };
      delete updatedErrors[field];
      formik.setErrors(updatedErrors);
    }
  };

  const handlePriceInput = (e) => {
    let value = e.target.value;

    const cleanedString = value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    value = cleanedString.replace(/^0+(?=\d)/, "");

    const length = value.length;

    if (length <= 2) {
      value = "0." + value.padStart(2, "0");
    } else {
      const integerPart = value.slice(0, length - 2);
      const decimalPart = value.slice(-2);
      value = integerPart + "." + decimalPart;
    }

    formik.setFieldValue("fund_request", value);
  };

  const formSteps = [
    {
      title: "Personal Information",
      component: (
        <VStack mt="2em" spacing={4} w="full">
          <Box>
            <h6 className="text-center">Profile Picture</h6>
            <Center
              h="140px"
              w="200px"
              borderRadius={"5px"}
              mx="auto"
              border="1px solid"
              borderColor={formik.errors.image ? "#F04438" : "#3a3a3a"}
              {...imageDropZone.getRootProps({ className: "dropzone" })}
            >
              <input {...imageDropZone.getInputProps()} />
              {loadingImage ? (
                <Spinner mx="auto" w="100px" h="100px" />
              ) : (
                <Image
                  objectFit={"cover"}
                  borderRadius={"5px"}
                  w="full"
                  h="full"
                  src={formik.values.image}
                  fallbackSrc={tempImage}
                />
              )}
            </Center>
            {formik.errors.image && (
              <Text fontSize="10px" color="#F04438">
                {formik.errors.image}
              </Text>
            )}
          </Box>

          <FormInput
            id="full_name"
            type="text"
            value={formik.values.full_name}
            onBlur={formik.handleBlur}
            error={formik.touched.full_name && formik.errors.full_name}
            onChange={(e) => handleFieldChange("full_name", e.target.value)}
            placeholder="Your full name"
          />
          <VStack align={"flex-start"} w="full" spacing={0}>
            <Text color={formik.errors.gender && "#F04438"}>Gender</Text>
            <RadioGroup
              colorScheme="orange"
              onChange={(e) => handleFieldChange("gender", e)}
              value={formik.values.gender}
            >
              <Stack direction="row">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="Others">Others</Radio>
              </Stack>
            </RadioGroup>
            {formik.errors.gender && (
              <Text fontSize="10px" color="#F04438">
                {formik.errors.gender}
              </Text>
            )}
          </VStack>
          <Flex direction="row" gap="12px" w="full" mb="-15px !important">
            <FormInput
              id="age"
              type="text"
              value={formik.values.age}
              onBlur={formik.handleBlur}
              error={formik.touched.age && formik.errors.age}
              onChange={(e) => handleFieldChange("age", e.target.value)}
              placeholder="Your age"
            />
            <FormInput
              id="phone_number"
              type="phone"
              value={formik.values.phone_number}
              onBlur={formik.handleBlur}
              error={formik.touched.phone_number && formik.errors.phone_number}
              onChange={(e) =>
                handleFieldChange("phone_number", e.target.value)
              }
              placeholder="Your phone number"
            />
          </Flex>
          <FormInput
            id="email"
            type="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            placeholder="Your email"
          />
          <FormInput
            id="residential_address"
            type="phone"
            value={formik.values.residential_address}
            onBlur={formik.handleBlur}
            error={
              formik.touched.residential_address &&
              formik.errors.residential_address
            }
            onChange={(e) =>
              handleFieldChange("residential_address", e.target.value)
            }
            placeholder="Your residential address"
          />
          <FormInput
            id="social_handles"
            type="phone"
            value={formik.values.social_handles}
            onBlur={formik.handleBlur}
            error={
              formik.touched.social_handles && formik.errors.social_handles
            }
            onChange={(e) =>
              handleFieldChange("social_handles", e.target.value)
            }
            placeholder="Your social media handles"
          />
        </VStack>
      ),
    },
    {
      title: "Eligibility Verification",
      component: (
        <VStack mt="2em" spacing={4} w="full">
          <VStack align={"flex-start"} w="full" spacing={0}>
            <Text color={formik.errors.is_indigene && "#F04438"}>
              Are you an indigene of Ila-Orangun, Osun State?{" "}
            </Text>
            <RadioGroup
              colorScheme="orange"
              onChange={(e) => handleFieldChange("is_indigene", e)}
              value={formik.values.is_indigene}
            >
              <Stack direction="row">
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </Stack>
            </RadioGroup>
            {formik.errors.is_indigene && (
              <Text fontSize="10px" color="#F04438">
                {formik.errors.is_indigene}
              </Text>
            )}
          </VStack>
          <VStack align={"flex-start"} w="full" spacing={0}>
            <Text color={formik.errors.run_business && "#F04438"}>
              Do you currently run a business? :
            </Text>
            <RadioGroup
              colorScheme="orange"
              onChange={(e) => handleFieldChange("run_business", e)}
              value={formik.values.run_business}
            >
              <Stack direction="row">
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </Stack>
            </RadioGroup>
            {formik.errors.run_business && (
              <Text fontSize="10px" color="#F04438">
                {formik.errors.run_business}
              </Text>
            )}
          </VStack>
          <FormInput
            id="business_address"
            type="text"
            value={formik.values.business_address}
            onBlur={formik.handleBlur}
            error={
              formik.touched.business_address && formik.errors.business_address
            }
            onChange={(e) =>
              handleFieldChange("business_address", e.target.value)
            }
            placeholder="Your business address"
          />

          <Center
            w="full"
            borderColor={formik.errors.image ? "#F04438" : "transparent"}
            {...businessDocDropZone.getRootProps({ className: "dropzone" })}
          >
            <input {...businessDocDropZone.getInputProps()} />
            {businessDocDropZone.isDragActive && (
              <Text>Drop the files here</Text>
            )}
            {loadingFile ? (
              <Spinner mx="auto" w="30px" h="30px" />
            ) : (
              <FormInput
                id="business_document"
                type="text"
                value={formik.values.business_document}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.business_document &&
                  formik.errors.business_document
                }
                onChange={(e) =>
                  handleFieldChange("business_document", e.target.value)
                }
                label={
                  "Provide evidence of your existing business (e.g., business registration document, photos, or other proof)"
                }
                placeholder="Upload business document"
              />
            )}
          </Center>
        </VStack>
      ),
    },
    {
      title: "Business Information",
      component: (
        <VStack mt="2em" spacing={4} w="full">
          <FormInput
            id="business_name"
            type="text"
            value={formik.values.business_name}
            onBlur={formik.handleBlur}
            error={formik.touched.business_name && formik.errors.business_name}
            onChange={(e) => handleFieldChange("business_name", e.target.value)}
            placeholder="Name of Your Business"
          />
          <VStack align={"flex-start"} w="full" spacing={0}>
            <Text color={formik.errors.business_type && "#F04438"}>
              Type of Business
            </Text>
            <RadioGroup
              colorScheme="orange"
              onChange={(e) => handleFieldChange("business_type", e)}
              value={formik.values.business_type}
            >
              <Stack direction="row" flexWrap={"wrap"} spacing={"12px"}>
                <Radio value="Agriculture">Agriculture</Radio>
                <Radio value="Retail">Retail</Radio>
                <Radio value="Service">Service</Radio>
                <Radio value="Manufacturing">Manufacturing</Radio>
                <Radio value="Technology">Technology</Radio>
                <Radio
                  onChange={(e) => {
                    if (e.target.checked) {
                      formik.setFieldValue("business_type", "");
                      setIsOther(true);
                    }
                  }}
                  value="Others"
                >
                  Others
                </Radio>
              </Stack>
            </RadioGroup>
            {isOther && (
              <FormInput
                id="business_type"
                type="text"
                value={formik.values.business_type}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.business_type && formik.errors.business_type
                }
                onChange={(e) =>
                  handleFieldChange("business_type", e.target.value)
                }
                placeholder="Enter your business type"
              />
            )}
            {formik.errors.business_type && (
              <Text fontSize="10px" color="#F04438">
                {formik.errors.business_type}
              </Text>
            )}
          </VStack>
          <FormTextarea
            id="business_description"
            type="text"
            value={formik.values.business_description}
            onBlur={formik.handleBlur}
            error={
              formik.touched.business_description &&
              formik.errors.business_description
            }
            onChange={(e) =>
              handleFieldChange("business_description", e.target.value)
            }
            placeholder="Brief Description of Your Business"
          />
          <FormInput
            id="business_duration"
            type="number"
            value={formik.values.business_duration}
            onBlur={formik.handleBlur}
            error={
              formik.touched.business_duration &&
              formik.errors.business_duration
            }
            onChange={(e) =>
              handleFieldChange("business_duration", e.target.value)
            }
            label="How long has your business been in operation? "
          />
          <FormSelect
            id="business_stage"
            type="phone"
            value={formik.values.business_stage}
            onBlur={formik.handleBlur}
            error={
              formik.touched.business_stage && formik.errors.business_stage
            }
            onChange={(e) =>
              handleFieldChange("business_stage", e.target.value)
            }
            options={[
              "",
              "Early-stage (less than 1 year)",
              "Growth stage (1-3 years)",
              "Established (3+ years)",
            ]}
            placeholder="What is the current stage of your business?"
            label="What is the current stage of your business?"
          />
          <FormInput
            id="business_challenges"
            type="phone"
            value={formik.values.business_challenges}
            onBlur={formik.handleBlur}
            error={
              formik.touched.business_challenges &&
              formik.errors.business_challenges
            }
            onChange={(e) =>
              handleFieldChange("business_challenges", e.target.value)
            }
            label="What challenges are you facing in growing your business?"
          />
        </VStack>
      ),
    },
    {
      title: "Business Proposal",
      component: (
        <VStack mt="2em" spacing={4} w="full">
          <FormTextarea
            id="business_proposal"
            type="text"
            value={formik.values.business_proposal}
            onBlur={formik.handleBlur}
            error={
              formik.touched.business_proposal &&
              formik.errors.business_proposal
            }
            onChange={(e) =>
              handleFieldChange("business_proposal", e.target.value)
            }
            placeholder="Your business proposal plan"
            label="Provide a brief outline of your business proposal (or expansion plan) "
          />

          <Center
            w="full"
            borderColor={formik.errors.image ? "#F04438" : "transparent"}
            {...proposalDocDropZone.getRootProps({ className: "dropzone" })}
          >
            <input {...proposalDocDropZone.getInputProps()} />
            {proposalDocDropZone.isDragActive && (
              <Text>Drop the files here</Text>
            )}
            {loadingFile ? (
              <Spinner mx="auto" w="30px" h="30px" />
            ) : (
              <FormInput
                id="business_proposal_doc"
                type="phone"
                value={formik.values.business_proposal_doc}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.business_proposal_doc &&
                  formik.errors.business_proposal_doc
                }
                onChange={(e) =>
                  handleFieldChange("business_proposal_doc", e.target.value)
                }
                placeholder="Your business proposal document"
              />
            )}
          </Center>
        </VStack>
      ),
    },
    {
      title: "Funding Information",
      component: (
        <VStack mt="2em" spacing={4} w="full">
          <FormInput
            id="fund_request"
            // type="number"
            onBlur={formik.handleBlur}
            error={formik.touched.fund_request && formik.errors.fund_request}
            onChange={(e) => handlePriceInput(e)}
            value={formatToCurrency(formik.values.fund_request)}
            label="How much funding are you requesting? (Note: Grants will range between ₦100,000 and ₦300,000)"
            placeholder="N0.00"
          />
          <FormInput
            id="fund_uses"
            type="phone"
            value={formik.values.fund_uses}
            onBlur={formik.handleBlur}
            error={formik.touched.fund_uses && formik.errors.fund_uses}
            onChange={(e) => handleFieldChange("fund_uses", e.target.value)}
            placeholder="What will the funding be used for?"
            label="Describe how you plan to utilize the grant to grow or expand your business"
          />
          <FormTextarea
            id="fund_impact"
            type="phone"
            value={formik.values.fund_impact}
            onBlur={formik.handleBlur}
            error={formik.touched.fund_impact && formik.errors.fund_impact}
            onChange={(e) => handleFieldChange("fund_impact", e.target.value)}
            placeholder="How will this funding impact your business?"
          />
          <FormInput
            id="ever_receiver"
            type="phone"
            value={formik.values.ever_receiver}
            onBlur={formik.handleBlur}
            error={formik.touched.ever_receiver && formik.errors.ever_receiver}
            onChange={(e) => handleFieldChange("ever_receiver", e.target.value)}
            label="Has your business received any other funding? Yes/No. If yes, give details"
          />
        </VStack>
      ),
    },
    {
      title: "Recommendation",
      component: (
        <VStack mt="2em" spacing={4} w="full">
          <FormInput
            id="recommendation_name"
            type="phone"
            value={formik.values.recommendation_name}
            onBlur={formik.handleBlur}
            error={
              formik.touched.recommendation_name &&
              formik.errors.recommendation_name
            }
            onChange={(e) =>
              handleFieldChange("recommendation_name", e.target.value)
            }
            label="Provide the name of someone who can vouch for you (e.g., mentor, community leader, teacher, Pastor/Imam)"
            placeholder={"Name"}
          />
          <FormInput
            id="recommendation_contact"
            type="tel"
            value={formik.values.recommendation_contact}
            onBlur={formik.handleBlur}
            error={
              formik.touched.recommendation_contact &&
              formik.errors.recommendation_contact
            }
            onChange={(e) =>
              handleFieldChange("recommendation_contact", e.target.value)
            }
            placeholder="Contact"
          />
        </VStack>
      ),
    },
    {
      title: "Declaration",
      component: (
        <VStack mt="2em" spacing={4} w="full">
          <VStack align={"flex-start"} w="full" spacing={0}>
            <CheckboxGroup colorScheme="orange">
              <Stack direction="column">
                <Checkbox
                  onChange={(e) => setDeclaration1(e.target.checked)}
                  checked={declaration1}
                >
                  I confirm that the information provided in this application is
                  accurate to the best of my knowledge.
                </Checkbox>
                <Checkbox
                  onChange={(e) => setDeclaration2(e.target.checked)}
                  checked={declaration2}
                >
                  I understand that any falsified information may result in
                  disqualification from the program.
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </VStack>
        </VStack>
      ),
    },
  ];

  return (
    <section id="apply" className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-8 heading-section ftco-animate text-left">
            <h3 className="heading mb-4 text-center">
              Apply for Adebisi Akande Entrepreneurship Program
            </h3>
            <p className="text-center">
              Welcome to the application form for the Adebisi Akande
              Entrepreneurship Program. This program is open to indigenes of
              Ila-Orangun, Osun State, who have an existing business and are
              eager to grow it. Please complete all sections accurately. The
              application timeline is December 30, 2024 - January 7, 2025.
            </p>
            <Center
              flexDirection={"column"}
              borderRadius="lg"
              mx="auto"
              w="full"
              mt="3em"
              //   h="full"
              maxW={{ base: "500px", md: "40vw" }}
              minW={{ base: "unset", md: "500px" }}
              border={"1px solid #E5E5E5"}
              px={{ base: "18px", md: "54px" }}
              py={{ base: "16px", md: "30px" }}
              bg="#fafafa"
            >
              <HStack w="full" justify={"space-between"}>
                <h4 style={{ textDecoration: "underline" }}>
                  {formSteps[step - 1].title}
                </h4>
                <Text>{`${step}/${totalSteps}`}</Text>
              </HStack>
              {formSteps[step - 1].component}
              <Flex mt="6" gap="15px" w="full">
                <Button
                  borderRadius={"8px !important"}
                  h="52px"
                  _hover={{ opacity: 1 }}
                  _active={{ opacity: 1 }}
                  _focus={{ opacity: 1 }}
                  bg="#B2B2B2"
                  isLoading={leadershipMutation.isLoading}
                  color="#fff"
                  w="full"
                  onClick={handlePrev}
                >
                  Previous
                </Button>
                <Button
                  borderRadius={"8px !important"}
                  h="52px"
                  _hover={{ opacity: 1 }}
                  _active={{ opacity: 1 }}
                  _focus={{ opacity: 1 }}
                  bg={"#f86f2d"}
                  isLoading={leadershipMutation.isLoading}
                  color="#fff"
                  w="full"
                  onClick={handleNext}
                >
                  {step === 7 ? "Submit" : "Next"}
                </Button>
              </Flex>

              {globalError && (
                <Text
                  textAlign={"center"}
                  pt="10px"
                  fontSize="18px"
                  fontWeight={500}
                  color="#F04438"
                >
                  {globalError}
                </Text>
              )}
            </Center>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
