import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  VStack,
  Center,
  useToast,
  HStack,
  Flex,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import FormInput from "./formInput.js";
import * as Yup from "yup";
import { CloseIcon } from "@chakra-ui/icons";
import { addLeadershipBookingApi } from "../api/leadershipBooking.js";
import tempImage from "../assets/images/image.jpg";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import uploadImage from "../utils/uploadImage.js";

const BookLeadership = ({ isOpen, leadership, onClose }) => {
  const toast = useToast();
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);

  const leadershipSchema = Yup.object().shape({
    last_name: Yup.string().required("required"),
    first_name: Yup.string().required("required"),
    email: Yup.string().required("required"),
    phone_number: Yup.string().required("required"),
    image: Yup.string().required("required"),
    cv: Yup.string().required("required"),
  });

  const leadershipMutation = useMutation(addLeadershipBookingApi, {
    onSuccess: (res) => {
      toast({
        description: "Registered succesfully",
        status: "success",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
      onClose();
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
      last_name: "",
      first_name: "",
      email: "",
      phone_number: "",
      image: "bjk.",
      cv: "ghfjkv",
    },
    validationSchema: leadershipSchema,
    onSubmit: (values) => {
      leadershipMutation.mutate({ ...values, leadership: leadership._id });
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
  const cvDropZone = useDropzone({
    accept: { "*/*": [] },
    // maxSize: 2 * 1024 * 1024,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setLoadingFile(true);
      uploadImage(acceptedFiles)
        .then((res) => {
          const url = res.data.url;
          formik.setFieldValue("cv", url);
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

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      onCloseComplete={() => formik.resetForm()}
    >
      <ModalOverlay />
      <ModalContent py="32px" px="24px" maxW={"600px"}>
        <Center
          flexDirection={"column"}
          borderRadius="lg"
          mx="auto"
          w="full"
          h="full"
          maxW={"500px"}
        >
          <HStack w="full" justify={"space-between"}>
            <CloseIcon fontSize={"20px"} onClick={onClose} />
          </HStack>
          <h3 className="heading mb-4">Apply for Leadership Program</h3>
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <VStack spacing={4} w="full">
              <h5 className="">Profile Picture</h5>
              <Center
                h="140px"
                w="200px"
                borderRadius={"5px"}
                mx="auto"
                border="1px solid"
                borderColor={formik.errors.image ? "#F04438" : "transparent"}
                {...getRootProps({ className: "dropzone" })}
              >
                <input {...getInputProps()} />
                {isDragActive && <Text>Drop the files here</Text>}
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

              <Flex direction="row" gap="12px" w="full">
                <FormInput
                  id="first_name"
                  type="text"
                  value={formik.values.first_name}
                  onBlur={formik.handleBlur}
                  error={formik.touched.first_name && formik.errors.first_name}
                  onChange={(e) =>
                    formik.handleChange("first_name")(e.target.value)
                  }
                  placeholder="Your first name"
                />

                <FormInput
                  id="last_name"
                  type="text"
                  value={formik.values.last_name}
                  onBlur={formik.handleBlur}
                  error={formik.touched.last_name && formik.errors.last_name}
                  onChange={(e) =>
                    formik.handleChange("last_name")(e.target.value)
                  }
                  placeholder="Your last name"
                />
              </Flex>
              <FormInput
                id="email"
                type="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                onChange={(e) => formik.handleChange("email")(e.target.value)}
                placeholder="Your email"
              />
              <Flex direction="row" gap="12px" w="full">
                <FormInput
                  id="phone_number"
                  type="phone"
                  value={formik.values.phone_number}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phone_number && formik.errors.phone_number
                  }
                  onChange={(e) =>
                    formik.handleChange("phone_number")(e.target.value)
                  }
                  placeholder="Your phone number"
                />
                <Center
                  w="full"
                  borderColor={formik.errors.image ? "#F04438" : "transparent"}
                  {...cvDropZone.getRootProps({ className: "dropzone" })}
                >
                  <input {...cvDropZone.getInputProps()} />
                  {cvDropZone.isDragActive && <Text>Drop the files here</Text>}
                  {loadingFile ? (
                    <Spinner mx="auto" w="30px" h="30px" />
                  ) : (
                    <FormInput
                      id="cv"
                      // type="file"
                      value={formik.values.cv}
                      onBlur={formik.handleBlur}
                      error={formik.touched.cv && formik.errors.cv}
                      onChange={(e) =>
                        formik.handleChange("cv")(e.target.value)
                      }
                      placeholder="Upload your CV"
                    />
                  )}
                </Center>
              </Flex>
              <Button
                _hover={{ opacity: 1 }}
                _active={{ opacity: 1 }}
                _focus={{ opacity: 1 }}
                bg={"#f86f2d"}
                isLoading={leadershipMutation.isLoading}
                type="submit"
                color="#fff"
                w="full"
              >
                Register
              </Button>
            </VStack>
          </form>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default BookLeadership;
