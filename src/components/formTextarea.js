import { Text } from "@chakra-ui/react";

const FormTextarea = ({
  value,
  onChange,
  placeholder,
  id,
  type,
  error,
  ...rest
}) => {
  return (
    <div style={{ width: "100%" }} id={id} className="form-group">
      <textarea
        style={{
          marginTop: "0 ",
          width: "100%",
          borderColor: error ? "#F04438" : "gray",
          border: "1px solid",
          ...rest,
        }}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
        cols="30"
        rows="3"
      />
      {error && (
        <Text fontSize="10px" color="#F04438">
          {error}
        </Text>
      )}
    </div>
  );
};

export default FormTextarea;
