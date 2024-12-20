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
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import FormInput from "./formInput.js";
import * as Yup from "yup";
import { CloseIcon } from "@chakra-ui/icons";
import { addEventBookingApi } from "../api/eventBooking.js";

const BookEvent = ({ isOpen, event, onClose }) => {
  const toast = useToast();

  const eventSchema = Yup.object().shape({
    last_name: Yup.string().required("required"),
    first_name: Yup.string().required("required"),
    email: Yup.string().required("required"),
    phone_number: Yup.string().required("required"),
  });

  const eventMutation = useMutation(addEventBookingApi, {
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
    },
    validationSchema: eventSchema,
    onSubmit: (values) => {
      eventMutation.mutate({ ...values, event: event._id });
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
          <h3 className="heading mb-4">Register for Event</h3>
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <VStack spacing={4} w="full">
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
              <Button
                _hover={{ opacity: 1 }}
                _active={{ opacity: 1 }}
                _focus={{ opacity: 1 }}
                bg={"#f86f2d"}
                isLoading={eventMutation.isLoading}
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

export default BookEvent;
