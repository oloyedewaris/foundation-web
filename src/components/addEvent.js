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
import FormInput from "../components/formInput.js";
import * as Yup from "yup";
import FormTextarea from "../components/formTextarea.js";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadImage from "../utils/uploadImage.js";
import tempImage from "../assets/images/image.jpg";
import { CloseIcon } from "@chakra-ui/icons";
import { addEventApi } from "../api/event.js";

const AddEvent = ({ isOpen, onOpen, onClose }) => {
  const toast = useToast();
  const [loadingImage, setLoadingImage] = useState(false);

  const eventSchema = Yup.object().shape({
    title: Yup.string().required("required"),
    image: Yup.string().required("required"),
    description: Yup.string().required("required"),
    dateAndTime: Yup.string().required("required"),
    duration: Yup.string().required("required"),
    venue: Yup.string().required("required"),
  });

  const eventMutation = useMutation(addEventApi, {
    onSuccess: (res) => {
      toast({
        title: "Event added",
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
      title: "",
      image: "fghjkl",
      description: "",
      dateAndTime: "",
      duration: "",
      venue: "",
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
          duration: 3000,
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
          <h3 className="heading mb-4">Create Event</h3>
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
                placeholder="Event Title"
              />

              <FormInput
                id="venue"
                type="text"
                value={formik.values.venue}
                onBlur={formik.handleBlur}
                error={formik.touched.venue && formik.errors.venue}
                onChange={(e) => formik.handleChange("venue")(e.target.value)}
                placeholder="Event Venue"
              />
              <Flex direction="row" gap="12px" w="full">
                <FormInput
                  id="dateAndTime"
                  type="datetime-local"
                  value={formik.values.dateAndTime}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.dateAndTime && formik.errors.dateAndTime
                  }
                  onChange={(e) =>
                    formik.handleChange("dateAndTime")(e.target.value)
                  }
                  placeholder="Event Time"
                />
                <FormInput
                  id="duration"
                  type="number"
                  value={formik.values.duration}
                  onBlur={formik.handleBlur}
                  error={formik.touched.duration && formik.errors.duration}
                  onChange={(e) =>
                    formik.handleChange("duration")(e.target.value)
                  }
                  placeholder="Event Duration (Hrs)"
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
                placeholder="Event Description"
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
                Add Event
              </Button>
            </VStack>
          </form>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default AddEvent;
