import { FIELD_TYPE } from "@/constants/interfaces";
import getFormFields from "@/lib/getFormFields";
import Button from "../common/Button";

const FormFields = async () => {
  const form = await getFormFields("contact-form");

  if (!form) return null;

  return (
    <form className="mx-auto flex max-w-2xl flex-col gap-6 rounded-2xl bg-neutral-brightRed p-10">
      {form?.fields
        ? form.fields.map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <label>{field.label}</label>
              {field.__typename === FIELD_TYPE.INPUT ? (
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  //  onChange={handleChange}
                  className="rounded-md border border-zinc-400 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-brightRed focus:ring-offset-2"
                />
              ) : (
                <textarea
                  rows={3}
                  name={field.name}
                  placeholder={field.placeholder}
                  // onChange={handleChange}
                  className="rounded-md border border-zinc-400 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-brightRed focus:ring-offset-2"
                />
              )}
            </div>
          ))
        : null}

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormFields;
