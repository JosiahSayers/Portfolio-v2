export const ContactMeServce = {
    submit: async (formFields: FormFields): Promise<any> => {
        // return fetch(environment.contactMeService.url, {
        //     method: 'POST',
        //     body: JSON.stringify(formFields)
        // });

        return new Promise((resolve, reject) => {
            setTimeout(() => reject(null), 1000);
        });
    }
};

export interface FormFields {
    name: string;
    email: string;
    message: string;
}
