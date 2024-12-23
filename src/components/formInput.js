import { Text } from "@chakra-ui/react";

const FormInput = ({
  value,
  onChange,
  placeholder,
  id,
  type,
  error,
  label,
  ...rest
}) => {
  return (
    <div style={{ width: "100%" }} id={id} className="form-group">
      {label && (
        <Text mb="0 !important" className="col-form-label">
          {label}
        </Text>
      )}
      <input
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
      />
      {error && (
        <Text fontSize="10px" color="#F04438">
          {error}
        </Text>
      )}
    </div>
  );
};

export default FormInput;
