import FormTitle from "./form-components/FormTitle";
import InputField from "./form-components/InputField";

const First = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <FormTitle
          title="Personal Information"
          description="Please Provide you name, email address, phone number"
        />
        <form className="flex flex-col gap-2">
          <InputField
            label="name"
            inputType="text"
            placeholder="E.g. Jhon Doe"
          />
          <InputField
            label="email"
            inputType="email"
            placeholder="E.g. doe@gmail.com"
          />
          <InputField
            label="phone"
            inputType="tel"
            placeholder="E.g. 9845137036"
          />
        </form>
      </div>
    </div>
  );
};

export default First;
