import { IContactForm } from "@/constants/interfaces";
import { HYGRAPH_CLIENT } from "./hygraphClient";

const getFormFields = async (slug: string) => {
  const { form } = await HYGRAPH_CLIENT.request<{
    form: IContactForm;
  }>(
    `query Form($slug:String) { 
      form(where: {slug: $slug}) {
        title
        fields {
          __typename
          ... on FormInput {
            name
            label
            placeholder
            type
            required
          }
          ... on FormTextArea {
            name
            label
            placeholder
            required
          }
        }  
      }
    }`,
    { slug: slug },
  );

  console.log(form);

  return form;
};

export default getFormFields;
