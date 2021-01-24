import { derived, writable } from "svelte/store";

const blankForm = {
    name: '',
    email: '',
    message: ''
};

const state = writable({ ...blankForm });

const formState = derived(state, (currentState) => ({
    ...currentState,
    isFormValid: isNameValid(currentState.name) && isEmailValid(currentState.email) && isMessageValid(currentState.message),
    isNameValid: isNameValid(currentState.name),
    isEmailValid: isEmailValid(currentState.email),
    isMessageValid: isMessageValid(currentState.message)
}));

const getName = derived(state, (currentState) => currentState.name);
const getEmail = derived(state, (currentState) => currentState.email);
const getMessage = derived(state, (currentState) => currentState.message);

const isNameValid = (name: string) => !!name;
const isEmailValid = (email: string) => /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
const isMessageValid = (message: string) => !!message;

const setValue = (newValue: string, formControl: 'name' | 'email' | 'message') => {
    state.update((currentState) => {
        const newState = { ...currentState };
        newState[formControl] = newValue;
        return newState;
    });
};

const setName = (newName: string) => setValue(newName, 'name');
const setEmail = (newEmail: string) => setValue(newEmail, 'email');
const setMessage = (newMessage: string) => setValue(newMessage, 'message');

const resetForm = () => state.set({ ...blankForm });

export {
    formState,
    isNameValid,
    isEmailValid,
    isMessageValid,
    setName,
    setEmail,
    setMessage,
    getName,
    getEmail,
    getMessage,
    resetForm
};
