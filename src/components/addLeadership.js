import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Button,
  Heading,
  VStack,
  Center,
  useToast,
  Spinner,
  Image,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import FormInput from "./formInput.js";
import * as Yup from "yup";
import FormTextarea from "./formTextarea.js";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadImage from "../utils/uploadImage.js";
import tempImage from "../assets/images/image.jpg";
import { CloseIcon } from "@chakra-ui/icons";
import { addLeadershipApi } from "../api/leadership.js";

const AddLeadership = ({ isOpen, onOpen, onClose }) => {
  const toast = useToast();
  const [loadingImage, setLoadingImage] = useState(false);

  const eventSchema = Yup.object().shape({
    title: Yup.string().required("required"),
    image: Yup.string().required("required"),
    description: Yup.string().required("required"),
    startDate: Yup.string().required("required"),
    endDate: Yup.string().required("required"),
    capacity: Yup.string().required("required"),
  });

  const eventMutation = useMutation(addLeadershipApi, {
    onSuccess: (res) => {
      toast({
        title: "Leadership program created",
        status: "success",
        position: "top-right",
        endDate: 2000,
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
        endDate: 2000,
        isClosable: true,
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "fghjkl",
      description: "",
      startDate: "",
      endDate: "",
      capacity: "",
    },
    validationSchema: eventSchema,
    onSubmit: (values) => {
      eventMutation.mutate(values);
    },
  });

  const addFiles = useCallback((acceptedFiles) => {
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
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    // maxSize: 2 * 1024 * 1024,
    multiple: false,
    onDrop: addFiles,
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
          <h3 className="heading mb-4">Create a new Leadership Program</h3>
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <VStack spacing={4} w="full">
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

              <FormInput
                id="title"
                type="text"
                value={formik.values.title}
                onBlur={formik.handleBlur}
                error={formik.touched.title && formik.errors.title}
                onChange={(e) => formik.handleChange("title")(e.target.value)}
                placeholder="Leadership Title"
              />
              <FormInput
                id="capacity"
                type="number"
                value={formik.values.capacity}
                onBlur={formik.handleBlur}
                error={formik.touched.capacity && formik.errors.capacity}
                onChange={(e) =>
                  formik.handleChange("capacity")(e.target.value)
                }
                placeholder="Maximum No. of Applicants"
              />

              <Flex direction="row" gap="12px" w="full">
                <FormInput
                  id="startDate"
                  type="date"
                  value={formik.values.startDate}
                  onBlur={formik.handleBlur}
                  error={formik.touched.startDate && formik.errors.startDate}
                  onChange={(e) =>
                    formik.handleChange("startDate")(e.target.value)
                  }
                  placeholder="Application Start Time"
                  label="Application Start's by"
                />
                <FormInput
                  id="endDate"
                  type="date"
                  value={formik.values.endDate}
                  onBlur={formik.handleBlur}
                  error={formik.touched.endDate && formik.errors.endDate}
                  onChange={(e) =>
                    formik.handleChange("endDate")(e.target.value)
                  }
                  placeholder="Application End Time"
                  label="Application End's at"
                />
              </Flex>

              <FormTextarea
                id="description"
                type="text"
                value={formik.values.description}
                onBlur={formik.handleBlur}
                error={formik.touched.description && formik.errors.description}
                onChange={(e) =>
                  formik.handleChange("description")(e.target.value)
                }
                placeholder="Leadership Description"
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
                Create
              </Button>
            </VStack>
          </form>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default AddLeadership;
