export const ContactMeServce = {
    submit: async (formFields: FormFields): Promise<any> => {
        return fetch('/api/contact-form', {
            method: 'POST',
            body: JSON.stringify(formFields)
        });
    }
};

export interface FormFields {
    name: string;
    email: string;
    message: string;
}
