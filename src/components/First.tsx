import FormTitle from "./form-components/FormTitle";
import InputField from "./form-components/InputField";

const First = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <FormTitle
          title="Personal info"
          description="Please Provide you name, email address, phone number"
        />
        <form className="flex flex-col gap-4">
          <InputField
            label="name"
            inputType="text"
            placeholder="e.g. Stephen King"
            pattern="^[A-Za-z]+(?:[ -][A-Za-z]+)*$"
          />
          <InputField
            label="email address"
            inputType="email"
            placeholder="e.g. stephenking@lorem.com"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
          <InputField
            label="phone number"
            inputType="tel"
            placeholder="e.g. +1 234 567 890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </form>
      </div>
    </div>
  );
};

export default First;
